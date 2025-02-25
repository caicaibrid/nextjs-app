import config from "../config";
export default function Page() {
  const APP_ENV: string = process.env.APP_ENV || "";
  return (
    <>
      <div>App router 首页</div>
      <div>
        当前的环境和URL: {process.env.APP_ENV} - {config[APP_ENV]?.baseUrl}
      </div>
    </>
  );
}
