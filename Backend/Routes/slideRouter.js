import express from "express";
import {
  getSlide,
  setSlides,
  updateSlides,
  delateSlide,
} from "../Controllers/slidesController.js";

const router = express.Router();

router.route("/").get(getSlide).post(setSlides);
router.route("/:id").put(updateSlides).delete(delateSlide);

export default router;
