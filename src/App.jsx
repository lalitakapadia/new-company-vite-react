import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";function App() {
  return (
        <>
        <ScrollToTop />
          <Outlet />
          <Footer/>
          
        </>
  );
}

export default App;
