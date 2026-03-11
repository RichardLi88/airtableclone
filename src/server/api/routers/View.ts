import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  ViewCreateInputSchema,
  ViewCreateOutputSchema,
  ViewGetByTableInputSchema,
  ViewGetByTableOutputSchema,
} from "~/types/router";

export const viewRouter = createTRPCRouter({
  getByTable: publicProcedure
    .input(ViewGetByTableInputSchema)
    .output(ViewGetByTableOutputSchema)
    .query(async ({ ctx, input }) => {
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
});
