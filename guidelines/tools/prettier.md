# Prettier

[🔙 Table of Contents](../index.md)

---

We are using Prettier (https://prettier.io/) for convenient code formatting.

We set up code style configs with the belief that they will be used in conjunction with the Prettier.

So we recommend that you install and use the Prettier configurations for Stylelint and Eslint as an addition to our configurations. More info about integrations you can read in the [Prettier docs](https://prettier.io/docs/en/integrating-with-linters.html)

## Stylelint example

```bash
npm i -D @wezom/stylelint-config stylelint-config-prettier
```

```json5
// .stylelintrc.json
{
  "extends": [
    "@wezom/stylelint-config", 
    "stylelint-config-prettier" // must be the last
  ]
}
```

## Eslint example

```bash
npm i -D @wezom/eslint-config eslint-config-prettier
```

```json5
// .eslintrc.json
{
  "extends": [
    "@wezom/eslint-config", 
    "eslint-config-prettier" // must be the last
  ]
}
```

--- 

[🔙 Table of Contents](../index.md) | [🔝 Top](#markdown-header-)

---
