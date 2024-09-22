import { sign } from "jsonwebtoken";

interface Payload {
	userId: string;
}

const tokenLib = {
	generate: (payload: Payload): string =>
		sign(payload, process.env.TOKEN_SECRET, {
			expiresIn: process.env.TOKEN_LIMIT,
		}),
};

export default tokenLib;
