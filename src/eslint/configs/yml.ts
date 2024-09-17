import type { Linter } from 'eslint'
import ymlPlugin from 'eslint-plugin-yml'

import { GLOB_YML } from '../globs.js'
import flattenArrayObject from '../lib/flatten-array-object.js'
import removeCircularDeps from '../lib/remove-circular-deps.js'

/** ESLint configuration object for Json's Rules */
const config: Linter.Config = flattenArrayObject(ymlPlugin.configs['flat/standard']) // Creating the ESLint config from the YAML plugin's standard config
removeCircularDeps(config, 'yml') // Removing circular dependencies from the config
config.name = 'YAML' // Setting the name of the config
config.files = GLOB_YML // Specifying the files to which this config applies
config.rules = {
  ...config.rules,
  'yml/no-multiple-empty-lines': 2, // Enforce a maximum of one empty line between content
}

export default config
