import { PrismaClient } from "@prisma/client";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
declare const globalThis: { prismaClient: PrismaClient } & typeof global;
const prismaClient = globalThis.prismaClient ?? new PrismaClient();

if (process.env.NODE_ENV !== "production")
	globalThis.prismaClient = prismaClient;

const primsaService = { prismaClient };
export default primsaService;
