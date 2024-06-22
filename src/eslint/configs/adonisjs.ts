import { interopDefault } from '../utils.js'

export async function adonisjs() {
  // @ts-expect-error missing types
  const adonisjsPlugin = await interopDefault(import('@adonisjs/eslint-plugin'))
  return [
    {
      name: 'ayato-san:adonisjs',
      plugins: {
        '@adonisjs': adonisjsPlugin,
      },
      rules: {
        '@adonisjs/prefer-lazy-controller-import': 'error',
        '@adonisjs/prefer-lazy-listener-import': 'error',
      },
    },
  ]
}
