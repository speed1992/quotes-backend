import express from "express";
import {
  retrieveAllMarkedQuotes,
  createUpdateMarkedQuotes,
} from "../controller/markedQuotesController.js";

const router = express.Router();

router.route("/backup").post(createUpdateMarkedQuotes);
router.route("/restore").post(retrieveAllMarkedQuotes);

export default router;
