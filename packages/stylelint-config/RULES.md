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

_Value_: `true`

> When an `important` rule is used on a style declaration, this declaration overrides any other declarations. Although technically `!important` has nothing to do with specificity, it interacts directly with it. Using `!important`, however, is **bad practice** and should be avoided because it makes debugging more difficult by breaking the natural [cascading](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) in your stylesheets. When two conflicting declarations with the `!important` rule are applied to the same element, the declaration with a greater specificity will be applied.
> 
> -- <cite>MDN Web Docs. [How is specificity calculated?][How_is_specificity_calculated]</cite>

[How_is_specificity_calculated]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

_Usage examples_:

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

_Value_: `"tab"`

_Usage examples_:

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

[comment]: <> (RULES-END)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

