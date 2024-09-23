import { z } from "zod";

const userSchema = z.object({
	id: z.string().uuid(),
	accountName: z.string(),
	displayName: z.string(),
	email: z.string().email(),
	password: z.string(),
});

export default userSchema;
export type UserSchema = z.infer<typeof userSchema>;
