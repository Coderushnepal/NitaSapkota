import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/login">
          <button btn btn-dark darken-1 z-depth-0>
            LogIn
          </button>
        </Link>
        <Link to="/Users">
          <button btn btn-dark darken-1 z-depth-0>
            Users
          </button>
        </Link>
        <Link to="/">
          <button btn btn-dark darken-1 z-depth-0>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
