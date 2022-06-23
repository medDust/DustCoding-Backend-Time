import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

import cors from "cors";
import Color from "colors";
import dovenv from "dotenv/config";
import apiUser from "./Routes/userRoutes.js";
import apiTeam from "./Routes/teamRouter.js";
import apiArt from "./Routes/articlesRouter.js";
import apiMails from "./Routes/mailRouter.js";
import apiTask from "./Routes/tasksRouter.js";
import apiProject from "./Routes/projectRouter.js";
import apiSrv from "./Routes/servicesRouter.js";
import apiReq from "./Routes/RequestRoutes.js";
import errorHandler from "./Middleware/errorMiddleware.js";
import morgan from "morgan";
import fs from "fs/promises";
import connectDB from "./Config/database.js";
import uploads from "./Middleware/storeImage.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use(uploads.single("image"));

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.get("/images/", function (req, res) {
  // Render the 'game' template and pass in the gameid to the template
  res.sendFile(path.join(__dirname, "../images/Articles/"));
});
app.get("/images/:name", function (req, res, next) {});

// authentication routes
app.use("/api/auth", apiUser);

// content routes
app.use("/api/articles", apiArt);
app.use("/api/services", apiSrv);
app.use("/api/mails", apiMails);
app.use("/api/request", apiReq);
// project management routes
app.use("/api/project", apiProject);
app.use("/api/Tasks", apiTask);
app.use("/api/Team", apiTeam);

// production path
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dustcoding/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "dustcoding", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("change to production mode please"));
}

app.post("/api/image-upload", uploads.single("image"), (req, res) => {
  const image = req.file.filename;
  //console.log(req.image);
  res.send(apiResponse({ message: "5achena wala", imagename: image }));
});

function apiResponse(results) {
  return JSON.stringify({ status: 200, error: null, response: results });
}

app.use(errorHandler);
//port listen
app.listen(port);
