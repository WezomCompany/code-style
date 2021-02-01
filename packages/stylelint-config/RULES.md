# @wezom/stylelint-config rules

Table of Contents

[comment]: <> (TOC-START)

1. [declaration-no-important](#declaration-no-important)
1. [indentation](#indentation)
1. [selector-max-id](#selector-max-id)
1. [selector-max-universal](#selector-max-universal)

[comment]: <> (TOC-END)

---

## Rules

[comment]: <> (RULES-START)


### declaration-no-important

Value: `true`

Usage examples:

🚧 Avoid

```css
.foo {
	color: red !important;
}

.baz {
	opacity: 1 ! important;
}
```


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

🚧 Avoid

```css
#foo {
    color: yellow;
}
```


[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---


### selector-max-universal

Value: `0`

Usage examples:

🚧 Avoid

```css
* {
    color: blue;
}

.foo ~ * {
    color: yellow;
}
```


[comment]: <> (RULES-END)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

