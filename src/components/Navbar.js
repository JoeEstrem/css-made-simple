import "./Navbar.css";

import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

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
        <input
          type="text"
          placeholder="Type your search here..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>
    </div>
  );
}

export default Navbar;
