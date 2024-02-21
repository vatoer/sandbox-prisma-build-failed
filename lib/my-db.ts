import { PrismaClient } from "@/prisma/my-db/generated/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const myDb = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = myDb;