import asyncHandler from "express-async-handler";
import service from "../models/servicesModel.js";
// read method
const getService = asyncHandler(async (req, res) => {
  const services = await service.find();
  if (!service) {
    res.status(400);
    throw new Error("is not services");
  }
  res.status(200).json(services);
});

// create method
const setServices = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.image) {
    res.status(400);
    throw new Error("please add everything ");
  }

  const newService = await service.create({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });
  res.status(200).json(newService);
});

//update method
const updateServices = asyncHandler((req, res) => {
  const body = req.body;
  service.updateOne({ _id: req.params.id }, body, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.send("updated");
  });

  res.status(200);
});

// delate method
const delateServices = asyncHandler(async (req, res) => {
  const services = await service.findById(req.params.id);
  if (!services) {
    res.status(400);
    throw new Error("is not services");
  }
  await services.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export { getService, setServices, updateServices, delateServices };
