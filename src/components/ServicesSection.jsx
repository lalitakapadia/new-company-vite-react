"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Independent Quality Assurance",
    description: "Ensure products meet international standards with rigorous third-party assessments.",
  },
  {
    title: "Shipment Integrity Verification",
    description: "Pre-shipment checks to guarantee quality, compliance, and defect-free deliveries.",
  },
  {
    title: "Secure Cargo Supervision",
    description: "Monitor container loading to prevent damage, misplacement, or security risks.",
  },
  {
    title: "Supplier Compliance Assistance",
    description: "Help suppliers align with industry and regulatory requirements for approval.",
  },
  {
    title: "Vendor Risk & Quality Assessment",
    description: "Evaluate suppliers' reliability, operational standards, and risk management.",
  },
  {
    title: "Strategic Supplier Benchmarking",
    description: "Assess vendor performance to optimize procurement and sourcing strategies.",
  },
];

export default function ServicesSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold text-center"
        >
          Our Premium Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-gray-300 mt-2"
        >
          We provide expert inspection and compliance services to safeguard your supply chain.
        </motion.p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative group overflow-hidden rounded-3xl bg-gray-800 shadow-lg hover:shadow-2xl transition-transform hover:scale-105 p-6"
            >
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="mt-2 text-gray-300">{service.description}</p>
              {/* Animated Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
