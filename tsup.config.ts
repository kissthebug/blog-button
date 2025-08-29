import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"], // produce both ESM and CJS
  dts: true, // .d.ts via tsc
  sourcemap: true,
  clean: true,
  minify: false,
  external: ["react", "react-dom"], // keep peers external
  splitting: false, // library with single entry
  treeshake: true,
});
