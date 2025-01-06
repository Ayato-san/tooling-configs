import type { Linter } from 'eslint'
import jsoncPlugin from 'eslint-plugin-jsonc'
import type { ConfigWithExtends } from 'typescript-eslint'

import { GLOB_JSON } from '../globs.js'
import flattenArrayObject from '../lib/flatten_array_object.js'
import removeCircularDeps from '../lib/remove_circular_deps.js'

/** ESLint configuration object for Json's Rules */
const config: Linter.Config = flattenArrayObject(jsoncPlugin.configs['flat/recommended-with-jsonc'])
removeCircularDeps(config, 'jsonc') // Remove circular dependencies from the config

config.name = 'JSON' // Set the name of the config
config.files = GLOB_JSON // Specify the files this config applies to
config.rules = {
  'jsonc/no-bigint-literals': 'error', // Disallow BigInt literals
  'jsonc/no-binary-expression': 'error', // Disallow binary expressions
  'jsonc/no-binary-numeric-literals': 'error', // Disallow binary numeric literals
  'jsonc/no-dupe-keys': 'error', // Disallow duplicate keys
  'jsonc/no-escape-sequence-in-identifier': 'error', // Disallow escape sequences in identifiers
  'jsonc/no-floating-decimal': 'error', // Disallow floating decimal points
  'jsonc/no-hexadecimal-numeric-literals': 'error', // Disallow hexadecimal numeric literals
  'jsonc/no-infinity': 'error', // Disallow Infinity
  'jsonc/no-multi-str': 'error', // Disallow multi-line strings
  'jsonc/no-nan': 'error', // Disallow NaN
  'jsonc/no-number-props': 'error', // Disallow number properties
  'jsonc/no-numeric-separators': 'error', // Disallow numeric separators
  'jsonc/no-octal': 'error', // Disallow octal literals
  'jsonc/no-octal-escape': 'error', // Disallow octal escape sequences
  'jsonc/no-octal-numeric-literals': 'error', // Disallow octal numeric literals
  'jsonc/no-parenthesized': 'error', // Disallow parenthesized expressions
  'jsonc/no-plus-sign': 'error', // Disallow plus sign
  'jsonc/no-regexp-literals': 'error', // Disallow regular expression literals
  'jsonc/no-sparse-arrays': 'error', // Disallow sparse arrays
  'jsonc/no-template-literals': 'error', // Disallow template literals
  'jsonc/no-undefined-value': 'error', // Disallow undefined values
  'jsonc/no-unicode-codepoint-escapes': 'error', // Disallow Unicode codepoint escapes
  'jsonc/no-useless-escape': 'error', // Disallow useless escape sequences
  'jsonc/space-unary-ops': 'error', // Enforce spacing around unary operators
  'jsonc/valid-json-number': 'error', // Ensure valid JSON numbers
  'jsonc/vue-custom-block/no-parsing-error': 'error', // Disallow parsing errors in Vue custom blocks
}

/** ESLint configuration object for Package.json's Rules */
const sortPackageJson: ConfigWithExtends = {
  name: 'Sort package.json',
  files: ['**/package.json'], // Targeting package.json files
  rules: {
    'jsonc/sort-array-values': [
      'error',
      {
        order: { type: 'asc' }, // Sort array values in ascending order
        pathPattern: '^files$', // Apply to 'files' key
      },
    ],
    'jsonc/sort-keys': [
      'error',
      {
        order: [
          'publisher',
          'name',
          'displayName',
          'type',
          'version',
          'private',
          'packageManager',
          'description',
          'author',
          'license',
          'funding',
          'homepage',
          'repository',
          'bugs',
          'keywords',
          'categories',
          'sideEffects',
          'exports',
          'main',
          'module',
          'unpkg',
          'jsdelivr',
          'types',
          'typesVersions',
          'bin',
          'icon',
          'files',
          'engines',
          'activationEvents',
          'contributes',
          'scripts',
          'peerDependencies',
          'peerDependenciesMeta',
          'dependencies',
          'optionalDependencies',
          'devDependencies',
          'pnpm',
          'overrides',
          'resolutions',
          'husky',
          'simple-git-hooks',
          'lint-staged',
          'eslintConfig',
        ],
        pathPattern: '^$',
      },
      {
        order: { type: 'asc' },
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
      },
      {
        order: { type: 'asc' },
        pathPattern: '^resolutions$',
      },
      {
        order: { type: 'asc' },
        pathPattern: '^pnpm.overrides$',
      },
      {
        order: ['types', 'import', 'require', 'default'],
        pathPattern: '^exports.*$',
      },
    ],
  },
}

