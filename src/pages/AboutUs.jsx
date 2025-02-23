import { motion } from "framer-motion";
import { FaChevronDown, FaHandshake, FaCheckCircle, FaLightbulb, FaGlobe, FaBalanceScale } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ContinentsSection from "../components/ContinentsSection";
import React, { useState } from 'react';
import AboutUsAccordion from "../components/AbboutUsAccordion";

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
          <section className="h-screen/2 p-24 text-black relative flex flex-col justify-center items-center text-center  
          bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
          from-[#fff1be] from-[28%] 
          via-[#4fd1c5] via-[55%] 
          via-[#4a90e2] via-[70%] 
          to-[#5e60ff] to-[100%] 
          sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] p-8">
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


          <AboutUsAccordion />

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

          {/* Why Choose Us */}
          <section className="container mx-auto px-8 py-16">
            <h2 className="text-4xl font-bold text-center mb-8">Why Choose MELT Enterprise?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{ icon: FaCheckCircle, title: "Expertise", text: "Over 20 years of industry experience delivering high-quality inspection services." },
              { icon: FaBalanceScale, title: "Integrity", text: "Unwavering commitment to ethics, transparency, and compliance." },
              { icon: FaLightbulb, title: "Innovation", text: "We employ cutting-edge technology to ensure precise and efficient inspections." }
              ].map((item, index) => (
                <motion.div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:scale-105 transition">
                  <item.icon className="text-5xl text-teal-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-gray-700">{item.text}</p>
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