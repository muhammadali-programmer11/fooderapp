import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="nav-item">
          <div className="nav-logo">
            <NavLink to="/">
              <img src={solologo} alt="" style={{ width: "200px" }} />
            </NavLink>
          </div>
          <div className="nav-menu">
            <ol>
              <NavLink to="/">
                <li>Courses</li>
              </NavLink>
              <NavLink to="/">
                <li>Code Playground</li>
              </NavLink>
              <NavLink to="/">
                <li>Discuss</li>
              </NavLink>
              <NavLink to="/">
                <li>Blog</li>
              </NavLink>
              <NavLink to="/">
                <li>Get Pro</li>
              </NavLink>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
