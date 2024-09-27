import "./Sidebar.css";

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    // I would like a search bar on top and according style pulldowns
    <div className="sidenav">
     <p><Link to="/buttons">Buttons</Link></p>
     <p><Link to="/cards">Cards</Link></p>
    </div>
  );
}

export default Sidebar;
