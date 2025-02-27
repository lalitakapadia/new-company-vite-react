import React, { useState, useEffect } from 'react';
import ScrollIndicator from './ScrollIndicator';
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
      <header className=" pt-4 sticky top-0 z-50">
      
      <ScrollIndicator />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <div className="flex justify-between items-center py-4">
            <a href="./" className="text-3xl font-bold ">
              <span className="bg-gradient-to-r 
                from-[#4fd1c5] from-[28%]   
                via-[#4fd1c5] via-[55%]    
                via-[#4a90e2] via-[70%]    
                to-[#5e60ff] to-[100%]
                bg-clip-text text-transparent text-3xl">
                New Company
              </span>
            </a>
            <nav className={`space-x-6  ${isLargeScreen ? 'flex' : 'hidden'}`}>
              <a href="./" data-page="home" className="hover:text-blue-600">Home</a>
              <a href="./about-us" data-page="about" className="hover:text-blue-600">About Us</a>
              <a href="./services" data-page="services" className="hover:text-blue-600">Services</a>
              <a href="./responsibilities" data-page="responsibilities" className="hover:text-blue-600">Responsibilities</a>
              <a href="./metal-inspection" data-page="metalinspection" className="hover:text-blue-600">Metal Inspection</a>
              <a href="./metal-import" data-page="metalimport" className="hover:text-blue-600">Metal Import</a>
              {/* <a href="./clients" data-page="clients" className="hover:text-blue-600">Clients</a> */}
              <a href="./contact-us" data-page="contactUs" className="hover:text-blue-600">Contact Us</a>
            </nav>
            <button className="md:hidden text-gray-600" id="mobile-menu-button" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`md:hidden  shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 p-4">
            <a href="./" data-page="home" className="hover:text-blue-600">Home</a>
              <a href="./about-us" data-page="about" className="hover:text-blue-600">About Us</a>
              <a href="./services" data-page="services" className="hover:text-blue-600">Services</a>
              <a href="./responsibilities" data-page="responsibilities" className="teal:text-blue-600">Responsibilities</a>
              <a href="./metal-inspection" data-page="metalinspection" className="teal:text-blue-600">Metal Inspection</a>
              <a href="./metal-import" data-page="metalimport" className="hover:text-blue-600">Metal Import</a>
              {/* <a href="./clients" data-page="clients" className="hover:text-blue-600">Clients</a> */}
              <a href="./contact-us" data-page="contactUs" className="hover:text-blue-600">Contact Us</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;