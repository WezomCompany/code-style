# @wezom/eslint-config-ts rules

> These rules are in addition to the rules of the [@wezom/eslint-config](https://github.com/WezomCompany/code-style/blob/main/packages/eslint-config/RULES.md#readme) and the [@typescript-eslint/recommended with @typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)

Table of Contents

[comment]: <> (TOC-START)

1. [no-unused-vars](#no-unused-vars)
1. [no-use-before-define](#no-use-before-define)
1. [@typescript-eslint/explicit-function-return-type](#@typescript-eslint/explicit-function-return-type)
1. [@typescript-eslint/explicit-module-boundary-types](#@typescript-eslint/explicit-module-boundary-types)
1. [@typescript-eslint/naming-convention](#@typescript-eslint/naming-convention)
1. [@typescript-eslint/no-empty-interface](#@typescript-eslint/no-empty-interface)
1. [@typescript-eslint/no-explicit-any](#@typescript-eslint/no-explicit-any)
1. [@typescript-eslint/no-var-requires](#@typescript-eslint/no-var-requires)
1. [@typescript-eslint/no-unused-vars](#@typescript-eslint/no-unused-vars)
1. [@typescript-eslint/no-use-before-define](#@typescript-eslint/no-use-before-define)

[comment]: <> (TOC-END)

---

## Rules

[comment]: <> (RULES-START)

### no-unused-vars

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-use-before-define

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
		"selector": "default",
		"format": ["camelCase"]
	},
	{
		"selector": "variable",
		"format": ["camelCase", "UPPER_CASE"],
		"leadingUnderscore": "allow"
	},
	{
		"selector": "variable",
		"modifiers": ["destructured"],
		"format": null
	},
	{
		"selector": "function",
		"format": ["camelCase", "PascalCase"],
		"leadingUnderscore": "allow"
	},
	{
		"selector": "parameter",
		"format": ["camelCase"],
		"leadingUnderscore": "allow"
	},
	{
		"selector": "memberLike",
		"modifiers": ["private"],
		"format": ["camelCase"],
		"leadingUnderscore": "require"
	},
	{
		"selector": "typeLike",
		"format": ["PascalCase"]
	},
	{
		"selector": "enumMember",
		"format": ["camelCase", "UPPER_CASE"]
	}
]
```

Enforcing naming conventions helps keep the codebase consistent, and reduces overhead when thinking about how to name a variable. Additionally, a well-designed style guide can help communicate intent, such as by enforcing all private properties begin with an `_`, and all global-level constants are written in `UPPER_CASE`.

_Usage examples_:

👍 OK

```ts
// Variables

const myVar = 5;
const _myTempVar = 6;
const MY_CONST = 7;

// Variables destructured

const obj = {};
const { no_camel_case_destructured_var, camelCased } = obj;

// Function parameter

function foo(parameterName: boolean, _allowedUnderscore: boolean): void {
	console.log(parameterName);
	console.log(_allowedUnderscore);
}

// memberLike

const obj2 = {
	objProp: true,
	objMethod(): void {
		console.log(this.objProp);
	}
};

class FooBar {
	memberProp1: string;
	memberProp2: string;

	private _memberProp3 = 'xXx';

	constructor(argValue1: string, argValue2: string) {
		this.memberProp1 = argValue1;
		this.memberProp2 = argValue2;
	}

	get memberProp(): string {
		return `${this.memberProp1} ${this.memberProp2}`;
	}

	set memberProp(value: string) {
		console.log(value);
	}

	printMemberProp(): void {
		console.log(this.memberProp);
	}

	private _printPrivateMember(): void {
		console.log(this._memberProp3);
	}

	static instanceTypeGuard(instance: any): instance is FooBar {
		return instance instanceof FooBar;
	}
}

// typeLike

interface MyInterface {
	myProp: boolean;
	myMethod(): void;
}

type MyType = string;

abstract class MyClass {}

// enumMember

enum MyList {
	X,
	Y,
	Z
}

enum MySeasons {
	mySeason1 = 'xXx',
	mySeason2 = 'yYy',
	mySeason3 = 'zZz'
}
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

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### @typescript-eslint/no-use-before-define

_Value_: `"error"`

[comment]: <> (RULES-END)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---
