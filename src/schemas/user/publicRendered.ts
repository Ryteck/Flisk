import type { z } from "zod";
import renderedUserSchema from "./rendered";

const publicRenderedUserSchema = renderedUserSchema.transform(
	({ displayName, email }) => ({ displayName, email }),
);

export default publicRenderedUserSchema;
export type PublicRenderedUserSchema = z.infer<typeof publicRenderedUserSchema>;
