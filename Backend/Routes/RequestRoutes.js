import express from "express";
import {
  getAllRequests,
  getRequestByClientId,
  getRequestById,
  setRequest,
  UpdateRequest,
} from "../Controllers/RequestController.js";

const router = express.Router();
router.route("/Client/:ClientId").get(getRequestByClientId);
router.route("/:id").get(getRequestById).put(UpdateRequest);
router.route("/").post(setRequest).get(getAllRequests);

export default router;
