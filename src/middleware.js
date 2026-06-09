import { NextResponse } from "next/server";

const LOCALES = ["en", "ro"];
const DEFAULT_LOCALE = "en";
const COOKIE_NAME = "NEXT_LOCALE";

/**
 * Detect preferred locale from Accept-Language header.
 * Returns "ro" if the header includes ro/ro-RO, else "en".
 */
function detectLocale(request) {
  // 1. Cookie override — user explicitly chose a language
  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie && LOCALES.includes(cookie.value)) return cookie.value;

  // 2. Accept-Language header negotiation
  const acceptLang = request.headers.get("accept-language") || "";
  // Parse languages: "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7"
  const preferred = acceptLang
    .split(",")
    .map((entry) => {
      const [lang, q] = entry.trim().split(";q=");
      return { lang: lang.trim().toLowerCase(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q)
    .map((e) => e.lang);

  for (const lang of preferred) {
    if (lang === "ro" || lang.startsWith("ro-")) return "ro";
    if (lang === "en" || lang.startsWith("en-")) return "en";
  }

  return DEFAULT_LOCALE;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals, static files, and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // files with extensions (images, fonts, etc.)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a valid locale prefix
  const pathnameLocale = LOCALES.find(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameLocale) {
    // Path already has locale — just continue
    return NextResponse.next();
  }

  // No locale in path — detect and redirect
  const locale = detectLocale(request);
  const redirectUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
  // Preserve query string
  redirectUrl.search = request.nextUrl.search;

  const response = NextResponse.redirect(redirectUrl);
  // Set cookie so subsequent requests without locale in URL also redirect correctly
  response.cookies.set(COOKIE_NAME, locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
    path: "/",
  });
  return response;
}

export const config = {
  matcher: [
    // Match all paths except _next internals and static files
    "/((?!_next/static|_next/image|favicon.ico|favicon.svg|cybernova-mark.svg|cybernova-logo.svg|cybernova-wordmark.svg|orbit-pattern.svg|models|file.svg|globe.svg|next.svg|vercel.svg|window.svg).*)",
  ],
};
