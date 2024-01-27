# Recap of 'Conditional Rendering'

1. In React, you control branching logic with JavaScript
2. You can return an JSX expression conditionally with an `if` statement
3. You can conditionally save some JSX to a variable and then include it inside other JSX by using the `curly braces`.
4. In JSX, `{cond ? <A /> : <B />}` means “if cond, render `A component`, otherwise `B component`”.
5. In JSX, `{cond && <A />}` means “if cond, render `A component`, otherwise nothing”.
6. The shortcuts are common, but you don’t have to use them if you prefer `plain if`.
