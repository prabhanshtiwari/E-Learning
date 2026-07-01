import express from "express";
import {
  checkout,
  fetchLecture,
  fetchLectures,
  getAllCourses,
  getMyCourses,
  getSingleCourse,
  paymentVerification,
} from "../controllers/course.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.get("/all", getAllCourses);
router.get("/mycourses", isAuth, getMyCourses);
router.get("/lecture/:id", isAuth, fetchLecture);
router.get("/lectures/:id", isAuth, fetchLectures);
router.get("/:id", getSingleCourse);

router.post("/checkout/:id", isAuth, checkout);
router.post("/verification/:id", isAuth, paymentVerification);

export default router;