import "./Navbar.css";

import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img
          src={require('../imgs/css-made-simple-logo.png')}
          alt="CSS Made Simple Logo"
          className="navbar-logo"
          />
      </div>
      <div className="search-bar">
        <div className="search-input">
          <p>Type your search here...</p>
        </div>
        <div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
