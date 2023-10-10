import { NextRequest, NextResponse } from "next/server";
export { default} from 'next-auth/middleware'//this synta is for  exporting the middleware form the path 'next-auth/middleware' 

//specifying endpoints where our middleware should be applied
export const config = {
    // * : means zero to more parameters , + :one to more parameters, ? : Zero to one parameters
    matcher:['/dashboard/:path*']
}