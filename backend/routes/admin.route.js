import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { createCourse } from "../controllers/admin.controller.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { uploadFiles } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse);

export default router;
