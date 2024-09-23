import Entity from "@/domain/Entity";
import hashLib from "@/libs/hash";
import tokenLib from "@/libs/token";
import UserRepository from "@/repositories/User";
import type { UserSchema } from "@/schemas/user";
import publicRenderedUserSchema, {
	type PublicRenderedUserSchema,
} from "@/schemas/user/publicRendered";
import renderedUserSchema, {
	type RenderedUserSchema,
} from "@/schemas/user/rendered";
import { headers } from "next/headers";

export default class UserEntity extends Entity<UserSchema> {
	public static generate(user: UserSchema): UserEntity {
		return new UserEntity(user);
	}

	public static generateMany(users: UserSchema[]): UserEntity[] {
		return users.map(UserEntity.generate);
	}

	public static async generateFromHeader(): Promise<UserEntity> {
		const headersList = headers();
		const authorization = headersList.get("Authorization");
		if (authorization === null) throw new Error("Without Authorization");

		const tokenArr = authorization.split(" ");
		if (tokenArr.length !== 2) throw new Error("Poorly formatted token");

		const [prefix, jwt] = tokenArr;
		if (prefix !== "Bearer") throw new Error("Incorrect prefix");

		const payload = tokenLib.verify(jwt);
		const userRepository = new UserRepository();
		return userRepository.show(payload.userId);
	}

	public async login(password: string): Promise<string> {
		const isPasswordValid = await hashLib.verify(password, this.props.password);
		if (!isPasswordValid) throw new Error("Invalid Password");
		return tokenLib.generate({ userId: this.props.id });
	}

	public render(): RenderedUserSchema {
		return renderedUserSchema.parse(this.props);
	}

	public publicRender(): PublicRenderedUserSchema {
		return publicRenderedUserSchema.parse(this.props);
	}
}
