import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to={"/"} className="brand-logo center">
        GEC BOT
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to={"/site"}>College</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
