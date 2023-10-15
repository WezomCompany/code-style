> Adding type annotations, especially return types, can save the compiler a lot of work. In part, this is because named types tend to be more compact than anonymous types (which the compiler might infer), which reduces the amount of time spent reading and writing declaration files (e.g. for incremental builds). Type inference is very convenient, so there's no need to do this universally - however, it can be a useful thing to try if you've identified a slow section of your code.
>
> <cite>-- GitHub [microsoft / TypeScript / Performance][microsoft_typescript_performance]</cite>

[microsoft_typescript_performance]: https://github.com/microsoft/TypeScript/wiki/Performance

Explicit types for function return values and arguments makes it clear to any calling code what is the module boundary's input and output.
