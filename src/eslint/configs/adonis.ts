import adonisJSPlugin from '@adonisjs/eslint-plugin'
import type { Config } from 'eslint/config'

/** Defining the list of files to include in the linting process */
export const FILE_LIST = ['**!(resources)/*.ts']

/** ESLint configuration object for AdonisJs's Rules */
const config: Config = {
  name: 'AdonisJS', // Name of the configuration
  files: FILE_LIST, // Files to lint
  plugins: {
    '@adonisjs': adonisJSPlugin as unknown as NonNullable<Config['plugins']>[string], // Registering AdonisJS plugin
  },
  rules: {
    '@adonisjs/prefer-lazy-controller-import': 'error', // Enforce lazy controller imports
    '@adonisjs/prefer-lazy-listener-import': 'error', // Enforce lazy listener imports
  },
}

export default config
