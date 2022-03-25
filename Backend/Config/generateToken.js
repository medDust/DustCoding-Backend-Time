import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_ACCESS, {
    expiresIn: "2m",
  });
};

export default generateToken;
