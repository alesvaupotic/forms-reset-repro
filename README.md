## repro repo for forms remote functions

# third edition as development is really quick

As of versions

```
"@sveltejs/kit": "2.46.5",
"svelte": "5.39.11",
```

`set()` now correctly sets the values in fields, open issues remain and must be removed by `validate({ includeUntouched: true })`.

`<select>` with integer option values is not working as expected, as there is no `defaultValue` for it to be set with `.toString()`.
A helper is needed to convert data to strings-only object. I guess converting to string during value assignment wouldn't hurt.
