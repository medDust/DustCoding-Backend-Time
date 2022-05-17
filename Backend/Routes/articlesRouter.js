import express from "express";
import uploads from "../Middleware/storeImage.js";

import {
  getArticle,
  setArticles,
  updateArticles,
  delateArticle,
  getArticleById,
} from "../Controllers/articlesController.js";

const router = express.Router();

router.route("/").get(getArticle);
router.route("/", uploads.single("image")).post(setArticles);
router.route("/:id", uploads.single("image")).put(updateArticles);
router.route("/:id").delete(delateArticle).get(getArticleById);

export default router;
