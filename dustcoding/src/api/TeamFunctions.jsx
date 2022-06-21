import axios from "axios";

// team API
export const GetAllTeams = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
    },
  };
  const res = axios.get("http://localhost:5000/api/Team/", config);
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
    `http://localhost:5000/api/Team/${projectId}`,
    data,
    config
  );
  return res;
};
// update team add new member
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
