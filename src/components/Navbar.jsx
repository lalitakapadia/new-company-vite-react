import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollIndicator from './ScrollIndicator';
import logo from '../assets/logo.jpg'; // Adjust the path as necessary

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1280);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="p-4 sticky top-0 z-50 px-6 sm:px-12 ">
      <ScrollIndicator />
      <div className=" mx-auto ">
         <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Company Logo"
              className="h-20 w-20 object-contain rounded-full border border-gray-200 shadow-sm"
            />
            <span className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 ">
              Worldwide Quality Inspection Ltd
            </span>
          </Link>

          <nav className={`space-x-6 ${isLargeScreen ? 'flex' : 'hidden'}`}>
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about-us" className="hover:text-blue-600">About Us</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/responsibilities" className="hover:text-blue-600">Responsibilities</Link>
            <Link to="/metal-inspection" className="hover:text-blue-600">Metal Inspection</Link>
            <Link to="/metal-import" className="hover:text-blue-600">Metal Import</Link>
            <Link to="/contact-us" className="hover:text-blue-600">Contact Us</Link>
            {/* <Link to="/client" className="hover:text-blue-600">Clients</Link> */}
          </nav>

           <button
            aria-label="Toggle mobile menu"
            className="xl:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about-us" className="hover:text-blue-600">About Us</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/responsibilities" className="hover:text-blue-600">Responsibilities</Link>
            <Link to="/metal-inspection" className="hover:text-blue-600">Metal Inspection</Link>
            <Link to="/metal-import" className="hover:text-blue-600">Metal Import</Link>
            <Link to="/contact-us" className="hover:text-blue-600">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;