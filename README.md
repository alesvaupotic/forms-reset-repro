# repro repo for forms remote functions

As of versions

```
"@sveltejs/kit": "2.46.2",
"svelte": "5.39.10",
```

`<select>` with integer option values is not working as expected, as there is no `defaultValue` with `.toString()` to be set on it.
