import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Heros from "../components/Heros";
import {
  FaCheckCircle,
  FaLightbulb,
  FaShieldAlt,
  FaShippingFast,
  FaBoxOpen,
  FaClipboardCheck,
  FaSearchDollar,
  FaChartBar,
} from "react-icons/fa";

// Import Images
import qualityAssuranceImage from "../assets/QualityAssurance-3.jpg";
import shipmentIntegrityVerification from "../assets/IntegrityVerification.jpg";
import secureCargoImage from "../assets/SecureCargo.jpg";
import strategySupplierImage from "../assets/StrategySupplier.jpg";
import supplierComplianceImage from "../assets/SupplierCompliance.jpg";
import qualityAnalysisImage from "../assets/QualityAnalysis.jpg";

// Animation variants for service cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeInOut" } },
};

export default function Services() {
  const { hash } = useLocation();

  // Smooth scroll to section if URL contains hash
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      {/* 🔹 SEO Meta Tags */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quality Assurance & Compliance Services | Risk Management Experts</title>
        <meta
          name="description"
          content="Providing expert quality assurance, supplier compliance, and risk management services worldwide. Ensuring safe and reliable supply chains."
        />
        <meta
          name="keywords"
          content="quality assurance, supplier compliance, risk management, logistics verification, secure cargo"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.yourwebsite.com/services" />
        <html lang="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Quality Assurance & Compliance Services" />
        <meta
          property="og:description"
          content="Enhancing supply chains with expert quality assurance, supplier compliance, and risk assessment services."
        />
        <meta property="og:image" content="https://www.yourwebsite.com/og-services.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/services" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quality Assurance & Compliance Services" />
        <meta
          name="twitter:description"
          content="Enhancing supply chains with expert quality assurance, supplier compliance, and risk assessment services."
        />
        <meta name="twitter:image" content="https://www.yourwebsite.com/twitter-services.jpg" />

        {/* Structured Data: Organization + Services */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Worldwide Quality Inspection Ltd.",
              "url": "https://www.yourwebsite.com",
              "logo": "https://www.yourwebsite.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919123056093",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Inspection & Compliance Services",
                "itemListElement": [
                  ${servicesData
                    .map(
                      (svc) => `{
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "${svc.title}",
                      "description": "${svc.description}"
                    }
                  }`
                    )
                    .join(",")}
                ]
              }
            }
          `}
        </script>
        <style>{`html { scroll-behavior: smooth; }`}</style>
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
          title="Our Services"
          description="Worldwide Quality Inspection Ltd. delivers trusted expertise in quality assurance, regulatory compliance, and risk management for global supply chains."
        />

        <main>
          {/* 🔹 Services Section */}
          <section className="bg-gray-900 ring-1 ring-inset ring-black/20 rounded-3xl pt-6 m-2">
            <div className="mx-auto sm:p-12 p-4 space-y-12">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={service.bookmark}
                  {...service}
                  reverse={index % 2 !== 0}
                />
              ))}
            </div>
          </section>

          {/* 🔹 Call to Action */}
          <section
            className=" bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center sm:py-16 ring-1 ring-inset ring-black/20 rounded-3xl m-2 mb-2 p-4 py-12 "
            aria-label="Call to action section"
          >
            <h2 className="text-3xl font-semibold text-wrap">
              Excellence in Every Step – Worldwide Quality Inspection Ltd., Your Trusted Partner in Quality & Compliance
            </h2>
            <p className="m-4 mb-6 text-lg font-medium">
              From inspections to international compliance, Worldwide Quality Inspection Ltd. ensures your supply chain is secure, certified, and globally trusted
            </p>
            <Link
              to="/contact-us"
              className="mt-6 px-6 py-3 bg-gradient-to-r from-[#5e60ff] via-[#4a90e2] to-[#4fd1c5] 
                    rounded-full shadow-md transition-all 
                    duration-300 hover:scale-105 hover:shadow-lg  hover:to-blue-500  text-black rounded-full font-semibold shadow-md transition-all"
              aria-label="Contact Us for Quality Assurance and Risk Management"
            >
              Get in Touch
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

const ServiceCard = ({
  id,
  title,
  description,
  features,
  benefits,
  image,
  icon: Icon,
  reverse,
}) => (
  <motion.article
    id={id}
    className={`flex flex-col md:flex-row items-center gap-12 lg:p-8 p-4 bg-gray-800 rounded-3xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-transform ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
    role="region"
    aria-labelledby={`${id}-title`}
  >
    {/* Image Section */}
    <div className="relative w-full md:w-1/2 lg:h-96">
      {/* Motion Floating Shapes */}
      <motion.div
        className="absolute -top-15 -left-5 w-32 h-32 bg-blue-500 opacity-30 rounded-full"
        animate={{ y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-10 right-0 w-20 h-20 bg-purple-500 opacity-20 rounded-full"
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        loading="lazy"
      />
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2">
      <div className="flex items-center gap-4">
        <Icon className="text-blue-400 text-5xl" aria-hidden="true" />
        <h2 id={`${id}-title`} className="text-3xl font-semibold text-blue-400">
          {title}
        </h2>
      </div>
      <p className="mt-4 text-gray-300 font-normal">{description}</p>

      {/* Features List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 font-normal">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-center space-x-3 bg-gray-700 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
            whileHover={{ scale: 1.05 }}
            tabIndex={0}
            role="group"
            aria-label={feature}
          >
            <FaCheckCircle className="text-green-400 text-4xl" aria-hidden="true" />
            <p className="text-gray-300 text-md">{feature}</p>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r mt-4 from-[#5e60ff] via-[#4a90e2] via-[#4fd1c5] to-[#fff1be] p-4 rounded-lg shadow-md text-black">
        <div className="flex items-center space-x-3">
          <FaLightbulb className="text-yellow-300 text-2xl" aria-hidden="true" />
          <h3 className="text-xl font-semibold">Why It Matters</h3>
        </div>
        <ul className="mt-2 space-y-2 text-black font-normal">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center">
              <FaCheckCircle className="text-yellow-400 mr-2 text-xl" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.article>
);

// Service Data with Images & Icons
const servicesData = [
  {
    title: "Independent Quality Assurance",
    description:
      "Worldwide Quality Inspection Ltd. ensures excellence through unbiased, third-party quality verification services across industries.",
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
    description:
      "Worldwide Quality Inspection Ltd. guarantees product quality, compliance, and packaging reliability through robust pre-shipment inspections.",
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
    description:
      "Worldwide Quality Inspection Ltd. protects shipments from damage, tampering, or misplacement with advanced cargo monitoring and security protocols.",
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
    description:
      "Worldwide Quality Inspection Ltd. helps suppliers meet regulatory and industry standards to support smooth global trade operations.",
    image: supplierComplianceImage,
    icon: FaClipboardCheck,
    bookmark: "SupplierComplianceAssistance",
    features: [
      "Regulatory audits to ensure industry compliance",
      "ISO, FDA, CE, and RoHS certification guidance",
      "Compliance support for regulatory filings and reporting",
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
    description:
      "Worldwide Quality Inspection Ltd. evaluates supplier reliability, compliance history, and risk posture to ensure secure sourcing.",
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
    description:
      "Worldwide Quality Inspection Ltd. benchmarks vendor performance to drive strategic procurement and minimize sourcing risks.",
    image: strategySupplierImage,
    icon: FaChartBar,
    bookmark: "StrategicSupplierBenchmarking",
    features: [
      "Vendor performance metrics for procurement strategies",
      "Comparative analysis across supplier benchmarks",
      "Data-driven insights for sourcing decisions",
      "Continuous monitoring for supplier improvement",
      "Tailored reporting for executive decision-making",
    ],
    benefits: [
      "Optimizes procurement costs through strategic sourcing",
      "Enhances vendor performance and accountability",
      "Supports data-driven supply chain management",
    ],
  },
];
