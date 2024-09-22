import hashLib from "@/libs/hash";
import UserRepository from "@/repositories/User";

const userRepository = new UserRepository();

export async function GET() {
	const users = await userRepository.list();
	return Response.json(users.map((user) => user.publicRender()));
}

export async function POST(request: Request) {
	const body = await request.json();

	body.password = await hashLib.generateHash(body.password);

	const user = await userRepository.store(body);
	return Response.json(user.render());
}

export async function PUT(request: Request) {
	const body = await request.json();

	if (body.password) body.password = await hashLib.generateHash(body.password);

	const user = await userRepository.update(body);
	return Response.json(user.render());
}

export const revalidate = 0;
