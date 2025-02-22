import { motion } from "framer-motion";
import { FaHandshake, FaCheckCircle, FaLightbulb, FaGlobe, FaBalanceScale } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ContinentsSection from "../components/ContinentsSection";

export default function AboutUs() {
  return (
    <body className="bg-gray-100 text-gray-800">
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
        <Navbar />
        <div className="bg-gray-900 text-white font-sans">
          {/* Hero Section */}
          <section className="h-screen text-cyan-800 relative flex flex-col justify-center items-center text-center bg-[url(./public/images/about-us-map1.jpg)] p-8">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Your Trusted Inspection Partner
            </motion.h1>
            <motion.p
              className="text-lg opacity-80 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Ensuring quality and safety with cutting-edge inspections worldwide.
            </motion.p>
            <motion.a
              href="#about"
              className="mt-6 px-8 py-3 bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-white rounded-full hover:from-[#4a90e2] hover:to-[#5e60ff] transition duration-300 text-blue-600 font-semibold rounded-full shadow-md hover:bg-opacity-90 transition"
              whileHover={{ scale: 1.1 }}
            >
              Learn More
            </motion.a>
          </section>

          {/* About Us Section */}
          <section id="about" className="flex flex-col md:flex-row items-center p-12 gap-8">
            <motion.img
              src="./public/images/about-us-core-values.jpg"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-300 mb-4">
                **MELT Enterprise Ltd** is a **DGFT-approved Pre-Shipment Inspection Agency**, recognized under **Public Notice No: 35/2015-2020**, dated **28th December 2020**. We specialize in providing Pre-Shipment Inspection (PSI) services to ensure the safety and compliance of goods coming into India and other international markets.
              </p>
              <p className="text-gray-300 mb-4">
                As per **Director General of Foreign Trade (DGFT)** regulations, all containers entering India must be inspected at the time of loading by a **DGFT-approved agency**. This inspection checks for dangerous items such as arms, ammunition, explosives, and radiation. Once the inspection is complete, a **Pre-Shipment Inspection Certificate (PSIC)** is issued, which is necessary for customs clearance in India.
              </p>
              <p className="text-gray-300 mb-4">
                MELT Enterprise Ltd is authorized to provide **Pre-Shipment Inspection Certification** in multiple regions, including the **United Kingdom, Europe, USA, UAE, Israel, South Africa, Australia, New Zealand**, and many others, ensuring global coverage for our clients.
              </p>
              <p className="text-gray-300 mb-4">
                MELT Enterprise Ltd can customize the inspection process based on the client’s specific requirements. Below are a few checks that we perform during our Pre-Shipment Inspection:
              </p>
              <ul className="list-disc pl-8 text-gray-300 mb-4">
                <li>Inspection for radioactive and explosive contamination in scrap and waste of metal, plastic, and paper.</li>
                <li>Radioactive testing using X-Systems Alloy Analyzers.</li>
                <li>Ferrous and Non-Ferrous quality analysis including HMS, Cast Iron, Aluminum, Copper, Stainless Steel, Chromium, Cobalt, Nickel, Tin, Zinc, Lead, Tungsten, etc.</li>
                <li>Spectrometer and spectrochemical testing for precise material analysis.</li>
                <li>Physical testing such as tensile strength, Rockwell and Brinell hardness, grain size, etc.</li>
                <li>Safety control Pre-Shipment Inspection for the identification and mitigation of potential contamination of scrap and recyclables with explosives, radioactivity, and hazardous substances.</li>
              </ul>
            </div>
          </section>

          {/* Continent Section */}
          <section id="continent" className="bg-gray-800 text-white p-12">
            <h2 className="text-4xl font-bold text-center mb-8">Our Global Presence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div className="text-center p-6 bg-gray-700 bg-opacity-20 rounded-lg shadow-lg">
                <FaGlobe className="text-5xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-2xl">Global Reach</h3>
                <p className="mt-4">
                  With a network spanning multiple continents, we bring global insights to ensure your products meet regional and international standards. Wherever you do business, we are there.
                </p>
              </motion.div>
              <motion.div className="text-center p-6 bg-gray-700 bg-opacity-20 rounded-lg shadow-lg">
                <FaGlobe className="text-5xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-2xl">Local Expertise</h3>
                <p className="mt-4">
                  Our local experts understand the intricacies of different regions and markets, ensuring compliance with every regulatory requirement and maintaining quality in every step.
                </p>
              </motion.div>
              <motion.div className="text-center p-6 bg-gray-700 bg-opacity-20 rounded-lg shadow-lg">
                <FaGlobe className="text-5xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-2xl">Comprehensive Solutions</h3>
                <p className="mt-4">
                  Whether you're expanding into new markets or ensuring compliance in existing ones, our services span industries and sectors to meet your needs in every corner of the globe.
                </p>
              </motion.div>
            </div>
          </section>

          <ContinentsSection />

          {/* Why Melt Enterprise Section */}
          <section id="why-melt-enterprise" className="bg-gray-100 text-gray-800 p-12">
            <h2 className="text-4xl font-bold text-center mb-8">Why Choose Melt Enterprise?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                title: "Expertise", text: "With over 20 years in the inspection industry, we offer unmatched knowledge and skills to guarantee your products meet global standards."
              }, {
                title: "Integrity", text: "Our business operates with the highest standards of ethics and transparency, ensuring you can trust us with your compliance needs."
              }, {
                title: "Innovation", text: "We continuously innovate and adapt our services to stay ahead in the industry, ensuring you always have the best solutions."
              }].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-700 bg-opacity-10 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-4">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Pre-Shipment Inspection Section */}
          <section id="psi" className="p-12 bg-gray-800 text-white">
            <h2 className="text-4xl font-bold text-center mb-8">What is Pre-Shipment Inspection (PSI)?</h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-300">
              Pre-Shipment Inspection (PSI) is a quality control procedure where goods are inspected before shipment to ensure compliance with contract specifications, regulations, and standards. PSI helps mitigate risks, reduce delays, and guarantee product quality before export.
            </p>
          </section>

          {/* Pre-Shipment Inspection Expertise Section */}
          <section className="p-12">
            <h2 className="text-4xl font-bold text-center mb-8">Our Pre-Shipment Inspection Expertise</h2>
            <div className="max-w-5xl mx-auto text-lg text-gray-800">
              <p className="mb-4">
                Our team of experienced inspectors is well-versed in international standards and regulations, ensuring that your products undergo a thorough inspection process before shipment. We provide detailed reports, clear certifications, and actionable insights to help you move forward with confidence.
              </p>
            </div>
          </section>

          {/* Why Get a Pre-Shipment Inspection Section */}
          <section id="why-psi" className="bg-gray-100 text-gray-800 p-12">
            <h2 className="text-4xl font-bold text-center mb-8">Why Get a Pre-Shipment Inspection?</h2>
            <ul className="list-disc pl-8 space-y-4">
              <li>Minimize risks and avoid costly delays by ensuring your products meet quality standards.</li>
              <li>Ensure that your goods are compliant with local and international regulations.</li>
              <li>Reduce the chances of disputes with suppliers by having an impartial third-party inspection.</li>
              <li>Gain a competitive edge by offering high-quality products to your customers with peace of mind.</li>
            </ul>
          </section>
        </div>
      </div>
    </body>
  );
}
