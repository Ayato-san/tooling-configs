import { interopDefault } from '../utils.js'

export async function perfectionist() {
  // @ts-expect-error missing types
  const pluginPerfectionist = await interopDefault(import('eslint-plugin-perfectionist'))
  return [
    {
      name: 'ayato-san:perfectionist',
      plugins: { perfectionist: pluginPerfectionist },
      rules: {
        'perfectionist/sort-imports': [
          'error',
          {
            'type': 'natural',
            'order': 'asc',
            'internal-pattern': ['@/**', '#*/**'],
            'groups': [
              // Import 'foo.js' or import 'foo.css'
              ['side-effect', 'side-effect-style'],
              // Packages and node
              ['builtin', 'external', 'builtin-type', 'external-type'],
              // Others
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
        'perfectionist/sort-enums': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-exports': ['error', { type: 'natural', order: 'asc' }],
      },
    },
  ]
}
