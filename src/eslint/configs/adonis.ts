import adonisJSPlugin from '@adonisjs/eslint-plugin'
import { type ConfigWithExtends } from 'typescript-eslint'

/** Defining the list of files to include in the linting process */
export const FILE_LIST = ['**!(resources)/*.ts']

/** ESLint configuration object for AdonisJs's Rules */
const config: ConfigWithExtends = {
  name: 'AdonisJS', // Name of the configuration
  files: FILE_LIST, // Files to lint
  plugins: {
    '@adonisjs': adonisJSPlugin, // Registering AdonisJS plugin
  },
  rules: {
    '@adonisjs/prefer-lazy-controller-import': 'error', // Enforce lazy controller imports
    '@adonisjs/prefer-lazy-listener-import': 'error', // Enforce lazy listener imports
  },
}

export default config
