import project from "../models/projectModels.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import Tasks from "../models/TasksModel.js";
const getProject = asyncHandler(async (req, res) => {
  const projects = await project.findById({
    _id: req.params.id,
  });
  if (!projects) {
    res.status(400);
    throw new Error("is not projects");
  }
  res.status(200).json(projects);
});

const getAllProject = asyncHandler(async (req, res) => {
  const projects = await project.find();
  if (!projects) {
    res.status(400);
    throw new Error("is not projects");
  }
  res.status(200).send(projects);
});

// create method
const setProjects = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("please add everything ");
  }
  const title = req.body.title;
  const userId = req.body.userId;
  const dateDeb = req.body.dateBeguin;
  const dateEnd = req.body.dateEnd;
  if (userId) {
    const name = await User.findOne({ _id: userId });
    const fullName = name.fullName;
    const newProject = await project.create({
      title: title,
      userId: userId,
      fullName: fullName,
      dateBeguin: dateDeb,
      dateEnd: dateEnd,
    });
    res.status(200).send({ Project: newProject });
  }
});

//update method
const updateProjects = asyncHandler(async (req, res) => {
  const projects = await project.findById(req.params.id);
  const title = req.body.title;
  const state = req.body.state;
  if (!projects) {
    res.status(401);
    throw new Error();
  } else {
    projects.title = title || projects.title;
    projects.state = state || projects.state;
    const updated = await projects.save();
    return res.status(200).send(updated);
  }
});

// delate method
const delateProjects = asyncHandler(async (req, res) => {
  const projects = await project.findById(req.params.id);
  // const Task = await Tasks.countDocuments({ projectId: req.params.id });
  if (!projects) {
    res.status(400);
    throw new Error("is not projects");
  }
  // await Tasks.deleteMany({projectId : projects._id});
  await projects.deleteOne();
  res.status(200).json({ id: req.params.id }, { Task });
});

export {
  getProject,
  setProjects,
  getAllProject,
  updateProjects,
  delateProjects,
};
