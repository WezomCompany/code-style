> When an `important` rule is used on a style declaration, this declaration overrides any other declarations. Although technically `!important` has nothing to do with specificity, it interacts directly with it. Using `!important`, however, is **bad practice** and should be avoided because it makes debugging more difficult by breaking the natural [cascading](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) in your stylesheets. When two conflicting declarations with the `!important` rule are applied to the same element, the declaration with a greater specificity will be applied.
>
> -- <cite>MDN Web Docs. [How is specificity calculated?][how_is_specificity_calculated]</cite>

[how_is_specificity_calculated]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
