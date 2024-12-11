import React from 'react';
import '/styles/Signup.css';

function Signup() {
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn signup-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
