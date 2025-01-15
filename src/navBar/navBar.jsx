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
          className={`home ${
            location.pathname === "/Movies-WebApp" ? "activeNav" : ""
          } `}
        >
          Home
        </Link>
      </div>
      <div className="navRight">
        <Link
          to="/favorites"
          className={`favorites ${
            location.pathname === "/Movies-WebApp/favorites" ? "activeNav" : ""
          }`}
        >
          Favorites
        </Link>
        <Link
          to="/watch-now"
          className={`watchNow ${
            location.pathname === "/Movies-WebApp/watch-now" ? "activeNav" : ""
          }`}
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
};

export default navBar;
