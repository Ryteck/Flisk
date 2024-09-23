import { z } from "zod";

const environmentVariablesSchema = z.object({
	DATABASE_URL: z.string().url(),
	TOKEN_SECRET: z.string(),
	TOKEN_LIMIT: z.string().or(z.number()),
});

export default environmentVariablesSchema;
export type EnvironmentVariablesSchema = z.infer<
	typeof environmentVariablesSchema
>;
