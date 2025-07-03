import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ Import React Helmet for SEO

// Lazy load components for better performance
const Navbar = lazy(() => import("../components/Navbar"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const DiscoverSection = lazy(() => import("../components/DiscoverSection"));

const Home = () => {
  useEffect(() => {
    const scrollBackTo = sessionStorage.getItem('scrollBackTo');
    if (scrollBackTo) {
      const el = document.getElementById(scrollBackTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      sessionStorage.removeItem('scrollBackTo');
    }
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Secure Your Shipments with Confidence</title>
        <meta
          name="description"
          content="We offer DGFT-approved inspection services ensuring your shipments are safe, compliant, and ready for the global market."
        />
        <meta name="keywords" content="shipment inspection, DGFT-approved services, global trade, compliance, safety" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Secure Your Shipments with Confidence" />
        <meta property="og:description" content="DGFT-approved inspection services ensuring compliance, safety, and reliability for global trade." />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="text-gray-800 overflow-hidden">
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

          <div className="relative px-6 lg:px-12">
            <div className="mx-auto ">
              <div className="pb-24 lg:pt-16 sm:pb-32 sm:pt-24 md:pb-16 md:pt-16">
                <h1 className="font-display text-balance text-4xl sm:text-6xl md:text-8xl font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
                  Secure Your Shipments with Confidence
                </h1>
                <p className="mt-8 max-w-lg text-lg font-medium text-gray-950/75 sm:text-2xl/8">
                 Worldwide Quality Inspection Ltd., a DGFT-approved agency, ensures your goods are compliant, safe, and ready for seamless global shipment.
                </p>

                {/* Buttons */}
                <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                  <a
                    href="https://wa.me/919123056093"
                    className="inline-flex items-center justify-center px-6 py-3 
                    bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] 
                    text-gray-900 rounded-full shadow-md transition-all 
                    duration-300 hover:scale-105 hover:shadow-lg"
                    aria-label="Contact us on WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us on WhatsApp
                  </a>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-50 
                    text-gray-900 rounded-full border border-gray-300 
                    shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                    aria-label="Leave a message for inquiries"
                  >
                    Leave a Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <Suspense fallback={<div>Loading Services...</div>}>
          <ServicesSection />
        </Suspense>

        {/* Discover Section with id for scroll restoration */}
        <div id="discover-expertise">
          <Suspense fallback={<div>Loading Discover...</div>}>
            <DiscoverSection />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Home;
