import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const tableRouter = createTRPCRouter({
  getByBase: publicProcedure
    .input(z.object({ baseId: z.number().int().positive() }))
    .query(({ ctx, input }) => {
      return ctx.db.table.findMany({
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
