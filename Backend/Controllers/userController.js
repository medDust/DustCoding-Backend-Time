import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import asyncHandler from "express-async-handler";
import Users from "../models/userModel.js";
//import uploads from "../Config/storeImage.js";

const register = asyncHandler(async (req, res) => {
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
const registerEmp = asyncHandler(async (req, res) => {
  try {
    const { fullName, username, email, password, department } = req.body;

    if (!username || !email || !password || !fullName || !department) {
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
    const role = 1;
    const user = await Users.create({
      username,
      fullName,
      email,
      department,
      role,
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

const login = asyncHandler(async (req, res) => {
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
const logout = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("refreshToken", { path: "/user/refresh_token" });
    res.clear;
    return res.json({ msg: "Logged Out" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const refreshTokens = asyncHandler(async (req, res) => {
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

const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await Users.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await Users.findById({ _id: req.params.id }).select(
      "-password"
    );
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    res.status(200).send(user);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const createAccessToken = ({ id }) => {
  return jwt.sign({ id }, process.env.JWT_ACCESS, { expiresIn: "11m" });
};

const UpdateUser = asyncHandler(async (req, res) => {
  try {
    const user = await Users.findById(req.params._id);
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.fullName = req.body.fullName || user.fullName;
      user.image = req.body.image || user.image;
      user.department = req.body.department || user.department;
      if (req.body.password) {
        const passwordHash = await bcrypt.hash(req.body.password, 15);
        user.password = passwordHash || user.password;
      }
      const updateUser = await user.save();
      return res.status(200).json({
        id: updateUser.id,
        username: updateUser.username,
        fullName: updateUser.fullName,
        email: updateUser.email,
        password: updateUser.password,
        department: updateUser.department,
        image: updateUser.image,
        token: createAccessToken(updateUser.id),
      });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = Users.findById(req.params._id);
    if (!user) {
      return res.status(400);
      throw new Error("is not articles");
    } else {
      await user.deleteOne();
      return res.status(201).json({ id: req.params._id });
    }
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});

export {
  register,
  login,
  logout,
  refreshTokens,
  getUser,
  getUsers,
  registerEmp,
  UpdateUser,
  deleteUser,
};
