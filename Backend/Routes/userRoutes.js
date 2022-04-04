import express from "express";
import {
  register,
  login,
  logout,
  refreshTokens,
  getUser,
  getUsers,
  registerEmp,
} from "../Controllers/userController.js";
import protect from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/signUp", register);
router.post("/signUpEmp", registerEmp);
router.post("/signIn", login);
router.get("/logout", logout);
router.get("/info", protect, getUser);
router.get("/infos", getUsers);
router.get("/refresh_token", refreshTokens);

export default router;
