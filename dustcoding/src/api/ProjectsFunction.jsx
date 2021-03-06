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
    `http://localhost:5000/api/Tasks/${projectId}/Task/${TaskId}`,

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
// tasks Update
export const UpdateTasks = async ({ id }, data) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
  //   },
  // };
  const res = await axios.put(
    `http://localhost:5000/api/Tasks/${id}`,
    data
    // config
  );
  return res;
};

// get All Tasks By Employer ID
export const TasksListTodo = async ({ userId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(
    `http://localhost:5000/api/Tasks/employer/${userId}/`,
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

export const UpdateProjectbyId = async ({ projectId }, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.put(
    `http://localhost:5000/api/project/${projectId}/`,
    data,
    config
  );
  return res;
};
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
export const GetProjectbyUserId = async ({ userId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(
    `http://localhost:5000/api/project/user/${userId}/`,

    config
  );
  return res;
};

// Project Request

export const RequestProject = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.post(
    `http://localhost:5000/api/request/`,
    data,
    config
  );
  return res;
};
export const UpdateRequestProject = async ({ RequestId }, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.put(
    `http://localhost:5000/api/request/${RequestId}`,
    data,
    config
  );
  return res;
};
export const getAllRequest = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(`http://localhost:5000/api/request/`, config);
  return res;
};
export const getRequestById = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(
    `http://localhost:5000/api/request/${id}`,
    config
  );
  return res;
};
export const getRequestByCLientId = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.get(
    `http://localhost:5000/api/request/Client/${id}`,
    config
  );
  return res;
};
