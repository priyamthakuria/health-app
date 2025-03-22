import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '/src/styles/PlanCard.css';

function PlanCard({ name, price, description, onGetStarted, className }) {
  return (
    <div className={`plan-box ${className}`}>
      <div className="plan-top">
        <h3>{name}</h3>
        <p className="plan-price">{price}</p>
      </div>
      <div className="plan-bottom">
        <p>{description}</p>
        <Button 
          text="Get Started" 
          onClick={onGetStarted} 
          className="plan-button"
        />
      </div>
    </div>
  );
}

PlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onGetStarted: PropTypes.func,
  className: PropTypes.string
};

PlanCard.defaultProps = {
  onGetStarted: () => {},
  className: ''
};

export default PlanCard; 