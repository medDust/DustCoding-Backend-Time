import Team from "../models/equipeModel.js";
import asyncHandler from "express-async-handler";

// create new team
const createTeam = asyncHandler(async (req, res) => {
  const newTeam = await Team.create({
    project: req.params.id,
    user: req.user.id,
  });
  res.status(200).json(newTeam);
});

// get one team
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

const updateTeam = asyncHandler(async (req, res) => {
  const UpdateMember = Team.findById({ UserId: req.user.id });
  if (!UpdateMember) {
    res.status(401);
    throw new Error("user not found");
  } else {
    UpdateMember.UserId = req.body.UserId || UpdateMember.UserId;
    const update = await UpdateMember.save();

    res.status(200).send(update.data);
  }
  res.json({ msg: "Update Team is work" });
});

const deleteTeam = asyncHandler(async (req, res) => {
  const deleteMember = Team.findById({ UserId: req.user.id });
  deleteMember.deleteOne();
  res.status(200).json({ msg: "delete Team is work" });
});

export { getTeam, createTeam, updateTeam, getAllTeam, deleteTeam };
