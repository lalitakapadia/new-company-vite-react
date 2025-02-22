import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaShip,FaCheckCircle, FaClipboardCheck, FaTruck, FaExchangeAlt } from "react-icons/fa";

const MetalImport = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center py-24">
        <div className="absolute inset-0  backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold">Seamless Metal Import Services</h1>
          <p className="mt-4 text-lg">Your trusted partner in efficient and compliant metal imports</p>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">Expert Metal Import Solutions</h2>
            <p className="mt-4 text-lg text-gray-300">
              We offer reliable and efficient solutions for importing metal materials globally. Our services ensure compliance with local regulations, timely delivery, and safe handling of all shipments.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <FaShip className="text-green-400 text-xl" />
                International shipping and logistics management
              </li>
              <li className="flex items-center gap-3">
                <FaClipboardCheck className="text-green-400 text-xl" />
                Compliance with import/export regulations
              </li>
              <li className="flex items-center gap-3">
                <FaTruck className="text-green-400 text-xl" />
                Secure transportation and handling
              </li>
              <li className="flex items-center gap-3">
                <FaExchangeAlt className="text-green-400 text-xl" />
                Efficient customs clearance and documentation
              </li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-full h-96"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60 rounded-lg"></div>
            <img
              src="./public/images/shipmentInspection.jpg"
              alt="Metal Import"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Detailed Import Process */}
      <section className="py-20 px-6 lg:px-12 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center">The Metal Import Process</h2>
          <p className="mt-4 text-lg text-center text-gray-300">We ensure smooth and compliant metal imports, every step of the way.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {["Global shipping coordination for timely delivery",
              "Customs clearance and regulatory compliance",
              "Inspection for quality and purity of metal materials",
              "Efficient logistics and warehouse management",
              "Final delivery and documentation process"].map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <FaCheckCircle className="text-blue-400 text-3xl" />
                <p className="text-lg">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center py-16">
        <h2 className="text-3xl font-bold">Ready for Smooth and Safe Metal Imports?</h2>
        <p className="mt-4 text-lg font-medium">Contact our experts today to ensure compliance, safety, and efficiency in your next metal import.</p>
        <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all">
          Get in Touch
        </button>
      </section>
    </>
  );
};

export default MetalImport;
