# @wezom/eslint-config-ts

_ESLint shareable config based on [@wezom/eslint-config](https://github.com/WezomCompany/code-style/blob/main/packages/eslint-config/README.md#readme) and [@typescript-eslint/recommended with @typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)_

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