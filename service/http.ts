import axios from "axios";
import config from "../config";

const http = axios.create({
  baseURL: config[process.env.APP_ENV || ""]?.baseUrl || "",
});

export default http;
