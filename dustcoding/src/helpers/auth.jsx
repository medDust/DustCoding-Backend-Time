import { setCookie, getCookie, deleteCookie } from "./Cookies";
import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from "./LocalStorage";

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
export const isAuthorisation = () => {
  if (getCookie("token") && getLocalStorage("user")) {
    return getCookie("token");
  } else {
    return false;
  }
};
export const logout = (next) => {
  deleteCookie("token");
  deleteLocalStorage("user");
  next();
};
