import express from "express";
import {
  getService,
  setServices,
  updateServices,
  delateServices,
  getServiceById,
} from "../Controllers/servicesController.js";

const router = express.Router();

router.route("/").get(getService).post(setServices);
router
  .route("/:id")
  .put(updateServices)
  .delete(delateServices)
  .get(getServiceById);

export default router;
