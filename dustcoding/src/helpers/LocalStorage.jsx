export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    return console.log ("failed get local storage method", error);
  }
};
export const deleteLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
