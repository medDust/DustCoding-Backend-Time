import express from "express";
import cors from "cors";
import Color from "colors";
import dovenv from "dotenv/config";
import apiUser from "./Routes/userRoutes.js";
import apiArt from "./Routes/articlesRouter.js";
import apiSdl from "./Routes/slideRouter.js";
import apiSrv from "./Routes/servicesRouter.js";
import apichat from "./Routes/chatRouter.js";
import errorHandler from "./Middleware/errorMiddleware.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./Config/database.js";
const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/auth", apiUser);
app.use("/api/articles", apiArt);
app.use("/api/slides", apiSdl);
app.use("/api/services", apiSrv);
app.use("/api/chat", apichat);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});
app.use(errorHandler);
//port listen
app.listen(port);
