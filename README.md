<div align="center">
  <img src="https://github.com/Ayato-san/tooling-configs/assets/71392060/f549dfc0-a6d9-48d2-a808-36a61f9f836e">
  <h1>Tooling Configs</h1>
  <p>My custom tooling settings</p>
  <div>
    <a href="https://github.com/Ayato-san/tooling-configs/blob/2.x/LICENSE.md"><img alt="GitHub License" src="https://img.shields.io/github/license/Ayato-san/tooling-configs?style=for-the-badge"></a>
    <a href="https://github.com/Ayato-san/tooling-configs/releases/latest"><img alt="NPM Version" src="https://img.shields.io/github/package-json/version/Ayato-san/tooling-configs?style=for-the-badge"></a>
    <a href="https://github.com/Ayato-san/tooling-configs/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/Ayato-san/tooling-configs?style=for-the-badge"></a>
    <a href="#"><img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/Ayato-san/tooling-configs?style=for-the-badge"></a>
  </div>
</div>

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

### Installation

- with npm

  ```sh
  npm install -D @ayato-san/tooling-configs
  ```

- with pnpm

  ```sh
  pnpm install -D @ayato-san/tooling-configs
  ```

- with yarn
  ```sh
  yarn add -D @ayato-san/tooling-configs
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

use the default config

```json
{
  "prettier": "@ayato-san/tooling-configs/prettier/default"
}
```

use the config with the plugin edgejs

```json
{
  "prettier": "@ayato-san/tooling-configs/prettier/edgejs"
}
```

### Tsconfig

for node (ESM) development

```json
{
  "extends": "@ayato-san/tooling-configs/tsconfig.app"
}
```

for browser client development

```json
{
  "extends": "@ayato-san/tooling-configs/tsconfig.browser"
}
```

for package development

```json
{
  "extends": "@ayato-san/tooling-configs/tsconfig.package"
}
```
