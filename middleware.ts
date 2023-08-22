import { getAccessToken,  } from "@auth0/nextjs-auth0";
import { withMiddlewareAuthRequired, getSession } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'



export default withMiddlewareAuthRequired({
  returnTo: '/',
  async middleware(req: NextRequest) {
    
    const res = NextResponse.next();

    const user = await getSession(req, res)
    return res;
  }
});


export const config = {
    matcher: ['/profile','/protected']
}
