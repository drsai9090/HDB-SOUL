import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Letter.css';
import Gallery from './Gallery';
import Letter from './Letter';
import App from './App';
import Navbar from './Navbar';

function MainApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
