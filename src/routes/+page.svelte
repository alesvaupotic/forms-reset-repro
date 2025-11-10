<script lang="ts">
  import { createPost, getPost } from "./data.remote";
  import { schema } from "./schema";

  const post = await getPost();
  createPost.fields.set(post);

  let local_date = $state(post.date);
  let result = $state();

  function validate_locally() {
    result = schema.safeParse({ date: local_date });
  }
</script>

<pre>{JSON.stringify(createPost.fields.value())}</pre>
<pre>{local_date || "invalid date"}</pre>

<dialog open>
  <form {...createPost.preflight(schema)} onchange={() => createPost.validate()}>
    <div>
      <label for="date">date:</label>

      <input {...createPost.fields.date.as("date")} id="date" />

      {#each createPost.fields.date.issues() as issue}
        <p>{issue.message}</p>
      {/each}
    </div>
  </form>

  <form>
    <div>
      <label for="date-2">locally-bound date:</label>
      <input type="date" id="date-2" bind:value={local_date} onchange={validate_locally} />
      <pre>{JSON.stringify(result, null, 4)}</pre>
    </div>
  </form>
</dialog>
