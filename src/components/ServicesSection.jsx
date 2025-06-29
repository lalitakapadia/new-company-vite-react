"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "service-secion-1",
    title: "Independent Quality Assurance",
    bookmark: "/services#IndependentQualityAssurance",
    description: "Ensure products meet international standards with rigorous third-party assessments.",
  },
  {
    id: "service-secion-2",
    title: "Shipment Integrity Verification",
    bookmark: "./services#ShipmentIntegrityVerification",
    description: "Pre-shipment checks to guarantee quality, compliance, and defect-free deliveries.",
  },
  {
    id: "service-secion-3",
    title: "Secure Cargo Supervision",
    bookmark: "./services#SecureCargoSupervision",
    description: "Monitor container loading to prevent damage, misplacement, or security risks.",
  },
  {
    id: "service-secion-4",
    title: "Supplier Compliance Assistance",
    bookmark: "./services#SupplierComplianceAssistance",
    description: "Help suppliers align with industry and regulatory requirements for approval.",
  },
  {
    id: "service-secion-5",
    title: "Vendor Risk & Quality Assessment",
    bookmark: "./services#VendorRiskQualityAssessment",
    description: "Evaluate suppliers' reliability, operational standards, and risk management.",
  },
  {
    id: "service-secion-6",
    title: "Strategic Supplier Benchmarking",
    bookmark: "./services#StrategicSupplierBenchmarking",
    description: "Assess vendor performance to optimize procurement and sourcing strategies.",
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
          We provide expert inspection and compliance services to safeguard your supply chain.
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
                <h3 className="text-xl font-semibold" ><Link to={service.bookmark}>{service.title}</Link></h3>
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
