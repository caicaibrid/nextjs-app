"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { i18n } from "../../i18n-config";

const CustomLink = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) => {
  // const pathname = usePathname();
  const router = useRouter();

  // 从当前路径获取当前语言
  // const currentLocale =
  //   i18n.locales.find((locale) => pathname.startsWith(`/${locale}`)) ||
  //   i18n.defaultLocale;

  // 生成带有语言前缀的 href
  // const localeHref = `/${currentLocale}${href}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default CustomLink;
