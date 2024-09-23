import tokenPayloadSchema, {
	type TokenPayloadSchema,
} from "@/schemas/tokenPayload";
import environmentService from "@/services/environment";
import { sign, verify } from "jsonwebtoken";

const tokenLib = {
	generate: (payload: TokenPayloadSchema): string =>
		sign(payload, environmentService.TOKEN_SECRET, {
			expiresIn: environmentService.TOKEN_LIMIT,
		}),
	verify: (token: string): TokenPayloadSchema => {
		const payload = verify(token, environmentService.TOKEN_SECRET);
		return tokenPayloadSchema.parse(payload);
	},
};

export default tokenLib;
