import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const isLoggedIn = !!localStorage.getItem("token"); // Check login status
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [popupPosition, setPopupPosition] = useState({}); // State for popup position

  const handleNavigation = (path, e) => {
    if (!isLoggedIn) {
      // Prevent the default behavior when not logged in
      e.preventDefault();
      const rect = e.target.getBoundingClientRect(); // Get the position of the clicked button
      setPopupPosition({
        top: rect.bottom + window.scrollY + 18, // Position the popup below the button
        left: rect.left + rect.width / 2, // Center the popup horizontally
      });
      setShowPopup(true); // Show the login popup
    } else {
      // Allow navigation if the user is logged in
      navigate(path);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 1000); // Automatically close after 3 seconds
      return () => clearTimeout(timer); // Cleanup timer on component unmount or popup close
    }
  }, [showPopup]);

  return (
    <header className="bg-white fixed w-full top-0 left-0 z-50 shadow-md flex justify-between items-center p-4">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="h-12" />
      </div>
      <nav className="flex-grow text-center">
        <ul className="flex justify-center gap-9 list-none m-0 p-0">
          <li>
            <button
              onClick={(e) => {
                handleNavigation("/home", e);
                e.target.style.color = "blue"; // Change color on click
              }}
              onMouseLeave={(e) => (e.target.style.color = "black")} // Reset color when hover ends
              className="text-black text-base no-underline"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                handleNavigation("/blogs", e);
                e.target.style.color = "blue"; // Change color on click
              }}
              onMouseLeave={(e) => (e.target.style.color = "black")} // Reset color when hover ends
              className="text-black text-base no-underline"
            >
              Blogs
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                handleNavigation("/chat", e);
                e.target.style.color = "blue"; // Change color on click
              }}
              onMouseLeave={(e) => (e.target.style.color = "black")} // Reset color when hover ends
              className="text-black text-base no-underline"
            >
              Chat
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                handleNavigation("/booknow", e);
                e.target.style.color = "blue"; // Change color on click
              }}
              onMouseLeave={(e) => (e.target.style.color = "black")} // Reset color when hover ends
              className="text-black text-base no-underline"
            >
              Book Now
            </button>
          </li>
        </ul>
      </nav>
      <button
        className="bg-sky-500 text-white px-4 py-2 rounded cursor-pointer text-center text-base max-w-xs"
        onClick={(e) => handleNavigation("/gethelp", e)}
      >
        Get Help
      </button>

      {/* Popup for Login/Signup */}
      {showPopup && (
        <div
          className="absolute bg-white border border-gray-200 rounded-md shadow-lg p-4"
          style={{
            position: "absolute",
            top: popupPosition.top,
            left: popupPosition.left,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <p className="text-md text-black-500 text-center mb-1">
            You need to log in or sign up to access this page.
          </p>
        </div>
      )}
    </header>
  );
}

export default Header;
