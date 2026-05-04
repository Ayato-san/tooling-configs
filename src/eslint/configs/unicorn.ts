import type { Linter } from 'eslint'
import unicornPlugin from 'eslint-plugin-unicorn'

/** ESLint configuration object for Unicorn's Rules */
const config: Linter.Config = {
  name: 'Unicorn', // Name of the configuration
  plugins: { '@unicorn': unicornPlugin },
  rules: {
    '@unicorn/filename-case': ['error', { case: 'snakeCase' }],
  },
}

export default config
