import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "public");

await fs.rm(outDir, { recursive: true, force: true });
await fs.mkdir(path.join(outDir, "src"), { recursive: true });
await fs.mkdir(path.join(outDir, "assets", "fonts"), { recursive: true });

const files = [
  ["index.html", "index.html"],
  ["reset.html", "reset.html"],
  ["manifest.json", "manifest.json"],
  ["OneSignalSDKWorker.js", "OneSignalSDKWorker.js"],
  ["OneSignalSDKUpdaterWorker.js", "OneSignalSDKUpdaterWorker.js"],
  ["src/styles.css", "src/styles.css"],
  ["src/supabase-kanban.js", "src/supabase-kanban.js"],
  ["assets/app-icon.svg", "assets/app-icon.svg"],
  ["assets/fonts/FormulaCondensed-Ultralight.ttf", "assets/fonts/FormulaCondensed-Ultralight.ttf"],
  ["assets/fonts/FormulaCondensed-Light.ttf", "assets/fonts/FormulaCondensed-Light.ttf"],
  ["assets/fonts/FormulaCondensed-Regular.ttf", "assets/fonts/FormulaCondensed-Regular.ttf"],
  ["assets/fonts/FormulaCondensed-Bold.ttf", "assets/fonts/FormulaCondensed-Bold.ttf"],
  ["assets/fonts/FormulaCondensed-Black.ttf", "assets/fonts/FormulaCondensed-Black.ttf"],
];

await Promise.all(
  files.map(([from, to]) => fs.copyFile(path.join(root, from), path.join(outDir, to))),
);

console.log("Static site built to public/");
