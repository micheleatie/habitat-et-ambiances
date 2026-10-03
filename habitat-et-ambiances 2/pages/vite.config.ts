import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const project = fileURLToPath(new URL("../", import.meta.url));
const base = "/habitat-et-ambiances/";
export default defineConfig({
  root: `${project}pages`,
  base,
  publicDir: `${project}public`,
  resolve: { alias: { "@": project } },
  plugins: [
    {
      name: "github-pages-public-links",
      enforce: "pre",
      transform(code, id) {
        // Only public presentation components: never bundle API, inbox or D1.
        if (!/\/(app|components)\/.+\.tsx$/.test(id)) return;
        return code.replace(/(["'])\/(?!\/)([^"']*)\1/g, (_all, quote, path) => {
          if (path === "suivi") return `${quote}https://supabase.com/dashboard/project/igleycblgzxftgwswjvg/editor${quote}`;
          if (path.startsWith("images/")) return `${quote}${base}${path}${quote}`;
          const [route, hash] = path.split("#");
          if (!["", "index", "habiter", "experts", "collaborer", "donnees"].includes(route)) return _all;
          return `${quote}${base}${route ? `${route}/` : ""}${hash ? `#${hash}` : ""}${quote}`;
        });
      },
    },
    react(),
  ],
  build: { outDir: `${project}dist-pages`, emptyOutDir: true, sourcemap: false },
});
