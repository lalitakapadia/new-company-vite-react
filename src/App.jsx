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
import MetalImport from './pages/MetalImport';
import Footer from './components/Footer';
import Clients from './pages/Clients';
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path= "/about-us" element={<AboutUs/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/responsibilities" element={<Responsibilities />} />
          <Route path="/metal-inspection" element={<MetalInspection />} />
          <Route path="/metal-import" element={<MetalImport />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contactUs" element={<ContactUs/>} />
        </Routes>
      </main>  
      <Footer />   
    </Router>
  );
}

export default App;
