import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

// import logo from '../assets/book.logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div> <img className="logo" src={logo} alt="logo" /></div> */}
      <div>
        <h1>My Library</h1>
      </div>
      <div className="links">
        <Link to="/favorites">
          <h3>Your Favorites</h3>
        </Link>
        <Link to="/quotes">
          <h3>Quotes</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
