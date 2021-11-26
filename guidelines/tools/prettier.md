# Prettier

[🔙 Table of Contents](../index.md)

---

We are using Prettier (https://prettier.io/) for convenient code formatting.

We set up code style configs with the belief that they will be used in conjunction with the Prettier.

So we recommend that you install and use the Prettier configurations for Stylelint and Eslint as an addition to our
configurations. More info about integrations you can read in
the [Prettier docs](https://prettier.io/docs/en/integrating-with-linters.html)

## Recommended config

```json
{
	"arrowParens": "always",
	"bracketSpacing": true,
	"bracketSameLine": false,
	"printWidth": 120,
	"semi": true,
	"singleQuote": true,
	"trailingComma": "none",
	"tabWidth": 4,
	"useTabs": true
}
```

## Stylelint example

```bash
npm i -D @wezom/stylelint-config stylelint-config-prettier
```

```json
{
	"extends": ["@wezom/stylelint-config", "stylelint-config-prettier"]
}
```

## Eslint example

```bash
npm i -D @wezom/eslint-config eslint-config-prettier
```

```json
{
	"extends": ["@wezom/eslint-config", "prettier"]
}
```

---

[🔙 Table of Contents](../index.md) | [🔝 Top](#readme)

---
