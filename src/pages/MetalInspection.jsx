import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ SEO Optimization
import Navbar from "../components/Navbar";
import { FaCheckCircle, FaIndustry, FaShieldAlt, FaClipboardCheck, FaFlask } from "react-icons/fa";
import MetalInspectImage from "../assets/ShipmentInspection1.jpg";
import Heros from "../components/Heros";

const MetalInspection = () => {
  return (
    <>
      {/* 🔹 SEO Meta Tags */}
      <Helmet>
        <title>Certified Metal Scrap Inspection | Pre-Shipment Inspection</title>
        <meta
          name="description"
          content="Ensure safety and compliance with certified metal scrap inspection services. Our team conducts rigorous inspections for metal scrap shipments across 60+ countries."
        />
        <meta name="keywords" content="metal scrap inspection, pre-shipment, compliance, DGFT-approved, safety assessment" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Certified Metal Scrap Inspection Services" />
        <meta property="og:description" content="Comprehensive metal scrap inspection services to ensure safety, compliance, and quality across global shipments." />
        <meta property="og:image" content={MetalInspectImage} />
        <meta property="og:url" content="https://www.yourwebsite.com/metal-inspection" />
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
            aria-hidden="true"
          />
          <Navbar />
        </div>

        {/* 🔹 Hero Section */}
        <Heros
          title="Worldwide Metal Inspection & Compliance Services"
          description="Worldwide Quality Inspection Ltd. ensures safety, regulatory compliance, and quality assurance for metal exports across 60+ countries."
        />

        <main>
          {/* 🔹 Services Overview */}
          <section className="m-2 py-16 px-6 lg:px-12 bg-gray-900 text-white rounded-3xl ring-1 ring-inset ring-black/20">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold">Certified Metal Scrap Inspection</h2>
                <p className="mt-4 text-lg text-gray-300 font-normal">
                  Worldwide Quality Inspection Ltd., a DGFT-approved Pre-shipment Inspection Agency, conducts rigorous assessments of metal scrap shipments to verify compliance with international safety and environmental standards.
                </p>
                <ul className="mt-6 space-y-3 font-normal">
                  {[
                    { icon: FaCheckCircle, text: "Worldwide Quality Inspection Ltd. conducts physical and chemical testing to verify material composition and purity." },
                    { icon: FaClipboardCheck, text: "We ensure full compliance with import and export regulations through meticulous verification." },
                    { icon: FaShieldAlt, text: "Our inspections detect explosives, arms, ammunition, and radiation contamination to ensure shipment safety." },
                    { icon: FaFlask, text: "Laboratory testing by Worldwide Quality Inspection Ltd. covers corrosion resistance, impurity detection, and structural integrity." },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <item.icon className="text-green-400 text-xl" aria-hidden="true" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: Image */}
              <motion.div
                className="relative w-full h-auto"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={MetalInspectImage}
                  alt="Certified metal scrap inspection in progress"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </section>

          {/* 🔹 Inspection Process */}
          <section className="m-2 py-16 px-6 lg:px-12 bg-gray-800 text-white rounded-3xl ring-1 ring-inset ring-black/20">
            <div className="mx-auto">
              <h2 className="text-4xl font-bold text-center">Key Steps in Metal Scrap Inspection</h2>
              <p className="mt-4 text-lg text-center font-normal text-gray-300">
                At Worldwide Quality Inspection Ltd., we follow a structured and methodical approach to ensure full compliance with international regulations and safety standards.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 font-normal">
                {[
                  "Identification and classification of metal scrap",
                  "Grading and impurity determination",
                  "Gamma and neutron radiation scanning",
                  "Explosive material detection",
                  "Final pre-shipment certification and documentation review",
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

          {/* 🔹 Metal Types */}
          <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white m-2 rounded-3xl ring-1 ring-inset ring-black/20">
            <div className="mx-auto text-center">
              <h2 className="text-4xl font-semibold">Non-Ferrous & Ferrous Scrap Import Inspections</h2>
              <p className="mt-4 text-lg text-gray-300 font-normal">
                Worldwide Quality Inspection Ltd. specializes in inspecting non-ferrous and ferrous metal scrap imports to ensure regulatory compliance, safety, and quality before shipment to India and other global destinations.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
                {[
                  "HMS",
                  "Copper",
                  "Cobalt",
                  "Tin",
                  "Cast Iron",
                  "Stainless Steel",
                  "Molybdenum",
                  "Zinc",
                  "Tungsten",
                  "Aluminium",
                  "Chromium",
                  "Nickel",
                  "Lead",
                ].map((metal, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center justify-center gap-2 text-lg font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <FaIndustry className="text-blue-400" aria-hidden="true" />
                    {metal}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 🔹 Call to Action */}
          <section className="bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center sm:py-16 ring-1 ring-inset ring-black/20 rounded-3xl m-2 mb-2 p-4 py-12">
            <h2 className="text-3xl font-semibold">Need Certified Metal Inspection Services?</h2>
            <p className="text-lg m-4 mb-6 max-w-2xl mx-auto font-normal">
              Contact the experts at Worldwide Quality Inspection Ltd. — a DGFT-approved agency specializing in non-ferrous and ferrous metal inspection for international compliance and safety.
            </p>
            <Link
              to="/contact-us"
              className="px-6 py-3 bg-gradient-to-r from-[#5e60ff] via-[#4a90e2] to-[#4fd1c5] rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:to-blue-500 text-black font-semibold"
              aria-label="Get in Touch for Metal Inspection"
            >
              Get in Touch
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default MetalInspection;
