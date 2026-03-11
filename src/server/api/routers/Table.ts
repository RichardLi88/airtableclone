import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  TableGetByBaseInputSchema,
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
});
