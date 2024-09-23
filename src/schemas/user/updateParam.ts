import type { z } from "zod";
import userWithPasswordEncryptionSchema from "./withPasswordEncryption";

const userUpdateParamSchema = userWithPasswordEncryptionSchema.partial({
	accountName: true,
	displayName: true,
	email: true,
	password: true,
});

export default userUpdateParamSchema;
export type UserUpdateParamSchema = z.infer<typeof userUpdateParamSchema>;
