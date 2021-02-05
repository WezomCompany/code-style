# @wezom/eslint-config-ts rules

Table of Contents

[comment]: <> (TOC-START)

1. [accessor-pairs](#accessor-pairs)
1. [array-callback-return](#array-callback-return)
1. [camelcase](#camelcase)
1. [constructor-super](#constructor-super)
1. [default-case-last](#default-case-last)
1. [dot-notation](#dot-notation)
1. [eqeqeq](#eqeqeq)
1. [lines-between-class-members](#lines-between-class-members)
1. [new-cap](#new-cap)
1. [no-array-constructor](#no-array-constructor)
1. [no-async-promise-executor](#no-async-promise-executor)
1. [no-caller](#no-caller)
1. [no-case-declarations](#no-case-declarations)
1. [no-class-assign](#no-class-assign)
1. [no-compare-neg-zero](#no-compare-neg-zero)
1. [no-cond-assign](#no-cond-assign)
1. [no-const-assign](#no-const-assign)
1. [no-constant-condition](#no-constant-condition)
1. [no-control-regex](#no-control-regex)
1. [no-debugger](#no-debugger)
1. [no-delete-var](#no-delete-var)
1. [no-dupe-args](#no-dupe-args)
1. [no-dupe-class-members](#no-dupe-class-members)
1. [no-dupe-keys](#no-dupe-keys)
1. [no-duplicate-case](#no-duplicate-case)
1. [no-extra-boolean-cast](#no-extra-boolean-cast)
1. [no-empty](#no-empty)
1. [no-empty-character-class](#no-empty-character-class)
1. [no-empty-pattern](#no-empty-pattern)
1. [no-eval](#no-eval)
1. [no-ex-assign](#no-ex-assign)
1. [no-extend-native](#no-extend-native)
1. [no-extra-bind](#no-extra-bind)
1. [no-fallthrough](#no-fallthrough)
1. [no-func-assign](#no-func-assign)
1. [no-global-assign](#no-global-assign)
1. [no-implied-eval](#no-implied-eval)
1. [no-import-assign](#no-import-assign)
1. [no-invalid-regexp](#no-invalid-regexp)
1. [no-irregular-whitespace](#no-irregular-whitespace)
1. [no-iterator](#no-iterator)
1. [no-labels](#no-labels)
1. [no-lone-blocks](#no-lone-blocks)
1. [no-loss-of-precision](#no-loss-of-precision)
1. [no-misleading-character-class](#no-misleading-character-class)
1. [no-useless-catch](#no-useless-catch)
1. [no-multi-str](#no-multi-str)
1. [no-new](#no-new)
1. [no-new-func](#no-new-func)
1. [no-new-object](#no-new-object)
1. [no-new-symbol](#no-new-symbol)
1. [no-new-wrappers](#no-new-wrappers)
1. [no-obj-calls](#no-obj-calls)
1. [no-octal](#no-octal)
1. [no-octal-escape](#no-octal-escape)
1. [no-proto](#no-proto)
1. [no-prototype-builtins](#no-prototype-builtins)
1. [no-redeclare](#no-redeclare)
1. [no-regex-spaces](#no-regex-spaces)
1. [no-return-assign](#no-return-assign)
1. [no-self-assign](#no-self-assign)
1. [no-self-compare](#no-self-compare)
1. [no-sequences](#no-sequences)
1. [no-shadow-restricted-names](#no-shadow-restricted-names)
1. [no-sparse-arrays](#no-sparse-arrays)
1. [no-template-curly-in-string](#no-template-curly-in-string)
1. [no-this-before-super](#no-this-before-super)
1. [no-throw-literal](#no-throw-literal)
1. [no-undef](#no-undef)
1. [no-undef-init](#no-undef-init)
1. [no-unmodified-loop-condition](#no-unmodified-loop-condition)
1. [no-unneeded-ternary](#no-unneeded-ternary)
1. [no-unreachable](#no-unreachable)
1. [no-unreachable-loop](#no-unreachable-loop)
1. [no-unsafe-finally](#no-unsafe-finally)
1. [no-unsafe-negation](#no-unsafe-negation)
1. [no-unused-expressions](#no-unused-expressions)
1. [no-unused-vars](#no-unused-vars)
1. [no-use-before-define](#no-use-before-define)
1. [no-useless-backreference](#no-useless-backreference)
1. [no-useless-call](#no-useless-call)
1. [no-useless-computed-key](#no-useless-computed-key)
1. [no-useless-constructor](#no-useless-constructor)
1. [no-useless-escape](#no-useless-escape)
1. [no-useless-rename](#no-useless-rename)
1. [no-useless-return](#no-useless-return)
1. [no-var](#no-var)
1. [no-void](#no-void)
1. [no-with](#no-with)
1. [one-var](#one-var)
1. [prefer-const](#prefer-const)
1. [prefer-promise-reject-errors](#prefer-promise-reject-errors)
1. [prefer-regex-literals](#prefer-regex-literals)
1. [spaced-comment](#spaced-comment)
1. [symbol-description](#symbol-description)
1. [use-isnan](#use-isnan)
1. [valid-typeof](#valid-typeof)
1. [yoda](#yoda)
1. [import/export](#import/export)
1. [import/first](#import/first)
1. [import/namespace](#import/namespace)
1. [import/no-absolute-path](#import/no-absolute-path)
1. [import/no-duplicates](#import/no-duplicates)
1. [import/no-named-default](#import/no-named-default)
1. [import/no-unresolved](#import/no-unresolved)
1. [import/no-webpack-loader-syntax](#import/no-webpack-loader-syntax)
1. [node/handle-callback-err](#node/handle-callback-err)
1. [node/no-callback-literal](#node/no-callback-literal)
1. [node/no-deprecated-api](#node/no-deprecated-api)
1. [node/no-exports-assign](#node/no-exports-assign)
1. [node/no-new-require](#node/no-new-require)
1. [node/no-path-concat](#node/no-path-concat)
1. [node/process-exit-as-throw](#node/process-exit-as-throw)
1. [promise/param-names](#promise/param-names)

[comment]: <> (TOC-END)

---

## Rules

[comment]: <> (RULES-START)

### accessor-pairs

_Value_:

```json
[
	"error",
	{
		"setWithoutGet": true,
		"enforceForClassMembers": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### array-callback-return

_Value_:

```json
[
	"error",
	{
		"allowImplicit": false,
		"checkForEach": false
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### camelcase

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### constructor-super

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### default-case-last

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### dot-notation

_Value_:

```json
[
	"error",
	{
		"allowKeywords": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### eqeqeq

_Value_:

```json
[
	"error",
	"always",
	{
		"null": "ignore"
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### lines-between-class-members

_Value_:

```json
[
	"error",
	"always",
	{
		"exceptAfterSingleLine": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### new-cap

_Value_:

```json
[
	"error",
	{
		"newIsCap": true,
		"capIsNew": false,
		"properties": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-array-constructor

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-async-promise-executor

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-caller

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-case-declarations

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-class-assign

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-compare-neg-zero

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-cond-assign

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-const-assign

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-constant-condition

_Value_:

```json
[
	"error",
	{
		"checkLoops": false
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-control-regex

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-debugger

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-delete-var

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-dupe-args

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-dupe-class-members

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-dupe-keys

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-duplicate-case

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-extra-boolean-cast

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-empty

_Value_:

```json
[
	"error",
	{
		"allowEmptyCatch": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-empty-character-class

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-empty-pattern

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-eval

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-ex-assign

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-extend-native

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-extra-bind

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-fallthrough

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-func-assign

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-global-assign

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-implied-eval

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-import-assign

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-invalid-regexp

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-irregular-whitespace

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-iterator

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-labels

_Value_:

```json
[
	"error",
	{
		"allowLoop": false,
		"allowSwitch": false
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-lone-blocks

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-loss-of-precision

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-misleading-character-class

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-useless-catch

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-multi-str

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-new

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-new-func

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-new-object

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-new-symbol

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-new-wrappers

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-obj-calls

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-octal

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-octal-escape

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-proto

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-prototype-builtins

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-redeclare

_Value_:

```json
[
	"error",
	{
		"builtinGlobals": false
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-regex-spaces

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-return-assign

_Value_:

```json
["error", "except-parens"]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-self-assign

_Value_:

```json
[
	"error",
	{
		"props": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-self-compare

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-sequences

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-shadow-restricted-names

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-sparse-arrays

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-template-curly-in-string

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-this-before-super

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-throw-literal

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-undef

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-undef-init

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-unmodified-loop-condition

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-unneeded-ternary

_Value_:

```json
[
	"error",
	{
		"defaultAssignment": false
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-unreachable

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-unreachable-loop

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-unsafe-finally

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-unsafe-negation

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-unused-expressions

_Value_:

```json
[
	"error",
	{
		"allowShortCircuit": true,
		"allowTernary": true,
		"allowTaggedTemplates": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-unused-vars

_Value_:

```json
[
	"error",
	{
		"args": "none",
		"caughtErrors": "none",
		"ignoreRestSiblings": true,
		"vars": "all"
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-use-before-define

_Value_:

```json
[
	"error",
	{
		"functions": false,
		"classes": false,
		"variables": false
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-useless-backreference

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-useless-call

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-useless-computed-key

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-useless-constructor

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-useless-escape

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-useless-rename

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-useless-return

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-var

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-void

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-with

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### one-var

_Value_:

```json
[
	"error",
	{
		"initialized": "never"
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### prefer-const

_Value_:

```json
[
	"error",
	{
		"destructuring": "all"
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### prefer-promise-reject-errors

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### prefer-regex-literals

_Value_:

```json
[
	"error",
	{
		"disallowRedundantWrapping": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### spaced-comment

_Value_:

```json
[
	"error",
	"always",
	{
		"line": {
			"markers": ["*package", "!", "/", ",", "="]
		},
		"block": {
			"balanced": true,
			"markers": ["*package", "!", ",", ":", "::", "flow-include"],
			"exceptions": ["*"]
		}
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### symbol-description

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### use-isnan

_Value_:

```json
[
	"error",
	{
		"enforceForSwitchCase": true,
		"enforceForIndexOf": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### valid-typeof

_Value_:

```json
[
	"error",
	{
		"requireStringLiterals": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### yoda

_Value_:

```json
["error", "never"]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### import/export

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### import/first

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### import/namespace

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### import/no-absolute-path

_Value_:

```json
[
	"error",
	{
		"esmodule": true,
		"commonjs": true,
		"amd": false
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### import/no-duplicates

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### import/no-named-default

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### import/no-unresolved

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### import/no-webpack-loader-syntax

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### node/handle-callback-err

_Value_:

```json
["error", "^(err|error)$"]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### node/no-callback-literal

_Value_: `"error"`

_Usage examples_:

🚧 Avoid

```js
cb('this is an error string');
cb({ a: 1 });
callback(0);
```

👍 OK

```js
cb(undefined);
cb(null, 5);
callback(new Error('some error'));
callback(someVariable);
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### node/no-deprecated-api

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### node/no-exports-assign

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### node/no-new-require

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### node/no-path-concat

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### node/process-exit-as-throw

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### promise/param-names

_Value_: `"error"`

[comment]: <> (RULES-END)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---
