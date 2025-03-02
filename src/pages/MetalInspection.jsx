import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaCheckCircle, FaIndustry, FaShieldAlt, FaClipboardCheck, FaFlask } from "react-icons/fa";
import MetalInspectImage from "../assets/ShipmentInspection1.jpg";
import Heros from "../components/Heros";

const MetalInspection = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* SEO Tags */}
      <head>
        <title>Certified Metal Scrap Inspection Services | Pre-Shipment Inspection Agency</title>
        <meta name="description" content="Ensure safety and compliance with certified metal scrap inspection services. Our team conducts rigorous inspections for metal scrap shipments across 60+ countries." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Certified Metal Scrap Inspection Services" />
        <meta property="og:description" content="Comprehensive metal scrap inspection services to ensure safety, compliance, and quality across global shipments." />
        <meta property="og:image" content={MetalInspectImage} />
        <meta property="og:url" content="https://www.yourwebsite.com/metal-inspection" />
      </head>

      <div className="overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <div
            className="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 
                        bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                        from-[#fff1be] from-[28%]   
                        via-[#4fd1c5] via-[55%]    
                        via-[#4a90e2] via-[70%]    
                        to-[#5e60ff] to-[100%]
                        rotate-[-10deg] 
                        rounded-full blur-3xl"
          />
        </div>
        <Navbar />

        {/* Hero Section */}
        <Heros title="Comprehensive Metal Inspection Services" description="Ensuring Safety, Compliance & Quality in 60+ Countries" />

        {/* Services Overview */}
        <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white m-2 rounded-3xl ring-1 ring-inset ring-black/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold">Certified Metal Scrap Inspection</h2>
              <p className="mt-4 text-lg text-gray-300 font-normal">
                As a DGFT-approved Pre-shipment Inspection Agency, we conduct rigorous assessments of metal scrap shipments to verify their compliance with international safety standards. Our inspection process ensures that metal cargo is free from hazardous substances, explosives, and radioactive materials before being imported into India.
              </p>
              <ul className="mt-6 space-y-3 font-normal">
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
            <motion.div className="relative w-full h-96" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60 rounded-lg"></div>
              <img
                src={MetalInspectImage}
                alt="Metal Inspection - Certified Metal Scrap Inspection"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* Detailed Inspection Steps */}
        <section id="metal-service" className="py-20 px-6 lg:px-12 bg-gray-800 text-white m-2 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center">Key Steps in Metal Scrap Inspection</h2>
            <p className="mt-4 text-lg text-center text-gray-300">We follow a structured and methodical approach to ensure thorough assessment of all metal scrap shipments.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 font-normal">
              {["Identification and classification of metal scrap based on composition", "Grading and impurity determination to ensure compliance", "Gamma and neutron radiation scanning to detect contamination", "Explosive material detection using advanced scanning techniques", "Final pre-shipment certification and documentation review"].map((step, index) => (
                <motion.div key={index} className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg shadow-md" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }}>
                  <FaCheckCircle className="text-blue-400 text-3xl" />
                  <p className="text-lg">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metal Types Section */}
        <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white m-2 rounded-3xl ring-1 ring-inset ring-black/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-semibold">Non-Ferrous & Ferrous Scrap Imports to India</h2>
            <p className="mt-4 text-lg text-gray-300 font-normal">
              We provide inspection for a variety of metal scrap materials, ensuring compliance with import regulations.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-8">
              {["Heavy Melting Steel (HMS)", "Copper", "Cobalt", "Tin", "Cast Iron", "Stainless Steel", "Molybdenum", "Zinc", "Tungsten", "Aluminium", "Chromium", "Nickel", "Lead"].map((metal, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center justify-center gap-1 text-lg font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <FaIndustry className="text-blue-400" />
                  {metal}
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="m-2 p-4 rounded-3xl ring-1 ring-inset ring-black/20 bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center py-16">
          <h2 className="text-3xl font-bold">Need a Certified Metal Inspection?</h2>
          <p className="mt-4 text-lg font-medium mb-8">Contact our experts today for comprehensive inspection services tailored to your needs.</p>
          <Link to="/contact-us" className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-black rounded-full hover:from-[#4a90e2] hover:to-[#5e60ff] font-semibold rounded-lg shadow-md transition-all">
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MetalInspection;
