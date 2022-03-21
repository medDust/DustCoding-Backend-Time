import express from "express";
import dovenv from "dotenv/config";
import cors from "cors";
import Color from "colors";
import apiUser from "./Routes/userRoutes.js" 
import apiArt from "./Routes/articlesRouter.js";
import apiSdl from "./Routes/slideRouter.js";
import apiSrv from "./Routes/servicesRouter.js";
import errorHandler from "./Middleware/errorMiddleware.js";
import connectDB from "./Config/database.js";
const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", apiUser);
app.use("/api/articles", apiArt);
app.use("/api/slides", apiSdl);
app.use("/api/services", apiSrv);
app.use(errorHandler);
//port listen
app.listen(port);
