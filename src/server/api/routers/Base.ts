import { createTableWithStarterContent } from "~/server/api/helpers/createTableWithStarterContent";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  BaseCreateInputSchema,
  BaseCreateOutputSchema,
  BaseGetAllOutputSchema,
  BaseMarkOpenedInputSchema,
  BaseMarkOpenedOutputSchema,
} from "~/types/router";

export const baseRouter = createTRPCRouter({
  create: publicProcedure
    .input(BaseCreateInputSchema)
    .output(BaseCreateOutputSchema)
    .mutation(async ({ ctx, input }) => {
      const baseName = input.name.trim();

      return await ctx.db.$transaction(async (tx) => {
        const base = await tx.base.create({
          data: {
            name: baseName,
          },
          select: {
            id: true,
            name: true,
            lastOpened: true,
            createdAt: true,
            updatedAt: true,
          },
        });

        await createTableWithStarterContent({
          client: tx,
          baseId: base.id,
          tableName: "Table 1",
        });

        return base;
      });
    }),
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
