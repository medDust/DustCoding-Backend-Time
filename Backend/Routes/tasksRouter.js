import express from "express";
import {
  getTasks,
  setTask,
  updateTask,
  delateTask,
  getTask,
} from "../Controllers/taskController.js";

const router = express.Router();
router.route("/").get(getTasks);
router.route("/:projectId/").get(getTasks).post(setTask);
router.route("/:id").delete(delateTask).get(getTask).delete(delateTask);
router.route("/:projectId/Tasks/:id").put(updateTask);

export default router;
