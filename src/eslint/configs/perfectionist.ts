import perfectionistPlugin from 'eslint-plugin-perfectionist'
import type { Config } from 'eslint/config'

import { GLOB_SRC } from '../globs.js'

/** ESLint configuration object for Perfectionist's Rules */
const config: Config = {
  name: 'Perfectionist', // Name of the ESLint configuration
  files: [GLOB_SRC],
  plugins: { perfectionist: perfectionistPlugin }, // Registering the perfectionist plugin
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural', // Sorting type
        order: 'asc', // Ascending order
        internalPattern: ['^@/.+', '^#.+'], // Patterns for internal imports
        groups: [
          ['side-effect', 'side-effect-style'], // Side-effect imports
          ['builtin', 'external', 'type-builtin', 'type-external'], // Built-in and external packages
          [
            'type-internal',
            'internal',
            'type-parent',
            'type-sibling',
            'type-index',
            'parent',
            'sibling',
            'index',
            'style',
            'unknown',
          ],
        ],
      },
    ],
    'perfectionist/sort-enums': ['error', { type: 'natural', order: 'asc' }], // Rule for sorting enums
    'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }], // Rule for sorting named exports
    'perfectionist/sort-exports': ['error', { type: 'natural', order: 'asc' }], // Rule for sorting exports
  },
}

export default config
