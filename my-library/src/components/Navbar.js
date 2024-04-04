import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>My Library</h1>
      </div>
      <div className="links">
        <Link to="/favorites">
          <h3>Your Favorites</h3>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
