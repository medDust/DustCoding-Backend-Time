import express from "express";
import {
  getTask,
  setTasks,
  updateTasks,
  delateTasks,
} from "../Controllers/taskController.js";

const router = express.Router();

router.route("/:id/Tasks").get(getTask).post(setTasks);
router.route("/:id").put(updateTasks).delete(delateTasks);

export default router;
