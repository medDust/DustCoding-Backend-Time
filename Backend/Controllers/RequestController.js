import Request from "../models/RequestModel.js";
import Users from "../models/userModel.js";
import asyncHandler from "express-async-handler";
const setRequest = asyncHandler(async (req, res) => {
  const user = req.body.userId;
  const title = req.body.title;
  const description = req.body.description;
  console.log({ user, title, description });
  if (user && title && description) {
    const name = await Users.findById(user).then((res) => res.username);
    console.log(name);
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

export { setRequest };
