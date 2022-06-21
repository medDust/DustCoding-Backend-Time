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
const teamMember = tea.map
  res.status(200).send(team);
});

const getTeamById = asyncHandler(async (req, res) => {
  const team = await Team.find({ _id: req.params.TeamId });
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
  try {
    const TeamId = req.params.TeamId;
    const userId = req.body.userId;

    if (TeamId) {
      const team = await Team.findOne({ TeamId });
      const user = await team.UserId.includes(userId);
      if (user) {
        return res.status(400).send("employer exist");
      } else {
        team.UserId.push(userId);
        team.save();
        return res.status(200).send(team);
      }
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

const deleteTeam = asyncHandler(async (req, res) => {
  const id = req.params.TeamId;
  try {
    const deleteMember = await Team.findById({ _id: id });
    deleteMember.deleteOne();
    res.status(200).json({ msg: "delete Team is work" });
  } catch (error) {
    return res.status(400).send("failed request delate");
  }
});

const deleteTeamMember = asyncHandler(async (req, res) => {
  try {
    const team = await Team.findOne({ projectId: req.params.projectId });
    const userId = req.body.userId;
    if (team) {
      const user = await team.UserId.includes(userId);
      if (user) {
        const userIndex = await team.UserId.indexOf(userId);
        await team.UserId.splice(userIndex, 1);
        await team.save();
        return res.status(200).send(team);
      } else {
        console.log(userId);
        return res.status(400).send("employer not exist");
      }
    } else {
      return res.status(400).send("employer not exist");
    }
  } catch (error) {
    res.status(404).send({ err: error.message });
  }
});

export {
  getTeam,
  createTeam,
  updateTeam,
  getAllTeam,
  deleteTeam,
  deleteTeamMember,
  getTeamById,
};
