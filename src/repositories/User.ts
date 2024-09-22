import Repository from "@/domain/Repository";
import UserEntity from "@/entities/User";
import type { User } from "@prisma/client";

export default class UserRepository extends Repository {
	public async list(): Promise<UserEntity[]> {
		const users = await this.prismaClient.user.findMany();
		return UserEntity.generateMany(users);
	}

	public async show(id: string): Promise<UserEntity> {
		const user = await this.prismaClient.user.findUniqueOrThrow({
			where: { id },
		});

		return UserEntity.generate(user);
	}

	public async showByAccountName(accountName: string): Promise<UserEntity> {
		const user = await this.prismaClient.user.findUniqueOrThrow({
			where: { accountName },
		});

		return UserEntity.generate(user);
	}

	public async store({
		accountName,
		displayName,
		email,
		password,
	}: Omit<User, "id">): Promise<UserEntity> {
		const user = await this.prismaClient.user.create({
			data: { accountName, displayName, email, password },
		});

		return UserEntity.generate(user);
	}

	public async update({
		id,
		accountName,
		displayName,
		email,
		password,
	}: User): Promise<UserEntity> {
		const user = await this.prismaClient.user.update({
			where: { id },
			data: { accountName, displayName, email, password },
		});

		return UserEntity.generate(user);
	}

	public async destroy(id: string): Promise<UserEntity> {
		const user = await this.prismaClient.user.delete({
			where: { id },
		});

		return UserEntity.generate(user);
	}
}
