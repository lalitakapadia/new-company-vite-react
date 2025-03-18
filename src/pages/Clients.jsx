import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaCheckCircle, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";
import MetalInspectImage from "../assets/ShipmentInspection1.jpg";
import InspectionToolsImage from "../assets/MeatlInspection4.jpg";
import CertificationImage from "../assets/ShipmentInspection1.jpg";
import Heros from "../components/Heros";

const MetalInspection = () => {
  return (
    <>
      <body className="bg-gray-100 text-gray-800">
        <div className="overflow-hidden">
          <Navbar />

          {/* Hero Section */}
          <Heros
            title="Comprehensive Metal Inspection Services"
            description="Ensuring Safety, Compliance & Quality in 60+ Countries"
          />

          {/* PSIC Importance Section */}
          <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white m-2 rounded-3xl ring-1 ring-inset ring-black/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold">Why is a Pre-Shipment Inspection Certificate (PSIC) Essential?</h2>
                <p className="mt-4 text-lg text-gray-300 font-normal">
                  To examine the presence of radioactive materials and other explosive substances in ferrous scrap imports to India, obtaining a **Pre-Shipment Inspection Certificate (PSIC)** is a mandatory requirement. This certificate is issued by **Pre-Shipment Inspection Agencies (PSIAs)** that are specially selected by the **Directorate General of Foreign Trade (DGFT)** to ensure safety and compliance.
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative w-full h-96"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={MetalInspectImage}
                  alt="Inspection Process"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </section>

          {/* Inspection Tools Section */}
          <section className="py-16 px-6 lg:px-12 bg-gray-800 text-white m-2 rounded-3xl ring-1 ring-inset ring-black/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                className="relative w-full h-96 order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={InspectionToolsImage}
                  alt="Inspection Tools"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold">Advanced Inspection Tools & Expertise</h2>
                <p className="mt-4 text-lg text-gray-300 font-normal">
                  Our inspection process involves highly specialized personnel utilizing cutting-edge tools like **Portable Spectrometers** and **Survey Meters** to accurately detect radioactive contamination and hazardous elements.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Certification Section */}
          <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white m-2 rounded-3xl ring-1 ring-inset ring-black/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold">Pre-Shipment Certification</h2>
                <p className="mt-4 text-lg text-gray-300 font-normal">
                  As a DGFT-approved **Pre-Shipment Inspection Agency**, **New Company** ensures compliance before the shipment reaches India. We certify whether a shipment is free from radiation and explosives, guaranteeing seamless customs clearance.
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative w-full h-96"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={CertificationImage}
                  alt="Certification Process"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="m-2 rounded-3xl ring-1 ring-inset ring-black/20 bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center py-16">
            <h2 className="text-3xl font-bold">Need a Certified Metal Inspection?</h2>
            <p className="mt-4 text-lg font-medium mb-4">
              Contact our experts today for comprehensive inspection services tailored to your needs.
            </p>
            <Link
              to="/contact-us"
              className="mt-6 px-6 py-3 bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black rounded-full hover:from-[#4a90e2] hover:to-[#5e60ff] font-semibold rounded-lg shadow-md transition-all"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </body>
    </>
  );
};

export default MetalInspection;
