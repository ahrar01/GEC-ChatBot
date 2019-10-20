import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to={"/site"}>College</Link>
      </li>
      <li>
        <Link to={"/about"}>About Us</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
