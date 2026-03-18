import { TRPCError } from "@trpc/server";
import { Prisma } from "../../../../generated/prisma";

import { type createTRPCContext, createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  ViewCreateInputSchema,
  ViewCreateOutputSchema,
  ViewDeleteInputSchema,
  ViewDeleteOutputSchema,
  ViewDuplicateInputSchema,
  ViewDuplicateOutputSchema,
  ViewGetAllRowsInputSchema,
  ViewGetAllRowsOutputSchema,
  ViewGetRowsPageInputSchema,
  ViewGetRowsPageOutputSchema,
  ViewGetColumnVisibilityInputSchema,
  ViewGetColumnVisibilityOutputSchema,
  ViewGetFiltersInputSchema,
  ViewGetFiltersOutputSchema,
  ViewGetSortsInputSchema,
  ViewGetSortsOutputSchema,
  ViewGetByTableInputSchema,
  ViewGetByTableOutputSchema,
  ViewRenameInputSchema,
  ViewRenameOutputSchema,
  ViewSetFiltersInputSchema,
  ViewSetFiltersOutputSchema,
  ViewSetColumnVisibilityInputSchema,
  ViewSetColumnVisibilityOutputSchema,
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
  sorts: Array<{
    id: string;
    columnId: string;
    direction: "asc" | "desc";
    position: number;
    column: {
      id: string;
      type: "text" | "number";
    };
  }>;
  columnVisibilities: Array<{
    id: string;
    columnId: string;
    isVisible: boolean;
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
      sorts: {
        orderBy: [{ position: "asc" }, { id: "asc" }],
        select: {
          id: true,
          columnId: true,
          direction: true,
          position: true,
          column: {
            select: {
              id: true,
              type: true,
            },
          },
        },
      },
      columnVisibilities: {
        orderBy: [{ id: "asc" }],
        select: {
          id: true,
          columnId: true,
          isVisible: true,
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

function toComparableValue(
  value: string | null | undefined,
  type: "text" | "number",
): string | number | null {
  const normalized = value?.trim() ?? "";
  if (normalized.length === 0) {
    return null;
  }

  if (type === "number") {
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return normalized.toLowerCase();
}

function compareRowsBySorts(
  left: Prisma.RowGetPayload<{ select: typeof rowSelect }>,
  right: Prisma.RowGetPayload<{ select: typeof rowSelect }>,
  sorts: ViewDefinition["sorts"],
): number {
  for (const sort of sorts) {
    const leftValue = toComparableValue(
      left.cells.find((cell) => cell.columnId === sort.columnId)?.value,
      sort.column.type,
    );
    const rightValue = toComparableValue(
      right.cells.find((cell) => cell.columnId === sort.columnId)?.value,
      sort.column.type,
    );

    if (leftValue === null && rightValue !== null) {
      return 1;
    }
    if (leftValue !== null && rightValue === null) {
      return -1;
    }
    if (leftValue === null && rightValue === null) {
      continue;
    }

    const comparison =
      sort.column.type === "number"
        ? (leftValue as number) - (rightValue as number)
        : String(leftValue).localeCompare(String(rightValue));

    if (comparison !== 0) {
      return sort.direction === "asc" ? comparison : -comparison;
    }
  }

  return left.id.localeCompare(right.id);
}

function applyViewSorts(
  rows: Prisma.RowGetPayload<{ select: typeof rowSelect }>[],
  view: ViewDefinition,
): Prisma.RowGetPayload<{ select: typeof rowSelect }>[] {
  if (view.sorts.length === 0) {
    return [...rows].sort((left, right) => left.id.localeCompare(right.id));
  }

  return [...rows].sort((left, right) => compareRowsBySorts(left, right, view.sorts));
}

function applyColumnVisibility(
  rows: Prisma.RowGetPayload<{ select: typeof rowSelect }>[],
  visibleColumnIds: Set<string>,
) {
  return rows.map((row) => ({
    ...row,
    cells: row.cells.filter((cell) => visibleColumnIds.has(cell.columnId)),
  }));
}

async function getRowsForView(
  ctx: TRPCContext,
  input: {
    viewId: string;
    limit?: number;
    cursor?: string;
  },
) {
  const view = await getViewDefinition(ctx, input.viewId);
  const pageSize = input.limit ?? (input.cursor ? 500 : undefined);
  const filtersWhereClause = buildFiltersWhereClause(view);
  const tableColumns = await ctx.db.column.findMany({
    where: { tableId: view.tableId },
    select: { id: true },
  });
  const visibilityMap = new Map(view.columnVisibilities.map((entry) => [entry.columnId, entry.isVisible]));
  let visibleColumnIds = tableColumns
    .filter((column) => visibilityMap.get(column.id) !== false)
    .map((column) => column.id);
  if (visibleColumnIds.length === 0 && tableColumns.length > 0) {
    visibleColumnIds = [tableColumns[0]!.id];
  }

  const rows = await ctx.db.row.findMany({
    where: {
      tableId: view.tableId,
      ...(filtersWhereClause ? { AND: [filtersWhereClause] } : {}),
    },
    orderBy: [{ id: "asc" }],
    select: {
      ...rowSelect,
    },
  });

  const visibleColumnIdSet = new Set(visibleColumnIds);
  const sortedRows = applyViewSorts(rows, view);
  const cursorIndex = input.cursor ? sortedRows.findIndex((row) => row.id === input.cursor) : -1;
  const startIndex = cursorIndex >= 0 ? cursorIndex + 1 : 0;
  const pagedRows = pageSize ? sortedRows.slice(startIndex, startIndex + pageSize) : sortedRows.slice(startIndex);

  return applyColumnVisibility(pagedRows, visibleColumnIdSet);
}

async function getRowsPageForView(
  ctx: TRPCContext,
  input: {
    viewId: string;
    limit: number;
    cursor?: string;
  },
) {
  const view = await getViewDefinition(ctx, input.viewId);
  const filtersWhereClause = buildFiltersWhereClause(view);
  const tableColumns = await ctx.db.column.findMany({
    where: { tableId: view.tableId },
    select: { id: true },
  });
  const visibilityMap = new Map(view.columnVisibilities.map((entry) => [entry.columnId, entry.isVisible]));
  let visibleColumnIds = tableColumns
    .filter((column) => visibilityMap.get(column.id) !== false)
    .map((column) => column.id);
  if (visibleColumnIds.length === 0 && tableColumns.length > 0) {
    visibleColumnIds = [tableColumns[0]!.id];
  }

  const rows = await ctx.db.row.findMany({
    where: {
      tableId: view.tableId,
      ...(filtersWhereClause ? { AND: [filtersWhereClause] } : {}),
    },
    orderBy: [{ id: "asc" }],
    select: {
      ...rowSelect,
    },
  });

  const visibleColumnIdSet = new Set(visibleColumnIds);
  const sortedRows = applyViewSorts(rows, view);
  const cursorIndex = input.cursor ? sortedRows.findIndex((row) => row.id === input.cursor) : -1;
  const startIndex = cursorIndex >= 0 ? cursorIndex + 1 : 0;
  const pagedRows = sortedRows.slice(startIndex, startIndex + input.limit);
  const hasMore = startIndex + input.limit < sortedRows.length;
  const nextCursor = hasMore ? pagedRows[pagedRows.length - 1]?.id ?? null : null;

  return {
    rows: applyColumnVisibility(pagedRows, visibleColumnIdSet),
    nextCursor,
  };
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
          name: input.name.trim(),
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
  rename: publicProcedure
    .input(ViewRenameInputSchema)
    .output(ViewRenameOutputSchema)
    .mutation(async ({ ctx, input }) => {
      const view = await ctx.db.view.findUnique({
        where: { id: input.viewId },
        select: { id: true },
      });
      if (!view) {
        throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
      }

      return await ctx.db.view.update({
        where: { id: input.viewId },
        data: { name: input.name },
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
  duplicate: publicProcedure
    .input(ViewDuplicateInputSchema)
    .output(ViewDuplicateOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const originalView = await tx.view.findUnique({
          where: { id: input.viewId },
          include: {
            filters: {
              orderBy: [{ position: "asc" }, { id: "asc" }],
            },
            sorts: {
              orderBy: [{ position: "asc" }, { id: "asc" }],
            },
          },
        });

        if (!originalView) {
          throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
        }

        const duplicatedView = await tx.view.create({
          data: {
            tableId: originalView.tableId,
            name: `${originalView.name} copy`,
            type: originalView.type,
            isDefault: false,
            searchQuery: originalView.searchQuery,
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

        if (originalView.filters.length > 0) {
          await tx.viewFilter.createMany({
            data: originalView.filters.map((filter, index) => ({
              viewId: duplicatedView.id,
              columnId: filter.columnId,
              conjunction: filter.conjunction,
              operator: filter.operator,
              value: filter.value,
              position: index,
            })),
          });
        }

        if (originalView.sorts.length > 0) {
          await tx.viewSort.createMany({
            data: originalView.sorts.map((sort, index) => ({
              viewId: duplicatedView.id,
              columnId: sort.columnId,
              direction: sort.direction,
              position: index,
            })),
          });
        }

        return duplicatedView;
      });
    }),
  delete: publicProcedure
    .input(ViewDeleteInputSchema)
    .output(ViewDeleteOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const view = await tx.view.findUnique({
          where: { id: input.viewId },
          select: { id: true, tableId: true, isDefault: true },
        });

        if (!view) {
          throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
        }

        const siblingViews = await tx.view.findMany({
          where: { tableId: view.tableId },
          orderBy: [{ createdAt: "asc" }, { id: "asc" }],
          select: { id: true, isDefault: true },
        });

        if (siblingViews.length <= 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Cannot delete the only view in a table.",
          });
        }

        await tx.viewFilter.deleteMany({ where: { viewId: view.id } });
        await tx.viewSort.deleteMany({ where: { viewId: view.id } });
        await tx.viewColumnVisibility.deleteMany({ where: { viewId: view.id } });
        await tx.view.delete({ where: { id: view.id } });

        if (view.isDefault) {
          const nextDefault = siblingViews.find((candidate) => candidate.id !== view.id);
          if (nextDefault) {
            await tx.view.update({
              where: { id: nextDefault.id },
              data: { isDefault: true },
            });
          }
        }

        return {
          id: view.id,
          tableId: view.tableId,
        };
      });
    }),

  getAllRows: publicProcedure
    .input(ViewGetAllRowsInputSchema)
    .output(ViewGetAllRowsOutputSchema)
    .query(async ({ ctx, input }) => getRowsForView(ctx, input)),

  getRowsPage: publicProcedure
    .input(ViewGetRowsPageInputSchema)
    .output(ViewGetRowsPageOutputSchema)
    .query(async ({ ctx, input }) => getRowsPageForView(ctx, input)),

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
  getColumnVisibility: publicProcedure
    .input(ViewGetColumnVisibilityInputSchema)
    .output(ViewGetColumnVisibilityOutputSchema)
    .query(async ({ ctx, input }) => {
      const view = await ctx.db.view.findUnique({
        where: { id: input.viewId },
        select: { id: true },
      });

      if (!view) {
        throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
      }

      return await ctx.db.viewColumnVisibility.findMany({
        where: { viewId: input.viewId },
        orderBy: [{ id: "asc" }],
        select: {
          id: true,
          viewId: true,
          columnId: true,
          isVisible: true,
        },
      });
    }),
  setColumnVisibility: publicProcedure
    .input(ViewSetColumnVisibilityInputSchema)
    .output(ViewSetColumnVisibilityOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const view = await tx.view.findUnique({
          where: { id: input.viewId },
          select: { id: true, tableId: true },
        });

        if (!view) {
          throw new TRPCError({ code: "NOT_FOUND", message: "View not found." });
        }

        const validColumns = await tx.column.findMany({
          where: { tableId: view.tableId },
          select: { id: true, position: true },
          orderBy: [{ position: "asc" }, { id: "asc" }],
        });
        const validColumnIds = new Set(validColumns.map((column) => column.id));

        for (const entry of input.columnVisibility) {
          if (!validColumnIds.has(entry.columnId)) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "All visibility settings must target columns in the same table as the view.",
            });
          }
        }

        const requestedVisibilityByColumn = new Map(
          input.columnVisibility.map((entry) => [entry.columnId, entry.isVisible]),
        );
        const primaryColumnId = validColumns[0]?.id;
        if (primaryColumnId) {
          requestedVisibilityByColumn.set(primaryColumnId, true);
        }
        const visibleColumnCount = validColumns.filter(
          (column) => requestedVisibilityByColumn.get(column.id) !== false,
        ).length;
        if (visibleColumnCount < 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "At least one column must remain visible.",
          });
        }

        await tx.viewColumnVisibility.deleteMany({
          where: { viewId: view.id },
        });

        if (input.columnVisibility.length > 0) {
          await tx.viewColumnVisibility.createMany({
            data: input.columnVisibility.map((entry) => ({
              viewId: view.id,
              columnId: entry.columnId,
              isVisible: entry.columnId === primaryColumnId ? true : entry.isVisible,
            })),
          });
        }

        return await tx.viewColumnVisibility.findMany({
          where: { viewId: view.id },
          orderBy: [{ id: "asc" }],
          select: {
            id: true,
            viewId: true,
            columnId: true,
            isVisible: true,
          },
        });
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
        if (uniqueColumnIds.length !== input.sorts.length) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Each column can only be sorted once.",
          });
        }
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
