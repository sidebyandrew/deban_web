import { match } from '@formatjs/intl-localematcher';
import { getIronSession } from 'iron-session/edge';
import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

let headers = { 'accept-language': 'en-US,en;q=0.5' };
let languages = new Negotiator({ headers }).languages();
let locales = ['en', 'en-US', 'zh', 'zh-CN', 'zh-TW'];
let defaultLocale = 'en-US';

function getLocale(request: NextRequest) {
  return match(languages, locales, defaultLocale);
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let res = NextResponse.next();
  let { debanSession } = await getIronSession(request, res, {
    cookieName: '' + process.env.COOKIE_NAME_APP,
    password: '' + process.env.COOKIE_SECRET_PWD,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });

  // do anything with session here:

  return res;
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
