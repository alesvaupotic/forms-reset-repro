import * as v from 'valibot';

export const schema = v.object({
	title: v.pipe(v.string(), v.nonEmpty()),
	operatingSystem: v.pipe(
		v.string(),
		v.transform((v) => parseInt(v))
	),
	editor: v.pipe(v.string(), v.nonEmpty()),
	content: v.pipe(v.string(), v.nonEmpty()),
});
