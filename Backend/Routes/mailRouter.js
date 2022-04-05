import express from "express";
import { getEmails, setEmails } from "../Controllers/mailsController.js";

const router = express.Router();

router.route("/").get(getEmails).post(setEmails);
//router.route("/:id").put(updateArticles).delete(delateArticle);

export default router;
