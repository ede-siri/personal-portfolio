import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li className="logo">Edesiri</li>
          <i class="fa-solid fa-bars"></i>
          
          <div className="mobile">
          <li className="home">
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="contact.html"> Contact</a>
          </li>
          </div>
         
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
