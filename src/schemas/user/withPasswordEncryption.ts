import { z } from "zod";
import userSchema from ".";
import hashLib from "@/libs/hash";

const userWithPasswordEncryptionSchema = userSchema.extend({
	password: z.string().transform(hashLib.generateHash),
});

export default userWithPasswordEncryptionSchema;
export type UserWithPasswordEncryptionSchema = z.infer<
	typeof userWithPasswordEncryptionSchema
>;
