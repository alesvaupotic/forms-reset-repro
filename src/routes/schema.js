import * as v from 'valibot';

export const schema = v.object({
	title: v.pipe(v.string(), v.nonEmpty()),
	operatingSystem: v.pipe(
		v.string(),
		v.transform((v) => parseInt(v))
	),
	content: v.pipe(v.string(), v.nonEmpty()),
});
