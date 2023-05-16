import express from "express";

import { loginUser, createUser } from "../controller/userController.js";

const router = express.Router();

router.route("/create").post(createUser);

router.route("/login").post(loginUser);

export default router;
