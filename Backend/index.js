import express from "express";
import cors from "cors";
import Color from "colors";
import dovenv from "dotenv/config";
import apiUser from "./Routes/userRoutes.js";
import apiArt from "./Routes/articlesRouter.js";
import apiMails from "./Routes/mailRouter.js";
import apiSdl from "./Routes/slideRouter.js";
import apiProject from "./Routes/projectRouter.js";
import apiSrv from "./Routes/servicesRouter.js";
import errorHandler from "./Middleware/errorMiddleware.js";
//import requesProjectRouter from "./Routes/requestProjectRouter.js";
import morgan from "morgan";

import connectDB from "./Config/database.js";
const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/auth", apiUser);
app.use("/api/reqPro", apiProject);
app.use("/api/articles", apiArt);
app.use("/api/mails", apiMails);
app.use("/api/slides", apiSdl);
app.use("/api/services", apiSrv);
app.use("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});
app.use(errorHandler);
//port listen
app.listen(port);
