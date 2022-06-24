import axios from "axios";

// user API
// GET one USER
export const GetUser = async ({ UserId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get(`http://localhost:5000/api/project/${UserId}/`, config);
  return res;
};
// GET one USER
export const GetUserProfile = async ({ UserId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get(
    `http://localhost:5000/api/auth//info/${UserId}/`,
    config
  );
  return res;
};
export const GetUserName = async ({ UserId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get(
    `http://localhost:5000/api/auth/info/${UserId}/`,
    config
  );
  return res;
};

// GET ALL USER
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

//UPDATE USER
export const UpdateUser = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.patch(
    `http://localhost:5000/api/auth/${id}`,
    data,
    config
  );
  return res;
};
