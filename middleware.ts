import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";
import * as cookie from "cookie";

export function middleware(request: NextRequest) {
  const cookies = cookie.parse(request.headers.get("cookie") || "");
  const selectedLocale = cookies["locale"];

  const pathname = request.nextUrl.pathname;
  const pathnameArr = request.nextUrl.pathname.split("/");

  const referer = request.headers.get("referer") || "";
  let refererUrlPathname: string[] = [];

  if (referer) {
    try {
      const refererUrl = new URL(referer);
      refererUrlPathname = refererUrl.pathname.split("/");
    } catch (error) {
      // Handle invalid referer URL
      console.error("Invalid referer URL:", error);
    }
  }

  const pathnameIsMissingLocale = !i18n.locales.includes(
    pathnameArr[1] as (typeof i18n.locales)[number]
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale =
      selectedLocale || refererUrlPathname?.[1] || i18n.defaultLocale;

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
