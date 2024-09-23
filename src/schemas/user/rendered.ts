import type { z } from "zod";
import userSchema from ".";

const renderedUserSchema = userSchema.transform(
	({ password, ...props }) => props,
);

export default renderedUserSchema;
export type RenderedUserSchema = z.infer<typeof renderedUserSchema>;
