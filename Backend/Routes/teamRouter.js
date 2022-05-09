import express from "express";

import {
  getTeam,
  createTeam,
  updateTeam,
  getAllTeam,
  getTeamById,
  deleteTeam,
  deleteTeamMember,
} from "../Controllers/TeamController.js";

const router = express.Router();

router.route("/:TeamId").get(getTeamById).put(updateTeam).delete(deleteTeam);
router
  .route("/:projectId/")
  .get(getTeam)
  .post(createTeam)
  .delete(deleteTeamMember);
router.route("/").get(getAllTeam);

// router.route("/:projectId/Team/:id").put(updateTeam).delete(deleteTeam);

export default router;
