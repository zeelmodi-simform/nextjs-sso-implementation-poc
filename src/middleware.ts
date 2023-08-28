import {
  getSession,
  withMiddlewareAuthRequired,
} from '@auth0/nextjs-auth0/edge';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default withMiddlewareAuthRequired({
  returnTo: '/',
  async middleware(req: NextRequest) {
    try {
      const res = NextResponse.next();
      const user = await getSession(req, res); // server rendering

      if (!user) {
        redirect('/api/auth/login');
      }

      return res;
    } catch (error) {
      redirect('/api/auth/login');
    }
  },
});

export const config = {
  matcher: ['/profile', '/protected'],
};
