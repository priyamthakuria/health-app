import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Button from "../common/Button";
import "/src/styles/Homepage.css";

function Homepage() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Mental Health Matters</h1>
        <p>It's time to prioritize your mental well-being.</p>
        <div className="buttons">
          {/* Use Links to navigate */}
          <Link to="/login">
            <Button text="Login" className="login-btn" />
          </Link>
          <Link to="/signup">
            <Button text="Sign In" className="signin-btn" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
