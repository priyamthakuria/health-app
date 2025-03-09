import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "/src/styles/Homepage.css";
import { useAuth } from "../../context/AuthContext";

function Homepage() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Mental Health Matters</h1>
        <p>It's time to prioritize your mental well-being.</p>
        <div className="buttons">
          {!isAuthenticated && (
              <>
                <Link to="/login">
                  <button className="btn login-btn">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="btn signin-btn">Sign In</button>
                </Link>
              </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Homepage;
