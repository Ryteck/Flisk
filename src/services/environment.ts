import environmentVariablesSchema, {
	type EnvironmentVariablesSchema,
} from "@/schemas/environment";

const environmentVariables: EnvironmentVariablesSchema =
	environmentVariablesSchema.parse({
		DATABASE_URL: process.env.DATABASE_URL,
		TOKEN_SECRET: process.env.TOKEN_SECRET,
		TOKEN_LIMIT: process.env.TOKEN_LIMIT,
	});

const environmentService = { ...environmentVariables };
export default environmentService;
