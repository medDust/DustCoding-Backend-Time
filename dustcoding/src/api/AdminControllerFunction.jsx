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
  return res.data;
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


// service create post
export const createService = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.post(`http://localhost:5000/api/services/`, data, config);
  return res;
};

//get service
export const getService = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get(`http://localhost:5000/api/services/`, config);
  return res;
};

//get by id service
export const getServiceById = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get(`http://localhost:5000/api/services/${id}`, config);
  return res;
};

//update service
export const UpdateService = async (_id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.put(
    `http://localhost:5000/api/services/${_id}`,
    data,
    config
  );
  return res;
};

//delete service
export const DelateService = async (_id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.delete(`http://localhost:5000/api/services/${_id}`, config);
  return res;
};