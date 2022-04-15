import express from "express";
import {
  getProject,
  setProjects,
  updateProjects,
  delateProjects,
  getAllProject,
} from "../Controllers/projectController.js";

const router = express.Router();

router.route("/").get(getAllProject).post(setProjects);
router.route("/:id").put(updateProjects).delete(delateProjects).get(getProject);

export default router;
