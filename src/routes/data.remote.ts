/// my-form.remote.ts
import { form } from '$app/server';
import { schema } from './schema';

export const createPost = form(schema, async (valid_data) => {
	console.log('valid_data:', JSON.stringify(valid_data, null, 4));
	return { success: true, valid_data };
});
