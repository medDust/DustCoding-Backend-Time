import express from "express";
import {
  getArticle,
  setArticles,
  updateArticles,
  delateArticle,
} from "../Controllers/articlesController.js";

const router = express.Router();

router.route("/").get(getArticle).post(setArticles);
router.route("/:id").put(updateArticles).delete(delateArticle);

export default router;
