import React from "react";
import { Link, useLocation } from "react-router-dom";
import "/src/styles/Header.css";
import NavItem from "../common/NavItem";
import Button from "../common/Button";

function Header() {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <NavItem 
            to="/" 
            label="Home" 
            isActive={location.pathname === '/'} 
          />
          <NavItem 
            to="/blogs" 
            label="Blogs" 
            isActive={location.pathname === '/blogs'} 
          />
          <NavItem 
            to="/chat" 
            label="Chat" 
            isActive={location.pathname === '/chat'} 
          />
          <NavItem 
            to="/booknow" 
            label="Book Now" 
            isActive={location.pathname === '/booknow'} 
          />
        </ul>
      </nav>

      <Link to="/gethelp">
        <Button text="Get Help" className="get-help-btn" />
      </Link>
    </header>
  );
}

export default Header;
