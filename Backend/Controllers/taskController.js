import Tasks from "../models/TasksModel.js";
import project from "../models/projectModels.js";
import asyncHandler from "express-async-handler";

// get all tasks
const getTasks = asyncHandler(async (req, res) => {
  const task = await Tasks.find({ projectId: req.params.projectId });
  if (!task) {
    res.status(400);
    throw new Error("is not tasks");
  }
  res.status(200).json(task);
});
// get tasks by pro
const getTask = asyncHandler(async (req, res) => {
  const projectId = req.params.projectId;
  const taskId = req.params.id;

  try {
    if (projectId && taskId) {
      const task = await Tasks.findById(taskId);
      if (!task) {
        res.status(400);
        throw new Error("is not a task");
      }
      return res.send(task);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

// create method
const setTask = asyncHandler(async (req, res) => {
  const id = req.params.projectId;
  const name = req.body.name;
  try {
    if (!req.body.name && !req.params.projectId) {
      res.status(400);
      throw new Error(
        "please add everything or you must be inside project page "
      );
    }
    const newTask = await Tasks.create({
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
  const task = await Tasks.findById({ _id: req.params.id });
  //check task
  if (!task) {
    res.status(401);
    throw new Error("Task not found");
  } else {
    task.name = req.body.name || task.name;
    task.userId = req.body._id || task._id;
    task.url = req.body.url || task.url;
    task.position = req.body.position || task.position;
    const updated = await task.save();
    res.status(200).send({ updated });
  }
});

// delate method
const delateTask = asyncHandler(async (req, res) => {
  await Tasks.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
    if (err) {
      return res.status(400).json({ err: err.message });
    } else {
      return res.status(200).send(req.params.id);
    }
  });
});

export { getTasks, setTask, updateTask, delateTask, getTask };
