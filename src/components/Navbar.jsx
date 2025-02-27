import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollIndicator from './ScrollIndicator';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="pt-4 sticky top-0 z-50 bg-white shadow-md">
      <ScrollIndicator />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            New Company
          </Link>

          <nav className={`space-x-6 ${isLargeScreen ? 'flex' : 'hidden'}`}>
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about-us" className="hover:text-blue-600">About Us</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/responsibilities" className="hover:text-blue-600">Responsibilities</Link>
            <Link to="/metal-inspection" className="hover:text-blue-600">Metal Inspection</Link>
            <Link to="/metal-import" className="hover:text-blue-600">Metal Import</Link>
            <Link to="/contact-us" className="hover:text-blue-600">Contact Us</Link>
          </nav>

          <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-lg p-4">
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
