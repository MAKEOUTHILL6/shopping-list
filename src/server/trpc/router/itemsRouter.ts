import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const itemsRouter = router({
  addItem: publicProcedure
    .input(z.object({ name: z.string(), checked: z.boolean() }))
    .mutation(({ input, ctx }) => {
      const { name, checked } = input;

      const item = ctx.prisma.shoppingItem.create({
        data: {
          name,
          checked,
        },
      });

      return item;
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.shoppingItem.findMany();
  }),

  getOne: publicProcedure
    .input(z.object({id: z.string()}))
    .query(({input, ctx}) => {
      const {id} = input;

      const item = ctx.prisma.shoppingItem.findUnique({
        where: {
          id,
        }
      });

      return item
    }),

  deleteItem: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      const { id } = input;

      const item = ctx.prisma.shoppingItem.delete({
        where: {
          id,
        },
      });

      return item;
    }),

  updateItem: publicProcedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(({ input, ctx }) => {
      const { id, name } = input;

      const item = ctx.prisma.shoppingItem.update({
        where: {
          id,
        },
        data: {
          name,
        },
      });

      return item;
    }),
});
