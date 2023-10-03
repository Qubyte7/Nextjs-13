import { NextRequest,NextResponse } from "next/server";
import schema from "./schema";
export function GET (request: NextRequest){
return NextResponse.json([
    {id:1,name:"MUgisha"},
    {id:2,name:"Ganza"},
    {id:3,name:"Sabrina"},
    {id:4,name:"Michael"},
])
}
export async function POST (request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
       return NextResponse.json(validation.error.errors,{status:400});
    return NextResponse.json({body},{status:201});
}



