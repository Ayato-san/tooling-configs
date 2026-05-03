import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import type { Config } from 'eslint/config'

/** ESLint configuration object for Prettier's Rules */
const config: Config = {
  name: 'Prettier', // Name of the configuration
  plugins: { ...prettierPlugin.plugins }, // Include plugins from eslint-plugin-prettier
  rules: {
    ...prettierConfig.rules, // Use rules from eslint-config-prettier
    ...prettierPlugin.rules, // Use recommended rules from eslint-plugin-prettier
    'prettier/prettier': 'warn', // Set Prettier rule to warn
  },
}

export default config
