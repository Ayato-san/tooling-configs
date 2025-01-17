import tailwindPlugin from 'eslint-plugin-tailwindcss'

import flattenArrayObject from '../lib/flatten_array_object.js'
import removeCircularDeps from '../lib/remove_circular_deps.js'

/** ESLint configuration object for Node's Rules */
const config = flattenArrayObject(tailwindPlugin.configs['flat/recommended']) // Load recommended ESLint rules for Node
removeCircularDeps(config, 'tailwindcss') // Remove circular dependencies from the config
config.name = 'Tailwind' // Set the name of the configuration
config.settings = { tailwindcss: { callees: ['classnames', 'clsx', 'ctl', 'tv', 'twMerge'] } } // Add tailwin-variants and twMerge to callees

export default config
