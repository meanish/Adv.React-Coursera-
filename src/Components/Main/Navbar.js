import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="Navbar">
        <header>
          <nav className="container">
            <div>
              <NavLink
                to="/weekOne"
                className={`navLinks ${
                  activeLink === "weekOne" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("weekOne")}
              >
                Week 1
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/weekTwo"
                className={`navLinks ${
                  activeLink === "weekTwo" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("weekTwo")}
              >
                Week 2
              </NavLink>
            </div>
            <NavLink className="logo" to="/"></NavLink>
            <div>
              <NavLink
                to="/weekThree"
                className={`navLinks ${
                  activeLink === "weekThree" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("weekThree")}
              >
                Week 3
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/weekFour"
                className={`navLinks ${
                  activeLink === "weekFour" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("weekFour")}
              >
                Week 4
              </NavLink>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
