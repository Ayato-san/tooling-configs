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
    'error', // Enforce consistent type imports
    { prefer: 'type-imports', disallowTypeAnnotations: false },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error', // Disallow use of variables before they are defined
    { functions: false, classes: false, variables: true },
  ],
  '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }], // Allow ts-ignore with description
  '@typescript-eslint/prefer-ts-expect-error': 'error', // Prefer ts-expect-error over ts-ignore
  'no-useless-constructor': 'off', // Disable no-useless-constructor rule
  'no-unused-vars': 'off', // Disable no-unused-vars rule
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ], // Disallow unused variables, ignoring those starting with _
  'no-redeclare': 'off', // Disable no-redeclare rule
  '@typescript-eslint/no-redeclare': 'error', // Disallow variable redeclaration
  'no-use-before-define': 'off', // Disable no-use-before-define rule
  'no-dupe-class-members': 'off', // Disable no-dupe-class-members rule
  '@typescript-eslint/no-dupe-class-members': 'error', // Disallow duplicate class members
  'no-loss-of-precision': 'off', // Disable no-loss-of-precision rule
  '@typescript-eslint/no-loss-of-precision': 'error', // Disallow loss of precision
  '@typescript-eslint/naming-convention': [
    'error', // Enforce naming conventions
    { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
    { selector: 'typeLike', format: ['PascalCase'] },
    { selector: 'class', format: ['PascalCase'] },
    { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
  ],
  // Off rules
  '@typescript-eslint/consistent-type-definitions': 'off', // Disable consistent type definitions rule
  '@typescript-eslint/consistent-indexed-object-style': 'off', // Disable consistent indexed object style rule
  '@typescript-eslint/explicit-function-return-type': 'off', // Disable explicit function return type rule
  '@typescript-eslint/no-explicit-any': 'off', // Disable no-explicit-any rule
  '@typescript-eslint/parameter-properties': 'off', // Disable parameter properties rule
  '@typescript-eslint/no-empty-interface': 'off', // Disable no-empty-interface rule
  '@typescript-eslint/ban-ts-ignore': 'off', // Disable ban on ts-ignore
  '@typescript-eslint/no-empty-function': 'off', // Disable no-empty-function rule
  '@typescript-eslint/no-non-null-assertion': 'off', // Disable no-non-null-assertion rule
  '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit module boundary types rule
  '@typescript-eslint/no-namespace': 'off', // Disable no-namespace rule
  '@typescript-eslint/triple-slash-reference': 'off', // Disable triple-slash-reference rule
  '@typescript-eslint/no-empty-object-type': 'off', // Disable no-empty-object-type rule
  '@typescript-eslint/no-floating-promises': 'off', // Disable no-floating-promises rule
  '@typescript-eslint/no-misused-promises': 'off', // Disable no-misused-promises rule
  '@typescript-eslint/no-unsafe-return': 'off', // Disable no-unsafe-return rule
  '@typescript-eslint/unbound-method': 'off', // Allow unbound methods
  '@typescript-eslint/no-unused-expressions': 'off', // Allow unused expressions
  '@typescript-eslint/no-unsafe-assignment': 'off', // Allow unsafe assignments
  '@typescript-eslint/no-unsafe-argument': 'off', // Allow unsafe arguments
  '@typescript-eslint/no-unsafe-member-access': 'off', // Allow unsafe member access
  // Type-aware rules
  'dot-notation': 'off', // Disable dot-notation rule
  'no-implied-eval': 'off', // Disable no-implied-eval rule
  '@typescript-eslint/await-thenable': 'error', // Enforce await on thenable
  '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }], // Enforce dot notation
  '@typescript-eslint/no-for-in-array': 'error', // Disallow for-in loops over arrays
  '@typescript-eslint/no-implied-eval': 'error', // Disallow implied eval
  '@typescript-eslint/no-unnecessary-type-assertion': 'error', // Disallow unnecessary type assertions
  '@typescript-eslint/no-unsafe-call': 'error', // Disallow unsafe calls
  '@typescript-eslint/restrict-plus-operands': 'error', // Restrict the use of + operator
  '@typescript-eslint/restrict-template-expressions': 'error', // Restrict template expressions
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
