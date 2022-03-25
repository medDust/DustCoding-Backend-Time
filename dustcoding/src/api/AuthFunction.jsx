import axios from "axios";

export const register = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.post(
    "http://localhost:5000/api/auth/signUp",
    data,
    config
  );
  return res;
};
export const LogIn = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.post(
    "http://localhost:5000/api/auth/signIn",
    data,
    config
  );
  return res;
};
