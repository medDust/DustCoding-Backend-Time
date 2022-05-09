import axios from "axios";

//create post
export const CreateArticle = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.post(`http://localhost:5000/api/articles/`, data, config);
  return res;
};

//get article
export const getArticle = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get(`http://localhost:5000/api/articles/`, config);
  return res;
};

// get article by id
export const getArticleById = async (_id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get(`http://localhost:5000/api/articles/${_id}`, config);
  return res;
};
// delete article
export const DelateArticle = async (_id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.delete(`http://localhost:5000/api/articles/${_id}`, config);
  return res;
};
// update article
export const UpdateArticle = async (_id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.put(
    `http://localhost:5000/api/articles/${_id}`,
    data,
    config
  );
  return res;
};
