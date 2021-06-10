import React from "react";
import {Link} from "react-router-dom";
import "./header.css";

function Header() {
  const details = {
    home: "Home",
    blogs:"Blog",
    news:"News",
    athletic:"Sports"
  }
  return(
    <div className="header_container">
       <nav>
        <ul className="nav_bar">
          <li><Link className="active" to="/">{details.home}</Link></li>
          <li><Link className="active" to="/blog">{details.blogs}</Link></li>
          <li><Link className="active" to="/news">{details.news}</Link></li>
          <li><Link className="active" to="/sports">{details.athletic}</Link></li>
        </ul> 
       </nav>
    </div>
    )
}

export default Header;