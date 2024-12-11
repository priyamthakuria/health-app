import React from 'react';
import '/src/styles/Login.css';

function Login() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
