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
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

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

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file); // 👈 FIX: Save the raw file object to state so FormData can use it

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setVideoPrev(reader.result);
      };
    }
  };

  const submitHandler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    try {
      const { data } = await axios.post(
        `${server}/api/admin/course/${params.id}`,
        myForm,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        },
      );
      toast.success(data.message);
      setBtnLoading(false);
      setShow(false);
      fetchLectures();
      setTitle("");
      setDescription("");
      setVideo("");
      setVideoPrev("");
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this lecture?")) {
      try {
        const { data } = await axios.delete(
          `${server}/api/admin/lecture/${id}`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          },
        );

        toast.success(data.message);
        fetchLectures();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

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
                  <form onSubmit={(e) => submitHandler(e)}>
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

                    <input
                      type="file"
                      placeholder="Choose a video file"
                      required
                      onChange={changeVideoHandler}
                    />

                    {videoPrev && (
                      <video
                        src={videoPrev}
                        alt="Preview unavailable"
                        width={300}
                        controls
                      />
                    )}

                    <button
                      disabled={btnLoading}
                      type="submit"
                      className="common-btn"
                    >
                      {btnLoading ? "Please Wait ..." : "Add"}
                    </button>
                  </form>
                </div>
              )}

              {lectures && lectures.length > 0 ? (
                lectures.map((e, i) => (
                  // Pro-tip: Move your key property to a structural container fragment instead of empty tags (<>)
                  <React.Fragment key={e._id || i}>
                    <div
                      onClick={() => fetchLecture(e._id)}
                      className={`lecture-number ${lecture._id == e._id && "active"}`}
                    >
                      {i + 1}. {e.title}
                    </div>
                    <div className="">
                      {user && user.role === "admin" && (
                        <button
                          onClick={() => deleteHandler(e._id)} // 👈 FIXED: Removed the conflicting 'e' argument
                          className="common-btn"
                          style={{ backgroundColor: "red" }}
                        >
                          Delete {e.title}
                        </button>
                      )}
                    </div>
                  </React.Fragment>
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
