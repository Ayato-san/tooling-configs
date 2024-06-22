import { GLOB_EXCLUDE } from '../globs.js'
import { interopDefault } from '../utils.js'

export async function tailwindcss() {
  // @ts-expect-error missing types
  const tailwindPlugin = await interopDefault(import('eslint-plugin-tailwindcss'))
  return [
    {
      name: 'ayato-san:tailwindcss',
      ignores: GLOB_EXCLUDE,
      plugins: {
        tailwindcss: tailwindPlugin,
      },
      rules: {
        ...tailwindPlugin.configs.recommended.rules,
      },
    },
  ]
}
