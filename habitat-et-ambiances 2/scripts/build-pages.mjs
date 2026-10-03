import { build } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const configFile = `${root}pages/vite.config.ts`;
await build({ configFile });
await build({ configFile, publicDir: false, build: {
  ssr: `${root}pages/render.tsx`, outDir: `${root}work/.codex-scratch.nosync/pages-render`,
  emptyOutDir: true,
} });
const { routeNames, render } = await import(`${root}work/.codex-scratch.nosync/pages-render/render.js`);
const template = await readFile(`${root}dist-pages/index.html`, "utf8");
for (const route of routeNames) {
  const directory = `${root}dist-pages/${route}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, template.replace("<!--content-->", render(route)));
}
await writeFile(`${root}dist-pages/.nojekyll`, "");
await writeFile(`${root}dist-pages/404.html`, template.replace("<!--content-->", '<main><h1>Page introuvable</h1><a href="/habitat-et-ambiances/">Retour au laboratoire</a></main>'));
console.log(`GitHub Pages : ${routeNames.length} pages pré-rendues dans dist-pages.`);
