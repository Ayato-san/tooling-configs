import nodePlugin from 'eslint-plugin-n'

import removeCircularDeps from '../lib/remove-circular-deps.js'
import renamePlugin from '../lib/rename-plugin.js'

/** ESLint configuration object for Node's Rules */
const config = nodePlugin.configs['flat/recommended'] // Load recommended ESLint rules for Node
removeCircularDeps(config, 'n') // Remove circular dependencies from the config
renamePlugin(config, 'n', 'node') // Rename the plugin from 'n' to 'node'
config.name = 'Node' // Set the name of the configuration
config.rules = {
  'node/handle-callback-err': ['error', '^(err|error)$'], // Enforce error handling in callbacks
  'node/no-deprecated-api': 'error', // Disallow deprecated Node.js APIs
  'node/no-exports-assign': 'error', // Prevent assignment to module.exports
  'node/no-new-require': 'error', // Disallow new require() calls
  'node/no-path-concat': 'error', // Disallow string concatenation for paths
  'node/prefer-global/buffer': ['error', 'never'], // Prefer global Buffer over local
  'node/prefer-global/process': ['error', 'never'], // Prefer global process over local
  'node/process-exit-as-throw': 'error', // Treat process.exit() as an exception
}

export default config
