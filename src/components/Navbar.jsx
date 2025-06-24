import React from "react";
import './navbar.css';


function Navbar(){
    return(
        <nav>
  <div className="nav-logo">
    <a href="#">CometChat</a>
  </div>
  <div className="nav-toggle" onclick="toggleMenu()">☰</div>
  <ul className="nav-link">
    <li><a href>Platform</a></li>
    <li><a href>Solutions</a></li>
    <li><a href>Developers</a></li>
    <li><a href>Resources</a></li>
    <li><a href>Pricing</a></li>
  </ul>
  <div className="nav-login">
    <a href="#">Log in</a>
    <div><a href="#">Schedule a demo</a></div>
  </div>
</nav>

    )
}
export default Navbar;