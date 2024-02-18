import NextAuth from "next-auth";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    session: { strategy: "jwt" },
    adapter: PrismaAdapter(prisma),
    ...authConfig,
});