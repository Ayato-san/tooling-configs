import { configure } from './build/eslint/index.js'

export default configure(undefined, {
  name: 'overides',
  rules: { '@typescript-eslint/no-dynamic-delete': 'off' },
})
