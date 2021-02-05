# @wezom/eslint-config-ts rules

> These rules are in addition to the rules of the [@wezom/eslint-config](https://github.com/WezomCompany/code-style/blob/main/packages/eslint-config/RULES.md#readme)

Table of Contents

[comment]: <> (TOC-START)

1. [no-unused-vars](#no-unused-vars)
1. [@typescript-eslint/explicit-function-return-type](#@typescript-eslint/explicit-function-return-type)
1. [@typescript-eslint/explicit-module-boundary-types](#@typescript-eslint/explicit-module-boundary-types)
1. [@typescript-eslint/naming-convention](#@typescript-eslint/naming-convention)
1. [@typescript-eslint/no-empty-interface](#@typescript-eslint/no-empty-interface)
1. [@typescript-eslint/no-explicit-any](#@typescript-eslint/no-explicit-any)
1. [@typescript-eslint/no-var-requires](#@typescript-eslint/no-var-requires)
1. [@typescript-eslint/no-unused-vars](#@typescript-eslint/no-unused-vars)

[comment]: <> (TOC-END)

---

## Rules

[comment]: <> (RULES-START)

### no-unused-vars

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### @typescript-eslint/explicit-function-return-type

_Value_: `"error"`

Explicit types for function return values makes it clear to any calling code what type is returned. This ensures that the return value is assigned to a variable of the correct type; or in the case where there is no return value, that the calling code doesn't try to use the undefined value when it shouldn't.

_Usage examples_:

🚧 Avoid

```ts
// Should indicate that no value is returned (void)
function test() {
	const x = 1 + 1;
}

// Should indicate that a number is returned
const fn = function () {
	return 1;
};

// Should indicate that a string is returned
const arrowFn = () => 'test';

class Test {
	// Should indicate that no value is returned (void)
	method() {
		const x = 1 + 1;
	}
}
```

👍 OK

```ts
// No return value should be expected (void)
function test(): void {
	const x = 1 + 1;
}

// A return value of type number
const fn = function (): number {
	return 1;
};

// A return value of type string
const arrowFn = (): string => 'test';

class Test {
	// No return value should be expected (void)
	method(): void {
		const x = 1 + 1;
	}
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### @typescript-eslint/explicit-module-boundary-types

_Value_: `"error"`

> Adding type annotations, especially return types, can save the compiler a lot of work. In part, this is because named types tend to be more compact than anonymous types (which the compiler might infer), which reduces the amount of time spent reading and writing declaration files (e.g. for incremental builds). Type inference is very convenient, so there's no need to do this universally - however, it can be a useful thing to try if you've identified a slow section of your code.
>
> <cite>-- GitHub [microsoft / TypeScript / Performance][microsoft_typescript_performance]</cite>

[microsoft_typescript_performance]: https://github.com/microsoft/TypeScript/wiki/Performance

Explicit types for function return values and arguments makes it clear to any calling code what is the module boundary's input and output.

_Usage examples_:

🚧 Avoid

```ts
// Should indicate that no value is returned (void)
export function test() {
	const x = 1 + 1;
}

// Should indicate that a number is returned
export default function () {
	return 1;
}

// Should indicate that a string is returned
export const arrowFn1 = () => 'test';

// All arguments should be typed
export const arrowFn2 = (arg): string => `test ${arg}`;
export const arrowFn3 = (arg: any): string => `test ${arg}`;

export class Test {
	// Should indicate that no value is returned (void)
	method() {
		const x = 1 + 1;
	}
}
```

👍 OK

```ts
// Function is not exported
function test() {
	const x = 1 + 1;
}

// A return value of type number
export const fn = function (): number {
	return 1;
};

// A return value of type string
export const arrowFn1 = (arg: string): string => `test ${arg}`;

// All arguments should be typed
export const arrowFn2 = (arg: string): string => `test ${arg}`;
export const arrowFn3 = (arg: unknown): string => `test ${arg}`;

// Class is not exported
class Test {
	method() {
		const x = 1 + 1;
	}
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### @typescript-eslint/naming-convention

_Value_:

```json
[
	"error",
	{
		"selector": "property",
		"modifiers": ["private"],
		"format": ["camelCase"],
		"leadingUnderscore": "require"
	},
	{
		"selector": "parameterProperty",
		"format": ["camelCase"]
	},
	{
		"selector": "parameterProperty",
		"modifiers": ["private"],
		"format": ["camelCase"],
		"leadingUnderscore": "require"
	},
	{
		"selector": "method",
		"format": ["camelCase"]
	},
	{
		"selector": "method",
		"modifiers": ["private"],
		"format": ["camelCase"],
		"leadingUnderscore": "require"
	},
	{
		"selector": "accessor",
		"format": ["camelCase"]
	},
	{
		"selector": "accessor",
		"modifiers": ["private"],
		"format": ["camelCase"],
		"leadingUnderscore": "require"
	},
	{
		"selector": "enumMember",
		"format": ["PascalCase"]
	},
	{
		"selector": "variable",
		"format": ["camelCase", "UPPER_CASE", "PascalCase"],
		"leadingUnderscore": "allow"
	},
	{
		"selector": "function",
		"format": ["camelCase", "PascalCase"],
		"leadingUnderscore": "allow"
	},
	{
		"selector": "parameter",
		"format": ["camelCase", "PascalCase"],
		"leadingUnderscore": "allow"
	},
	{
		"selector": "class",
		"format": ["PascalCase"]
	},
	{
		"selector": "class",
		"modifiers": ["abstract"],
		"format": ["PascalCase"],
		"prefix": ["Abstract"]
	},
	{
		"selector": "interface",
		"format": ["PascalCase"]
	},
	{
		"selector": "typeAlias",
		"format": ["PascalCase"]
	},
	{
		"selector": "typeParameter",
		"format": ["PascalCase"]
	},
	{
		"selector": "enum",
		"format": ["PascalCase"],
		"custom": {
			"regex": "[a-z]List$",
			"match": true
		}
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### @typescript-eslint/no-empty-interface

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### @typescript-eslint/no-explicit-any

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### @typescript-eslint/no-var-requires

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### @typescript-eslint/no-unused-vars

_Value_:

```json
[
	"error",
	{
		"vars": "all",
		"args": "none",
		"caughtErrors": "all"
	}
]
```

[comment]: <> (RULES-END)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---
