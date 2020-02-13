import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <Link className="nav-link" to="/Shsh">
              Shsh
            </Link>
          </li> */}
          <li className="nav-item active">
            <Link className="nav-link" to="/Chawol">
              Chawol
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/CPJ">
              CPJ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
