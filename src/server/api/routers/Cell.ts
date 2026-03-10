import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const cellRouter = createTRPCRouter({
  updateValue: publicProcedure
    .input(
      z.object({
        rowId: z.number().int().positive(),
        columnId: z.number().int().positive(),
        value: z.string().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [row, column] = await Promise.all([
        ctx.db.row.findUnique({
          where: { id: input.rowId },
          select: { id: true, tableId: true },
        }),
        ctx.db.column.findUnique({
          where: { id: input.columnId },
          select: { id: true, tableId: true },
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

      return ctx.db.cell.upsert({
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
