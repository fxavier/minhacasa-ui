import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user is authenticated
  const isAuthenticated = request.cookies.has('auth_token'); // TODO: Implement proper auth check
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth/');

  if (!isAuthenticated && request.nextUrl.pathname === '/properties/new') {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/properties/new', '/auth/:path*'],
};