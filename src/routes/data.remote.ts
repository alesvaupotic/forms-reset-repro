import { form, query } from "$app/server";
import { schema } from "./schema";

export const getPost = query(() => {
  return {
	date:'2025-07-18',
  };
});

export const createPost = form(schema, async (valid_data) => {
  console.log("valid_data:", JSON.stringify(valid_data, null, 4));
  return { success: true, valid_data };
});
