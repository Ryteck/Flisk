import UserEntity from "@/entities/User";
import UserRepository from "@/repositories/User";
import userStoreParamSchema from "@/schemas/user/storeParam";
import userUpdateParamSchema from "@/schemas/user/updateParam";

const userRepository = new UserRepository();

export async function GET() {
	await UserEntity.generateFromHeader();

	const users = await userRepository.list();
	return Response.json(users.map((user) => user.publicRender()));
}

export async function POST(request: Request) {
	const body = await request.json();
	const data = await userStoreParamSchema.parseAsync(body);
	const user = await userRepository.store(data);
	return Response.json(user.render());
}

export async function PUT(request: Request) {
	const userInHeader = await UserEntity.generateFromHeader();

	const body = await request.json();
	const data = await userUpdateParamSchema.parseAsync(body);

	if (data.id !== userInHeader.getProps().id) throw new Error("Unauthorized");

	const user = await userRepository.update(data);
	return Response.json(user.render());
}

export const revalidate = 0;
