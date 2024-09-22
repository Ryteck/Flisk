import UserRepository from "@/repositories/User";

const userRepository = new UserRepository();

export async function POST(request: Request) {
	const { accountName, password } = await request.json();

	const user = await userRepository.showByAccountName(accountName);

	const token = await user.login(password);

	return Response.json({ token });
}
