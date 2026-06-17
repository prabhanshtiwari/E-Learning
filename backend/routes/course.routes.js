import express from "express";
import {
  fetchLectures,
  getAllCourses,
  getSingleCourse,
} from "../controllers/course.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.get("/all", getAllCourses);
router.get("/:id", getSingleCourse);
router.get("/lectures/:id", isAuth, fetchLectures);

export default router;
