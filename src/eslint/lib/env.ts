import { existsSync } from 'fs'
import { isPackageExists } from 'local-pkg'

/** Check if .gitignore file exists */
const hasGitIgnore = existsSync('.gitignore')
/** Check if Prettier package is installed */
const hasPrettier = isPackageExists('prettier')
/** Check if TypeScript package is installed */
const hasTypeScript = isPackageExists('typescript')
/** Check if Tailwind CSS is installed */
const hasTailwind = isPackageExists('tailwindcss')
/** Check if AdonisJS core package is installed */
const hasAdonisjs = isPackageExists('@adonisjs/core')
/** Check if Vue package is installed */
const hasVue = isPackageExists('vue') || isPackageExists('nuxt') || isPackageExists('vitepress')
/** Check if Unocss package is installed */
const hasUnocss =
  isPackageExists('unocss') || isPackageExists('@unocss/webpack') || isPackageExists('@unocss/nuxt')

// Export the results of the checks
export { hasAdonisjs, hasGitIgnore, hasPrettier, hasTailwind, hasTypeScript, hasUnocss, hasVue }
