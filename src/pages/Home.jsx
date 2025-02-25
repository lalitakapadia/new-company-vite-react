import React, { Suspense, lazy } from "react";
import aboutImage from "/public/images/AboutHomePage.jpg";
import { motion } from "framer-motion";

// Lazy load components for better performance
const Navbar = lazy(() => import("../components/Navbar"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const DiscoverSection = lazy(() => import("../components/DiscoverSection"));

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800 overflow-hidden">

      {/* Hero Section */}
      <div className="relative">
        <div
          id="certify-shipment"
          className="absolute inset-2 bottom-0 rounded-3xl ring-1 ring-inset ring-black/20 
          bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
          from-[#fff1be] from-[28%] 
          via-[#4fd1c5] via-[55%] 
          via-[#4a90e2] via-[70%] 
          to-[#5e60ff] to-[100%] 
          sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"
        ></div>

        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>

        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-16 md:pt-16">
              <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
                Secure Your Shipments with Confidence
              </h1>
              <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                Our DGFT-approved inspection services ensure your goods are
                compliant, safe, and ready to be shipped worldwide.
              </p>

              {/* Buttons */}
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <a
                  href="https://wa.me/+447506512666"
                  className="inline-flex items-center justify-center px-6 py-3 
                             bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] 
                             text-white rounded-full shadow-md transition-all 
                             duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Contact Us on WhatsApp
                </a>
                <a
                  href="./contactus"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-50 
                             text-gray-900 rounded-full border border-gray-300 
                             shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                >
                  Leave a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Suspense fallback={<div>Loading Services...</div>}>
        <ServicesSection />
      </Suspense>

      <DiscoverSection />
    </div>
  );
};

export default Home;
