import React from 'react';
import Navbar from '../components/Navbar';

import { FaShieldAlt, FaShippingFast, FaBoxOpen, FaClipboardCheck, FaSearchDollar, FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";


const services = [
  {
    title: "Independent Quality Assurance",
    icon: FaShieldAlt,
    summary: "Ensure products meet international standards with rigorous third-party assessments.",
    details: "We provide comprehensive quality assurance audits, ensuring compliance with industry benchmarks, safety regulations, and customer expectations. Our thorough inspections help mitigate risks and prevent costly defects in the supply chain.",
    image: "/quality-assurance.jpg",
  },
  {
    title: "Shipment Integrity Verification",
    icon: FaShippingFast,
    summary: "Pre-shipment checks to guarantee quality, compliance, and defect-free deliveries.",
    details: "Our shipment verification process includes pre-shipment inspections, packaging integrity assessments, and product conformity checks to ensure smooth and hassle-free international deliveries.",
    image: "/shipment-verification.jpg",
  },
  {
    title: "Secure Cargo Supervision",
    icon: FaBoxOpen,
    summary: "Monitor container loading to prevent damage, misplacement, or security risks.",
    details: "We oversee container loading and unloading, verifying product quantity, security seals, and transportation compliance. Our supervision helps reduce transit risks and product losses.",
    image: "/cargo-supervision.jpg",
  },
  {
    title: "Supplier Compliance Assistance",
    icon: FaClipboardCheck,
    summary: "Help suppliers align with industry and regulatory requirements for approval.",
    details: "Our compliance experts assist suppliers in meeting local and global regulations, ensuring smooth certification processes and continuous improvement in operational standards.",
    image: "/supplier-compliance.jpg",
  },
  {
    title: "Vendor Risk & Quality Assessment",
    icon: FaSearchDollar,
    summary: "Evaluate suppliers' reliability, operational standards, and risk management.",
    details: "We conduct in-depth evaluations of supplier capabilities, risk exposure, and financial stability, empowering businesses to make informed procurement decisions.",
    image: "/vendor-assessment.jpg",
  },
  {
    title: "Strategic Supplier Benchmarking",
    icon: FaChartBar,
    summary: "Assess vendor performance to optimize procurement and sourcing strategies.",
    details: "Using industry metrics, we analyze supplier efficiency, pricing models, and product quality, helping organizations refine their sourcing strategies and enhance supply chain resilience.",
    image: "/supplier-benchmarking.jpg",
  },
];

const Services = () => {
  return (
    <body class="bg-gray-100 text-gray-800 ">
      <div class="overflow-hidden">
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

        <Navbar />

        <div className="bg-gray-900 text-white">


          {/* Hero Section */}
          <section className="h-screen/2 p-12 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Premium Services
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Delivering excellence through rigorous inspections, compliance, and strategic insights.
            </motion.p>
          </section>

          {/* Services Section */}
          <section className="p-12 space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2">
                  <img src={service.image} alt={service.title}></img>
                  {/* <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  /> */}
                </div>
                <div className="md:w-1/2">
                  <service.icon className="text-5xl text-blue-400 mb-4" />
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg font-semibold mb-2">{service.summary}</p>
                  <p className="text-lg text-gray-400">{service.details}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Call to Action */}
          <section className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-lg mb-6">Enhance your business with our trusted services.</p>
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Get Started
            </motion.a>
          </section>
        </div>
      </div>

    </body>
  )
};

export default Services;