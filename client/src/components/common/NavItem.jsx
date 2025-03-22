import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '/src/styles/NavItem.css';

function NavItem({ to, label, isActive }) {
  return (
    <li className="nav-item">
      <Link 
        to={to} 
        className={isActive ? 'nav-link active' : 'nav-link'}
      >
        {label}
      </Link>
    </li>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

NavItem.defaultProps = {
  isActive: false
};

export default NavItem; 