import { router } from "../trpc";
import { itemsRouter } from "./itemsRouter";

export const appRouter = router({
  items: itemsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
