import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="bg-zinc-950 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl">
          <div className="flex justify-between items-center py-4">
            <a href="index.html" className="text-3xl font-bold text-gray-800">
              <span className="bg-gradient-to-r from-[#b0c4de] from-[10%] via-[#c0c0c0] via-[20%] via-[#8b4513] via-[50%] via-[#b87333] via-[70%] to-[#b8860b] to-[100%] bg-clip-text text-transparent text-3xl">
                New Company
              </span>
            </a>
            <nav className={`space-x-6 text-zinc-400 ${isLargeScreen ? 'flex' : 'hidden'}`}>
              <a href="#home" data-page="home" className="hover:text-yellow-600">Home</a>
              <a href="#about" data-page="about" className="hover:text-yellow-600">About</a>
              <a href="#services" data-page="services" className="hover:text-yellow-600">Services</a>
              <a href="#responsibilities" data-page="responsibilities" className="hover:text-yellow-600">Responsibilities</a>
              <a href="#metal-inspection" data-page="metalinspection" className="hover:text-yellow-600">Metal Inspection</a>
              <a href="#metal-import" data-page="metalimport" className="hover:text-yellow-600">Metal Import</a>
              <a href="#clients" data-page="clients" className="hover:text-yellow-600">Clients</a>
              <a href="#contactUs" data-page="contactUs" className="hover:text-yellow-600">Contact Us</a>
            </nav>
            <button className="md:hidden text-gray-600" id="mobile-menu-button" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`md:hidden bg-white shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" data-page="home" className="text-zinc-400 hover:text-yellow-600">Home</a>
            <a href="#about" data-page="about" className="text-zinc-400 hover:text-yellow-600">About</a>
            <a href="#services" data-page="services" className="text-zinc-400 hover:text-yellow-600">Services</a>
            <a href="#responsibilities" data-page="responsibilities" className="text-zinc-400 hover:text-yellow-600">Responsibilities</a>
            <a href="#metal-inspection" data-page="metalinspection" className="text-zinc-400 hover:text-yellow-600">Metal Inspection</a>
            <a href="#metal-import" data-page="metalimport" className="text-zinc-400 hover:text-yellow-600">Metal Import</a>
            <a href="#clients" data-page="clients" className="text-zinc-400 hover:text-yellow-600">Clients</a>
            <a href="#contactUs" data-page="contactUs" className="text-zinc-400 hover:text-yellow-600">Contact Us</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;