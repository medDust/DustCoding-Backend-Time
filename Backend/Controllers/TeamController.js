import Team from "equipeModel.js";

import asyncHandler from "express-async-handler";
//get
const createTeam = asyncHandler(async (req, res) => {
  const newTeam = await Team.create({
    project: req.params.id,
    user: req.user.id,
  });
  res.status(200).json(newTeam);
});

const getTeam = asyncHandler(async (req, res) => {
  const Equip = await Team.findById({ _id: req.params.id });
  if (!Equip) {
    res.status(400);
    throw new Error({ msg: "is not define " });
  }

  res.status(200).send(Equip);
});

const getAllTeam = asyncHandler(async (req, res) => {
  try {
    const equips = await Team.find().all();

    return res.status(200).send(equips);
  } catch (err) {
    return res.status(401).send({ msg: err.message });
  }
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
