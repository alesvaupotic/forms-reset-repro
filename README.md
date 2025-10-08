## repro repo for forms remote functions

# second edition as development is really quick

As of versions

```
"@sveltejs/kit": "2.46.4",
"svelte": "5.39.11",
```

`set()` after a form is first rendered is not setting the field values. If fields are set before, it renders them.

`<select>` with integer option values is not working as expected, as there is no `defaultValue` for it to be set with `.toString()`.
A helper is needed to convert data to strings-only object. I guess converting to string during value assignment wouldn't hurt.
