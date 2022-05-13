import asyncHandler from "express-async-handler";
import slide from "../models/slidesModel.js";

// read method
const getSlide = asyncHandler(async (req, res) => {
  const slides = await slide.find();
  if (!slide) {
    res.status(400);
    throw new Error("is not slider");
  }
  res.status(200).json(slides);
});

// create method
const setSlides = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description ) {
    res.status(400);
    throw new Error("please add everything ");
  }

  const newSlide = await slide.create({
    title: req.body.title,
    description: req.body.description,
  
  });
  res.status(200).json(newSlide);
});

//update method
const updateSlides = asyncHandler((req, res) => {
  const body = req.body;
  slide.updateOne({ _id: req.params.id }, body, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.send("updated");
  });

  res.status(200);
});

// delate method
const delateSlide = asyncHandler(async (req, res) => {
  const slides = await slide.findById(req.params.id);
  if (!slides) {
    res.status(400);
    throw new Error("is not slides");
  }
  await slides.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export { getSlide, setSlides, updateSlides, delateSlide };
