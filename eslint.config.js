import { configure } from './build/eslint/index.js'

export default configure(
  {
    enableTailwind: false,
  },
  {
    name: 'overides',
    rules: { '@typescript-eslint/no-dynamic-delete': 'off' },
  }
)
