import config from "../../config";
import http from "../../service/http";
import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const res = await http("https://www.baidu.com");
  const APP_ENV: string = process.env.APP_ENV || "";
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <div className="p-5"></div>
      <div className="p-5">name: {dictionary.name}</div>
      <div className="p-5">
        当前的环境和URL: {process.env.APP_ENV} - {config[APP_ENV]?.baseUrl}
      </div>
      <div className="p-5">项目路由</div>
      <div className="p-5"></div>
      <div className="p-5">axios 请求</div>
      <pre className="p-5">{res.data}</pre>
    </>
  );
}
