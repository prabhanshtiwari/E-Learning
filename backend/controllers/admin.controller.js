import TryCatch from "../middlewares/TryCatch.js";
import { Course } from "../models/course.model.js";
import { Lecture } from "../models/lecture.model.js";
import { User } from "../models/user.model.js";
import { rm } from "fs";
import { promisify } from "util";
import fs from "fs";

export const createCourse = TryCatch(async (req, res) => {
  const { title, description, category, createdBy, duration, price } = req.body;

  const image = req.file;

  await Course.create({
    title,
    description,
    category,
    createdBy,
    image: image?.path,
    duration,
    price,
  });

  res.status(201).json({
    message: "Course created successfully",
  });
});

export const addLectures = TryCatch(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course)
    return res.status(404).json({
      message: "Course not found with this id",
    });

  const { title, description } = req.body;

  const file = req.file;

  const lecture = await Lecture.create({
    title,
    description,
    video: file?.path,
    course: course._id,
  });

  res.status(201).json({
    message: "Lecture added successfully",
    lecture,
  });
});

export const deleteLecture = TryCatch(async (req, res) => {
  const lecture = await Lecture.findById(req.params.id);

  if (!lecture) {
    return res.status(404).json({
      message: "Lecture not found",
    });
  }

  rm(lecture.video, () => {
    console.log("Video deleted!!!");
  });

  await lecture.deleteOne();

  res.json({
    message: "Lecture deleted",
  });
});

const unlinkAsync = promisify(fs.unlink);

export const deleteCourse = TryCatch(async (req, res) => {
  const course = await Course.findById(req.params.id);

  const lectures = await Lecture.find({ course: course._id });

  // deleting all the lectures
  await Promise.all(
    lectures.map(async (lecture) => {
      await unlinkAsync(lecture.video);
      console.log("Video deleted");
    }),
  );

  // deleted course thimbnail image
  rm(course.image, () => {
    console.log("Course Thumbnail image deleted");
  });

  // deleted all lectures from the databse
  await Lecture.find({ course: req.params.id }).deleteMany();

  // deleted course from the database
  await Course.deleteOne();

  // Deleted course from the user's subscription array
  await User.updateMany({}, { $pull: { subscription: req.params.id } });

  res.json({
    message: "Course deleted successfully",
  });
});

export const getAllStats = TryCatch(async (req, res) => {
  const totalCourses = (await Course.find()).length;
  const totalLectures = (await Lecture.find()).length;
  const totalUsers = (await User.find()).length;

  const stats = {
    totalCourses,
    totalLectures,
    totalUsers,
  };

  res.json({
    stats,
  });
});

