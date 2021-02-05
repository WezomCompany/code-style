# @wezom/stylelint-config-scss rules

Table of Contents

[comment]: <> (TOC-START)

1. [at-rule-no-unknown](#at-rule-no-unknown)
1. [function-name-case](#function-name-case)
1. [max-nesting-depth](#max-nesting-depth)
1. [scss/at-rule-no-unknown](#scss/at-rule-no-unknown)
1. [value-keyword-case](#value-keyword-case)

[comment]: <> (TOC-END)

---

## Rules

[comment]: <> (RULES-START)

### at-rule-no-unknown

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### function-name-case

_Value_:

```json
[
	"lower",
	{
		"ignoreFunctions": [
			"ATTR",
			"CALC",
			"CLAMP",
			"CUBIC-BEZIER",
			"HSL",
			"HSLA",
			"LINEAR-GRADIENT",
			"MIN",
			"MAX",
			"PATH",
			"RADIAL-GRADIENT",
			"REPEATING-RADIAL-GRADIENT",
			"REPEATING-LINEAR-GRADIENT",
			"RGB",
			"RGBA",
			"STEPS",
			"VAR",
			"URL"
		]
	}
]
```

_Usage examples_:

👍 OK

```scss
$size: 15px !default;

div {
	// CSS functions ALWAYS
	width: MIN(50rem, 10vw);
	height: MAX(150rem, 10vh);
	// Since these refer to a Sass variable without interpolation, they call
	// Sass's built-in max() function.
	padding: min($size, 10px);
	margin: max($size, 20px);
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### max-nesting-depth

_Value_:

```json
[
	5,
	{
		"ignore": ["pseudo-classes"]
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### scss/at-rule-no-unknown

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### value-keyword-case

_Value_:

```json
[
	"lower",
	{
		"ignoreKeywords": ["NULL"]
	}
]
```

_Usage examples_:

🚧 Avoid

```scss
$value-1: TRUE;
$value-2: FALSE;
$value-3: NUll;
```

👍 OK

```scss
$value-1: true;
$value-2: true;
$value-3: NULL;
```

[comment]: <> (RULES-END)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---
