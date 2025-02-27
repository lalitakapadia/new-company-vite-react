import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaCheckCircle, FaShieldAlt, FaClipboardCheck, FaFlask } from "react-icons/fa";

const MetalInspection = () => {
  return (
    <>
      <body className="bg-gray-100 text-gray-800">
      <div className="overflow-hidden">
        <div class="relative mx-auto max-w-7xl">
          <div
            class="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 
                        bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                        from-[#fff1be] from-[28%]   
                        via-[#4fd1c5] via-[55%]    
                        via-[#4a90e2] via-[70%]    
                        to-[#5e60ff] to-[100%]
                        rotate-[-10deg] 
                        rounded-full blur-3xl">
          </div>
        </div>
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
          <h1 className="text-5xl font-bold">Comprehensive Metal Inspection Services</h1>
          <p className="mt-4 text-lg">Ensuring Safety, Compliance & Quality in 60+ Countries</p>
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
            <h2 className="text-4xl font-bold">Certified Metal Scrap Inspection</h2>
            <p className="mt-4 text-lg text-gray-300">
              As a DGFT-approved Pre-shipment Inspection Agency, we conduct rigorous assessments of metal scrap shipments to verify their compliance with international safety standards. Our inspection process ensures that metal cargo is free from hazardous substances, explosives, and radioactive materials before being imported into India.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400 text-xl" />
                Physical and chemical testing for composition and purity
              </li>
              <li className="flex items-center gap-3">
                <FaClipboardCheck className="text-green-400 text-xl" />
                Verification of compliance with import/export regulations
              </li>
              <li className="flex items-center gap-3">
                <FaShieldAlt className="text-green-400 text-xl" />
                Detection of explosives, arms, ammunition, and radiation contamination
              </li>
              <li className="flex items-center gap-3">
                <FaFlask className="text-green-400 text-xl" />
                Lab testing for corrosion, impurities, and structural integrity
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
              src="/images/ShipmentInspection1.jpg"
              alt="Metal Inspection"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Detailed Inspection Steps */}
      <section id="metal-service" className="py-20 px-6 lg:px-12 bg-gray-800 text-white mt-4 rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Key Steps in Metal Scrap Inspection</h2>
          <p className="mt-4 text-lg text-center text-gray-300">We follow a structured and methodical approach to ensure thorough assessment of all metal scrap shipments.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {["Identification and classification of metal scrap based on composition",
              "Grading and impurity determination to ensure compliance",
              "Gamma and neutron radiation scanning to detect contamination",
              "Explosive material detection using advanced scanning techniques",
              "Final pre-shipment certification and documentation review"].map((step, index) => (
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
      <section className=" mt-4  rounded-3xl ring-1 ring-inset ring-black/20 bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center py-16">
        <h2 className="text-3xl font-bold">Need a Certified Metal Inspection?</h2>
        <p className="mt-4 text-lg font-medium mb-4">Contact our experts today for comprehensive inspection services tailored to your needs.</p>
          <Link
            to="/contact-us"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black rounded-full hover:from-[#4a90e2] hover:to-[#5e60ff] font-semibold rounded-lg shadow-md transition-all">
            Get in Touch
          </Link>
      </section>
      </div>
      </body>
    </>
  );
};

export default MetalInspection;
