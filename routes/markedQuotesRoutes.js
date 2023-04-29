import express from "express";
import {
  getAllMarkedQuotes,
  createUpdateMarkedQuotes,
} from "../controller/markedQuotesController.js";

const router = express.Router();

router.route("/").get(getAllMarkedQuotes).post(createUpdateMarkedQuotes);

export default router;
