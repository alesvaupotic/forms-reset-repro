<script lang="ts">
	import PreData from '$lib/PreData.svelte';
	import { createPost } from './data.remote';
	import { schema } from './schema';

	const post = {
		title: 'Existing title',
		operatingSystem: '2',
		editor: '',
		content: 'Existing content',
	};

	const editors = [
		{ os_id: '0', name: 'vscode' },
		{ os_id: '1', name: 'vscode' },
		{ os_id: '2', name: 'vscode' },
		{ os_id: '0', name: 'sublime' },
		{ os_id: '0', name: 'zed' },
		{ os_id: '0', name: 'notepad' },
		{ os_id: '2', name: 'textmate' },
	];

	const options_editors = $derived(editors.filter((e) => e.os_id === createPost.fields.operatingSystem.value()));

	// case 1:
	// do not set values on start
	//
	// createPost.fields.set(post);
</script>

<form {...createPost.preflight(schema)} onchange={() => createPost.validate()}>
	<div>
		<label for="title">Title:</label>
		<input {...createPost.fields.title.as('text')} id="title" />

		{#each createPost.fields.title.issues() as issue}
			<p class="issue">{issue.message}</p>
		{/each}
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
		<label for="editor">My Editor is:</label>
		<select {...createPost.fields.editor.as('select')} id="editor">
			{#each options_editors as editor}
				<option value={editor.name}>{editor.name}</option>
			{/each}
		</select>
	</div>

	<div>
		<label for="content">Write your post: </label>
		<textarea {...createPost.fields.content.as('text')} id="content"></textarea>

		{#each createPost.fields.content.issues() as issue}
			<p class="issue">{issue.message}</p>
		{/each}
	</div>

	<p>
		<button>Publish!</button>

		<button
			type="button"
			onclick={async () => {
				console.log('resetting:', post);

				// case 2:
				// leave some inputs empty to get issues
				// form reset does not get rid of any issues
				document.forms[0].reset();
			}}
		>
			Form Reset
		</button>

		<button
			type="button"
			onclick={() => {
				console.log('setting:', post);
				createPost.fields.set(post);
			}}
		>
			Set from Post
		</button>

		<button
			type="button"
			onclick={async () => {
				console.log('full setting:', post);
				createPost.fields.set(post);
				await createPost.validate({ includeUntouched: true });
			}}
		>
			Validated Re-set
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

	.issue {
		color: red;
		font-weight: semibold;
	}
</style>
