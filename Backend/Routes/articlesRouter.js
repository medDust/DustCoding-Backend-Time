import express from "express";
import uploads from "../Middleware/storeImage.js";
//import multer from "multer";
import {
  getArticle,
  setArticles,
  updateArticles,
  delateArticle,
  getArticleById,
} from "../Controllers/articlesController.js";

const router = express.Router();
//const upload = multer();
router.route("/").get(getArticle);
router.route("/").post(setArticles);
router.route("/").put(updateArticles);
router.route("/:id").delete(delateArticle).get(getArticleById);

export default router;
