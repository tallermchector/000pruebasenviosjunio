import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const prismaClientSingleton = (adapter: PrismaPg) => {
  return new PrismaClient({ adapter }).$extends(withAccelerate());
};

type PrismaClientExtended = ReturnType<typeof prismaClientSingleton>;

declare global {
  var prisma: undefined | PrismaClientExtended;
  var pgPool: undefined | pg.Pool;
}

const connectionString = process.env.DIRECT_URL || process.env.ENVIOS_PRISMA_DATABASE_URL || process.env.DATABASE_URL;
const pool = globalThis.pgPool ?? new pg.Pool({ connectionString });
if (process.env.NODE_ENV !== "production") {
  globalThis.pgPool = pool;
}
const adapter = new PrismaPg(pool);

const prisma = globalThis.prisma ?? prismaClientSingleton(adapter);

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
