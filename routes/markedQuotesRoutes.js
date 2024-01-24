import express from "express";
import {
  retrieveAllMarkedQuotes,
  createUpdateMarkedQuotes,
  getAllMarkedQuotesCount,
} from "../controller/markedQuotesController.js";

const router = express.Router();

router.route("/backup").post(createUpdateMarkedQuotes);
router.route("/restore").post(retrieveAllMarkedQuotes);
router.route("/getCount").post(getAllMarkedQuotesCount);

export default router;
