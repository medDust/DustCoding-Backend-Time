import tasks from "../models/tasksModel.js";

import asyncHandler from "express-async-handler";

const getTask = asyncHandler(async (req, res) => {
  const task = await tasks.find();
  if (!task) {
    res.status(400);
    throw new Error("is not tasks");
  }
  res.status(200).json(task);
});

// create method
const setTasks = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("please add everything ");
  }

  const newTask = await tasks.create({
    name: req.body.name,
    projectId: req.params.id,
   // team: req.body._id,
  });
  res.status(200).json(newTask);
});

//update method
const updateTasks = asyncHandler(async (req, res) => {
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
const delateTasks = asyncHandler(async (req, res) => {
  const task = await tasks.findById({ _id: req.params.id });
  if (!task) {
    res.status(400);
    throw new Error("is not tasks");
  }
  await task.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export { getTask, setTasks, updateTasks, delateTasks };
