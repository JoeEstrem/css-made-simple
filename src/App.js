import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CardsPage from './components/CardsPage';
import ButtonsPage from './components/ButtonsPage';
import AboutPage from './components/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const data = [
    { id: 1, content: '.simple-button', route: '/buttons#simple-button'},
    { id: 2, content: '.bevel-button', route: '/buttons#bevel-button'},
    { id: 10, content: '.glass-card', route: '/cards#glass-card'},
    { id: 11, content: '.property-card', route: '/cards#property-card'},
    { id: 100, content: '.about', route: '/about'}
  ];

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  }

  const filteredData = data.filter(item =>
    item.content.toLowerCase().includes(searchQuery)
  );

  return (
    <Router>
      <div className="app-frame">
        <Navbar onSearch={handleSearch} />
        <div>
          <Sidebar />
          <div className="app-page">
            {searchQuery && (
          <div className="search-results">
            <h2>.search-results &#123;</h2>
              {filteredData.length > 0 ? (
                filteredData.map(item => (
                  <div key={item.id}>
                    <Link to={item.route}>{item.content}</Link>
                  </div>
                ))
              ) : (
                <p>results: none;</p>
              )}
            <h2>&#125;</h2>
            </div>
            )}
            <Routes>
              <Route path="/cards" element={<CardsPage />} />
              <Route path="/buttons" element={<ButtonsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
