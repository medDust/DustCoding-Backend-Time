import express from "express";
import uploads from "../Middleware/storeImage.js";
import {
  register,
  login,
  logout,
  refreshTokens,
  getUser,
  getUsers,
  registerEmp,
  UpdateUser,
  deleteUser,
} from "../Controllers/userController.js";
import protect from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/signUp", register);
router.post("/signUpEmp", registerEmp);
router.post("/signIn", login);
router.get("/logout", logout);
router.get("/info/:id", getUser);
router.get("/infos", getUsers);

router.get("/refresh_token", refreshTokens);
router.patch("/:_id", UpdateUser);
router.delete("/delete-user/:_id", deleteUser);

export default router;
