import React from "react";
import { Link } from "react-router-dom";
// /fixed-top 從nav 中移除 避免Container 會從畫面最上方開始算/
const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
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
