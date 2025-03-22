import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

// Create the context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export const ThemeProvider = ({ children }) => {
  // Check if user has previously set a theme preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    // If user has a saved preference, use that
    if (savedTheme) {
      return savedTheme;
    }
    // Otherwise check for system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    // Default to light theme
    return 'light';
  };

  // State to track current theme
  const [theme, setTheme] = useState(getInitialTheme);
  
  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme to body element when theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Context value
  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDarkTheme: theme === 'dark'
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext; 