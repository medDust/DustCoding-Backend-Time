import express from "express";
import {
  getProject,
  setProjects,
  updateProjects,
  delateProjects,
  getAllProject,
  getAllProjectByClientId,
} from "../Controllers/projectController.js";

const router = express.Router();

router.route("/").get(getAllProject).post(setProjects);
router.route("/:id").put(updateProjects).delete(delateProjects).get(getProject);
router.route("/user/:userId").get(getAllProjectByClientId);

export default router;
