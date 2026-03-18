import { TRPCError } from "@trpc/server";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  CellUpdateValueInputSchema,
  CellUpdateValueOutputSchema,
} from "~/types/router";

export const cellRouter = createTRPCRouter({
  updateValue: publicProcedure
    .input(CellUpdateValueInputSchema)
    .output(CellUpdateValueOutputSchema)
    .mutation(async ({ ctx, input }) => {
      const [row, column] = await Promise.all([
        ctx.db.row.findUnique({
          where: { id: input.rowId },
          select: { id: true, tableId: true },
        }),
        ctx.db.column.findUnique({
          where: { id: input.columnId },
          select: { id: true, tableId: true, type: true },
        }),
      ]);

      if (!row) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Row not found." });
      }

      if (!column) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Column not found." });
      }

      if (row.tableId !== column.tableId) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Row and column must belong to the same table.",
        });
      }

      if (column.type === "number") {
        const normalizedValue = (input.value ?? "").trim();
        if (normalizedValue.length > 0 && !Number.isFinite(Number(normalizedValue))) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Please enter a number",
          });
        }
      }

      return await ctx.db.cell.upsert({
        where: {
          rowId_columnId: {
            rowId: input.rowId,
            columnId: input.columnId,
          },
        },
        update: {
          value: input.value,
        },
        create: {
          rowId: input.rowId,
          columnId: input.columnId,
          value: input.value,
        },
        select: {
          id: true,
          rowId: true,
          columnId: true,
          value: true,
        },
      });
    }),
});
