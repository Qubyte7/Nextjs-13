import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import  prisma  from "../../../../prisma/client1";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    session:{
        strategy:'jwt'
    }
}
const handler = NextAuth(authOptions);
export {handler as GET ,handler as POST}