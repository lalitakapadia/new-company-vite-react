import { useState } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaShieldAlt, FaCheckCircle, FaSearch, FaRadiation, FaFlask, FaMicroscope, FaAtom, FaVial, FaGlobe, FaClipboardCheck } from "react-icons/fa";

const Accordion = ({ title, descriptionItems, imageUrl, buttonText, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="bg-gray-800 rounded-lg shadow-lg mb-6 relative">
      <header
        className="flex justify-between items-center p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
        <button className="text-blue-400">{isOpen ? "Close" : "Open"}</button>
      </header>

      {isOpen && (
        <div className="p-6 space-y-4">
          <div className="relative p-6 sm:p-12">
            {/* Motion Floating Shapes */}
            <motion.div
              className="absolute top-8 left-8 w-32 h-32 bg-blue-500 opacity-30 rounded-full sm:left-20 sm:top-20"
              animate={{ y: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 right-4 w-20 h-20 bg-purple-500 opacity-20 rounded-full sm:right-0 sm:bottom-10"
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* Image with reduced size */}
            <img
              src={imageUrl}
              alt={title}
              className="w-full sm:w-1/2 mx-auto rounded-lg shadow-lg z-10"
            />
          </div>

          <div className="space-y-2">
            {descriptionItems.map((item, index) => (
              <div key={index} className="flex space-x-3 text-gray-300">
                <div className="text-yellow-300 align-top pb-4">{item.symbol}</div>
                <p className="text-sm font-normal">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <a
              href={url}
              title={buttonText}  // Added title for SEO purposes
              className="text-xl font-semibold text-blue-400 bg-gray-700 py-2 px-6 rounded-lg hover:bg-gray-600 transition"
            >
              {buttonText}
            </a>
          </div>
        </div>
      )}
    </article>
  );
};

export default function Services() {
  return (
    <main className="bg-gray-100 text-gray-800">
      <div className="overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <div
            className="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 
                        bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                        from-[#fff1be] from-[28%]   
                        via-[#4fd1c5] via-[55%]    
                        via-[#4a90e2] via-[70%]    
                        to-[#5e60ff] to-[100%]
                        rotate-[-10deg] 
                        rounded-full blur-3xl"
          ></div>
        </div>

        {/* About Us Accordion Section */}
        <section className="max-w-6xl mx-auto p-6 space-y-12">
          {aboutUsData.map((section, index) => (
            <Accordion key={index} {...section} />
          ))}
        </section>
      </div>
    </main>
  );
}

const aboutUsData = [
  {
    title: "Who we are",
    descriptionItems: [
      { text: "New Company is a DGFT-approved Pre-Shipment Inspection Agency, recognized under Public Notice No: 35/2015-2020, dated 28th December 2020.", symbol: <FaBuilding /> },
      { text: "We specialize in providing Pre-Shipment Inspection (PSI) services to ensure the safety and compliance of goods coming into India and other international markets.", symbol: <FaShieldAlt /> },
      { text: "As per Director General of Foreign Trade (DGFT) regulations, all containers entering India must be inspected at the time of loading by a DGFT-approved agency. This inspection checks for dangerous items such as arms, ammunition, explosives, and radiation. Once the inspection is complete, a Pre-Shipment Inspection Certificate (PSIC) is issued, which is necessary for customs clearance in India.", symbol: <FaCheckCircle /> },
    ],
    imageUrl: "./public/images/about-us-core-values.jpg",
    buttonText: "Let's Talk",
    url: "/contactus",
  },
  {
    title: "What we do",
    descriptionItems: [
      { text: "Inspection for radioactive and explosive contamination in scrap and waste of metal, plastic, and paper.", symbol: <FaSearch /> },
      { text: "Radioactive testing using X-Systems Alloy Analyzers.", symbol: <FaRadiation /> },
      { text: "Ferrous and Non-Ferrous quality analysis including HMS, Cast Iron, Aluminum, Copper, Stainless Steel, Chromium, Cobalt, Nickel, Tin, Zinc, Lead, Tungsten, etc.", symbol: <FaFlask /> },
      { text: "Spectrometer and spectrochemical testing for precise material analysis.", symbol: <FaMicroscope /> },
      { text: "Physical testing such as tensile strength, Rockwell and Brinell hardness, grain size, etc.", symbol: <FaAtom /> },
      { text: "Safety control Pre-Shipment Inspection for the identification and mitigation of potential contamination of scrap and recyclables with explosives, radioactivity, and hazardous substances.", symbol: <FaVial /> },
    ],
    imageUrl: "./public/images/Inspection2.jpg",
    buttonText: "Let's Talk",
    url: "/contactus",
  },
  {
    title: "What we offer",
    descriptionItems: [
      { text: "New Company is authorized to provide Pre-Shipment Inspection Certification in multiple regions, including the United Kingdom, Europe, USA, UAE, Israel, South Africa, Australia, New Zealand, and many others, ensuring global coverage for our clients.", symbol: <FaGlobe /> },
      { text: "New Comapany can customize the inspection process based on the client’s specific requirements.", symbol: <FaClipboardCheck /> },
    ],
    imageUrl: "./public/images/VendorRisk.jpg",
    buttonText: "Let's Talk",
    url: "/contactus",
  },
];
