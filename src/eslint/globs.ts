const GLOB_SRC = '**/*.?([cm])[jt]s?(x)'
const GLOB_TS = '**/*.?([cm])ts'
const GLOB_TSX = '**/*.?([cm])tsx'
const GLOB_JSON = '**/*.json'
const GLOB_JSON5 = '**/*.json5'
const GLOB_JSONC = '**/*.jsonc'
const GLOB_NODE_MODULES = '**/node_modules'
const GLOB_LOCKFILE = ['**/package-lock.json', '**/yarn.lock', '**/pnpm-lock.yaml', '**/bun.lockb']
const GLOB_EXCLUDE = [
  GLOB_NODE_MODULES,
  ...GLOB_LOCKFILE,
  // Build folders
  '**/build',
  '**/dist',
  '**/out',
  '**/target',
  'public/assets',
  '**/output',
  '**/coverage',
  '**/temp',
  '**/fixtures',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.output',
  '**/.vite-inspect',
  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
]

export {
  GLOB_EXCLUDE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  GLOB_LOCKFILE,
  GLOB_NODE_MODULES,
  GLOB_SRC,
  GLOB_TS,
  GLOB_TSX,
}
