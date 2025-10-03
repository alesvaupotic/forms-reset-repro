<script>
	import { person_form } from './data.remote';
	let bound_form;
</script>

<h1>Forms demo</h1>

<form {...person_form} bind:this={bound_form}>
	<input type="text" name="fname" id="fname" defaultValue="Aleš" onblur={() => person_form.validate()} />
	<input type="text" name="lname" id="lname" defaultValue="Vaupotič" onblur={() => person_form.validate()} />

	{#if person_form.issues?.fname}
		{#each person_form.issues?.fname as issue}
			<p>{issue.message}</p>
		{/each}
	{/if}
	<p>
		<button>Save</button>
		<button
			type="button"
			onclick={() => {
				bound_form.reset();

				// calling validate() does the trick.
				// comment it out and watch how input and issues stay untouched after reset();
				person_form.validate();
			}}>Reset</button
		>
	</p>
</form>

<pre>INPUT:{JSON.stringify(person_form.input, null, 4)}</pre>
<pre>ISSUES:{JSON.stringify(person_form.issues, null, 4)}</pre>

{#if person_form.result?.success}
	<p>Successfully published!</p>
{/if}
