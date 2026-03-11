import { TRPCError } from "@trpc/server";
import { Prisma } from "../../../../generated/prisma";

import { type createTRPCContext, createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  ViewCreateInputSchema,
  ViewCreateOutputSchema,
  ViewGetAllRowsInputSchema,
  ViewGetAllRowsOutputSchema,
  ViewGetFiltersInputSchema,
  ViewGetFiltersOutputSchema,
  ViewGetSortsInputSchema,
  ViewGetSortsOutputSchema,
  ViewGetByTableInputSchema,
  ViewGetByTableOutputSchema,
  ViewSetFiltersInputSchema,
  ViewSetFiltersOutputSchema,
  ViewSetSortsInputSchema,
  ViewSetSortsOutputSchema,
} from "~/types/router";

type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;

type ViewDefinition = {
  id: string;
  tableId: string;
  filters: Array<{
    id: string;
    columnId: string;
    conjunction: "and" | "or";
    operator: "equals" | "contains" | "notContains" | "isEmpty" | "isNotEmpty" | "greaterThan" | "lessThan";
    value: string | null;
    position: number;
    column: {
      id: string;
      type: "text" | "number";
    };
  }>;
};

const rowSelect = {
  id: true,
  createdAt: true,
  updatedAt: true,
  tableId: true,
  cells: {
    orderBy: [{ column: { position: "asc" } }, { id: "asc" }],
    select: {
      id: true,
      rowId: true,
      columnId: true,
      value: true,
      column: {
        select: {
          id: true,
          name: true,
          type: true,
          position: true,
          tableId: true,
        },
      },
    },
  },
} satisfies Prisma.RowSelect;

async function getViewDefinition(ctx: TRPCContext, viewId: string): Promise<ViewDefinition> {
  const view = await ctx.db.view.findUnique({
    where: { id: viewId },
    select: {
      id: true,
      tableId: true,
      filters: {
        orderBy: [{ position: "asc" }, { id: "asc" }],
        select: {
          id: true,
          columnId: true,
          conjunction: true,
          operator: true,
          value: true,
          position: true,
          column: {
            select: {
              id: true,
              type: true,
            },
          },
        },
      },
    },
  });

  if (!view) {
    throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
  }

  return view;
}

function buildFiltersWhereClause(view: ViewDefinition): Prisma.RowWhereInput | undefined {
  const impossibleFilter: Prisma.RowWhereInput = { id: { equals: "__invalid_row_id__" } };
  const buildFilterWhereClause = (filter: ViewDefinition["filters"][number]): Prisma.RowWhereInput => {
    const filterValue = filter.value?.trim() ?? "";

    if (filter.column.type === "text") {
      switch (filter.operator) {
        case "equals":
          return {
            cells: {
              some: {
                columnId: filter.columnId,
                value: { equals: filterValue, mode: "insensitive" as const },
              },
            },
          };
        case "contains":
          return {
            cells: {
              some: {
                columnId: filter.columnId,
                value: { contains: filterValue, mode: "insensitive" as const },
              },
            },
          };
        case "notContains":
          return {
            OR: [
              {
                cells: {
                  none: {
                    columnId: filter.columnId,
                  },
                },
              },
              {
                cells: {
                  some: {
                    columnId: filter.columnId,
                    value: null,
                  },
                },
              },
              {
                NOT: {
                  cells: {
                    some: {
                      columnId: filter.columnId,
                      value: { contains: filterValue, mode: "insensitive" as const },
                    },
                  },
                },
              },
            ],
          };
        case "isEmpty":
          return {
            OR: [
              {
                cells: {
                  none: {
                    columnId: filter.columnId,
                  },
                },
              },
              {
                cells: {
                  some: {
                    columnId: filter.columnId,
                    value: null,
                  },
                },
              },
              {
                cells: {
                  some: {
                    columnId: filter.columnId,
                    value: "",
                  },
                },
              },
            ],
          };
        case "isNotEmpty":
          return {
            cells: {
              some: {
                columnId: filter.columnId,
                NOT: [{ value: null }, { value: "" }],
              },
            },
          };
        default:
          return {};
      }
    }

    if (filter.column.type === "number") {
      const numericFilterValue = Number(filterValue);
      if (!Number.isFinite(numericFilterValue)) {
        return impossibleFilter;
      }

      switch (filter.operator) {
        case "greaterThan":
          return {
            cells: {
              some: {
                columnId: filter.columnId,
                value: { gt: String(numericFilterValue) },
              },
            },
          };
        case "lessThan":
          return {
            cells: {
              some: {
                columnId: filter.columnId,
                value: { lt: String(numericFilterValue) },
              },
            },
          };
        default:
          return {};
      }
    }

    return {};
  };

  let filtersWhereClause: Prisma.RowWhereInput | undefined;
  if (view.filters.length > 0) {
    filtersWhereClause = buildFilterWhereClause(view.filters[0]!);
    for (let index = 1; index < view.filters.length; index += 1) {
      const filter = view.filters[index]!;
      const currentClause = buildFilterWhereClause(filter);
      filtersWhereClause =
        filter.conjunction === "or"
          ? { OR: [filtersWhereClause, currentClause] }
          : { AND: [filtersWhereClause, currentClause] };
    }
  }

  return filtersWhereClause;
}

