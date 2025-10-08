<script lang="ts">
	import PreData from '$lib/PreData.svelte';
	import { createPost } from './data.remote';

	const post = {
		title: 'Existing title',
		operatingSystem: '2',
		content: 'Existing content',
	};

	// case 1:
	// do not set values on start
	// and form values will be empty as they should
	// then click "Set from db" button
	// which should load data into fields.values but does not update the actual form inputs.
	// first change of inputs fills-in all of them
	//
	// createPost.fields.set(post);
</script>

<form
	{...createPost.enhance(async ({ form, data, submit }) => {
		console.log('submitted data:', data);
		await submit();
	})}
	onchange={() => createPost.validate()}
>
	<div>
		<label for="title">Title:</label>
		<input {...createPost.fields.title.as('text')} id="title" />

		{#if createPost.fields.title.issues()}
			{#each createPost.fields.title.issues() as issue}
				<p class="issue">{issue.message}</p>
			{/each}
		{/if}
	</div>

	<div>
		<label for="os">My Operating System is:</label>
		<select {...createPost.fields.operatingSystem.as('select')} id="os">
			<option value="0">windows</option>
			<option value="1">mac</option>
			<option value="2">linux</option>
		</select>
	</div>

	<div>
		<label for="content">Write your post: </label>
		<textarea {...createPost.fields.content.as('text')} id="content"></textarea>

		{#if createPost.fields.content.issues()}
			{#each createPost.fields.content.issues() as issue}
				<p class="issue">{issue.message}</p>
			{/each}
		{/if}
	</div>

	<p>
		<button>Publish!</button>

		<button
			type="button"
			onclick={async () => {
				console.log('resetting:', post);
				document.forms[0].reset();
			}}
		>
			form reset
		</button>

		<button
			type="button"
			onclick={() => {
				console.log('setting:', post);
				createPost.fields.set(post);
			}}
		>
			Set from db
		</button>

		<button
			type="button"
			onclick={async () => {
				console.log('full setting:', post);

				// case 3:
				// delete values from all inputs to get issues and then press this one
				// this is way hacky and still does not set fields.values
				// just gets rid of potential fields.issues
				// on second press or if the following commands are repeated twice

				createPost.fields.set(post);
				await createPost.validate({ includeUntouched: true });
				// createPost.fields.set(post);
				// await createPost.validate({ includeUntouched: true });
			}}
		>
			Complicated Re-set
		</button>
	</p>
</form>

<div>
	<PreData name="post" data={post} />
	<PreData name="fields.values" data={createPost.fields.value()} />
	<PreData name="fields.allIssues" data={createPost.fields.allIssues()} />
	<PreData name="valid_data after submit" data={createPost.result?.valid_data} />
</div>

<style>
	div {
		display: grid;
		gap: 4px;
	}

	form {
		display: grid;
		max-width: 50ch;
		gap: 1rem;
	}
</style>
