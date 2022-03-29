import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import AsyncHandler from "express-async-handler";
import Users from "../models/userModel.js";

const register = AsyncHandler(async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    if (!username || !email || !password || !fullName) {
      res.status(401);
      throw new Error("please entre all filed");
    }
    if (!validator.isEmail(email)) {
      res.status(401).json("Invalid mail");
    }
    const userExists = await Users.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const passwordHash = await bcrypt.hash(password, 15);

    const user = await Users.create({
      username,
      fullName,
      email,
      password: passwordHash,
    });

    const token = createAccessToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    if (user) {
      res.status(201).json({
        SuccessMsg: "Account created Success",
      });
    } else {
      res.status(400).json("failed request");
      throw new Error("Failed to create the user");
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

const login = AsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401);
      throw new Error("please entre all filed");
    }

    const user = await Users.findOne({ email });

    if (!validator.isEmail(email)) {
      return res.status(401).json("Invalid mail");
    }
    if (!user) {
      return res.status(400).json({ ErrMessage: "user invalid" });
    }
    const verifPwd = await bcrypt.compare(password, user.password);

    if (!verifPwd) {
      return res.status(401).send({
        accessToken: null,
        ErrMessage: "Invalid Password!",
      });
    }

    const token = createAccessToken(user._id);
    const data = {
      id: user._id,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    };
    if (user && verifPwd) {
      res.status(200).json({
        token,
        data,
        SuccessMsg: "Logged success",
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (err) {
    return res.status(500).json({ ErrMessage: err.message });
  }
});
const logout = AsyncHandler(async (req, res) => {
  try {
    res.clearCookie("refreshToken", { path: "/user/refresh_token" });
    return res.json({ msg: "Logged Out" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const refreshTokens = AsyncHandler(async (req, res) => {
  try {
    const rf_token = req.cookies.refreshToken;
    if (!rf_token) {
      res.status(400).json({ msg: "please Login or Register" });
    }
    jwt.verify(rf_token, process.env.JWT_REFRESH, (err, user) => {
      if (err) {
        return res.status(400).json({ msg: "please Login or Register" });
      }
      const accessToken = createAccessToken({ id: user.id });
      res.json({ accessToken });
    });
    res.json({ rf_token });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const getUser = AsyncHandler(async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).select("-password");
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    res.json(user);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const createAccessToken = ({ id }) => {
  return jwt.sign({ id }, process.env.JWT_ACCESS, { expiresIn: "11m" });
};

{
  /* const allUsers = AsyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await users.find(keyword).find({
    _id: { $ne: req.user_id },
  });
  res.send(users);
});*/
}

export { register, login, logout, refreshTokens, getUser };
