import asyncHandler from "express-async-handler";
import article from "../models/articlesModel.js";

// read method
const getArticle = asyncHandler(async (req, res) => {
  const articles = await article.find().all();
  if (!article) {
    res.status(400);
    throw new Error("is not article");
  }
  res.status(200).json(articles);
});
// read method
const getArticleById = asyncHandler(async (req, res) => {
  const articles = await article.findById({ _id: req.params.id });
  if (!article) {
    res.status(400);
    throw new Error("is not article");
  }
  res.status(200).json(articles);
});

// create method
const setArticles = asyncHandler(async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      res.status(400);
      throw new Error("please add everything");
    }

    const newArticle = await article.create({
      title: req.body.title,
      description: req.body.description,
      image: req.file.image,
    });
    return res.status(200).send({ Article: newArticle });
  } catch (err) {
    return res.status(400).send({
      msg: err.message,
    });
  }
});

//update method
const updateArticles = asyncHandler(async (req, res) => {
  try {
    let update = new article({ _id: req.params._id });
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      req.body.update = JSON.parse(req.body.update);
      Update = {
        _id: req.params.id,
        title: req.body.Update.title,
        description: req.body.Update.description,
        image: url + "/images/" + req.file.filename,
      };
    } else {
      update = {
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
      };
    }
    article
      .findByIdAndUpdate({ _id: req.params.id }, update)
      .then(() => {
        res.status(201).json({
          update,
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
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
export {
  getArticle,
  setArticles,
  updateArticles,
  delateArticle,
  getArticleById,
};
