import type { Linter } from 'eslint'

/**
 * Renames a plugin in the ESLint configuration.
 *
 * @param {Linter.Config} config - The ESLint configuration object.
 * @param {string} oldName - The current name of the plugin to be renamed.
 * @param {string} newName - The new name for the plugin.
 */
export default function renamePlugin(config: Linter.Config, oldName: string, newName: string) {
  // Check if the config has plugins and if the oldName exists in the plugins
  if (config.plugins && config.plugins[oldName]) {
    // Assign the plugin from oldName to newName
    config.plugins[newName] = config.plugins[oldName]
    // Remove the oldName plugin from the config
    delete config.plugins[oldName]
  }
}
