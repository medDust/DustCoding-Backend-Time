import Users from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { CLIENT_URL } = process.env;

const userController = {
  register: async (req, res) => {
    try {
      const { username, email, password, fullName } = req.body;
      if (!username || !email || !password || !fullName) {
        return res.status(400).json({ msg: "please fill all fields." });
      }
      if (!validateEmail(email)) {
        return res.status(400).json({ msg: "Invalid E-Mail" });
      }
      const user = await Users.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "this email already exists" });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters" });
      }
      const passwordHash = await bcrypt.hash(password, 15);
      const newUser = {
        username,
        fullName,
        email,
        password: passwordHash,
      };

      const activation_token = createActivationToken(newUser);
      const url = `${CLIENT_URL}/user/activate/${activation_token}`;
    //  SendMail(email, url);
      res.json({
        msg: "Register Success! Please activate your email to start",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_ACTIVATION, { expiresIn: "5m" });
};
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_ACCESS, { expiresIn: "5m" });
};
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH, { expiresIn: "5m" });
};
export { userController };
