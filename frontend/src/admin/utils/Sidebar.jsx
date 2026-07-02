import React from "react";
import "./common.css";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaUserAlt  } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to={"/admin/dashboard"}>
            <div className="icon">
              <FaHome />
            </div>
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to={"/admin/course"}>
            <div className="icon">
              <FaBook />
            </div>
            <span>Course</span>
          </Link>
        </li>

        <li>
          <Link to={"/admin/users"}>
            <div className="icon">
              <FaUserAlt />
            </div>
            <span>Users</span>
          </Link>
        </li>

        <li>
          <Link to={"/account"}>
            <div className="icon">
              <FiLogOut />
            </div>
            <span>Logout</span>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
