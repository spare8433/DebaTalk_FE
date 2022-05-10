import { checkCookie } from "@cookie/"

export const isLogin = () => {
  return checkCookie('token');
}