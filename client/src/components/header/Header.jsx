import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "/src/styles/Header.css";
import NavItem from "../common/NavItem";
import Button from "../common/Button";
import ThemeToggle from "../common/ThemeToggle";
import { useAuth } from '../../context/AuthContext';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
      setSidebarOpen(false);
  };

  const handleLogout=()=>{
      logout();
      navigate('/login')
  }

  return (
      <>
        <header className="header">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>


          {isAuthenticated ? (
            <div className="profile-icon" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="profile-svg">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z" />
                </svg>
            </div>
            ) : (
            <div className="header-actions">

            </div>
            )}
        </header>

          {sidebarOpen && (
              <div className="sidebar-overlay" onClick={closeSidebar}></div>
          )}

          <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
              <div className="sidebar-header">
                  <ThemeToggle />
                  <div className="close-btn" onClick={closeSidebar}>×</div>
              </div>

              <div className="sidebar-content">
                  <nav className="sidebar-nav">
                      <ul>
                          <NavItem
                            to="/"
                            label="Home"
                            isActive={location.pathname === '/'}
                            onClick={closeSidebar}
                          />

                          <NavItem
                            to="/blogs"
                            label="Blogs"
                            isActive={location.pathname === '/blogs'}
                            onClick={closeSidebar}
                          />
                          <NavItem
                            to="/chat"
                            label="Chat"
                            isActive={location.pathname === '/chat'}
                            onClick={closeSidebar}
                          />
                          <NavItem
                            to="/booknow"
                            label="Book Now"
                            isActive={location.pathname === '/booknow'}
                            onClick={closeSidebar}
                          />
                          <NavItem
                              to="/gethelp"
                              label="Get Help"
                              isActive={location.pathname === '/gethelp'}
                              onClick={closeSidebar}
                          />
                      </ul>

                  </nav>

                  <div className="sidebar-footer">
                      <Button text="Logout" className="logout-btn" onClick={handleLogout} />
                  </div>
              </div>
          </div>
      </>
  );
}

export default Header;
