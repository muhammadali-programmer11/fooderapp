import React from "react";
import "./Header2.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <nav>
      <div className="topnav" id="myTopnav">
        <a href="/home" className="active">
          Menu
        </a>
        <a href="/news">Home</a>
        <a href="/contact">Browse Restaurant</a>
        <a href="/about">Login & Sign Up</a>
        <a href="/">English</a>
        <a href="/" className="icon" onClick={myFunction}>
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  );
}

export default Header;
