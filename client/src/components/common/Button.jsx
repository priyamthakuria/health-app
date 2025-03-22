import React from 'react';
import PropTypes from 'prop-types';
import '/src/styles/Button.css';

function Button({ text, onClick, className, disabled, type }) {
  return (
    <button 
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  disabled: false,
  type: 'button'
};

export default Button; 