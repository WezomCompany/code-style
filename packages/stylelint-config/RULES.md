# @wezom/stylelint-config rules

Table of Contents

[comment]: <> (TOC-START)

1. [at-rule-no-unknown](#at-rule-no-unknown)
1. [block-no-empty](#block-no-empty)
1. [color-no-invalid-hex](#color-no-invalid-hex)
1. [comment-no-empty](#comment-no-empty)
1. [comment-whitespace-inside](#comment-whitespace-inside)
1. [custom-property-empty-line-before](#custom-property-empty-line-before)
1. [declaration-block-single-line-max-declarations](#declaration-block-single-line-max-declarations)
1. [declaration-block-no-duplicate-properties](#declaration-block-no-duplicate-properties)
1. [declaration-block-no-shorthand-property-overrides](#declaration-block-no-shorthand-property-overrides)
1. [declaration-empty-line-before](#declaration-empty-line-before)
1. [declaration-no-important](#declaration-no-important)
1. [font-family-no-duplicate-names](#font-family-no-duplicate-names)
1. [font-family-no-missing-generic-family-keyword](#font-family-no-missing-generic-family-keyword)
1. [function-calc-no-invalid](#function-calc-no-invalid)
1. [function-calc-no-unspaced-operator](#function-calc-no-unspaced-operator)
1. [function-linear-gradient-no-nonstandard-direction](#function-linear-gradient-no-nonstandard-direction)
1. [function-whitespace-after](#function-whitespace-after)
1. [keyframe-declaration-no-important](#keyframe-declaration-no-important)
1. [length-zero-no-unit](#length-zero-no-unit)
1. [media-feature-name-no-unknown](#media-feature-name-no-unknown)
1. [media-feature-range-operator-space-after](#media-feature-range-operator-space-after)
1. [media-feature-range-operator-space-before](#media-feature-range-operator-space-before)
1. [no-descending-specificity](#no-descending-specificity)
1. [no-duplicate-at-import-rules](#no-duplicate-at-import-rules)
1. [no-duplicate-selectors](#no-duplicate-selectors)
1. [no-empty-source](#no-empty-source)
1. [no-invalid-double-slash-comments](#no-invalid-double-slash-comments)
1. [property-no-unknown](#property-no-unknown)
1. [selector-attribute-operator-space-after](#selector-attribute-operator-space-after)
1. [selector-attribute-operator-space-before](#selector-attribute-operator-space-before)
1. [selector-max-id](#selector-max-id)
1. [selector-max-universal](#selector-max-universal)
1. [selector-pseudo-class-no-unknown](#selector-pseudo-class-no-unknown)
1. [selector-pseudo-element-colon-notation](#selector-pseudo-element-colon-notation)
1. [selector-pseudo-element-no-unknown](#selector-pseudo-element-no-unknown)
1. [selector-type-case](#selector-type-case)
1. [selector-type-no-unknown](#selector-type-no-unknown)
1. [string-no-newline](#string-no-newline)
1. [value-keyword-case](#value-keyword-case)
1. [unit-no-unknown](#unit-no-unknown)

[comment]: <> (TOC-END)

---

## Rules

[comment]: <> (RULES-START)

### at-rule-no-unknown

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### block-no-empty

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### color-no-invalid-hex

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### comment-no-empty

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### comment-whitespace-inside

_Value_: `"always"`

_Usage examples_:

🚧 Avoid

```css
/*comment*/

/*comment */

/* comment*/
```

👍 Use

```css
/* comment */
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### custom-property-empty-line-before

_Value_:

```json
[
	"always",
	{
		"except": ["after-custom-property", "first-nested"],
		"ignore": ["after-comment", "inside-single-line-block"]
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### declaration-block-single-line-max-declarations

_Value_: `2`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### declaration-block-no-duplicate-properties

_Value_:

```json
[
	true,
	{
		"ignore": ["consecutive-duplicates-with-different-values"]
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### declaration-block-no-shorthand-property-overrides

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### declaration-empty-line-before

_Value_:

```json
[
	"always",
	{
		"except": ["after-declaration", "first-nested"],
		"ignore": ["after-comment", "inside-single-line-block"]
	}
]
```

_Usage examples_:

🚧 Avoid

```css
b {
	--bottom: 15px;
	bottom: var(--bottom);
	top: 5px;
}
```

👍 Use

```css
a {
	bottom: 15px;
	top: 5px;
}

b {
	--bottom: 15px;

	bottom: var(--bottom);
	top: 5px;
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### declaration-no-important

_Value_: `true`

> When an `important` rule is used on a style declaration, this declaration overrides any other declarations. Although technically `!important` has nothing to do with specificity, it interacts directly with it. Using `!important`, however, is **bad practice** and should be avoided because it makes debugging more difficult by breaking the natural [cascading](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) in your stylesheets. When two conflicting declarations with the `!important` rule are applied to the same element, the declaration with a greater specificity will be applied.
>
> -- <cite>MDN Web Docs. [How is specificity calculated?][how_is_specificity_calculated]</cite>

[how_is_specificity_calculated]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

_Usage examples_:

🚧 Avoid

```css
.foo {
	color: red !important;
}

.baz {
	opacity: 1 !important;
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### font-family-no-duplicate-names

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### font-family-no-missing-generic-family-keyword

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### function-calc-no-invalid

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### function-calc-no-unspaced-operator

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### function-linear-gradient-no-nonstandard-direction

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### function-whitespace-after

_Value_: `"always"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### keyframe-declaration-no-important

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### length-zero-no-unit

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### media-feature-name-no-unknown

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### media-feature-range-operator-space-after

_Value_: `"always"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### media-feature-range-operator-space-before

_Value_: `"always"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-descending-specificity

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-duplicate-at-import-rules

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-duplicate-selectors

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-empty-source

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### no-invalid-double-slash-comments

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### property-no-unknown

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### selector-attribute-operator-space-after

_Value_: `"never"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### selector-attribute-operator-space-before

_Value_: `"never"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### selector-max-id

_Value_: `0`

_Usage examples_:

🚧 Avoid

```css
#foo {
	color: yellow;
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### selector-max-universal

_Value_: `0`

_Usage examples_:

🚧 Avoid

```css
* {
	color: blue;
}

.foo ~ * {
	color: yellow;
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### selector-pseudo-class-no-unknown

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### selector-pseudo-element-colon-notation

_Value_: `"double"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### selector-pseudo-element-no-unknown

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### selector-type-case

_Value_: `"lower"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### selector-type-no-unknown

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### string-no-newline

_Value_: `true`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### value-keyword-case

_Value_: `"lower"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### unit-no-unknown

_Value_: `true`

[comment]: <> (RULES-END)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---
