import axios from "axios";
import {getCookie} from "./cookie";
import {REACT_APP_SERVER_URL} from "@/constants";
import {DEFAULT_Auth_Token} from "@/store/user/data";

const instance = axios.create({
  baseURL: REACT_APP_SERVER_URL
})

instance.interceptors.request.use((config) => {
  // const authtoken = getCookie('authtoken');
  // todo: delete on prod
  const authtoken = getCookie('authtoken') ?? DEFAULT_Auth_Token;

  config.headers.authtoken = authtoken;

  return config
})

export default instance
