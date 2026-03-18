import { TRPCError } from "@trpc/server";
import { faker } from "@faker-js/faker";

import { createTableWithStarterContent } from "~/server/api/helpers/createTableWithStarterContent";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  TableCreateColumnInputSchema,
  TableCreateColumnOutputSchema,
  TableGetColumnsInputSchema,
  TableGetColumnsOutputSchema,
  TableGetByBaseInputSchema,
  TableGetByBaseOutputSchema,
  TableCreateInputSchema,
  TableCreateRowInputSchema,
  TableCreateRowOutputSchema,
  TableCreateBulkRowsInputSchema,
  TableCreateBulkRowsOutputSchema,
  TableCreateOutputSchema,
  TableRenameInputSchema,
  TableRenameOutputSchema,
  TableDeleteInputSchema,
  TableDeleteOutputSchema,
} from "~/types/router";

export const tableRouter = createTRPCRouter({
  create: publicProcedure
    .input(TableCreateInputSchema)
    .output(TableCreateOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        return await createTableWithStarterContent({
          client: tx,
          baseId: input.baseId,
          tableName: input.name,
        });
      });
    }),

  createRow: publicProcedure
    .input(TableCreateRowInputSchema)
    .output(TableCreateRowOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const table = await tx.table.findUnique({
          where: { id: input.tableId },
          select: { id: true },
        });

        if (!table) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Table not found." });
        }

        const row = await tx.row.create({
          data: { tableId: input.tableId },
          select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            tableId: true,
          },
        });

        const columns = await tx.column.findMany({
          where: { tableId: input.tableId },
          select: { id: true },
        });

        if (columns.length > 0) {
          await tx.cell.createMany({
            data: columns.map((column) => ({
              rowId: row.id,
              columnId: column.id,
              value: null,
            })),
          });
        }

        return row;
      });
    }),
  createBulkRows: publicProcedure
    .input(TableCreateBulkRowsInputSchema)
    .output(TableCreateBulkRowsOutputSchema)
    .mutation(async ({ ctx, input }) => {
      const table = await ctx.db.table.findUnique({
        where: { id: input.tableId },
        select: { id: true },
      });

      if (!table) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Table not found." });
      }

      const columns = await ctx.db.column.findMany({
        where: { tableId: input.tableId },
        orderBy: [{ position: "asc" }, { id: "asc" }],
        select: {
          id: true,
          type: true,
        },
      });

      const maxCellsPerBatch = 10_000;
      const rowsPerBatch =
        columns.length === 0 ? 1_000 : Math.max(100, Math.min(1_000, Math.floor(maxCellsPerBatch / columns.length)));

      let createdCount = 0;
      for (let offset = 0; offset < input.count; offset += rowsPerBatch) {
        const batchCount = Math.min(rowsPerBatch, input.count - offset);
        const rowIds = Array.from({ length: batchCount }, () => crypto.randomUUID());
        const rowData = rowIds.map((rowId) => ({
          id: rowId,
          tableId: input.tableId,
        }));

        if (columns.length === 0) {
          await ctx.db.row.createMany({ data: rowData });
          createdCount += batchCount;
          continue;
        }

        const cellData = rowIds.flatMap((rowId) =>
          columns.map((column) => ({
            rowId,
            columnId: column.id,
            value:
              column.type === "number"
                ? String(faker.number.int({ min: 0, max: 1_000_000 }))
                : faker.lorem.words({ min: 1, max: 3 }),
          })),
        );

        await ctx.db.$transaction([
          ctx.db.row.createMany({ data: rowData }),
          ctx.db.cell.createMany({ data: cellData }),
        ]);
        createdCount += batchCount;
      }

      return {
        tableId: input.tableId,
        createdCount,
      };
    }),

  createColumn: publicProcedure
    .input(TableCreateColumnInputSchema)
    .output(TableCreateColumnOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const table = await tx.table.findUnique({
          where: { id: input.tableId },
          select: { id: true },
        });

        if (!table) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Table not found." });
        }

        const existingColumnCount = await tx.column.count({
          where: { tableId: input.tableId },
        });

        const column = await tx.column.create({
          data: {
            tableId: input.tableId,
            name: input.name,
            type: input.type,
            position: existingColumnCount,
          },
          select: {
            id: true,
            name: true,
            type: true,
            position: true,
            tableId: true,
          },
        });

        const rows = await tx.row.findMany({
          where: { tableId: input.tableId },
          select: { id: true },
        });

        if (rows.length > 0) {
          await tx.cell.createMany({
            data: rows.map((row) => ({
              rowId: row.id,
              columnId: column.id,
              value: null,
            })),
          });
        }

        return column;
      });
    }),

  getByBase: publicProcedure
    .input(TableGetByBaseInputSchema)
    .output(TableGetByBaseOutputSchema)
    .query(async ({ ctx, input }) => {
      return await ctx.db.table.findMany({
        where: { baseId: input.baseId },
        orderBy: [{ updatedAt: "desc" }, { id: "asc" }],
        select: {
          id: true,
          name: true,
          baseId: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }),

  getColumns: publicProcedure
    .input(TableGetColumnsInputSchema)
    .output(TableGetColumnsOutputSchema)
    .query(async ({ ctx, input }) => {
      return await ctx.db.column.findMany({
        where: { tableId: input.tableId },
        orderBy: [{ position: "asc" }, { id: "asc" }],
        select: {
          id: true,
          name: true,
          type: true,
          position: true,
          tableId: true,
        },
      });
    }),

  rename: publicProcedure
    .input(TableRenameInputSchema)
    .output(TableRenameOutputSchema)
    .mutation(async ({ ctx, input }) => {
      const table = await ctx.db.table.findUnique({
        where: { id: input.tableId },
        select: { id: true },
      });

      if (!table) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Table not found." });
      }

      return await ctx.db.table.update({
        where: { id: input.tableId },
        data: { name: input.name },
        select: {
          id: true,
          name: true,
          baseId: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }),

  delete: publicProcedure
    .input(TableDeleteInputSchema)
    .output(TableDeleteOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const table = await tx.table.findUnique({
          where: { id: input.tableId },
          select: { id: true, baseId: true },
        });

        if (!table) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Table not found." });
        }

        const tableCount = await tx.table.count({
          where: { baseId: table.baseId },
        });

        if (tableCount <= 1) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Cannot delete the only table in a base.",
          });
        }

        await tx.viewFilter.deleteMany({
          where: { view: { tableId: table.id } },
        });
        await tx.viewSort.deleteMany({
          where: { view: { tableId: table.id } },
        });
        await tx.viewColumnVisibility.deleteMany({
          where: { view: { tableId: table.id } },
        });
        await tx.view.deleteMany({
          where: { tableId: table.id },
        });
        await tx.row.deleteMany({
          where: { tableId: table.id },
        });
        await tx.column.deleteMany({
          where: { tableId: table.id },
        });
        await tx.table.delete({
          where: { id: table.id },
        });

        const nextTable = await tx.table.findFirst({
          where: { baseId: table.baseId },
          orderBy: [{ updatedAt: "desc" }, { id: "asc" }],
          select: { id: true },
        });

        return {
          id: table.id,
          baseId: table.baseId,
          nextTableId: nextTable?.id ?? null,
        };
      });
    }),
});
