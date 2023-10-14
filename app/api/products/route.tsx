import { NextRequest,NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client1";

export async function GET(req:NextRequest){
const products = await prisma.product.findMany();
return NextResponse.json(products);


}

export async function POST(req:NextRequest){
    const body = await req.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }
 
 const createdProduct = await prisma.product.create({
        data:{
            name:body.name,
            price:body.price,
        }
        })

    return NextResponse.json(createdProduct,{status:201})

    }

    export async function generateMetadata():Promise<Metadata>{
        const product  = await fetch('');//fetch like the url of the dynamic page content , on our case it is the  product
        return{
          title:'product.title',
          descripton:'...'
        }
      }