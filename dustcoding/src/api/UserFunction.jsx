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

export const UpdateUser = async (_id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = await axios.put(
    ` http://localhost:5000/api/auth/update-user/${_id}`,
    data,
    config
  );
  return res;
};

// team API
export const GetAllTeams = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get(`http://localhost:5000/api/Team/`, config);
  return res;
};
export const GetTeam = async ({ projectId }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get(
    `http://localhost:5000/api/project/${projectId}/`,
    config
  );
  return res;
};
// create team or add new member for this team
export const CreateTeam = async (projectId, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.post(
    `http://localhost:5000/api/project/${projectId}/`,
    data,
    config
  );
  return res;
};
// update team add new member...
export const UpdateTeam = async (projectId, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.put(
    `http://localhost:5000/api/project/${projectId}/`,
    data,
    config
  );
  return res;
};
// delete member from team
export const DeleteTeamMember = async (projectId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.delete(
    `http://localhost:5000/api/project/${projectId}/`,
    config
  );
  return res;
};
