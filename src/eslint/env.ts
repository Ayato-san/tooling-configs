import { isPackageExists } from 'local-pkg'

const hasTypeScript = isPackageExists('typescript')
const hasTailwind = isPackageExists('tailwindcss') || isPackageExists('@tailwindcss/typography')
const hasAdonisjs = isPackageExists('@adonisjs/core')

export { hasAdonisjs, hasTailwind, hasTypeScript }
