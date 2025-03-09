import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '/src/styles/Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.username.length < 3) {
      return setError('Username must be at least 3 characters long.');
    }
    if (formData.password.length < 6) {
      return setError('Password must be at least 6 characters long.');
    }
    setLoading(true);

    try {
      const success = await register(formData);
      if (success) {
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="signup-page">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
            />
          </div>

          <button
              type="submit"
              className="btn signup-btn"
              disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          {/* Error message */}
          {error && <p className="error-text">{error}</p>}

          {/* Login redirect */}
          <p className="login-text">
            Already signed up? <span onClick={() => navigate('/login')} className="login-link">Login</span>
          </p>
        </form>
      </div>
  );
}

export default Signup;
