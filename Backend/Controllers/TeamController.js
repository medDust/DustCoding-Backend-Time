import Team from "../models/equipeModel.js";
import asyncHandler from "express-async-handler";

// create new team
const createTeam = asyncHandler(async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const userId = req.body.userId;
    if (!req.body.userId && !req.params.projectId) {
      res.status(400);
      throw new Error(
        "please add everything or you must be inside project page "
      );
    }

    const team = await Team.findOne({ projectId });
    if (team) {
      const user = await team.UserId.includes(userId);
      if (user) {
        return res.status(400).send("employer exist");
      } else {
        team.UserId.push(userId);
        team.save();
        return res.status(200).send(team);
      }
    } else {
      const newTeam = await Team.create({
        UserId: userId,
        projectId: projectId,
      });
      return res.status(200).json(newTeam);
    }
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
});

// get one team
const getTeam = asyncHandler(async (req, res) => {
  const team = await Team.find({ projectId: req.params.projectId });
  if (!team) {
    res.status(400);
    throw new Error({ msg: "is not define " });
  }

  res.status(200).send(team);
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
  const userId = req.body.userId;
  const user = await team.UserId.includes(userId);
  if (user) {
    return res.status(400).send("employer exist");
  } else {
    team.UserId.push(userId);
    team.save();
    return res.status(200).send(team);
  }
});

const deleteTeam = asyncHandler(async (req, res) => {
  const deleteMember = Team.findById({ projectId: req.params.projectId });
  deleteMember.deleteOne();
  res.status(200).json({ msg: "delete Team is work" });
});

const deleteTeamMember = asyncHandler(async (req, res) => {
  const team = await Team.findOne({ projectId: req.params.projectId });
  const userId = req.body.userId;
  if (team) {
    const user = await team.UserId.includes(userId);
    if (user) {
      const x = await team.UserId.find({ userId });
      console.log(x);
      team.save();
      return res.status(200).send(team);
    } else {
      return res.status(400).send("employer not exist");
    }
  } else {
    return res.status(400).send("employer not exist");
  }
});

export {
  getTeam,
  createTeam,
  updateTeam,
  getAllTeam,
  deleteTeam,
  deleteTeamMember,
};
