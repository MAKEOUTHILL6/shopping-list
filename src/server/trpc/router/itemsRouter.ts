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

  getAll: publicProcedure
    .query(({ctx}) => {
        return ctx.prisma.shoppingItem.findMany();
    }),

});
