"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "service-secion-1",
    title: "Independent Quality Assurance",
    bookmark: "/services#IndependentQualityAssurance",
    description: "Worldwide Quality Inspection Ltd. delivers third-party quality assessments to ensure your products meet international standards.",
  },
  {
    id: "service-secion-2",
    title: "Shipment Integrity Verification",
    bookmark: "./services#ShipmentIntegrityVerification",
    description: "Pre-shipment checks by Worldwide Quality Inspection Ltd. guarantee product quality, regulatory compliance, and damage-free deliveries.",
  },
  {
    id: "service-secion-3",
    title: "Secure Cargo Supervision",
    bookmark: "./services#SecureCargoSupervision",
    description: "Worldwide Quality Inspection Ltd. supervises container loading to minimize damage, prevent tampering, and ensure cargo security.",
  },
  {
    id: "service-secion-4",
    title: "Supplier Compliance Assistance",
    bookmark: "./services#SupplierComplianceAssistance",
    description: "Our experts at Worldwide Quality Inspection Ltd. assist your suppliers in meeting industry standards and regulatory approvals.",
  },
  {
    id: "service-secion-5",
    title: "Vendor Risk & Quality Assessment",
    bookmark: "./services#VendorRiskQualityAssessment",
    description: "Worldwide Quality Inspection Ltd. evaluates supplier risk, quality control systems, and operational practices to reduce supply chain exposure.",
  },
  {
    id: "service-secion-6",
    title: "Strategic Supplier Benchmarking",
    bookmark: "./services#StrategicSupplierBenchmarking",
    description: "Leverage Worldwide Quality Inspection Ltd.’s insights to benchmark vendors and improve your procurement strategy and performance.",
  },
];

export default function ServicesSection() {
  return (
    <div className="m-2 inset-2 bottom-0 rounded-3xl py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className=" mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center pl-2 pr-2"
        >
          Our Premium Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center font-normal text-gray-300 mt-2 p-2"
        >
          Worldwide Quality Inspection Ltd. provides expert inspection and compliance services to safeguard your global supply chain.
        </motion.p>

        {/* Service Cards */}
        <div className="mt-12 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative group overflow-hidden rounded-3xl bg-gray-800 shadow-lg hover:shadow-2xl transition-transform hover:scale-105 mx-2"
            >
              <div className="flex items-center m-6 space-x-4">
                <CheckCircle className="w-12  text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-xl font-semibold">
                  <a
                    id={index === 0 ? "services-bookmark-link" : undefined}
                    href={service.bookmark}
                    onClick={() => sessionStorage.setItem('scrollBackTo', 'services-bookmark-link')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service.title}
                  </a>
                </h3>
              </div>
              <p className="m-6 text-gray-300 font-normal">{service.description}</p>
              {/* Animated Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
