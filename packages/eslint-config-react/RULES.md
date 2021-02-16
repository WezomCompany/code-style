# @wezom/eslint-config-react rules

> These rules are in addition to the rules of the [@wezom/eslint-config](https://github.com/WezomCompany/code-style/blob/main/packages/eslint-config/RULES.md#readme)

Table of Contents

[comment]: <> (TOC-START)

1. [import/no-amd](#importno-amd)
1. [import/no-anonymous-default-export](#importno-anonymous-default-export)
1. [react/forbid-foreign-prop-types](#reactforbid-foreign-prop-types)
1. [react/jsx-no-comment-textnodes](#reactjsx-no-comment-textnodes)
1. [react/jsx-no-duplicate-props](#reactjsx-no-duplicate-props)
1. [react/jsx-no-target-blank](#reactjsx-no-target-blank)
1. [react/jsx-no-undef](#reactjsx-no-undef)
1. [react/jsx-pascal-case](#reactjsx-pascal-case)
1. [react/jsx-uses-react](#reactjsx-uses-react)
1. [react/jsx-uses-vars](#reactjsx-uses-vars)
1. [react/no-danger-with-children](#reactno-danger-with-children)
1. [react/no-direct-mutation-state](#reactno-direct-mutation-state)
1. [react/no-is-mounted](#reactno-is-mounted)
1. [react/no-typos](#reactno-typos)
1. [react/require-render-return](#reactrequire-render-return)
1. [react/style-prop-object](#reactstyle-prop-object)
1. [jsx-a11y/alt-text](#jsx-a11yalt-text)
1. [jsx-a11y/anchor-has-content](#jsx-a11yanchor-has-content)
1. [jsx-a11y/anchor-is-valid](#jsx-a11yanchor-is-valid)
1. [jsx-a11y/aria-activedescendant-has-tabindex](#jsx-a11yaria-activedescendant-has-tabindex)
1. [jsx-a11y/aria-props](#jsx-a11yaria-props)
1. [jsx-a11y/aria-proptypes](#jsx-a11yaria-proptypes)
1. [jsx-a11y/aria-role](#jsx-a11yaria-role)
1. [jsx-a11y/aria-unsupported-elements](#jsx-a11yaria-unsupported-elements)
1. [jsx-a11y/heading-has-content](#jsx-a11yheading-has-content)
1. [jsx-a11y/iframe-has-title](#jsx-a11yiframe-has-title)
1. [jsx-a11y/img-redundant-alt](#jsx-a11yimg-redundant-alt)
1. [jsx-a11y/no-access-key](#jsx-a11yno-access-key)
1. [jsx-a11y/no-distracting-elements](#jsx-a11yno-distracting-elements)
1. [jsx-a11y/no-redundant-roles](#jsx-a11yno-redundant-roles)
1. [jsx-a11y/role-has-required-aria-props](#jsx-a11yrole-has-required-aria-props)
1. [jsx-a11y/role-supports-aria-props](#jsx-a11yrole-supports-aria-props)
1. [jsx-a11y/scope](#jsx-a11yscope)
1. [react-hooks/rules-of-hooks](#react-hooksrules-of-hooks)
1. [react-hooks/exhaustive-deps](#react-hooksexhaustive-deps)

[comment]: <> (TOC-END)

---

## Rules

[comment]: <> (RULES-START)

### import/no-amd

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### import/no-anonymous-default-export

_Value_: `"error"`

_Usage examples_:

🚧 Avoid

```jsx
import React from 'react';

export default function () {
	return <div>Hello</div>;
}
```

👍 Use

```jsx
import React from 'react';

export default function Hello() {
	return <div>Hello</div>;
}
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/forbid-foreign-prop-types

_Value_:

```json
[
	"error",
	{
		"allowInPropTypes": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/jsx-no-comment-textnodes

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/jsx-no-duplicate-props

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/jsx-no-target-blank

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/jsx-no-undef

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/jsx-pascal-case

_Value_:

```json
[
	"error",
	{
		"allowAllCaps": true,
		"ignore": []
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/jsx-uses-react

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/jsx-uses-vars

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/no-danger-with-children

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/no-direct-mutation-state

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/no-is-mounted

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/no-typos

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/require-render-return

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react/style-prop-object

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/alt-text

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/anchor-has-content

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/anchor-is-valid

_Value_:

```json
[
	"error",
	{
		"aspects": ["noHref", "invalidHref"]
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/aria-activedescendant-has-tabindex

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/aria-props

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/aria-proptypes

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/aria-role

_Value_:

```json
[
	"error",
	{
		"ignoreNonDOM": true
	}
]
```

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/aria-unsupported-elements

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/heading-has-content

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/iframe-has-title

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/img-redundant-alt

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/no-access-key

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/no-distracting-elements

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/no-redundant-roles

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/role-has-required-aria-props

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/role-supports-aria-props

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### jsx-a11y/scope

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react-hooks/rules-of-hooks

_Value_: `"error"`

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

### react-hooks/exhaustive-deps

_Value_: `"error"`

[comment]: <> (RULES-END)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---
