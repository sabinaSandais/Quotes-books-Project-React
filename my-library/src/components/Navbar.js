import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>Quotes And Books</h1>
      </div>
      <div className="links">
        <Link to={"/"}> 
          <h4>Home</h4>
        </Link>
        <Link to="/bookList">
          <h4>Books</h4>
        </Link>
        <Link to="/favorites">
          <h4>Your Favorites</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
