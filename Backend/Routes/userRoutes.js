import express from "express";
import { userController } from "../Controllers/userController.js";
const router = express.Router();

router.route("/signUp").post(userController.register);
//router.route("/logged/").get(getClient);

export default router;
