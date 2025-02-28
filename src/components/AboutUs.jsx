import { motion } from "framer-motion";
import { FaChevronDown, FaHandshake, FaBuilding , FaCheckCircle, FaLightbulb, FaGlobe, FaBalanceScale, FaShieldAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import ContinentsSection from "./ContinentsSection";
import React, { useState } from 'react';
import AboutUsAccordion from "./AbboutUsAccordion";
import GlobalPresence from "./GlobalPresence";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AboutUs() {
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
          </section>


          <AboutUsAccordion />

          <GlobalPresence />
          
          <ContinentsSection />

          {/* Why Choose Us */}
          <section className="container mx-auto px-8 py-16 ">
            <h2 className="text-4xl font-bold text-center mb-8">Why Choose MELT Enterprise?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{ icon: FaCheckCircle, title: "Expertise", text: "With over 20 years in the inspection industry, we offer unmatched knowledge and skills to guarantee your products meet global standards." },
              { icon: FaBalanceScale, title: "Integrity", text: "Our business operates with the highest standards of ethics and transparency, ensuring you can trust us with your compliance needs." },
              { icon: FaLightbulb, title: "Innovation", text: "We continuously innovate and adapt our services to stay ahead in the industry, ensuring you always have the best solutions." }
              ].map((item, index) => (
                <motion.div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:scale-105 transition">
                  <item.icon className="text-5xl text-teal-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
                  <p className="mt-4 font-normal text-gray-800">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          
        </div>
        {/* Call to Action */}
      <section className="mt-4 ring-1 ring-inset ring-black/20 rounded-3xl bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center py-16">
        <h2 className="text-3xl font-bold">Ensuring Global Compliance & Safety</h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto font-medium">Partner with us for certified, DGFT-approved pre-shipment inspections, guaranteeing secure and seamless trade.</p>
        <a
              href="./contact-us"
              className="mt-6 px-6 py-3 bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black rounded-full hover:from-[#4a90e2] hover:to-[#5e60ff]  font-semibold rounded-lg shadow-md  transition-all"
            >
              Get in Touch
            </a>
      </section>
      </div>
    </body>
  );
}