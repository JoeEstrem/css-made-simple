import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CardsPage from './components/CardsPage';
import ButtonsPage from './components/ButtonsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app-frame">
        <Navbar />
        <div className="app-body">
          <Sidebar />
          <div className="app-page">
            <Routes>
                <Route path="/cards" element={<CardsPage />} />
                <Route path="/buttons" element={<ButtonsPage />} />
              </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
