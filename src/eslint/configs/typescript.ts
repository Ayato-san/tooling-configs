import { cwd } from 'node:process'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'

import { GLOB_TS } from '../globs.js'
import { hasVue } from '../lib/env.js'
import flattenArrayObject from '../lib/flatten-array-object.js'
import removeCircularDeps from '../lib/remove-circular-deps.js'

/** ESLint configuration object for Typescript's Rules */
const baseConfig = flattenArrayObject(tseslint.configs.recommended)
removeCircularDeps(baseConfig, '@typescript-eslint') // Remove circular dependencies
baseConfig.name = 'Typescript' // Set the name of the config
baseConfig.files = GLOB_TS // Specify the files to lint

// Include Vue files if Vue is detected
if (hasVue) {
  baseConfig.files = [...baseConfig.files, '**/*.vue']
}

// Configure parser options for TypeScript
if (baseConfig.languageOptions) {
  baseConfig.languageOptions.parserOptions = {
    extraFileExtensions: hasVue ? ['.vue'] : [],
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
    project: true,
    tsconfigRootDir: cwd(),
  }
}

// Define ESLint rules for TypeScript
baseConfig.rules = {
  ...baseConfig.rules,
  ...flattenArrayObject(tseslint.configs.strict).rules,
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', disallowTypeAnnotations: false },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false, classes: false, variables: true },
  ],
  '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  'no-useless-constructor': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  'no-use-before-define': 'off',
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
    { selector: 'typeLike', format: ['PascalCase'] },
    { selector: 'class', format: ['PascalCase'] },
    { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
  ],
  // Off rules
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/parameter-properties': 'off',
  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/ban-ts-ignore': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/triple-slash-reference': 'off',
  // Type-aware rules
  'dot-notation': 'off',
  'no-implied-eval': 'off',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': 'error',
  '@typescript-eslint/unbound-method': 'error',
}

/** ESLint configuration object for Typescript files's Rules */
const configFile: ConfigWithExtends = {
  name: 'Typescript Files', // Name of the config for TypeScript files
  files: GLOB_TS, // Specify the files to lint
  rules: {
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
  },
}

/** ESLint configuration object for Typescript tests's Rules */
const configTests: ConfigWithExtends = {
  name: 'Typescript Tests', // Name of the config for TypeScript tests
  files: ['**/*.{test,spec}.ts?(x)'], // Specify test files to lint
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off', // Allow ts-ignore comments
    '@typescript-eslint/prefer-ts-expect-error': 'off', // Disable prefer-ts-expect-error rule
  },
}

export default [baseConfig, configFile, configTests]
