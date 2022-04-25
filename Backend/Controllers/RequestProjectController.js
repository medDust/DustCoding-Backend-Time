import asyncHandler from "express-async-handler";
import RequestProjects from "../models/RequestProjectModel.js";
// import { isEmpty } from "validator/lib/isEmpty";
const CreateRequest = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  // if (isEmpty(title) || isEmpty(description)) {
  //   res.status(400);
  //   throw new Error("please add everything ");
  // }
  const RequestProject = await RequestProjects.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id,
  });
  res.status(200).json(RequestProject);
});

export default { CreateRequest };
