import "./Navbar.css";

import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
        <img
          src={require('../imgs/css-made-simple-logo.png')}
          alt="CSS Made Simple Logo"
          className="navbar-logo"
          />
        <p>Search</p>
        <p>About</p>
    </div>
  );
}

export default Navbar;
