import { type ConfigWithExtends } from 'typescript-eslint'

/** ESLint configuration object for Javascript's Rules */
const config: ConfigWithExtends = {
  name: 'Javascript', // Name of the configuration
  languageOptions: {
    sourceType: 'module', // Specifies the source type
    ecmaVersion: 2022, // Specifies the ECMAScript version
    parserOptions: {
      ecmaFeatures: { jsx: true }, // Enable JSX parsing
      ecmaVersion: 2022, // Specifies the ECMAScript version for parser
      sourceType: 'module', // Specifies the source type for parser
    },
  },
  linterOptions: { reportUnusedDisableDirectives: true }, // Report unused disable directives
  rules: {
    'prefer-const': 'error', // Enforce the use of const for variables that are never reassigned
    'no-unused-vars': 'warn', // Warn on unused variables
    'no-constant-condition': 'warn', // Warn on constant conditions in if statements
    'no-debugger': 'error', // Disallow the use of debugger
    'no-cond-assign': ['error', 'always'], // Disallow assignment in conditional expressions
    'no-array-constructor': 'error', // Disallow the use of Array constructor
    'no-unreachable': 'error', // Disallow unreachable code after return, throw, continue, and break statements
    'one-var': ['error', 'never'], // Disallow the use of multiple var statements
    'eqeqeq': ['error', 'always'], // Require the use of === and !==
    'no-caller': 'error', // Disallow arguments.caller or arguments.callee
    'no-control-regex': 'error', // Disallow control characters in regular expressions
    'no-duplicate-case': 'error', // Disallow duplicate case labels
    'no-eval': 'error', // Disallow the use of eval()
    'no-ex-assign': 'error', // Disallow assigning to the exception in catch clauses
    'no-extra-boolean-cast': 'error', // Disallow unnecessary boolean casts
    'no-fallthrough': 'error', // Disallow fallthrough of case statements
    'no-inner-declarations': 'error', // Disallow variable declarations from the outer scope
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }], // Disallow invalid regular expressions
    'no-proto': 'error', // Disallow the use of __proto__
    'no-regex-spaces': 'error', // Disallow multiple spaces in regular expressions
    'no-self-compare': 'error', // Disallow comparisons to self
    'no-sparse-arrays': 'error', // Disallow sparse arrays
    'object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }], // Enforce the use of shorthand syntax for object literals
    'no-unsafe-negation': 'error', // Disallow negating the left operand of relational operators
    'no-new-wrappers': 'error', // Disallow creating new instances of String, Number, and Boolean
    'no-self-assign': 'error', // Disallow assignments that can be confused with comparisons
    'no-this-before-super': 'error', // Disallow this/ super before calling super() in constructors
    'no-else-return': 'error', // Disallow else after return in if statements
    'no-with': 'error', // Disallow with statements
    'no-undef-init': 'error', // Disallow initializing variables to undefined
    'no-unsafe-finally': 'error', // Disallow control flow statements in finally blocks
    'use-isnan': 'error', // Require the use of isNaN() to check for NaN
    'valid-typeof': ['error', { requireStringLiterals: true }], // Enforce valid typeof expressions
    'curly': ['error', 'all'], // Require curly braces for all control statements
    'yoda': 'error', // Disallow Yoda conditions
    'capitalized-comments': [
      'error',
      'always',
      {
        line: {
          ignorePattern: '.*', // Ignore comments that match the pattern
          ignoreInlineComments: true, // Ignore inline comments
          ignoreConsecutiveComments: true, // Ignore consecutive comments
        },
      },
    ],
  },
}

export default config
