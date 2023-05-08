//rfce
import React from "react";
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [showLinks, setshowLinks] = useState(false);

  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
  return (
    // ? teste si showLinks est a true
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar__logo">logo</div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <Link to={"/react-portfolio"} className="navbar__link">
            Accueil
          </Link>
        </li>
        <li className="navbar__item slideInDown-2">
          <a href="#projets" className="navbar__link">
            Projets
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <Link to={"/mon-experience"} className="navbar__link">
            Experience
          </Link>
        </li>
        <li className="navbar__item slideInDown-4">
          <Link to={"/ma-veille"} className="navbar__link">
            Veille
          </Link>
        </li>
        <li className="navbar__item slideInDown-5">
          <a href="#footer" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
