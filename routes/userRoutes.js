import express from "express";

import { getUser, createUser } from "../controller/userController.js";

const router = express.Router();

router.route("/").get(getUser).post(createUser);

export default router;
