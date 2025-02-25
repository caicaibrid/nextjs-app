import config from "../config";
import { redirect } from "next/navigation";
import routes from "../config/routes";
import Link from "next/link";
export default function Page() {
  const APP_ENV: string = process.env.APP_ENV || "";
  return (
    <>
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
    </>
  );
}
