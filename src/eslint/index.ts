import { existsSync } from 'fs'

import { node } from './configs/node.js'
import { jsdoc } from './configs/jsdoc.js'
import { jsonc } from './configs/jsonc.js'
import { ignores } from './configs/ignores.js'
import { imports } from './configs/imports.js'
import { adonisjs } from './configs/adonisjs.js'
import { prettier } from './configs/prettier.js'
import { javascript } from './configs/javascript.js'
import { typescript } from './configs/typescript.js'
import { combine, interopDefault } from './utils.js'
import { tailwindcss } from './configs/tailwindcss.js'
import { perfectionist } from './configs/perfectionist.js'
import { sortPackageJson, sortTsconfig } from './configs/sort.js'
import { hasAdonisjs, hasTailwind, hasTypeScript } from './env.js'
import type { Awaitable, Options, UserConfigItem } from './types.js'

async function configure(
  options?: Options,
  ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]
): Promise<UserConfigItem[]> {
  const enableGitIgnore = options?.enableGitIgnore || true
  const enableAdonisJs = options?.adonisjs || hasAdonisjs
  const enableJsonc = options?.jsonc || true
  const enablePrettier = options?.prettier || true
  const enableTypescript = options?.typescript || hasTypeScript
  const enableTailwind = options?.tailwindcss || hasTailwind
  const configs = []
  if (enableGitIgnore) {
    const plugin = await interopDefault(import('eslint-config-flat-gitignore'))
    if (typeof enableGitIgnore !== 'boolean') {
      configs.push(plugin(enableGitIgnore))
    } else if (existsSync('.gitignore')) {
      configs.push(plugin())
    }
  }
  configs.push(ignores(), javascript(), perfectionist(), imports(), jsdoc(), node())
  if (enableTypescript) {
    configs.push(
      typescript({
        ...(typeof enableTypescript !== 'boolean' ? enableTypescript : {}),
      })
    )
  }
  if (enableTailwind) {
    configs.push(tailwindcss())
  }
  if (enableJsonc) {
    configs.push(jsonc(), sortPackageJson(), sortTsconfig())
  }
  if (enableAdonisJs) {
    configs.push(adonisjs())
  }
  if (enablePrettier) {
    configs.push(prettier())
  }
  const resolved = await Promise.all(configs)
  return combine(...resolved, ...userConfigs)
}
export {
  adonisjs,
  combine,
  ignores,
  imports,
  interopDefault,
  javascript,
  jsdoc,
  jsonc,
  configure,
  node,
  perfectionist,
  prettier,
  sortPackageJson,
  sortTsconfig,
  typescript,
  tailwindcss,
}
