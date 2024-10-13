import "./Sidebar.css";

import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    // I would like a search bar on top and according style pulldowns
    <div className="sidenav">
      <div>
        <p><NavLink to="/buttons" className={({ isActive }) => isActive ? "category-link active-link" : "category-link"}>Buttons</NavLink></p>
        <p><NavLink to="/cards" className={({ isActive }) => isActive ? "category-link active-link" : "category-link"}>Cards</NavLink></p>
      </div>
      <div className="about-spacer">
        <p><NavLink to="/about" className={({ isActive }) => isActive ? "category-link active-link" : "category-link"}>About</NavLink></p>
      </div>
    </div>
  );
}

export default Sidebar;
