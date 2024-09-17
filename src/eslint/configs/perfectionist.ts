import perfectionistPlugin from 'eslint-plugin-perfectionist'
import type { ConfigWithExtends } from 'typescript-eslint'

/** ESLint configuration object for Perfectionist's Rules */
const config: ConfigWithExtends = {
  name: 'Perfectionist', // Name of the ESLint configuration
  plugins: { perfectionist: perfectionistPlugin }, // Registering the perfectionist plugin
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural', // Sorting type
        order: 'asc', // Ascending order
        internalPattern: ['@/**', '#*/**'], // Patterns for internal imports
        groups: [
          ['side-effect', 'side-effect-style'], // Side-effect imports
          ['builtin', 'external', 'builtin-type', 'external-type'], // Built-in and external packages
          [
            'internal-type',
            'internal',
            'parent-type',
            'sibling-type',
            'index-type',
            'parent',
            'sibling',
            'index',
            'style',
            'object',
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
