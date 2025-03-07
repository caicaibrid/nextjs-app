// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import * as cookie from "cookie";
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 检查路径是否以语言前缀开头
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 从 cookie 中获取语言偏好
  const cookies = cookie.parse(request.headers.get("cookie") || "");
  const storedLocale: any = cookies["locale"];

  let locale: string;
  if (storedLocale && i18n.locales.includes(storedLocale)) {
    locale = storedLocale;
  } else {
    // 如果 cookie 中没有语言偏好，获取浏览器偏好语言
    const acceptLanguage = request.headers.get("accept-language");
    const preferredLocale: any = acceptLanguage?.split(",")[0].split("-")[0];
    locale = i18n.locales.includes(preferredLocale)
      ? preferredLocale
      : i18n.defaultLocale;
  }

  if (pathnameIsMissingLocale) {
    // 重写路径，添加语言前缀
    const response = NextResponse.rewrite(
      new URL(`/${locale}${pathname}`, request.url)
    );

    // 设置或更新 cookie 中的语言偏好
    response.cookies.set("locale", locale);
    return response;
  }

  return NextResponse.next();
}

// 配置中间件应用的路径
export const config = {
  matcher: [
    /*
     * 匹配所有路径，排除以下情况：
     * - /api/ 开头的 API 路径
     * - _next/ 开头的 Next.js 内部路径
     * - 所有静态文件，如 .ico、.jpg 等
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
