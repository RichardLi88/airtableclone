import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { BaseGetAllOutputSchema } from "~/types/router";

export const baseRouter = createTRPCRouter({
  getAll: publicProcedure.output(BaseGetAllOutputSchema).query(async ({ ctx }) => {
    return await ctx.db.base.findMany({
      orderBy: [{ updatedAt: "desc" }, { id: "asc" }],
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }),
});
