import { pluginImport } from '../plugins.js'

export async function imports() {
  return [
    {
      name: 'ayato-san:imports',
      plugins: {
        import: pluginImport,
      },
      rules: {
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-duplicates': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/newline-after-import': 'error',
      },
    },
  ]
}
