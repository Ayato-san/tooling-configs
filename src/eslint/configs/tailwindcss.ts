import tailwindPlugin from 'eslint-plugin-tailwindcss'

import flattenArrayObject from '../lib/flatten-array-object.js'
import removeCircularDeps from '../lib/remove-circular-deps.js'

/** ESLint configuration object for Node's Rules */
const config = flattenArrayObject(tailwindPlugin.configs['flat/recommended']) // Load recommended ESLint rules for Node
removeCircularDeps(config, 'tailwindcss') // Remove circular dependencies from the config
config.name = 'Tailwind' // Set the name of the configuration

export default config
