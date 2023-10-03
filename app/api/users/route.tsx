import { NextRequest,NextResponse } from "next/server";

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
    if (!body.name)
       return NextResponse.json({error:"name is required"},{status:400});
    return NextResponse.json({body},{status:201});
}



