import express from "express";
import {
  getService,
  setServices,
  updateServices,
  delateServices,
} from "../Controllers/servicesController.js";
import protect from "../Middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getService).post(protect, setServices);
router
  .route("/:id")
  .put(protect, updateServices)
  .delete(protect, delateServices);

export default router;
