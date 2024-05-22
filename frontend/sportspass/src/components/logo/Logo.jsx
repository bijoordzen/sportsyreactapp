// logo.js

import React from 'react';
import './logo.css';
import logoImage from './logo.png'; // Make sure you have the logo image in your project

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="SportsPass Logo" className="logo-image" />
      <div className="logo-text">SportsPass</div>
    </div>
  );
}

export default Logo;
