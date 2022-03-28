import { setCookie, getCookie } from "./Cookies";
import { setLocalStorage, getLocalStorage } from "./LocalStorage";

export const setAuthentication = (token, user) => {
  setCookie("token", token);
  setLocalStorage("user", user);
};

export const isAuthenticated = () => {
  if (getCookie("token") && getLocalStorage("user")) {
    return getLocalStorage("user");
  } else {
    return false;
  }
};
