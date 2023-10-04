import { NextRequest,NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../../prisma/client1"


export async function GET (request: NextRequest){
const users =  await prisma.user.findMany()

// return NextResponse.json([
//     {id:1,name:"MUgisha"},
//     {id:2,name:"Ganza"},
//     {id:3,name:"Sabrina"},
//     {id:4,name:"Michael"},
// ])
return NextResponse.json(users);

}
export async function POST (request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
       return NextResponse.json(validation.error.errors,{status:400});

const user = await prisma.user.findUnique({
    where:{email:body.email}
}); 

   if (user){
     return NextResponse.json({error:"User already exists"},{status:400})
   }


       const newuser = await prisma.user.create({
        data: {
            name:body.name,
            email:body.email
        }
    })
    return NextResponse.json(newuser,{status:201});
}



