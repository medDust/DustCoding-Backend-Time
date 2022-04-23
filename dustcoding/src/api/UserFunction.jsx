import axios from "axios";

export const GetAllUsers = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get("http://localhost:5000/api/auth/infos", config);
  return res;
};
