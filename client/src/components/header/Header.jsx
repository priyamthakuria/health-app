import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/chat">Chat</a></li>
          <li><a href="/booknow">Book Now</a></li>
        </ul>
      </nav>

      <Link to="/gethelp">
        <button className="get-help-btn">Get Help</button>
      </Link>
    </header>
  );
}

export default Header;
