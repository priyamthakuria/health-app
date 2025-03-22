import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import '/src/styles/ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="theme-toggle">
      <button
        onClick={toggleTheme}
        className="theme-toggle-button"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <span className="toggle-icon">🌙</span>
        ) : (
          <span className="toggle-icon">☀️</span>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle; 