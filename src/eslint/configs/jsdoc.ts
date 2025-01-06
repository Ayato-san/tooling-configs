import jsdoc from 'eslint-plugin-jsdoc'

import { GLOB_SRC } from '../globs.js'
import { hasTypeScript } from '../lib/env.js'
import removeCircularDeps from '../lib/remove_circular_deps.js'

/** ESLint configuration object for Javascript Documentation's Rules */
const config = jsdoc.configs['flat/recommended'] // Load the recommended configuration from eslint-plugin-jsdoc
removeCircularDeps(config, 'jsdoc') // Remove circular dependencies from the config
config.name = 'Typescript Documentation' // Set the name of the configuration
config.files = [GLOB_SRC] // Specify the files to which this configuration applies

config.rules = {
  'jsdoc/check-access': 'warn', // Warns on access checks in JSDoc
  'jsdoc/check-param-names': 'warn', // Warns on parameter name checks in JSDoc
  'jsdoc/check-property-names': 'warn', // Warns on property name checks in JSDoc
  'jsdoc/check-types': 'warn', // Warns on type checks in JSDoc
  'jsdoc/empty-tags': 'warn', // Warns on empty JSDoc tags
  'jsdoc/implements-on-classes': 'warn', // Warns on missing implements in classes
  'jsdoc/no-defaults': 'warn', // Warns against default values in JSDoc
  'jsdoc/no-multi-asterisks': 'warn', // Warns against multi-asterisk comments
  'jsdoc/require-param-name': 'warn', // Requires parameter names in JSDoc
  'jsdoc/require-property': 'warn', // Requires properties in JSDoc
  'jsdoc/require-property-description': 'warn', // Requires descriptions for properties
  'jsdoc/require-property-name': 'warn', // Requires names for properties
  'jsdoc/require-returns-check': 'warn', // Requires checks for return values
  'jsdoc/require-returns-description': 'warn', // Requires descriptions for return values
  'jsdoc/require-yields-check': 'warn', // Requires checks for yielded values
  'jsdoc/check-alignment': 'warn', // Warns on alignment issues in JSDoc
  'jsdoc/multiline-blocks': 'warn', // Warns on multiline blocks in JSDoc
}

if (!hasTypeScript) {
  config.name = 'Javascript Documentation' // Set the name of the configuration
  config.rules = {
    ...config.rules,
    'jsdoc/require-returns': 'warn', // Requires return tags in JSDoc
    'jsdoc/require-param-type': 'warn', // Requires parameter types in JSDoc
  }
}

export default config
