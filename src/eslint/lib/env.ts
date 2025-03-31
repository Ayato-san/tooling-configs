import { existsSync } from 'fs'
import { isPackageListedSync } from 'local-pkg'

/** Check if .gitignore file exists */
const hasGitIgnore = existsSync('.gitignore')
/** Check if Prettier package is installed */
const hasPrettier = isPackageListedSync('prettier')
/** Check if TypeScript package is installed */
const hasTypeScript = isPackageListedSync('typescript')
/** Check if Tailwind CSS is installed */
const hasTailwind = isPackageListedSync('tailwindcss')
/** Check if AdonisJS core package is installed */
const hasAdonisjs = isPackageListedSync('@adonisjs/core')
/** Check if Vue package is installed */
const hasVue = isPackageListedSync('vue')

// Export the results of the checks
export { hasAdonisjs, hasGitIgnore, hasPrettier, hasTailwind, hasTypeScript, hasVue }