const sortTsConfig: ConfigWithExtends = {
  name: 'Sort tsconfig.json',
  files: ['**/tsconfig.json', '**/tsconfig.*.json'], // Targeting tsconfig files
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        order: ['extends', 'compilerOptions', 'references', 'files', 'include', 'exclude'], // Order of keys
        pathPattern: '^$', // Apply to root level
      },
      {
        order: [
          /* Projects */
          'incremental',
          'composite',
          'tsBuildInfoFile',
          'disableSourceOfProjectReferenceRedirect',
          'disableSolutionSearching',
          'disableReferencedProjectLoad',
          /* Language and Environment */
          'target',
          'jsx',
          'jsxFactory',
          'jsxFragmentFactory',
          'jsxImportSource',
          'lib',
          'moduleDetection',
          'noLib',
          'reactNamespace',
          'useDefineForClassFields',
          'emitDecoratorMetadata',
          'experimentalDecorators',
          /* Modules */
          'baseUrl',
          'rootDir',
          'rootDirs',
          'customConditions',
          'module',
          'moduleResolution',
          'moduleSuffixes',
          'noResolve',
          'paths',
          'resolveJsonModule',
          'resolvePackageJsonExports',
          'resolvePackageJsonImports',
          'typeRoots',
          'types',
          'allowArbitraryExtensions',
          'allowImportingTsExtensions',
          'allowUmdGlobalAccess',
          /* JavaScript Support */
          'allowJs',
          'checkJs',
          'maxNodeModuleJsDepth',
          /* Type Checking */
          'strict',
          'strictBindCallApply',
          'strictFunctionTypes',
          'strictNullChecks',
          'strictPropertyInitialization',
          'allowUnreachableCode',
          'allowUnusedLabels',
          'alwaysStrict',
          'exactOptionalPropertyTypes',
          'noFallthroughCasesInSwitch',
          'noImplicitAny',
          'noImplicitOverride',
          'noImplicitReturns',
          'noImplicitThis',
          'noPropertyAccessFromIndexSignature',
          'noUncheckedIndexedAccess',
          'noUnusedLocals',
          'noUnusedParameters',
          'useUnknownInCatchVariables',
          /* Emit */
          'declaration',
          'declarationDir',
          'declarationMap',
          'downlevelIteration',
          'emitBOM',
          'emitDeclarationOnly',
          'importHelpers',
          'importsNotUsedAsValues',
          'inlineSourceMap',
          'inlineSources',
          'mapRoot',
          'newLine',
          'noEmit',
          'noEmitHelpers',
          'noEmitOnError',
          'outDir',
          'outFile',
          'preserveConstEnums',
          'preserveValueImports',
          'removeComments',
          'sourceMap',
          'sourceRoot',
          'stripInternal',
          /* Interop Constraints */
          'allowSyntheticDefaultImports',
          'esModuleInterop',
          'forceConsistentCasingInFileNames',
          'isolatedModules',
          'preserveSymlinks',
          'verbatimModuleSyntax',
          /* Completeness */
          'skipDefaultLibCheck',
          'skipLibCheck',
        ],
        pathPattern: '^compilerOptions$',
      },
    ],
  },
}

export default [config, sortPackageJson, sortTsConfig] as ConfigWithExtends[]
