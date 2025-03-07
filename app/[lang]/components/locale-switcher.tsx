"use client";
import * as cookie from "cookie";
import { useRouter } from "next/navigation";
export default function LocaleSwitcher() {
  const router = useRouter();
  const handlerClick = (newLocale: string) => {
    router.push(`/${newLocale}`);
    // 设置 Cookie
    document.cookie = cookie.serialize("locale", newLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 有效期 1 年
    });
  };
  return (
    <div className="flex gap-4">
      <div className=" cursor-pointer" onClick={() => handlerClick("zh")}>
        ZH
      </div>
      <div className="cursor-pointer" onClick={() => handlerClick("en")}>
        EN
      </div>
    </div>
  );
}
