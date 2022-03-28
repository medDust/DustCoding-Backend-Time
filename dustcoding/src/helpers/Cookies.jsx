import Cookies from "js-cookie";

export const setCookie = (key, value) => {
  Cookies.set(key, value, { expires: 1 });
};

export const getCookie = (key) => {
  try {
    return Cookies.get(key);
  } catch (error) {
    return console.log("failed get cookies", error);
  }
};

export const deleteCookie = (key) => {
  Cookies.remove(key);
};
