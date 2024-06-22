<p align="center">
  <img src="https://github.com/Ayato-san/tooling-configs/assets/71392060/7b7b294a-46d7-450e-afb4-49b4ae94a4b1">
</p>

## Features

- Designed to work with Prettier, Typescript, JSX, Node, AdonisJS out of the box
- Lint json files ( TSConfig, package.json )
- Super easy to use ( one line of code )

### Install

```bash
npm i -D @ayato-san/tooling-configs
```

### Eslint

```js
// eslint.config.js
import { configure } from '@ayato-san/tooling-configs/eslint'

export default await configure()
// Your config here
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
