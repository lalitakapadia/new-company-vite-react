import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaBuilding, FaShieldAlt, FaCheckCircle, FaSearch, FaRadiation, FaFlask, FaMicroscope, FaAtom, FaVial, FaGlobe, FaClipboardCheck } from "react-icons/fa";
import aboutUsCoreValues from "../assets/about-us-core-values.jpg";
import inspectionImage from "../assets/Inspection2.jpg";
import vendorRiskImage from "../assets/VendorRisk.jpg";
const Accordion = ({ title, descriptionItems, imageUrl, buttonText, url, isActive, onClick }) => {
  return (
    <article className="bg-gray-800 rounded-3xl shadow-lg mb-2 p-2 sm:p-3">
      <header
        className={`flex justify-between items-center p-2 sm:p-3 ${isActive ? "cursor-default" : "cursor-pointer"
          }`}
        onClick={onClick}
      >

        <h3 className="text-lg sm:text-2xl font-semibold text-blue-400 sm:px-8 px-4 mb-2">{title}</h3>
        <span className="text-blue-400 sm:px-8 px-4 ">
          {isActive ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </header>

      {/* Content Section */}
      {isActive && (
        <div className="flex flex-col sm:flex-row items-center gap-6 lg:px-8">
          {/* Left Section: Description */}
          <div className="w-full sm:w-1/2 space-y-4 pl-4">
            {descriptionItems.map((item, index) => (
              <div key={index} className="flex space-x-3 text-gray-300 ">
                <div className="text-yellow-300 mt-2">{item.symbol}</div>
                <p className="text-sm sm:text-base font-normal">{item.text}</p>
              </div>
            ))}

            <div className="mt-4">
            <Link
              to={url}
              title={buttonText}
              className="inline-block text-lg font-semibold text-blue-400 bg-gray-700 py-2 px-6 rounded-lg hover:bg-gray-600 transition"
              >
              {buttonText}
            </Link>
            </div>
          </div>

          {/* Right Section: Animated Image */}
          <motion.div
            className="w-full sm:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="relative">

              <motion.div
                className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500 opacity-30 rounded-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -right-4 w-12 h-12 bg-purple-500 opacity-20 rounded-full"
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />


              <img
                src={imageUrl}
                alt={title}
                className="w-full sm:w-80 rounded-3xl shadow-lg mb-4"
              />
            </div>
          </motion.div>
        </div>
      )}
    </article>
  );
};

export default function AboutUsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-gray-100 text-gray-800 m-2">
      <div className=" mx-auto space-y-12">
        {aboutUsData.map((section, index) => (
          <Accordion
            key={index}
            {...section}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index === activeIndex ? activeIndex : index)}
          />
        ))}
      </div>
    </main>
  );
}

const aboutUsData = [
  {
    title: "Who we are",
    descriptionItems: [
      { text: "Worldwide Quality Inspection Ltd is a DGFT-approved Pre-Shipment Inspection Agency, recognized under Public Notice No: 35/2015-2020, dated 28th December 2020.", symbol: <FaBuilding /> },
      { text: "At Worldwide Quality Inspection Ltd, We specialize in providing Pre-Shipment Inspection (PSI) services to ensure the safety and compliance of goods coming into India and other international markets.", symbol: <FaShieldAlt /> },
      { text: "As per Director General of Foreign Trade (DGFT) regulations, all containers entering India must be inspected at the time of loading by a DGFT-approved agency like Worldwide Quality Inspection Ltd.", symbol: <FaCheckCircle /> },
    ],
    imageUrl: aboutUsCoreValues,
    buttonText: "Let's Talk",
    url: "/contact-us",
  },
  {
    title: "What we offer",
    descriptionItems: [
      { text: "Worldwide Quality Inspection Ltd provide Pre-Shipment Inspection Certification in multiple regions worldwide.", symbol: <FaGlobe /> },
      { text: "We customize the inspection process based on each client’s specific needs and compliance requirements.", symbol: <FaClipboardCheck /> },
    ],
    imageUrl: vendorRiskImage,
    buttonText: "Let's Talk",
    url: "/contact-us",
  },
  {
    title: "What we do",
    descriptionItems: [
      { text: "We inspect for radioactive and explosive contamination in scrap and waste materials including metal, plastic, and paper.", symbol: <FaSearch /> },
      { text: "Radioactive testing is conducted using state-of-the-art X-Systems Alloy Analyzers.", symbol: <FaRadiation /> },
      { text: "We perform ferrous and non-ferrous quality analysis, including HMS, Cast Iron, Aluminum, Copper, Stainless Steel, and more", symbol: <FaFlask /> },
      { text: "Our spectrometer and spectrochemical testing provide precise material composition analysis.", symbol: <FaMicroscope /> },
      { text: "PWe conduct physical testing such as tensile strength, Rockwell and Brinell hardness, and grain size evaluation.", symbol: <FaAtom /> },
      { text: "Worldwide Quality Inspection Ltd also performs safety control inspections to detect contamination before shipment.", symbol: <FaVial /> },
    ],
    imageUrl: inspectionImage,
    buttonText: "Let's Talk",
    url: "/contact-us",
  },
];
