import { form } from '$app/server';
import * as v from 'valibot';

export const person_form = form(
	v.object({
		fname: v.pipe(v.string(), v.nonEmpty('Should not be empty')),
		lname: v.pipe(v.string(), v.nonEmpty('Should not be empty')),
	}),
	async ({ fname, lname }) => {
		return { success: true };
	}
);
