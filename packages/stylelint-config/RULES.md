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

---


### block-no-empty

Value: `true`

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

---


### declaration-colon-newline-after

Rule disabled

---


### declaration-no-important

Value: `true`



---


### indentation

Value: `"tab"`

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

---


### selector-max-id

Value: `0`



---


### selector-max-universal

Rule disabled

[comment]: <> (RULES-END)

