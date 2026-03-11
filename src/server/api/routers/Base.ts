import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  BaseGetAllOutputSchema,
  BaseMarkOpenedInputSchema,
  BaseMarkOpenedOutputSchema,
} from "~/types/router";

export const baseRouter = createTRPCRouter({
  getAll: publicProcedure.output(BaseGetAllOutputSchema).query(async ({ ctx }) => {
    return await ctx.db.base.findMany({
      orderBy: [{ updatedAt: "desc" }, { id: "asc" }],
      select: {
        id: true,
        name: true,
        lastOpened: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }),
  markOpened: publicProcedure
    .input(BaseMarkOpenedInputSchema)
    .output(BaseMarkOpenedOutputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.base.update({
        where: { id: input.baseId },
        data: { lastOpened: new Date() },
        select: {
          id: true,
          lastOpened: true,
        },
      });
    }),
});
