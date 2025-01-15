import React from "react";
import "./navBar.css";
import { Link, useLocation } from "react-router-dom";

const navBar = () => {
  const location = useLocation();

  return (
    <div className="navBar">
      <div className="navLeft">
        <Link
          to="/"
          className={`home ${location.pathname === "/" ? "activeNav" : ""} `}
        >
          Home
        </Link>
      </div>
      <div className="navRight">
        <Link
          to="/favorites"
          className={`favorites ${
            location.pathname === "/favorites" ? "activeNav" : ""
          }`}
        >
          Favorites
        </Link>
        <Link
          to="/watch-now"
          className={`watchNow ${
            location.pathname === "/watch-now" ? "activeNav" : ""
          }`}
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
};

export default navBar;
