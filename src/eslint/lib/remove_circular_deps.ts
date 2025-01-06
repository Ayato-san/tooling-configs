import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'

type Config = Linter.Config | TSESLint.FlatConfig.Config

/**
 * Removes circular dependencies from the given ESLint configuration.
 *
 * This function checks if the specified plugin exists in the configuration and clears its configs.
 * If the plugin has a default configuration, it also clears that.
 *
 * @param config - The ESLint configuration object, which can be of type Linter.Config or TSESLint.FlatConfig.Config.
 * @param name - The name of the plugin whose circular dependencies are to be removed.
 */
export default function removeCircularDeps(config: Config, name: string) {
  // Check if the specified plugin exists in the configuration
  if (config.plugins && config.plugins[name] && 'configs' in config.plugins[name]) {
    // Clear the plugin's configs
    config.plugins[name].configs = {}

    // Check if the plugin has a default configuration and clear it if it exists
    if ('default' in config.plugins[name] && config.plugins[name].default) {
      // @ts-expect-error only available for some plugins
      config.plugins[name].default.configs = {}
    }
  }
}
