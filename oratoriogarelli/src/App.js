import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/landing/landing';
import AboutUs from './components/pages/landing/nosotros';
import HomePage from './components/pages/home';
// import Navbar from './components/navigation/navbar';
import './index.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/Nosotros" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
