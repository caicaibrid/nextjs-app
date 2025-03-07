"use client";
import { useRouter, usePathname } from "next/navigation";
import { i18n } from "../../i18n-config";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    const currentLocale =
      i18n.locales.find((l) => pathname.startsWith(`/${l}`)) ||
      i18n.defaultLocale;
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);

    document.cookie = `locale=${locale}; path=/`;
    router.push(newPath);
    if (process.env.APP_ENV !== "development") {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  return (
    <div className="flex gap-4">
      {i18n.locales.map((locale) => (
        <button key={locale} onClick={() => handleLanguageChange(locale)}>
          {locale}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
