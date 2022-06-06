import { NextResponse } from "next/server";
//import { verify } from "jsonwebtoken";

const secret = process.env.SECRET;

export default function middleware(req)
{
    const { cookies } = req;

    const jwt = cookies.jwt;

    const url = req.url;

    if(url.includes('index'))
    {
        if(jwt === 'token')
        {
            return NextResponse.redirect('/login');
        }
        try{
            verify(jwt, secret);
            return NextResponse.next();
        }catch(e){
            return NextResponse.redirect('/login');
        }
    }

    return NextResponse.next();
}