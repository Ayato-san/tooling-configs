import { writeFileSync } from 'fs'
import { getPackageInfoSync } from 'local-pkg'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'

import configAdonis from './configs/adonis.js'
import configIgnore from './configs/ignore.js'
import configJavascript from './configs/javascript.js'
import configJsDoc from './configs/jsdoc.js'
import configJson from './configs/json.js'
import configNode from './configs/node.js'
import configPerfectionist from './configs/perfectionist.js'
import configPrettier from './configs/prettier.js'
import configTailwind from './configs/tailwindcss.js'
import configTypescript from './configs/typescript.js'
import configUnicorn from './configs/unicorn.js'
import configYml from './configs/yml.js'
import { hasAdonisjs, hasPrettier, hasTailwind, hasTypeScript } from './lib/env.js'

/**
 * Configures ESLint with the provided configurations and available plugins.
 * @param {ConfigWithExtends[]} configs - An array of configuration objects to be included in the ESLint setup.
 * @returns The final ESLint configuration object after merging all provided configurations.
 */
export function configure(...configs: ConfigWithExtends[]) {
  if (hasPrettier) {
    configs.unshift(configPrettier)
  }
  if (hasTypeScript) {
    configs.unshift(...configTypescript)
  }
  if (hasAdonisjs) {
    configs.unshift(configAdonis)
  }
  if (hasTailwind) {
    configs.unshift(configTailwind)
  }

  return tseslint.config(
    configIgnore,
    configUnicorn,
    configJavascript,
    configJsDoc,
    ...configJson,
    configYml,
    configNode,
    configPerfectionist,
    ...configs
  )
}

/**
 * Writes the ESLint configuration to a specified file in JSON format.
 * @param filePath - The path where the ESLint configuration will be saved. Defaults to '.eslintrc.json'.
 * @param params - The configuration parameters to be passed to the configure function, allowing for dynamic configuration.
 */
export function writeFile(
  filePath: string = '.eslintrc.json',
  ...params: Parameters<typeof configure>
) {
  writeFileSync(filePath, JSON.stringify(configure(...params), null, 2))
}
