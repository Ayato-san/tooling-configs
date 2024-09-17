import { existsSync, mkdirSync, writeFileSync } from 'fs'

// Prettier configuration object
const config = {
  arrowParens: 'always', // Include parentheses around a sole arrow function parameter
  bracketSameLine: false, // Place closing bracket of JSX elements on a new line
  bracketSpacing: true, // Print spaces between brackets in object literals
  endOfLine: 'lf', // Line ending type
  htmlWhitespaceSensitivity: 'css', // HTML whitespace sensitivity
  insertPragma: false, // Insert a pragma at the top of files
  jsxSingleQuote: false, // Use single quotes in JSX
  printWidth: 100, // Specify the line length that the printer will wrap
  proseWrap: 'preserve', // How to wrap prose
  quoteProps: 'consistent', // Change when properties in objects are quoted
  requirePragma: false, // Require a special comment to format a file
  semi: false, // Print semicolons at the ends of statements
  singleAttributePerLine: false, // Put each attribute on a new line in JSX
  singleQuote: true, // Use single quotes instead of double quotes
  tabWidth: 2, // Number of spaces per indentation level
  trailingComma: 'es5', // Print trailing commas wherever possible in ES5 (objects, arrays, etc.)
  useTabs: false, // Indent with tabs instead of spaces
}

// Create build directory if it doesn't exist
if (!existsSync('./build')) {
  mkdirSync('./build')
}
// Create prettier directory within build if it doesn't exist
if (!existsSync('./build/prettier')) {
  mkdirSync('./build/prettier')
}

// Write the default configuration to a JSON file
writeFileSync('./build/prettier/default.json', JSON.stringify(config))

// Sort plugins by name
const plugins = [{ package: 'prettier-edgejs', name: 'edgejs' }].sort(function (a, b) {
  const keyA = a.name
  const keyB = b.name
  if (keyA < keyB) return -1
  if (keyA > keyB) return 1
  return 0
})

// Generate and write configuration files for each combination of plugins
for (const combination of Array.from(combine(plugins)).flat()) {
  const name = combination.map((m) => m.name).join('-') // Create a name for the combination
  const options = combination.reduce((previous, current) => {
    return { ...previous, ...current.options } // Merge options from all plugins in the combination
  }, {})
  const plugins = combination.map((m) => m.package) // Get the package names of the plugins

  // Write the combined configuration to a JSON file
  writeFileSync(`./build/prettier/${name}.json`, JSON.stringify({ ...config, ...options, plugins }))
}

// Generator function to create combinations of plugins
function* combine(arr) {
  for (let depth = 1; depth <= arr.length; depth++) {
    // Generate combinations of the specified depth
    yield combinations(arr, depth)
  }
}

// Function to generate combinations of a specified depth
function combinations(arr, depth) {
  if (depth === 1) return arr.map((item) => [item]) // Base case for depth 1
  const result = []
  for (let i = 0; i <= arr.length - depth; i++) {
    const head = arr[i] // Current item
    const tailCombinations = combinations(arr.slice(i + 1), depth - 1) // Recursive call for the rest
    for (const tail of tailCombinations) {
      result.push([head, ...tail]) // Combine head with tail
    }
  }
  return result // Return all combinations
}
