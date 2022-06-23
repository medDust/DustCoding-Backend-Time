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
router.get("/images/:name", function (req, res, next) {});

router.get("/images/", function (req, res) {
  // Render the 'game' template and pass in the gameid to the template
  res.sendFile(path.join(__dirname, "../images/Articles/"));
});
//const upload = multer();
router.route("/").get(getArticle);
router.route("/").post(setArticles);
router.route("/").put(updateArticles);
router.route("/:id").delete(delateArticle).get(getArticleById);

export default router;
