import { handleAuth, handleCallback, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  // onError: (req: Request, error: Error) => {
  //     console.log(error);
  // },    
  login: handleLogin({
    authorizationParams: {
      prompt: 'login'
    },
    returnTo: '/profile'
  }),
  signup: handleLogin({
    authorizationParams: {
      prompt: 'login',
      screen_hint: 'signup'
    },
    returnTo: '/profile'
  }),
});



export const dynamic = 'force-dynamic'
