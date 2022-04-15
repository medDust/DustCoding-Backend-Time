import express from "express";

import {
  getTeam,
  createTeam,
  UpdateTeam,
  getAllTeam,
  deleteTeam,
} from "../Controllers/TeamController.js";

const router = express.Router();

router.route("/:id/Team/").get(getTeam).post(createTeam);
router.route("/:id").get(getAllTeam);

router.route("/:id/Team/:id").put(UpdateTeam).delete(deleteTeam);

export default router;