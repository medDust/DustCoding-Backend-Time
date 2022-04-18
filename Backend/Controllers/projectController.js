import project from "../models/projectModels.js";
import user from "../models/userModel.js";

import asyncHandler from "express-async-handler";

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

  const newProject = project.create({
    title: req.body.title,
  });
  res.status(200).send({ Project: newProject._id });
});

//update method
const updateProjects = asyncHandler(async (req, res) => {
  const project = await Projects.findById(req.project.id);

  //ckeck client
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  if (projects.user.toString() !== user.id) {
    res.status(401);
    throw new Error();
  }
  const body = req.body;
  project.updateOne({ _id: req.params.id }, body, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send("updated");
  });

  res.status(200).json({ project });
});

// delate method
const delateProjects = asyncHandler(async (req, res) => {
  const projects = await project.findById(req.params.id);
  if (!projects) {
    res.status(400);
    throw new Error("is not projects");
  }
  await projects.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export {
  getProject,
  setProjects,
  getAllProject,
  updateProjects,
  delateProjects,
};
