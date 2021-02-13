# @wezom/eslint-config-ts

_ESLint shareable config for TypeScript based on the [@wezom/eslint-config](https://github.com/WezomCompany/code-style/blob/main/packages/eslint-config/README.md#readme)_

## Rules

See [full list of extends with code examples](https://github.com/WezomCompany/code-style/blob/main/packages/eslint-config-ts/RULES.md)

## Usage

> We strongly recommend using this config with Prettier together.  
> See [description](https://github.com/WezomCompany/code-style/blob/main/guidelines/tools/prettier.md).

**Install**

```bash
# base packages
npm i -D eslint babel-eslint eslint-config-prettier
# wezom configs
npm i -D @wezom/eslint-config @wezom/eslint-config-ts
```

**Setup linter**  
_.eslintrc.json_

```json
{
	"root": true,
	"extends": ["@wezom/eslint-config", "eslint-config-prettier"],
	"parser": "babel-eslint",
	"overrides": [
		{
			"files": ["*.ts"],
			"extends": ["@wezom/eslint-config-ts", "eslint-config-prettier"],
			"parserOptions": {
				"project": "./tsconfig.json"
			}
		}
	]
}
```

**Add npm scripts**  
_package.json_

```json
{
	"scripts": {
		"test": "npm run prettier && npm run eslint",
		"eslint": "eslint src/**/*.{js,ts}",
		"eslint:autofix": "npm run eslint -- --fix",
		"prettier": "prettier src/ --check",
		"prettier:autofix": "npm run prettier -- --write"
	}
}
```

**Test your files**

```bash
npm run test
```
