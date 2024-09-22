import argon2 from "argon2";

const hashLib = {
	generateHash: (password: string): Promise<string> => argon2.hash(password),

	verify: (hash: string, password: string): Promise<boolean> =>
		argon2.verify(hash, password),
};

export default hashLib;
