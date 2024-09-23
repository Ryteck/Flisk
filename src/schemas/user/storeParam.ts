import type { z } from "zod";
import userWithPasswordEncryptionSchema from "./withPasswordEncryption";

const userStoreParamSchema = userWithPasswordEncryptionSchema.omit({
	id: true,
});

export default userStoreParamSchema;
export type UserStoreParamSchema = z.infer<typeof userStoreParamSchema>;
