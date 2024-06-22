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

### Add script for package.json

### Prettier

```json
{
  "prettier": "@ayato-san/tooling-configs/prettier"
}
```

### Tsconfig

for node development

```json
{
  "extends": "@ayato-san/tooling-configs/tsconfig/tsconfig.node.json"
}
```

for browser client development

```json
{
  "extends": "@ayato-san/tooling-configs/tsconfig/tsconfig.browser.json"
}
```
