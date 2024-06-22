<p align="center">
  <img src="https://github.com/Ayato-san/tooling-configs/assets/71392060/f549dfc0-a6d9-48d2-a808-36a61f9f836e">

</p>

## Features

- Designed to work with Prettier, Typescript, JSX, Node, AdonisJS out of the box
- Lint json files ( TSConfig, package.json )
- Super easy to use ( one line of code )
- [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- Use .gitignore as ignore file

## Usage

> [!IMPORTANT]
>
> - This config is using the new [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
> - New/updated rules will not be considered as breaking changes. Only API changes will be considered as breaking changes.

### Install

```bash
npm i -D @ayato-san/tooling-configs
```

### Eslint

```js
// eslint.config.js esm
import { configure } from '@ayato-san/tooling-configs/eslint'

export default await configure({
  // Your config here
})
```

```js
// eslint.config.js commonjs
const { configure } = require('@ayato-san/tooling-configs/eslint')

module.exports = configure({
  // Your config here
})
```

> You don't need `.eslintignore` as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Prettier

```json
{
  "prettier": "@ayato-san/tooling-configs/prettier"
}
```

### Tsconfig

for node (ESM) development

```json
{
  "extends": "@ayato-san/tooling-configs/tsconfig/tsconfig.app"
}
```

for browser client development

```json
{
  "extends": "@ayato-san/tooling-configs/tsconfig/tsconfig.browser"
}
```

for package development

```json
{
  "extends": "@ayato-san/tooling-configs/tsconfig/tsconfig.package"
}
```
