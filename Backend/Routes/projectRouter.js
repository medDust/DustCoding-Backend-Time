import express from "express";
import {
  getClients,
  setClients,
  updateClient,
  delateClient,
} from "../Controllers/clientsController.js";

const router = express.Router();

router.route("/").get(getClients).post(setClients);
router.route("/:id").put(updateClient).delete(delateClient);

export default router;
