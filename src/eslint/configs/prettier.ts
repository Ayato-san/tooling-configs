import { interopDefault } from '../utils.js'

export async function prettier() {
  const [eslintConfigPrettier, eslintPluginPrettier] = await Promise.all([
    interopDefault(import('eslint-config-prettier')),
    interopDefault(import('eslint-plugin-prettier')),
  ])
  return [
    {
      name: 'ayato-san:prettier',
      plugins: {
        prettier: eslintPluginPrettier,
      },
      rules: {
        ...eslintConfigPrettier.rules,
        // @ts-expect-error wrong types
        ...eslintPluginPrettier.configs['recommended'].rules,
        'prettier/prettier': 'warn',
      },
    },
  ]
}
