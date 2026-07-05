import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project sites are served from https://<user>.github.io/<repo>/
// so every asset URL needs that repo name as a prefix. Change this to match
// your actual repository name (keep the leading and trailing slash).
// If you deploy to a custom domain or a <user>.github.io *user/org* site
// (i.e. the repo itself is named <user>.github.io), set this to "/" instead.
const REPO_NAME = "";

export default defineConfig({
  base: `/${REPO_NAME}/`,
  plugins: [
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
});