async function getRowsForView(ctx: TRPCContext, viewId: string) {
  const view = await getViewDefinition(ctx, viewId);
  const filtersWhereClause = buildFiltersWhereClause(view);
  return await ctx.db.row.findMany({
    where: {
      tableId: view.tableId,
      ...(filtersWhereClause ? { AND: [filtersWhereClause] } : {}),
    },
    orderBy: [{ createdAt: "asc" }, { id: "asc" }],
    select: rowSelect,
  });
}

export const viewRouter = createTRPCRouter({
  getByTable: publicProcedure
    .input(ViewGetByTableInputSchema)
    .output(ViewGetByTableOutputSchema)
    .query(async ({ ctx, input }) => {
      const tableExists = await ctx.db.table.findUnique({
        where: { id: input.tableId },
        select: { id: true },
      });

      if (!tableExists) {
        return [];
      }

      const views = await ctx.db.view.findMany({
        where: { tableId: input.tableId },
        orderBy: [{ createdAt: "asc" }, { id: "asc" }],
        select: {
          id: true,
          name: true,
          type: true,
          tableId: true,
          isDefault: true,
          searchQuery: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (views.length > 0) {
        return views;
      }

      const initialView = await ctx.db.view.create({
        data: {
          tableId: input.tableId,
          name: "Grid view",
          type: "grid",
          isDefault: true,
          searchQuery: null,
        },
        select: {
          id: true,
          name: true,
          type: true,
          tableId: true,
          isDefault: true,
          searchQuery: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return [initialView];
    }),
  create: publicProcedure
    .input(ViewCreateInputSchema)
    .output(ViewCreateOutputSchema)
    .mutation(async ({ ctx, input }) => {
      const existingViewCount = await ctx.db.view.count({
        where: { tableId: input.tableId },
      });

      return await ctx.db.view.create({
        data: {
          tableId: input.tableId,
          name: existingViewCount === 0 ? "Grid view" : `Grid view ${existingViewCount + 1}`,
          type: "grid",
          isDefault: existingViewCount === 0,
          searchQuery: null,
        },
        select: {
          id: true,
          name: true,
          type: true,
          tableId: true,
          isDefault: true,
          searchQuery: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }),

  getAllRows: publicProcedure
    .input(ViewGetAllRowsInputSchema)
    .output(ViewGetAllRowsOutputSchema)
    .query(async ({ ctx, input }) => getRowsForView(ctx, input.viewId)),

  getFilters: publicProcedure
    .input(ViewGetFiltersInputSchema)
    .output(ViewGetFiltersOutputSchema)
    .query(async ({ ctx, input }) => {
      const view = await ctx.db.view.findUnique({
        where: { id: input.viewId },
        select: { id: true },
      });

      if (!view) {
        throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
      }

      return await ctx.db.viewFilter.findMany({
        where: { viewId: input.viewId },
        orderBy: [{ position: "asc" }, { id: "asc" }],
        select: {
          id: true,
          viewId: true,
          columnId: true,
          conjunction: true,
          operator: true,
          value: true,
          position: true,
        },
      });
    }),
  setFilters: publicProcedure
    .input(ViewSetFiltersInputSchema)
    .output(ViewSetFiltersOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const view = await tx.view.findUnique({
          where: { id: input.viewId },
          select: { id: true, tableId: true },
        });

        if (!view) {
          throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
        }

        const uniqueColumnIds = [...new Set(input.filters.map((filter) => filter.columnId))];
        const columns = uniqueColumnIds.length
          ? await tx.column.findMany({
              where: {
                id: { in: uniqueColumnIds },
                tableId: view.tableId,
              },
              select: { id: true, type: true },
            })
          : [];
        const columnTypeMap = new Map(columns.map((column) => [column.id, column.type]));

        const normalizedFilters = input.filters.map((filter, index) => {
          const columnType = columnTypeMap.get(filter.columnId);
          if (!columnType) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "All filters must target columns in the same table as the view.",
            });
          }

          const textOperators = new Set([
            "equals",
            "contains",
            "notContains",
            "isEmpty",
            "isNotEmpty",
          ]);
          const numberOperators = new Set(["greaterThan", "lessThan"]);

          if (columnType === "text" && !textOperators.has(filter.operator)) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Text columns only support text filter operators.",
            });
          }

          if (columnType === "number" && !numberOperators.has(filter.operator)) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Number columns only support number filter operators.",
            });
          }

          if (columnType !== "text" && columnType !== "number") {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Only text and number columns are supported for filters currently.",
            });
          }

          const normalizedValue =
            filter.operator === "isEmpty" || filter.operator === "isNotEmpty"
              ? null
              : (filter.value?.trim() ?? null);

          if (
            columnType === "number" &&
            normalizedValue !== null &&
            !Number.isFinite(Number(normalizedValue))
          ) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Number filters must use numeric values.",
            });
          }

          return {
            viewId: view.id,
            columnId: filter.columnId,
            conjunction: filter.conjunction,
            operator: filter.operator,
            value: normalizedValue,
            position: index,
          };
        });

        await tx.viewFilter.deleteMany({
          where: { viewId: view.id },
        });

        if (normalizedFilters.length > 0) {
          await tx.viewFilter.createMany({
            data: normalizedFilters,
          });
        }

        return await tx.viewFilter.findMany({
          where: { viewId: view.id },
          orderBy: [{ position: "asc" }, { id: "asc" }],
          select: {
            id: true,
            viewId: true,
            columnId: true,
            conjunction: true,
            operator: true,
            value: true,
            position: true,
          },
        });
      });
    }),
  getSorts: publicProcedure
    .input(ViewGetSortsInputSchema)
    .output(ViewGetSortsOutputSchema)
    .query(async ({ ctx, input }) => {
      const view = await ctx.db.view.findUnique({
        where: { id: input.viewId },
        select: { id: true },
      });

      if (!view) {
        throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
      }

      return await ctx.db.viewSort.findMany({
        where: { viewId: input.viewId },
        orderBy: [{ position: "asc" }, { id: "asc" }],
        select: {
          id: true,
          viewId: true,
          columnId: true,
          direction: true,
          position: true,
        },
      });
    }),
  setSorts: publicProcedure
    .input(ViewSetSortsInputSchema)
    .output(ViewSetSortsOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const view = await tx.view.findUnique({
          where: { id: input.viewId },
          select: { id: true, tableId: true },
        });

        if (!view) {
          throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
        }

        const uniqueColumnIds = [...new Set(input.sorts.map((sort) => sort.columnId))];
        const columns = uniqueColumnIds.length
          ? await tx.column.findMany({
              where: {
                id: { in: uniqueColumnIds },
                tableId: view.tableId,
              },
              select: { id: true, type: true },
            })
          : [];
        const columnTypeMap = new Map(columns.map((column) => [column.id, column.type]));

        const normalizedSorts = input.sorts.map((sort, index) => {
          const columnType = columnTypeMap.get(sort.columnId);
          if (!columnType) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "All sorts must target columns in the same table as the view.",
            });
          }

          if (columnType !== "text" && columnType !== "number") {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Only text and number columns are supported for sorts currently.",
            });
          }

          return {
            viewId: view.id,
            columnId: sort.columnId,
            direction: sort.direction,
            position: index,
          };
        });

        await tx.viewSort.deleteMany({
          where: { viewId: view.id },
        });

        if (normalizedSorts.length > 0) {
          await tx.viewSort.createMany({
            data: normalizedSorts,
          });
        }

        return await tx.viewSort.findMany({
          where: { viewId: view.id },
          orderBy: [{ position: "asc" }, { id: "asc" }],
          select: {
            id: true,
            viewId: true,
            columnId: true,
            direction: true,
            position: true,
          },
        });
      });
    }),
});
