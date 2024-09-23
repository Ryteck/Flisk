import UserEntity from "@/entities/User";

export async function GET() {
	const user = await UserEntity.generateFromHeader();
	return Response.json(user.render());
}

export const revalidate = 0;
