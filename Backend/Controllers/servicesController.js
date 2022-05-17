import AsyncHandler from "express-async-handler";
import service from "../models/servicesModel.js";
// read method
const getService = AsyncHandler(async (req, res) => {
  const services = await service.find();
  if (!service) {
    res.status(400);
    throw new Error("is not services");
  }
  res.status(200).json(services);
});

//get by id
const getServiceById = AsyncHandler(async (req, res) => {
  const services = await service.findOne({ _id: req.params.id });
  if (!service) {
    res.status(400);
    throw new Error("is not services");
  }
  res.status(200).json(services);
});

// create method
const setServices = AsyncHandler(async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      res.status(400);
      throw new Error("please add everything ");
    }

    const newService = await service.create({
      title: req.body.title,
      description: req.body.description,
    });
    res.status(200).json(newService);
  } catch (err) {
    res.status(400).send({
      msg: err.message,
    });
  }
});

//update method
const updateServices = AsyncHandler(async (req, res) => {
  try {
    const serviceUpdated = await service.findById(req.params.id);
    if (!serviceUpdated) {
      res.status(400);
      throw new Error();
    } else {
      const title = req.body.title;
      const description = req.body.description;
      serviceUpdated.title = title || serviceUpdated.title;
      serviceUpdated.description = description || serviceUpdated.description;
    }
    const update = await serviceUpdated.save();

    return res.status(200).send(update);
  } catch (err) {
    return res.status(404).send({ err: err.message });
  }
});

// delate method
const delateServices = AsyncHandler(async (req, res) => {
  const services = await service.findById(req.params.id);
  if (!services) {
    res.status(400);
    throw new Error("is not services");
  }
  await services.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export {
  getService,
  setServices,
  updateServices,
  delateServices,
  getServiceById,
};
