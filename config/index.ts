interface Config {
  [key: string]: {
    baseUrl: string;
  };
}
const config: Config = {
  development: {
    baseUrl: "http://development:3000",
  },
  test: {
    baseUrl: "http://test:3000",
  },
  production: {
    baseUrl: "http://production:3000",
  },
};

export default config;
