/// my-form.remote.ts
import { form } from '$app/server';
import * as v from 'valibot';

export const createPost = form(
	v.object({
		title: v.pipe(v.string(), v.nonEmpty()),
		operatingSystem: v.pipe(
			v.string(),
			v.transform((v) => parseInt(v))
		),
		content: v.pipe(v.string(), v.nonEmpty()),
	}),
	async (valid_data) => {
		console.log('valid_data:', JSON.stringify(valid_data, null, 4));
		return { success: true, valid_data };
	}
);
