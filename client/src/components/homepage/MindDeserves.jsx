import React from "react";
import { Link } from "react-router-dom";  // Importing Link for navigation
import Button from "../common/Button";
import "/src/styles/MindDeserves.css";

function MindDeserves() {
  return (
    <section className="mind-deserves">
      <div className="mind-deserves-content">
        <h2>Your Mind Deserves the Best</h2>
        <p>Give yourself the care and attention you deserve. Take a step towards mental wellness.</p>
        <div className="buttons">
          {/* Using Link for navigation */}
          <Link to="/blogs">
            <Button text="Read Our Blogs" className="read-btn" />
          </Link>
          <Link to="/chat">
            <Button text="Start Chatting" className="chat-btn" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MindDeserves;
