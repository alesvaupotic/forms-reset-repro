# repro repo for forms remote functions

As of versions

```
"@sveltejs/kit": "2.43.2",
"svelte": "5.39.5",
```

`form().input` is not reset and `form().issues` are not re-evalutated once `<form>` is `reset()`.

Calling `form().validate()` after reset solves the problem.
