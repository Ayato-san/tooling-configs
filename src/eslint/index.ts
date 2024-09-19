import { writeFileSync } from 'fs'
import { argv } from 'node:process'
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
import { isTsOptions, type TsOptions } from './types.js'

/**
 * Configures ESLint with the provided configurations and available plugins.
 * This function allows for dynamic inclusion of various ESLint configurations
 * based on the specified options.
 *
 * @param {Options} options - An object containing flags to enable or disable specific ESLint features.
 * @param {ConfigWithExtends[]} configs - An array of configuration objects to be included in the ESLint setup.
 * @returns The final ESLint configuration object after merging all provided configurations.
 */
export function configure(options?: Options, ...configs: ConfigWithExtends[]) {
  // Check if Prettier should be enabled and add its config if so
  if (verifyOptions(options, 'enablePrettier', hasPrettier)) {
    configs.unshift(configPrettier)
  }
  // Check if JSON should be enabled and add its config
  if (verifyOptions(options, 'enableJson', true)) {
    configs.unshift(...configJson)
  }
  // Check if YAML should be enabled and add its config
  if (verifyOptions(options, 'enableYaml', true)) {
    configs.unshift(configYml)
  }
  // Check if TypeScript support should be enabled and add its config if so
  if (verifyOptions(options, 'enableTypescript', hasTypeScript)) {
    if (isTsOptions(options?.enableTypescript)) {
      configs.unshift(...configTypescript(options.enableTypescript))
    } else {
      configs.unshift(...configTypescript())
    }
  }
  // Check if Adonis support should be enabled and add its config if so
  if (verifyOptions(options, 'enableAdonis', hasAdonisjs)) {
    configs.unshift(configAdonis)
  }
  // Check if Tailwind support should be enabled and add its config if so
  if (verifyOptions(options, 'enableTailwind', hasTailwind)) {
    configs.unshift(configTailwind)
  }

  // Log the enabled features if the eslint cli contains '--debug' arg
  if (argv.includes('--debug')) {
    console.log({
      adonis: printEnabled(options, 'enableAdonis', hasAdonisjs),
      json: printEnabled(options, 'enableJson', true),
      prettier: printEnabled(options, 'enablePrettier', hasPrettier),
      tailwind: printEnabled(options, 'enableTailwind', hasTailwind),
      typescript: printEnabled(options, 'enableTypescript', hasTypeScript),
      yaml: printEnabled(options, 'enableYaml', true),
    })
  }

  // Merge all configurations into a single ESLint configuration object
  return tseslint.config(
    configIgnore,
    configUnicorn,
    configJavascript,
    configJsDoc,
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

/**
 * Options interface for configuring ESLint settings.
 * This interface defines the available options that can be used
 * to enable or disable specific features in the ESLint configuration.
 */
interface Options {
  /** Indicates whether Prettier should be enabled */
  enablePrettier?: boolean
  /** Indicates whether JSON should be enabled */
  enableJson?: boolean
  /** Indicates whether YAML should be enabled */
  enableYaml?: boolean
  /** Indicates whether TypeScript support should be enabled */
  enableTypescript?: boolean | TsOptions
  /** Indicates whether Adonis.js support should be enabled */
  enableAdonis?: boolean
  /** Indicates whether Tailwind CSS support should be enabled */
  enableTailwind?: boolean
}

/**
 * Verifies the presence of a specified option in the provided options object.
 * If the option is present, its value is returned; otherwise, a fallback value is returned.
 *
 * @param options - The options object that may contain the specified key.
 * @param key - The key to check in the options object.
 * @param fallback - The fallback value to return if the key is not present.
 */
function verifyOptions(options: Options | undefined, key: keyof Options, fallback: boolean) {
  // Checks if the specified key exists in the options and returns its value if present
  if (options && key in options) return options[key]
  // Returns the fallback value if the key is not present in options
  return fallback
}

/**
 * Determines whether a specific ESLint feature is enabled or disabled.
 * This function checks the provided parameters against the options
 * and returns a string indicating the status.
 *
 * @param params - The parameters to be passed to the verifyOptions function.
 * @returns A string indicating whether the feature is 'enable' or 'disable'.
 */
function printEnabled(...params: Parameters<typeof verifyOptions>) {
  return verifyOptions(...params) ? 'enable' : 'disable'
}
