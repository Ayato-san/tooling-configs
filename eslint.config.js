import { configure } from './build/eslint/index.js'

export default configure({
  name: 'overides',
  rules: { '@typescript-eslint/no-dynamic-delete': 'off' },
})
