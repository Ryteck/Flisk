import UserRepository from "@/repositories/User";

interface Params {
	params: {
		id: string;
	};
}

const userRepository = new UserRepository();

export async function GET(request: Request, { params }: Params) {
	const user = await userRepository.show(params.id);
	return Response.json(user.render());
}

export async function DELETE(request: Request, { params }: Params) {
	const user = await userRepository.destroy(params.id);
	return Response.json(user.render());
}

export const revalidate = 0;
