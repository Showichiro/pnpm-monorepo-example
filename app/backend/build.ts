import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/index.ts"],
  platform: "node",
  outfile: "dist/index.js",
  tsconfig: "tsconfig.json",
  minify: true,
});
