# @wezom/stylelint-config rules

Table of Contents

[comment]: <> (TOC-START)

1. [at-rule-no-unknown](#at-rule-no-unknown)
1. [block-no-empty](#block-no-empty)
1. [declaration-colon-newline-after](#declaration-colon-newline-after)
1. [declaration-no-important](#declaration-no-important)
1. [indentation](#indentation)
1. [selector-max-id](#selector-max-id)
1. [selector-max-universal](#selector-max-universal)

[comment]: <> (TOC-END)

---

## Rules

[comment]: <> (RULES-START)


### at-rule-no-unknown

Value: `true`

Usage examples:

🚧 Avoid

```css
@unknown {}
```

👍 OK

```css
@charset "UTF-8";

@media print {
	@page :first {
		margin: 2cm;
	}
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---


### block-no-empty

Value: `true`

Usage examples:

🚧 Avoid

```css
a {}

b { }

@media print {
}
```

👍 OK

```css
a {
	/* foo */
}

@media print {
	a {
		color: pink;
	}
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---


### declaration-colon-newline-after

Rule disabled

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---


### declaration-no-important

Value: `true`

Usage examples:



[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---


### indentation

Value: `"tab"`

Usage examples:

🚧 Avoid

```css
.block {
  display: block;
}
```

👍 OK

```css
.block {
	display: block;
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---


### selector-max-id

Value: `0`

Usage examples:



[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---


### selector-max-universal

Rule disabled

[comment]: <> (RULES-END)

