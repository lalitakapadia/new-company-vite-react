import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Responsibilities from './pages/Responsibilities';
import MetalInspection from './pages/MetalInspection';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path= "/about-us" element={<AboutUs/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/responsibilities" element={<Responsibilities />} />
          <Route path="/metal-inspection" element={<MetalInspection />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
