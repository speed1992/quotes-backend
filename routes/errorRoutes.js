import express from "express";
import { sendErrors } from "../controller/errorController.js";

const router = express.Router();

router.route("/").post(sendErrors);

export default router;
