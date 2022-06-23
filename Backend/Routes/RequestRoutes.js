import express from "express";
import { setRequest } from "../Controllers/RequestController.js";

const router = express.Router();

router.route("/").post(setRequest);

export default router;
