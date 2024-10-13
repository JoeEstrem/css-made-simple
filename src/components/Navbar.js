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
        <p>Search</p>
      </div>
    </div>
  );
}

export default Navbar;
