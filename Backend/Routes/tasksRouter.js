import express from "express";
import {
  getTasks,
  setTask,
  updateTask,
  delateTask,
  getTask,
  getTaskByEmployer,
} from "../Controllers/taskController.js";

const router = express.Router();
router.route("/").get(getTasks);
router.route("/employer/:userId").get(getTaskByEmployer);
router.route("/:projectId/").get(getTasks).post(setTask);
router
  .route("/:projectId/task/:id")
  .delete(delateTask)
  .get(getTask)
  .delete(delateTask);
router.route("/:id").put(updateTask).delete(delateTask);

export default router;
