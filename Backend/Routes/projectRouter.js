import express from "express";
import {
  getProject,
  setProjects,
  updateProjects,
  delateProjects,
} from "../Controllers/projectController.js";

const router = express.Router();

router.route("/:id").get(getProject).post(setProjects);
router.route("/:id").put(updateProjects).delete(delateProjects);

export default router;
