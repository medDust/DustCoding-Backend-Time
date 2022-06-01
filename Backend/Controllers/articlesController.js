import AsyncHandler from "express-async-handler";
import article from "../models/articlesModel.js";
import fs from "fs/promises";
// read method
const getArticle = AsyncHandler(async (req, res) => {
  const articles = await article.find().all();
  if (!article) {
    res.status(400);
    throw new Error("is not article");
  }
  res.status(200).json(articles);
});
// read method
const getArticleById = AsyncHandler(async (req, res) => {
  const articles = await article.findById({ _id: req.params.id });
  if (!article) {
    res.status(400);
    throw new Error("is not article");
  }
  // const Image = articles.image;
  // const images = fs.readFile("/images", Image);
  // res.send(images);
  return res.status(200).send(articles);
});

// create method
const setArticles = AsyncHandler(async (req, res) => {
  try {
    //console.log(req.body.image);
    if (!req.body.title || !req.body.description || !req.body.image) {
      res.status(400);
      throw new Error("something is wrong");
    }
    console.log(image);
    var file = req.file.filename;
    const newArticle = await article.create({
      title: req.body.title,
      description: req.body.description,
      image: file,
    });
    return res.status(200).send(newArticle);
  } catch (err) {
    return res.status(400).send({
      msg: err.message,
    });
  }
});

//update method
const updateArticles = AsyncHandler(async (req, res) => {
  const Title = req.body.title;
  const Description = req.body.description;
  const ArticleImages = req.file.filename;
  if (!Title || !Description || !ArticleImages) {
    res.status(400);
    throw new Error("please add everything");
  }
  const newArticle = await article.create({
    title: req.body.title,
    description: req.body.description,
    image: req.file.ArticleImage,
  });

  return res.status(200).send({ Article: newArticle });
});

// delate method
const delateArticle = AsyncHandler(async (req, res) => {
  const articles = await article.findById(req.params.id);
  if (!articles) {
    res.status(400);
    throw new Error("is not articles");
  }

  await articles.deleteOne();
  res.status(200).json({ id: req.params.id });
});
export {
  getArticle,
  setArticles,
  updateArticles,
  delateArticle,
  getArticleById,
};
