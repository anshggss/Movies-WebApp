import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className="navBar">
      <div className="navLeft">
        <Link to="/" className="home">
          Home
        </Link>
      </div>
      <div className="navRight">
        <Link to="/favorites" className="favorites">
          Favorites
        </Link>
        <Link to="/watch-now" className="watchNow">
          Watch Now
        </Link>
      </div>
    </div>
  );
};

export default navBar;
