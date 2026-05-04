import unoPlugin from '@unocss/eslint-plugin'
import type { Linter } from 'eslint'

import { GLOB_EXCLUDE } from '../globs.js'

/** ESLint configuration object for Unocss's Rules */
const config: Linter.Config = {
  name: 'Unocss', // Name of the configuration
  ignores: GLOB_EXCLUDE,
  plugins: {
    '@unocss': unoPlugin as any,
  },
  rules: {
    ...unoPlugin.configs.recommended.rules,
  },
}

export default config
