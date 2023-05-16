import express from "express";
import {
  getAllMarkedQuotes,
  createUpdateMarkedQuotes,
} from "../controller/markedQuotesController.js";

import { loginUser, createUser } from "../controller/userController.js";

const router = express.Router();

router.route("/").get(getAllMarkedQuotes).post(createUpdateMarkedQuotes);
router.route("/user").get(loginUser).post(createUser);

export default router;
