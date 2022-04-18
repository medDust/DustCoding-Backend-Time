import express from "express";

import {
  getTeam,
  createTeam,
  updateTeam,
  getAllTeam,
  deleteTeam,
} from "../Controllers/TeamController.js";

const router = express.Router();

router.route("/:projectId/Team/").get(getTeam).post(createTeam);
router.route("/:projectId/Team").get(getAllTeam);

router.route("/:projectId/Team/:id").put(updateTeam).delete(deleteTeam);

export default router;
