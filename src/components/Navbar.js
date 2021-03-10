import React from "react";
import "../stylesheets/_navbar.scss";
/* import { HashLink } from "react-router-hash-link"; */

const Navbar = () => {
  return (
    <nav role="navigation" ClassName="nav">
      <h1 ClassName="nav__home">
        {" "}
        MP
        {/*       <HashLink to="#top" title="Home">
          MP
        </HashLink> */}
      </h1>
      <ul ClassName="nav__items">
        <li className="nav__items--section">
          About
          {/*  <HashLink to="#aboutMe" className="section__link">
            About
          </HashLink> */}
        </li>
        <li className="nav__items--section">
          {" "}
          Projects
          {/* <HashLink to="#projects" className="section__link">
            Projects
          </HashLink> */}
        </li>
        <li className="nav__items--section">
          {" "}
          Contact
          {/*  <HashLink to="#contact" className="section__link">
            Contact
          </HashLink> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
