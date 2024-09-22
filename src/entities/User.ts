import Entity from "@/domain/Entity";
import hashLib from "@/libs/hash";
import tokenLib from "@/libs/token";
import type { User } from "@prisma/client";

type RenderedUser = Omit<User, "password">;
type PublicRenderedUser = Pick<User, "displayName" | "email">;

export default class UserEntity extends Entity<User> {
	public static generate(user: User): UserEntity {
		return new UserEntity(user);
	}

	public static generateMany(users: User[]): UserEntity[] {
		return users.map(UserEntity.generate);
	}

	public async login(password: string): Promise<string> {
		const isPasswordValid = await hashLib.verify(password, this.props.password);
		if (!isPasswordValid) throw new Error("Invalid Password");
		return tokenLib.generate({ userId: this.props.id });
	}

	public render(): RenderedUser {
		const { id, accountName, displayName, email } = this.props;
		return { id, accountName, displayName, email };
	}

	public publicRender(): PublicRenderedUser {
		const { displayName, email } = this.props;
		return { displayName, email };
	}
}
