import React, { useEffect, useState } from "react";
import "./lecture.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Loading from "../../components/loading/Loading";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";

const Lecture = ({ user }) => {
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState({});
  const [loading, setLoading] = useState(true);
  const [lecLoading, setLecLoading] = useState(false);
  const [show, setShow] = useState(false);
  const params = useParams();

  async function fetchLectures() {
    try {
      const { data } = await axios.get(
        `${server}/api/course/lectures/${params.id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        },
      );
      setLectures(data.lectures);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function fetchLecture(id) {
    setLecLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/course/lecture/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLecture(data.lecture);
      setLecLoading(false);
    } catch (error) {
      console.log(error);
      setLecLoading(false);
    }
  }

  useEffect(() => {
    fetchLectures();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="lecture-page">
            <div className="left">
              {lecLoading ? (
                <Loading />
              ) : (
                <>
                  {lecture.video ? (
                    <>
                      <video
                        src={`${server}/${lecture.video}`}
                        width={"100%"}
                        controls
                        controlsList="nodownload noremoteplayback"
                        disablePictureInPicture
                        disableRemotePlayback
                        autoPlay
                      ></video>
                      <h1>{lecture.title}</h1>
                      <h3>{lecture.description}</h3>
                    </>
                  ) : (
                    <h1>Please select a lecture</h1>
                  )}
                </>
              )}
            </div>
            <div className="right">
              {user && user.role == "admin" && (
                <button onClick={() => setShow(!show)} className="common-btn">
                  {show ? "Close" : "Add Lecture +"}
                </button>
              )}

              {show && (
                <div className="lecture-form">
                  <h1>Add Lecture</h1>
                  <form>
                    <label htmlFor="text">Title</label>
                    <input type="text" required />

                    <label htmlFor="text">Description</label>
                    <input type="text" required />

                    <input
                      type="file"
                      placeholder="Choose a video file"
                      required
                    />

                    <button type="submit" className="common-btn">
                      Add
                    </button>
                  </form>
                </div>
              )}

              {lectures && lectures.length > 0 ? (
                lectures.map((e, i) => (
                  <>
                    <div
                      onClick={() => fetchLecture(e._id)}
                      key={i}
                      className={`lecture-number ${lecture._id == e._id && "active"}`}
                    >
                      {i + 1}. {e.title}
                    </div>
                    <div className="">
                      {user && user.role === "admin" && (
                        <button
                          classname="common-btn"
                          style={{ backgroundColor: "red" }}
                        >
                          Delete {e.title}
                        </button>
                      )}
                    </div>
                  </>
                ))
              ) : (
                <p>No Lectures Yet !</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Lecture;
