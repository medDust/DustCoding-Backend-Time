import express from "express";
import {
  getTasks,
  setTask,
  updateTask,
  delateTask,
  getTask,
} from "../Controllers/taskController.js";

const router = express.Router();

router.route("/:projectId/").get(getTasks).post(setTask);
router.route("/:projectId/Tasks/:id").get(getTask);
router.route("/:id").delete(delateTask);
router.route("/:projectId/Tasks/:id").put(updateTask).delete(delateTask);

export default router;
