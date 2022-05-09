import axios from "axios";

// tasks api
export const GetAllTaskByProject = async ({ projectId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(
    `http://localhost:5000/api/Tasks/${projectId}/`,

    config
  );
  return res;
};

// get Tasks by project
export const GetTaskById = async ({ projectId, TaskId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(
    `http://localhost:5000/api/Tasks/${projectId}/Tasks/${TaskId}`,

    config
  );
  return res;
};
// delete tasks
export const DeleteTaskById = async (TaskId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.delete(
    `http://localhost:5000/api/Tasks/${TaskId}`,

    config
  );
  return res;
};
// create tasks
export const CreateTask = async (projectId, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.post(
    `http://localhost:5000/api/Tasks/${projectId}/`,
    data,
    config
  );
  return res;
};
// get tasks by ID
export const GetTasksbyId = async ({ TaskId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(
    `http://localhost:5000/api/Task/${TaskId}/`,

    config
  );
  return res;
};
//project API
//  create new project
export const CreateProject = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.post(
    `http://localhost:5000/api/project/`,
    data,
    config
  );
  return res;
};

//  get project Details

export const GetProjectbyId = async ({ projectId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(
    `http://localhost:5000/api/project/${projectId}/`,

    config
  );
  return res;
};
