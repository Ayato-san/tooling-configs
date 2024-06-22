import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/eslint/index.ts', 'src/deleted/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: 'build',
  publicDir: true,
  format: ['esm', 'cjs'],
  dts: true,
  minify: !options.watch,
}))
