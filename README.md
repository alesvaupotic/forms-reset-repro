# repro repo for forms remote functions

As of versions

```
"@sveltejs/kit": "2.46.3",
"svelte": "5.39.11",
```

`set()` after a form is first rendered is not setting the field values. If fields are set before, it renders them.

`<select>` with integer option values is not working as expected, as there is no `defaultValue` with `.toString()` to be set on it. I need a special helpers function to convert data to strings-only object. I guess converting to string during value assignement wouldn't hurt.
