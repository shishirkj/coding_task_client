import { NextResponse } from "next/server";
import { currentUser } from '@clerk/nextjs/server';


export  async function GET(){ 
    const user = await currentUser();
return NextResponse.json({success:true,mssg:user},{status:200})
}