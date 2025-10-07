<script lang="ts">
	import { createPost } from './data.remote';

	const post = {
		title: 'Existing title',
		operatingSystem: 2,
		content: 'Existing content',
	};

	createPost.fields.set(post);
</script>

<form {...createPost} onchange={() => createPost.validate()}>
	<div>
		<label for="title">Title:</label>
		<input {...createPost.fields.title.as('text')} defaultValue={post.title} id="title" />
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
		<textarea name={'content'} defaultValue={post.content} id="content"></textarea>
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
			onclick={() => {
				document.forms[0].reset();
				// createPost.fields.set(post);
				// createPost.validate({ includeUntouched: true });
			}}
		>
			Reset!
		</button>
	</p>
</form>

<div>
	<pre>values:{JSON.stringify(createPost.fields.value(), null, 4)}</pre>
	<pre>issues: {JSON.stringify(createPost.fields.allIssues(), null, 4)}</pre>
	<pre>valid_data: {JSON.stringify(createPost.result?.valid_data, null, 4)}</pre>
	<pre>original post:{JSON.stringify(post, null, 4)}</pre>
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
