import asyncHandler from "express-async-handler";
import article from "../models/articlesModel.js";

// read method
const getArticle = asyncHandler(async (req, res) => {
  const articles = await article.find();
  if (!article) {
    res.status(400);
    throw new Error("is not article");
  }
  res.status(200).json(articles);
});

// create method
const setArticles = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.image) {
    res.status(400);
    throw new Error("please add everything ");
  }

  const newArticle = await article.create({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });
  res.status(200).json(newArticle);
});

//update method
const updateArticles = asyncHandler((req, res) => {
  const body = req.body;
  article.updateOne({ _id: req.params.id }, body, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.send("updated");
  });

  res.status(200);
});

// delate method
const delateArticle = asyncHandler(async (req, res) => {
  const articles = await article.findById(req.params.id);
  if (!articles) {
    res.status(400);
    throw new Error("is not articles");
  }
  await articles.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export { getArticle, setArticles, updateArticles, delateArticle };
