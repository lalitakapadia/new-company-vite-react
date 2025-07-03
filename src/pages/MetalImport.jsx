import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaShip, FaCheckCircle, FaClipboardCheck, FaTruck, FaExchangeAlt } from "react-icons/fa";
import MetalImportImage from "../assets/shipmentInspection.jpg";
import Heros from "../components/Heros";
import { Helmet } from "react-helmet";

const MetalImport = () => {
  return (
    <>
      <Helmet>
        <title>Seamless Metal Import Services | Global Shipping & Logistics</title>
        <meta
          name="description"
          content="Your trusted partner in efficient and compliant metal imports. We ensure safe handling, logistics, and customs clearance worldwide."
        />
        <meta
          name="keywords"
          content="metal import, global shipping, customs clearance, logistics management, compliance, secure transport"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Seamless Metal Import Services" />
        <meta
          property="og:description"
          content="We ensure smooth and compliant metal imports globally. Contact our experts for secure and efficient shipments."
        />
        <meta property="og:image" content={MetalImportImage} />
        <meta property="og:url" content="https://yourwebsite.com/metal-import" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="text-gray-800">
        <div className="relative mx-auto overflow-hidden">
          <div
            className="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 
                        bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                        from-[#fff1be] from-[28%]   
                        via-[#4fd1c5] via-[55%]    
                        via-[#4a90e2] via-[70%]    
                        to-[#5e60ff] to-[100%]
                        rotate-[-10deg] 
                        rounded-full blur-3xl"
          ></div>
          <Navbar />
        </div>

        <Heros
          title="Seamless Metal Import Services"
          description="Your trusted DGFT-approved partner for compliant, secure, and efficient metal scrap imports across global ports."
        />

        <main>
          <section className="m-2 py-16 px-6 lg:px-12 bg-gray-900 text-white rounded-3xl ring-1 ring-inset ring-black/20">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold">
                  Expert Metal Import Solutions by Worldwide Quality Inspection Ltd.
                </h2>
                <p className="mt-4 text-lg text-gray-300 font-medium">
                  Worldwide Quality Inspection Ltd. delivers reliable, DGFT-approved metal import
                  services that ensure regulatory compliance, timely logistics, and secure global
                  shipping. We support your operations with full-spectrum inspection and customs
                  solutions.
                </p>
                <ul className="mt-6 space-y-3 font-normal">
                  <li className="flex items-center gap-3">
                    <FaShip className="text-green-400 text-xl" aria-hidden="true" />
                    <span>End-to-end international shipping and logistics management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaClipboardCheck className="text-green-400 text-xl" aria-hidden="true" />
                    <span>Compliance with global and DGFT import/export regulations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaTruck className="text-green-400 text-xl" aria-hidden="true" />
                    <span>Secure inland transportation and safe material handling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaExchangeAlt className="text-green-400 text-xl" aria-hidden="true" />
                    <span>Seamless customs clearance and import documentation</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="relative w-full h-auto"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={MetalImportImage}
                  alt="Global metal import services - secure shipments"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </section>

          <section className="m-2 py-16 px-6 lg:px-12 bg-gray-800 text-white rounded-3xl ring-1 ring-inset ring-black/20">
            <div className="mx-auto">
              <h2 className="text-4xl font-bold text-center">
                The Metal Import Process with Worldwide Quality Inspection Ltd.
              </h2>
              <p className="mt-4 text-lg text-center text-gray-300 font-medium ">
                At Worldwide Quality Inspection Ltd., we streamline the metal import process by
                ensuring every shipment meets international compliance, safety, and documentation
                standards.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 font-normal">
                {[
                  "Global shipping coordination for timely delivery",
                  "Customs clearance and regulatory compliance",
                  "Inspection for quality and purity of metal materials by Worldwide Quality Inspection Ltd",
                  "Efficient logistics and warehouse management",
                  "Final delivery and documentation process",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <FaCheckCircle className="text-blue-400 text-3xl" aria-hidden="true" />
                    <p className="text-lg">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center sm:py-16 ring-1 ring-inset ring-black/20 rounded-3xl m-2 mb-2 p-4 py-12">
            <div className="mx-auto">
              <h2 className="text-3xl font-semibold">Ready for Smooth and Safe Metal Imports?</h2>
              <p className="text-lg m-4 mb-6 max-w-2xl mx-auto font-medium">
                Contact the DGFT‑approved experts at Worldwide Quality Inspection Ltd. today to
                guarantee compliance, safety, and efficiency in your next metal import.
              </p>
              <Link
                to="/contact-us"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-[#5e60ff] via-[#4a90e2] to-[#4fd1c5] 
                    rounded-full shadow-md transition-all 
                    duration-300 hover:scale-105 hover:shadow-lg hover:to-blue-500 text-black font-semibold"
                aria-label="Get in touch for metal import services"
              >
                Get in Touch
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MetalImport;
