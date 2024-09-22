import { compare, genSalt, hash } from "bcrypt";

const generateSalt = () => genSalt();

const hashLib = {
	generateHash: async (password: string): Promise<string> => {
		const salt = await generateSalt();
		return hash(password, salt);
	},

	verify: (password: string, hash: string): Promise<boolean> =>
		compare(password, hash),
};

export default hashLib;
