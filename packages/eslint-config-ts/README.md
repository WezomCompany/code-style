# @wezom/eslint-config-ts

_ESLint shareable config for TypeScript based on the [@wezom/eslint-config](https://github.com/WezomCompany/code-style/blob/main/packages/eslint-config/README.md#readme)_

## Rules

See [full list of extends with code examples](https://github.com/WezomCompany/code-style/blob/main/packages/eslint-config-ts/RULES.md)

## Usage

> We strongly recommend using this config with Prettier together.  
> See [description](https://github.com/WezomCompany/code-style/blob/main/guidelines/tools/prettier.md).

**Install**

```bash
npm i -D eslint @wezom/eslint-config-ts eslint-config-prettier
```

**Setup linter**  
_.eslintrc.json_

```json
{
	"extends": ["@wezom/eslint-config-ts", "prettier"]
}
```

**Add npm scripts**
_package.json_

```json
{
	"scripts": {
		"test": "npm run prettier && npm run eslint",
		"eslint": "eslint src/**/*.ts",
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
