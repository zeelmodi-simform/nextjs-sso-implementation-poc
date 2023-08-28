import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      prompt: 'login',
    },
    returnTo: '/profile',
  }),
  signup: handleLogin({
    authorizationParams: {
      prompt: 'login',
      screen_hint: 'signup',
    },
    returnTo: '/profile',
  }),
  onError(req: Request, error: Error) {
    console.error('onError:::', error);
  },
});

// export const runtime = 'edge';
//https://github.com/vercel/next.js/issues/51642
// export const fetchCache = 'force-no-store';

export const dynamic = 'force-dynamic';

/*


1. /api/auth/login
2. /api/auth/logout
3. /api/auth/callback
4. /api/auth/me

*/
