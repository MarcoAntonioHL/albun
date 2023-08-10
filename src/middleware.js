import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request){
    const token=request.cookies.get('myToken')

    console.log(token)
    if(token===undefined ){
        return NextResponse.redirect(new URL('/Login',request.url))
    }
    try{
        const {payload} =await jwtVerify(token.value,new TextEncoder().encode('secret'))
        console.log(payload)
        return NextResponse.next()
    }
    catch(error){
        console.error(error)
        return NextResponse.redirect(new URL('/Login',request.url))
    }
}

export const config={
    matcher:['/Administrador','/Cakes/:path*']
}