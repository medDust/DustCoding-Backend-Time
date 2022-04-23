import axios from "axios";

export const PostingMails = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.post(
    "http://localhost:5000/api/mails/",
    data,
    config
  );
  return res;
};
export const GetMails = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };

  const res = await axios.get(
    "http://localhost:5000/api/mails/",

    config
  );
  return res;
};

export const GetProjects = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(
    "http://localhost:5000/api/project/",

    config
  );
  return res;
};
export const deleteProjectsById = async (projectId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.delete(
    `http://localhost:5000/api/project/${projectId}`,

    config
  );
  return res;
};
