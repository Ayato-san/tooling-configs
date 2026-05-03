import unicornPlugin from 'eslint-plugin-unicorn'
import type { Config } from 'eslint/config'

/** ESLint configuration object for Unicorn's Rules */
const config: Config = {
  name: 'Unicorn', // Name of the configuration
  plugins: { '@unicorn': unicornPlugin },
  rules: {
    '@unicorn/filename-case': ['error', { case: 'snakeCase' }],
  },
}

export default config
