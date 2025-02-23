import { useState } from "react";
import { motion } from "framer-motion";

import { FaBuilding, FaShieldAlt, FaCheckCircle, FaGlobe, FaClipboardCheck, FaSearch, FaFlask, FaMicroscope, FaAtom, FaRadiation, FaVial } from "react-icons/fa";

const aboutUsData = [
    {
        title: "Who we are",
        descriptionItems: [
            { text: "New Company is a DGFT-approved Pre-Shipment Inspection Agency, recognized under Public Notice No: 35/2015-2020, dated 28th December 2020.", symbol: <FaBuilding /> }, // Represents a company or organization
            { text: "We specialize in providing Pre-Shipment Inspection (PSI) services to ensure the safety and compliance of goods coming into India and other international markets.", symbol: <FaShieldAlt /> }, // Represents protection and compliance
            { text: "As per Director General of Foreign Trade (DGFT) regulations, all containers entering India must be inspected at the time of loading by a DGFT-approved agency. This inspection checks for dangerous items such as arms, ammunition, explosives, and radiation. Once the inspection is complete, a Pre-Shipment Inspection Certificate (PSIC) is issued, which is necessary for customs clearance in India.", symbol: <FaCheckCircle /> }, // Represents verification and approval
        ],
        imageUrl: "./public/images/about-us-core-values.jpg",
        buttonText: "Let's Talk",
        url: "/contactus",
    },
    {
        title: "What we offer",
        descriptionItems: [
            { text: "New Company is authorized to provide Pre-Shipment Inspection Certification in multiple regions, including the United Kingdom, Europe, USA, UAE, Israel, South Africa, Australia, New Zealand, and many others, ensuring global coverage for our clients.", symbol: <FaGlobe /> }, // Represents global presence
            { text: "MELT Enterprise Ltd can customize the inspection process based on the client’s specific requirements.", symbol: <FaClipboardCheck /> }, // Represents checklist and customization
        ],
        imageUrl: "./public/images/Inspection2.jpg",
        buttonText: "Let's Talk",
        url: "/contactus",
    },
    {
        title: "What we do",
        descriptionItems: [
            { text: "Inspection for radioactive and explosive contamination in scrap and waste of metal, plastic, and paper.", symbol: <FaSearch /> }, // Represents inspection
            { text: "Radioactive testing using X-Systems Alloy Analyzers.", symbol: <FaRadiation /> }, // Represents radiation detection
            { text: "Ferrous and Non-Ferrous quality analysis including HMS, Cast Iron, Aluminum, Copper, Stainless Steel, Chromium, Cobalt, Nickel, Tin, Zinc, Lead, Tungsten, etc.", symbol: <FaFlask /> }, // Represents material testing
            { text: "Spectrometer and spectrochemical testing for precise material analysis.", symbol: <FaMicroscope /> }, // Represents lab-based material analysis
            { text: "Physical testing such as tensile strength, Rockwell and Brinell hardness, grain size, etc.", symbol: <FaAtom /> }, // Represents atomic/molecular testing
            { text: "Safety control Pre-Shipment Inspection for the identification and mitigation of potential contamination of scrap and recyclables with explosives, radioactivity, and hazardous substances.", symbol: <FaVial /> }, // Represents safety control & hazardous substance checks
        ],
        imageUrl: "./public/images/Inspection2.jpg",
        buttonText: "Let's Talk",
        url: "/contactus",
    }
];


export default function AboutUsAccordion() {
    const [expandedAboutUs, setExpandedAboutUs] = useState(0); // Default first item expanded

    const handleClick = (index) => {
        setExpandedAboutUs((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="flex flex-col lg:flex-row bg-gray-800 text-white p-12">
            {/* Left: About Us Titles */}
            <div className="w-full lg:w-1/2 space-y-4">
                {aboutUsData.map((aboutus, index) => (
                    <motion.div
                        key={index}
                        className={`relative  transition-all duration-500 ${expandedAboutUs === index
                            ? " bg-gray-700"
                            : "border-transparent hover:bg-gray-700"
                            }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Clickable Title */}
                        <motion.div
                            className="flex justify-between items-center cursor-pointer p-4 pl-8 rounded-md relative"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleClick(index)}
                        >
                            <span className="text-3xl font-semibold flex-1  text-left">
                                {aboutus.title}
                            </span>
                            <motion.span
                                className="text-2xl absolute right-14"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: expandedAboutUs === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {expandedAboutUs === index ? "−" : "+"}
                            </motion.span>
                        </motion.div>

                        {/* Gradient Left Border Animation */}
                        <motion.div
                            className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-green-400"
                            initial={{ height: 0 }}
                            animate={{ height: expandedAboutUs === index ? "100%" : "0%" }}
                            transition={{ duration: 0.8 }}
                        ></motion.div>

                        {/* Expandable Content with Smooth Animation */}
                        <motion.div
                            className="overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: expandedAboutUs === index ? "auto" : 0,
                                opacity: expandedAboutUs === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {aboutus.descriptionItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex text-gray-100 mt-2 p-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2, delay: index * 0.1 }}
                                >
                                    {item.symbol? (
                                        <span className="mr-2 pl-6 text-teal-300 text-2xl inline-block align-top">{item.symbol}</span>
                                    ) : null}
                                    <p class ="pl-6 font-normal">{item.text}</p>
                                </motion.div>
                            ))
                            }
                            <div className="pb-4 pl-8">
                       
                                <a href={aboutus.url} className="mt-4 inline-block text-teal-300 font-semibold text-xl relative">
                                    {aboutus.buttonText}
                                    {/* Bottom Underline Animation */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </a>

                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Right: Images (Only Show Active One) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-8 relative">
                {aboutUsData.map((aboutus, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                            opacity: expandedAboutUs === index ? 1 : 0,
                            scale: expandedAboutUs === index ? 1 : 0.95,
                        }}
                        transition={{ duration: 0.4 }}
                        className={`absolute ${expandedAboutUs === index ? "block" : "hidden"}`}
                    >
                        <img
                            src={aboutus.imageUrl}
                            alt={aboutus.title}
                            className="w-full h-[60vh] rounded-lg shadow-lg "
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
