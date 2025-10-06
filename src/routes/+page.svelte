<script lang="ts">
	import { person_form } from './data.remote';
	let bound_form;
</script>

<h1>Forms demo</h1>

<form {...person_form} bind:this={bound_form} onchange={() => person_form.validate()}>
	<input type="text" name={person_form.fields.fname.name()} defaultValue="Aleš" />
	{#each person_form.fields.fname.issues() as issue}
		<p class="px-3 font-semibold text-reepolee">{@html issue.message}</p>
	{/each}
	<br />

	<input type="text" name={person_form.fields.lname.name()} defaultValue="Vaupotič" />
	{#each person_form.fields.lname.issues() as issue}
		<p class="px-3 font-semibold text-reepolee">{@html issue.message}</p>
	{/each}

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

<!-- <pre>FNAME:{JSON.stringify(person_form.fields.fname.value(), null, 4)}</pre>
<pre>--- ISSUES:{JSON.stringify(person_form.fields.fname.issues(), null, 4)}</pre>
<pre>LNAME:{JSON.stringify(person_form.fields.lname.value(), null, 4)}</pre>
<pre>--- ISSUES:{JSON.stringify(person_form.fields.lname.issues(), null, 4)}</pre> -->

{#if person_form.result?.success}
	<p>Successfully published!</p>
{/if}
