"use client";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLightbulb } from "react-icons/fa";
import {
  FaShieldAlt, FaShippingFast, FaBoxOpen, FaClipboardCheck, FaSearchDollar, FaChartBar,
  FaBoxes, FaUsers, FaSearch, FaChartLine
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import qualityAssuranceImage from "../assets/QualityAssurance-3.jpg";
import shipmentIntegrityVerification from "../assets/IntegrityVerification.jpg";
import secureCargoImage from "../assets/SecureCargo.jpg";
import strategySupplierImage from "../assets/StrategySupplier.jpg";
import supplierComplianceImage from "../assets/SupplierCompliance.jpg";
import qualityAnalysisImage from "../assets/QualityAnalysis.jpg";

export default function Services() {
  const { hash } = useLocation(); // Get URL hash

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
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
        <div>
        <section className="h-80 flex flex-col justify-center text-black items-center text-center px-6 
                bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                from-[#fff1be] from-[28%] 
                via-[#4fd1c5] via-[55%] 
                via-[#4a90e2] via-[70%] 
                to-[#5e60ff] to-[100%] 
                sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] ring-1 ring-inset ring-black/20 rounded-3xl">
            <motion.h1
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Delivering Excellence in Quality, Compliance, and Risk Management
            </motion.p>
          </section>
        </div>
        <div className="bg-gray-900 ring-1 ring-inset ring-black/20 rounded-3xl pt-6 mt-4">
          {/* Hero Section */}
          {/* <section className="h-80 flex flex-col justify-center text-black items-center text-center px-6 
                bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                from-[#fff1be] from-[28%] 
                via-[#4fd1c5] via-[55%] 
                via-[#4a90e2] via-[70%] 
                to-[#5e60ff] to-[100%] 
                sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] ring-1 ring-inset ring-black/20 rounded-3xl">
            <motion.h1
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Delivering Excellence in Quality, Compliance, and Risk Management
            </motion.p>
          </section> */}

          {/* Services Section */}
          <section className="max-w-6xl mx-auto p-6 space-y-12">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} reverse={index % 2 !== 0} />
            ))}
          </section>
        </div>
      </div>
      <section className="bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center py-16 ring-1 ring-inset ring-black/20 rounded-3xl mt-4">
        <h2 className="text-3xl font-bold">Excellence in Every Step: Your Trusted Partner in Quality & Compliance</h2>
        <p className="mt-4 text-lg font-medium mb-4">From Quality to Compliance – We’ve Got Your Supply Chain Covered!</p>
           <Link
            to="/contact-us"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black rounded-full hover:from-[#4a90e2] hover:to-[#5e60ff] font-semibold rounded-lg shadow-md transition-all">
            Get in Touch
          </Link>
      </section>
    </body>

  );
}

