import tasks from "../models/tasksModel.js";

import asyncHandler from "express-async-handler";

// get all tasks
const getTasks = asyncHandler(async (req, res) => {
  const task = await tasks.find({ projectId: req.params.projectId });
  if (!task) {
    res.status(400);
    throw new Error("is not tasks");
  }
  res.status(200).json(task);
});
// get tasks by pro
const getTask = asyncHandler(async (req, res) => {
  const task = await tasks.find({ _id: req.params.id });
  if (!task) {
    res.status(400);
    throw new Error("is not tasks");
  }
  res.status(200).json(task);
});

// create method
const setTask = asyncHandler(async (req, res) => {
  const id = req.params.projectId;
  const name = req.body.name;
  try {
    if (!req.body.name && !req.params.projectId) {
      res.status(400);
      throw new Error("please add everything ");
    }

    const newTask = await tasks.create({
      name: name,
      projectId: id,
    });
    return res.status(200).json(newTask);
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
});

//update method
const updateTask = asyncHandler(async (req, res) => {
  const task = await tasks.findById({ _id: req.params.id });
  //check task
  if (!task) {
    res.status(401);
    throw new Error("user not found");
  } else {
    task.name = req.body.name || task.name;
    const update = await task.save();

    res.status(200).send(update.data);
  }
});

// delate method
const delateTask = asyncHandler(async (req, res) => {
  const task = await tasks.findById({ _id: req.params.id });
  if (!task) {
    res.status(400);
    throw new Error("is not tasks");
  }
  await task.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export { getTasks, setTask, updateTask, delateTask, getTask };
