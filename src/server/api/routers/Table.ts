import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  TableGetByBaseInputSchema,
  TableGetAllRowsInputSchema,
  TableGetAllRowsOutputSchema,
  TableGetByBaseOutputSchema,
} from "~/types/router";

export const tableRouter = createTRPCRouter({
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
  getAllRows: publicProcedure
    .input(TableGetAllRowsInputSchema)
    .output(TableGetAllRowsOutputSchema)
    .query(async ({ ctx, input }) => {
      return await ctx.db.row.findMany({
        where: { tableId: input.tableId },
        orderBy: [{ createdAt: "asc" }, { id: "asc" }],
        select: {
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
        },
      });
    }),
});
