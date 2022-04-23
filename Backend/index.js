import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import Color from "colors";
import dovenv from "dotenv/config";

import apiUser from "./Routes/userRoutes.js";
import apiTeam from "./Routes/teamRouter.js";
import apiArt from "./Routes/articlesRouter.js";
import apiMails from "./Routes/mailRouter.js";
import apiSdl from "./Routes/slideRouter.js";
import apiTask from "./Routes/tasksRouter.js";
import apiProject from "./Routes/projectRouter.js";
import apiSrv from "./Routes/servicesRouter.js";

import errorHandler from "./Middleware/errorMiddleware.js";
import morgan from "morgan";

import connectDB from "./Config/database.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// authentication routes
app.use("/api/auth", apiUser);

// content routes
app.use("/api/articles", apiArt);
app.use("/api/services", apiSrv);
app.use("/api/slides", apiSdl);
app.use("/api/mails", apiMails);

// project management routes
app.use("/api/project", apiProject);
app.use("/api/Tasks", apiTask);
app.use("/api/Team", apiTeam);

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dustcoding/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "dustcoding", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("change to production mode please"));
}

app.use(errorHandler);
//port listen
app.listen(port);
