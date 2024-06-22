import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: "build",
  publicDir: true,
  format: ["esm", "cjs"],
  dts: true,
});
