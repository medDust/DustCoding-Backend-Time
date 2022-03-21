import project from "../models/projectModels";
import Client from "../models/clientsModel";
import Employer from "../models/employerModel";
import asyncHandler from "express-async-handler";

const getProject = asyncHandler(async (req, res) => {
  const projects = await project.find({
    client: req.client.id,
    employer: req.employer.id,
  });
  if (!project) {
    res.status(400);
    throw new Error("is not projects");
  }
  res.status(200).json(projects);
});

// create method
const setProjects = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.planing) {
    res.status(400);
    throw new Error("please add everything ");
  }

  const newProduct = await project.create({
    title: req.body.title,
    description: req.body.description,
    planing: req.body.planing,
    employer: req.employer.id,
    client: req.client.id,
  });
  res.status(200).json(newProduct);
});

//update method
const updateProjects = asyncHandler((req, res) => {
  const client = await Client.findById(req.client.id);
  const employer = await Employer.findById(req.employer.id);
  //ckeck client
  if (!client || !employer) {
    res.status(401);
    throw new Error("user not found");
  }
  if (project.client.toString() !== client.id) {
    res.status(401);
    throw new Error();
  }
  const body = req.body;
  project.updateOne({ _id: req.params.id }, body, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.send("updated");
  });

  res.status(200);
});

// delate method
const delateProjects = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.client.id);
  const employer = await Employer.findById(req.employer.id);
  //check client
  if (!client || !employer) {
    res.status(401);
    throw new Error("user not found");
  }
  if (project.client.toString() !== client.id) {
    res.status(401);
    throw new Error();
  }
  const projects = await project.findById(req.params.id);
  if (!projects) {
    res.status(400);
    throw new Error("is not projects");
  }
  await projects.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export { getProject, setProjects, updateProjects, delateProjects };
