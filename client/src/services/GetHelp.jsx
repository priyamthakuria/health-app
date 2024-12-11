import React from "react";
import "/styles/GetHelp.css"; // Importing the CSS for styling

function GetHelp() {
  return (
    <div className="get-help-container">
      <h1>Get the Help You Need</h1>
      <p>
        We understand that seeking help can be difficult. Our team is here to provide support, resources, and guidance to help you through every step of your mental wellness journey. Don't hesitate to reach out. We're here for you.
      </p>
      <div className="help-options">
        <div className="option">
          <h2>Therapy Sessions</h2>
          <p>One-on-one therapy with licensed professionals</p>
          <button>Book Now</button>
        </div>
        <div className="option">
          <h2>Online Support Groups</h2>
          <p>Join a supportive community for shared experiences</p>
          <button>Join Group</button>
        </div>
        <div className="option">
          <h2>Emergency Help</h2>
          <p>Immediate support for urgent mental health needs</p>
          <button>Call Now</button>
        </div>
      </div>
    </div>
  );
}

export default GetHelp;
