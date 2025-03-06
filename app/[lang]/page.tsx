import config from "../../config";
import routes from "../../config/routes";
import Link from "next/link";
import http from "../../service/http";
import LocaleSwitcher from "./components/locale-switcher";
import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const res = await http("https://www.baidu.com");
  const APP_ENV: string = process.env.APP_ENV || "";
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  console.log(lang, dictionary);
  return (
    <>
      <div className="p-5">
        <LocaleSwitcher />
      </div>
      <div className="p-5">name: {dictionary.name}</div>
      <div className="p-5">
        当前的环境和URL: {process.env.APP_ENV} - {config[APP_ENV]?.baseUrl}
      </div>
      <div className="p-5">项目路由</div>
      <div className="p-5">
        {routes.map((_, index: number) => {
          return (
            <div className="p-5" key={index}>
              {_.name}
              {_.children.map((item, key) => {
                return (
                  <div className="p-5 text-blue-500" key={key}>
                    <Link href={item.pathname}>{item.name}</Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="p-5">axios 请求</div>
      <pre className="p-5">{res.data}</pre>
    </>
  );
}
