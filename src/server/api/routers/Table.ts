import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  TableGetColumnsInputSchema,
  TableGetColumnsOutputSchema,
  TableGetByBaseInputSchema,
  TableGetByBaseOutputSchema,
  TableCreateInputSchema,
  TableCreateOutputSchema,
} from "~/types/router";

export const tableRouter = createTRPCRouter({
  create: publicProcedure
    .input(TableCreateInputSchema)
    .output(TableCreateOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.$transaction(async (tx) => {
        const existingTableCount = await tx.table.count({
          where: { baseId: input.baseId },
        });

        const table = await tx.table.create({
          data: {
            baseId: input.baseId,
            name: `Table ${existingTableCount + 1}`,
          },
          select: {
            id: true,
            name: true,
            baseId: true,
            createdAt: true,
            updatedAt: true,
          },
        });

        await tx.view.create({
          data: {
            tableId: table.id,
            name: "Grid view",
            type: "grid",
            isDefault: true,
            searchQuery: null,
          },
        });

        return table;
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
});
