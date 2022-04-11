import Team from "equipeModel.js";
import asyncHandler from "express-async-handler";
//get
const createTeam = asyncHandler(async (req, res) => {
  res.json({ msg: "create Team is work" });
});

const getTeam = asyncHandler(async (req, res) => {
  res.json({ msg: "get Team is work" });
});

const getAllTeam = asyncHandler(async (req, res) => {
  res.json({ msg: "get All Team is work" });
});

const UpdateTeam = asyncHandler(async (req, res) => {
  res.json({ msg: "Update Team is work" });
});

const deleteTeam = asyncHandler(async (req, res) => {
  res.json({ msg: "delete Team is work" });
});

export default {
  getAllTeam,
  getTeam,
  UpdateTeam,
  deleteTeam,
  createTeam,
};
