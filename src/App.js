import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-frame">
      <Navbar />
      <div className="app-body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
