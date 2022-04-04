import asyncHandler from "express-async-handler";
import mail from "../models/MailsModel.js";

// read method
const getEmails = asyncHandler(async (req, res) => {
  const mails = await mail.find();
  if (!mail) {
    res.status(400);
    throw new Error("is not article");
  }
  res.status(200).json(mails);
});

// create method
const setEmails = asyncHandler(async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.description
  ) {
    res.status(400);
    throw new Error("please add everything ");
  }

  const newMail = await mail.create({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    phone: req.body.phone,
  });
  res.status(200).json(newMail);
});

export { getEmails, setEmails };
