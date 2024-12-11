import React from "react";
import { Link } from "react-router-dom";  // Importing Link for navigation
import "/styles/MindDeserves.css";

function MindDeserves() {
  return (
    <section className="mind-deserves">
      <div className="mind-deserves-content">
        <h2>Your Mind Deserves the Best</h2>
        <p>Give yourself the care and attention you deserve. Take a step towards mental wellness.</p>
        <div className="buttons">
          {/* Using Link for navigation */}
          <Link to="/blogs">
            <button className="read-btn">Read Our Blogs</button>
          </Link>
          <Link to="/chat">
            <button className="chat-btn">Start Chatting</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MindDeserves;
