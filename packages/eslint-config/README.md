# @wezom/eslint-config

_ESLint shareable config._

## Rules

See [full list of extends with code examples](https://github.com/WezomCompany/code-style/blob/main/packages/eslint-config/RULES.md)

## Usage

> We strongly recommend using this config with Prettier together.  
> See [description](https://github.com/WezomCompany/code-style/blob/main/guidelines/tools/prettier.md).

**Install**

```bash
npm i -D eslint babel-eslint @wezom/eslint-config eslint-config-prettier
```

**Setup linter**  
_.eslintrc.json (parser babel-eslint is optional, you can use whatever you want)_

```json
{
	"extends": ["@wezom/eslint-config", "prettier"],
	"parser": "babel-eslint"
}
```

**Add npm scripts**  
_package.json_

```json
{
	"scripts": {
		"test": "npm run prettier && npm run eslint",
		"eslint": "eslint src/**/*.js",
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
