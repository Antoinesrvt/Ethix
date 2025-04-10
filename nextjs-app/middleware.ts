import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale } from './i18n';

// Get all supported locales from the i18n configuration
// This should match the locales in your i18n configuration
const supportedLocales = ['en', 'fr'];

// Paths that don't need locale prefixes
const PUBLIC_FILE = /\.(.*)$/;
const IGNORED_PATHS = ['/api', '/static', '/_next', '/favicon.ico', '/images'];

/**
 * Middleware to handle internationalization routes
 * - Adds the default locale to unprefixed routes
 * - Preserves locale in URLs for navigation
 * - Ignores static files and API routes
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is for a static file or an ignored path
  if (
    PUBLIC_FILE.test(pathname) || 
    IGNORED_PATHS.some(path => pathname.startsWith(path))
  ) {
    return NextResponse.next();
  }
  
  // Check if the path already starts with a supported locale
  const pathnameHasLocale = supportedLocales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    // If we already have a locale in the pathname, don't modify the request
    return NextResponse.next();
  }
  
  // Get the preferred locale from cookie or navigator
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const acceptLanguage = request.headers.get('Accept-Language');
  
  let locale = defaultLocale;
  
  // Check if we have a cookie with the locale
  if (cookieLocale && supportedLocales.includes(cookieLocale)) {
    locale = cookieLocale;
  } 
  // Fallback to browser's preferred language if no cookie
  else if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().substring(0, 2))
      .find(lang => supportedLocales.includes(lang));
    
    if (preferredLocale) {
      locale = preferredLocale;
    }
  }
  
  // Create a URL with the locale prefix
  const url = new URL(
    `/${locale}${pathname === '/' ? '' : pathname}${request.nextUrl.search}`,
    request.url
  );
  
  // Redirect to the localized URL
  return NextResponse.redirect(url);
}

/**
 * Define which paths should be processed by the middleware
 * Exclude static files, API routes, and paths that already have a locale
 */
export const config = {
  matcher: [
    // Match all routes except static files, api routes, etc.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 