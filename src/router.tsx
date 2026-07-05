import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,
  // Must match vite.config.ts's `base` so routes resolve correctly when
  // the site is served from https://<user>.github.io/<repo>/ instead of
  // the domain root.
  basepath: import.meta.env.BASE_URL,
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
