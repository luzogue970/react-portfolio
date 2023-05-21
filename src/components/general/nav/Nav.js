//rfce
import React from "react";
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import mathieu from "../../../image/mathieu.PNG";

function Nav() {
  const [showLinks, setshowLinks] = useState(false);

  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
  return (
    // ? teste si showLinks est a true
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar__logo">
        <img src={mathieu} alt="" />
      </div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <Link to={"/react-portfolio"} className="navbar__link">
            Accueil
          </Link>
        </li>
        <li className="navbar__item slideInDown-2">
          <Link to={"/mes-projets"} className="navbar__link">
            Projets
          </Link>
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
          <Link to={"/me-contacter"} className="navbar__link">
            contact
          </Link>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
