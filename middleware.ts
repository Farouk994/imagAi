// // import { clerkMiddleware } from '@clerk/nextjs/server';
//  this version has been deprecated by nextJS
// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({
//   publicRoutes: ['/api/webhooks/clerk','/','/api/webhooks/stripe' ]
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/api/webhooks/clerk",
  "/",
  "/api/webhooks/stripe",
]);

// export default clerkMiddleware(async (auth, req) => {
//   if (!isPublicRoute(req)) {
//     await auth.protect();
//   }
// });

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
