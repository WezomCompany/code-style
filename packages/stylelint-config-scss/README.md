# @wezom/stylelint-config-scss

_Stylelint shareable config for Sass SCSS syntax_

Config based on [@wezom/stylelint-config-scss](https://github.com/WezomCompany/code-style/tree/main/packages/stylelint-config#readme) and extended by some rules

## Rules

See [full list of extends with code examples](https://github.com/WezomCompany/code-style/blob/main/packages/stylelint-config-scss/RULES.md)

## Usage

> We strongly recommend using this config with Prettier together.  
> See [description](https://github.com/WezomCompany/code-style/blob/main/guidelines/tools/prettier.md).

**Install**

```bash
npm i -D stylelint @wezom/stylelint-config-scss stylelint-config-prettier
```

**Setup linter**  
_.stylelintrc.json_

```json
{
	"extends": ["@wezom/stylelint-config-scss", "stylelint-config-prettier"]
}
```

**Add npm scripts**
_package.json_

```json
{
	"scripts": {
	    "test": "npm run prettier && npm run stylelint",
		"stylelint": "stylelint src/**/*.css",
		"stylelint:autofix": "npm run stylelint -- --fix",
        "prettier": "prettier src/ --check",
		"prettier:autofix": "npm run prettier -- --write"
	}
}
```

**Test your files**

```bash
npm run test
```
