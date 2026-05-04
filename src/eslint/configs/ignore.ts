import type { Linter } from 'eslint'

// Importing the glob patterns to exclude from linting
import { GLOB_EXCLUDE } from '../globs.js'

/** Defining the ESLint configuration with the specified ignores */
const ignores: Linter.Config = { ignores: GLOB_EXCLUDE }

export default ignores
