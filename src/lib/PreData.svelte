<script>
	let { name, data } = $props();
</script>

<pre>{name}:{JSON.stringify(data, null, 4)}</pre>
