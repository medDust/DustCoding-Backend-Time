import Request from "../models/RequestModel.js";
import Users from "../models/userModel.js";
import asyncHandler from "express-async-handler";
const setRequest = asyncHandler(async (req, res) => {
  const user = req.body.userId;
  const title = req.body.title;
  const description = req.body.description;

  if (user && title && description) {
    const name = await Users.findById(user).then((res) => res.username);

    const newRequest = await Request.create({
      title: title,
      description: description,
      userId: user,
      ClientName: name,
    });
    return res.status(200).json(newRequest);
  } else {
    return res.status(400).send("your some problems");
  }
});

const getAllRequests = asyncHandler(async (req, res) => {
  try {
    const Requests = await Request.find().all();
    if (Requests) {
      res.status(200).send(Requests);
    } else {
      res.status(400).send("No request");
    }
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
});

const getRequestByClientId = asyncHandler(async (req, res) => {
  const Requests = await Request.find({ userId: req.params.ClientId }).all();
  if (Requests) {
    res.status(200).send(Requests);
  } else {
    res.status(400);
    throw new Error("is not services");
  }
});
const getRequestById = asyncHandler(async (req, res) => {
  try {
    const Requests = await Request.findById(req.params.id);
    if (Requests) {
      res.status(200).send(Requests);
    } else {
      res.status(400).send("No request");
    }
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
});
const UpdateRequest = asyncHandler(async (req, res) => {
  try {
    const Requests = await Request.findById(req.params.id);

    if (!Requests) {
      res.status(401);
      throw new Error("Task not found");
    } else {
      Requests.title = req.body.title || Requests.title;
      Requests.url = req.body.url || Requests.url;
      Requests.status = req.body.status || Requests.status;
      const updated = await Requests.save();
      res.status(200).send({ updated });
    }
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
});

export {
  setRequest,
  getAllRequests,
  getRequestById,
  UpdateRequest,
  getRequestByClientId,
};
