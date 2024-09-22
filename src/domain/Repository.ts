import primsaService from "@/services/prisma";
import type { PrismaClient } from "@prisma/client";

export default abstract class Repository {
	protected prismaClient: PrismaClient;

	public constructor() {
		this.prismaClient = primsaService.prismaClient;
	}
}
