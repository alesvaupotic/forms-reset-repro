import * as z from "zod"; 

export const schema = z.object({
	date: z.iso.date(),
});