const ServiceCard = ({ title, description, features, bookmark, benefits, image, icon: Icon, reverse }) => {
  return (
    <motion.div id={bookmark}
      className={`flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-800 rounded-3xl shadow-lg transition-all transform hover:scale-105 ${reverse ? "md:flex-row-reverse" : ""
        }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-96">
        {/* Motion Floating Shapes */}
        <motion.div
          className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 opacity-30 rounded-full"
          animate={{ y: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 right-0 w-20 h-20 bg-purple-500 opacity-20 rounded-full"
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* Clipped Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg shadow-lg"

        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4">
          <Icon className="text-blue-400 text-5xl" />
          <h2 className="text-3xl font-semibold text-blue-400">{title}</h2>
        </div>
        <p className="mt-4 text-gray-300 p-1">{description}</p>



        {/* Features List */}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 bg-gray-700 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <FaCheckCircle className="text-green-400 text-2xl" />
              <p className="text-gray-300 font-normal text-sm">{feature}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r mt-2 from-[#5e60ff] via-[#4a90e2] via-[#4fd1c5] to-[#fff1be] p-4 rounded-lg shadow-md text-black">
          <div className="flex items-center space-x-3">
            <FaLightbulb className="text-yellow-300 text-2xl" />
            <h3 className="text-xl font-semibold">Why It Matters</h3>
          </div>
          {/* <p className="mt-2 text-gray-200">{service.whyItMatters}</p> */}
          <ul className="mt-2 space-y-2 font-normal">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
    
  );
};

// Service Data with Images & Icons
const servicesData = [
  {
    title: "Independent Quality Assurance",
    description: "Ensuring excellence through unbiased quality verification.",
    image: qualityAssuranceImage,
    icon: FaShieldAlt,
    bookmark: "IndependentQualityAssurance",
    features: [
      "Comprehensive product inspections at every production stage",
      "Verification against ISO, ASTM, and other global standards",
      "Material and performance testing for durability, safety, and reliability",
      "Detailed compliance reports with corrective action plans",
      "Tailored assessments to meet specific industry and client needs",
    ],
    benefits: [
      "Minimizes product recalls and compliance risks",
      "Enhances brand reputation by delivering defect-free products",
      "Ensures customer satisfaction through consistent quality",
    ],
  },
  {
    title: "Shipment Integrity Verification",
    description: "Guaranteeing product quality before dispatch.",
    image: shipmentIntegrityVerification,
    icon: FaShippingFast,
    bookmark: "ShipmentIntegrityVerification",
    features: [
      "Pre-shipment inspections for defects, compliance, and packaging",
      "Random sampling and AQL-based quality checks",
      "Loading and unloading supervision for safety assurance",
      "Real-time inspection reports with photographic evidence",
      "Compliance verification for international shipping standards",
    ],
    benefits: [
      "Reduces risk of faulty shipments and customer complaints",
      "Ensures regulatory compliance for hassle-free global trade",
      "Strengthens supplier accountability and transparency",
    ],
  },
  {
    title: "Secure Cargo Supervision",
    description: "Protecting shipments from damage, misplacement, and security risks.",
    image: secureCargoImage,
    icon: FaBoxOpen,
    bookmark: "SecureCargoSupervision",
    features: [
      "24/7 monitoring of loading and unloading procedures",
      "Tamper-proof security seals and verification",
      "GPS tracking and real-time surveillance for high-value shipments",
      "Condition and quantity verification before dispatch",
      "Detailed incident reporting with corrective recommendations",
    ],
    benefits: [
      "Prevents losses due to theft, mishandling, or misplacement",
      "Ensures adherence to global security compliance (TAPA, C-TPAT)",
      "Boosts supply chain confidence with secure logistics",
    ],
  },
  {
    title: "Supplier Compliance Assistance",
    description: "Helping suppliers align with regulatory and industry standards.",
    image: supplierComplianceImage,
    icon: FaClipboardCheck,
    bookmark: "SupplierComplianceAssistance",
    features: [
      "Regulatory audits to ensure industry compliance",
      "ISO, FDA, CE, and RoHS certification guidance",
      "Customized training programs for supplier improvement",
      "Gap analysis and corrective action planning",
      "On-site assessments and compliance documentation",
    ],
    benefits: [
      "Reduces non-compliance penalties and legal risks",
      "Strengthens supplier relationships through quality alignment",
      "Improves operational efficiency and market competitiveness",
    ],
  },
  {
    title: "Vendor Risk & Quality Assessment",
    description: "Evaluating supplier reliability, operational standards, and risk management.",
    image: qualityAnalysisImage,
    icon: FaSearchDollar,
    bookmark: "VendorRiskQualityAssessment",
    features: [
      "Supplier qualification assessments before onboarding",
      "Operational audits covering safety, quality, and ethics",
      "Supply chain risk evaluation and fraud detection",
      "Financial health checks for business stability",
      "Custom reports with risk mitigation strategies",
    ],
    benefits: [
      "Mitigates supplier-related risks and potential disruptions",
      "Ensures long-term partnerships with reliable vendors",
      "Improves supply chain efficiency and risk preparedness",
    ],
  },
  {
    title: "Strategic Supplier Benchmarking",
    description: "Assess vendor performance to optimize procurement and sourcing strategies.",
    image: strategySupplierImage,
    icon: FaChartBar,
    bookmark: "StrategicSupplierBenchmarking",
    features: [
      "Supplier qualification assessments before onboarding",
      "Operational audits covering safety, quality, and ethics",
      "Supply chain risk evaluation and fraud detection",
      "Financial health checks for business stability",
      "Custom reports with risk mitigation strategies",
    ],
    benefits: [
      "Mitigates supplier-related risks and potential disruptions",
      "Ensures long-term partnerships with reliable vendors",
      "Improves supply chain efficiency and risk preparedness",
    ]
  },
];
