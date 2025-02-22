import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/sign-in',
    '/sign-up',
    '/',
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
