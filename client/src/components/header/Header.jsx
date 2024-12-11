import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "/styles/Header.css"; // Importing the updated header styles

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
      {/* Replace the button with a Link to Get Help page */}
      <Link to="/gethelp">
        <button className="get-help-btn">Get Help</button>
      </Link>
    </header>
  );
}

export default Header;
