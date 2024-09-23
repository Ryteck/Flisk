import { z } from "zod";

const tokenPayloadSchema = z.object({
	userId: z.string().uuid(),
});

export default tokenPayloadSchema;
export type TokenPayloadSchema = z.infer<typeof tokenPayloadSchema>;
