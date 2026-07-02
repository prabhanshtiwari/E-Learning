import React, { useState } from "react";
import Layout from "../Utils/Layout";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/courseCard/CourseCard";
import "./admincourses.css";

const categories = [
  "Web Development",
  "App Development",
  "Game Development",
  "Data Science",
  "Artificial Intelligence",
];

const AdminCourses = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const { courses, fetchCourses } = CourseData();

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // 👈 FIX: Save the raw file object to state so FormData can use it

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePrev(reader.result);
      };
    }
  };
  return (
    <Layout>
      <div className="admin-courses">
        <div className="left">
          <h1>All Courses</h1>
          <div className="dashboard-content">
            {courses && courses.length > 0 ? (
              courses.map((e) => {
                return <CourseCard key={e._id} course={e} />;
              })
            ) : (
              <p>No Courses Yet</p>
            )}
          </div>
        </div>

        <div className="right">
          <div className="add-course">
            <div className="course-form">
              <h2>Add Course</h2>
              <form>
                <label htmlFor="text">Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="text">Description</label>
                <input
                  type="text"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="text">Price</label>
                <input
                  type="number"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <label htmlFor="text">Created By</label>
                <input
                  type="text"
                  required
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                />

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value={""}>Select Category</option>
                  {categories.map((category) => {
                    return (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    );
                  })}
                </select>

                <label htmlFor="text">Duration</label>
                <input
                  type="text"
                  required
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />

                <input type="file" required onChange={changeImageHandler} />
                {imagePrev && (
                  <div className="image-preview">
                    <img
                      src={imagePrev}
                      alt="Course Preview"
                      style={{
                        width: "150px",
                        marginTop: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={btnLoading}
                  className="common-btn"
                >
                  {btnLoading ? "Please Wait..." : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminCourses;
