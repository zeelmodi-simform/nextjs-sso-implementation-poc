import { handleAuth, handleCallback, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

// export const GET = handleAuth({
//     // onError: (req: Request, error: Error) => {
//     //     console.log(error);
//     // }
    
//     login: handleLogin({
//         authorizationParams: {
//             prompt: 'login'
//         },
//         returnTo: '/profile'
//     }),
//     signup: handleLogin({
//         authorizationParams: {
//             prompt: 'login',
//             screen_hint:'signup'
//         },
//         returnTo: '/profile'
//     })
// });

export const GET = handleAuth()

function getRedirectUrls(webUrl: string | undefined) {
  if (webUrl === undefined)
    throw new Error("Error get base Url. Missing request URL.");
  const urlObject = new URL(webUrl);
  const returnTo = `${urlObject.protocol}//${urlObject.host}`;
  return {
    returnTo,
    redirect_uri: `${returnTo}/api/auth/callback`,
  };
}

// export const GET = handleAuth({// @ts-ignore
//   callback: (req, res) => {
//     const { redirect_uri } = getRedirectUrls(req.url);
//     return handleCallback(req, res, {
//       authorizationParams: {
//         audience: "https://my-audience.us.auth0.com/api/v2/",
//         scope: "openid profile email offline_access",
//         redirect_uri: redirect_uri,
//       },
//       redirectUri: redirect_uri,
//     });
//   },
//   // @ts-ignore
//   login: (req, res) => {
//     const { returnTo, redirect_uri } = getRedirectUrls(req.url);
//     return handleLogin({
//       authorizationParams: {
//         audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
//         scope: "openid profile email offline_access",
//         redirect_uri,
//       },
//       returnTo,
//     })(req, res);
//   },
//   // @ts-ignore
//   logout: (req, res) => {
//     return handleLogout({
//       returnTo: getRedirectUrls(req.url).returnTo,
//     })(req, res);
//   },})

export const dynamic = 'force-dynamic'
