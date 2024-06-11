import express from "express";
import { getErrors, sendErrors } from "../controller/errorController.js";

const router = express.Router();

router.route("/").post(sendErrors);
router.route("/").get(getErrors);

export default router;
