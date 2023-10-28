import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';

let headers = { 'accept-language': 'en-US,en;q=0.5' };
let languages = new Negotiator({ headers }).languages();
let locales = ['en', 'en-US', 'zh', 'zh-CN', 'zh-TW'];
let defaultLocale = 'en-US';

function getLocale(request: NextRequest) {
  return match(languages, locales, defaultLocale);
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let { pathname } = request.nextUrl;

  let pathnameHasLocale = locales.some(
    (local) => pathname.startsWith(`/${local}/`) || pathname === `/${local}`
  );

  if (pathnameHasLocale) return;
  let locale = getLocale(request);
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

// See "Matching Paths" below to learn more
/*
 * Match all request paths except for the ones starting with:
 * - api (API routes)
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico (favicon file)
 */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
