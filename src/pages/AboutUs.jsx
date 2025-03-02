import { motion } from "framer-motion";
import { FaChevronDown, FaHandshake, FaBuilding, FaCheckCircle, FaLightbulb, FaGlobe, FaBalanceScale, FaShieldAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ContinentsSection from "../components/ContinentsSection";
import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import AboutUsAccordion from "../components/AbboutUsAccordion";
import GlobalPresence from "../components/GlobalPresence";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Heros from "../components/Heros";
import { Helmet } from "react-helmet"; // ✅ Import React Helmet

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - Trusted Inspection Partner</title>
        <meta name="description" content="Learn more about our inspection services, global presence, and why we are the trusted partner for ensuring compliance and safety." />
        <meta name="keywords" content="inspection, compliance, safety, global presence, trusted partner" />
      </Helmet>

      <body className="text-gray-800">
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
          <Heros title="Your Trusted Inspection Partner" 
                 description="Ensuring quality and safety with cutting-edge inspections worldwide." />
                 
          <div className="text-white font-sans">
            <AboutUsAccordion />
            <GlobalPresence />
            
            {/* Why Choose Us */}
            <section className="bg-gray-900 container px-8 py-16 rounded-3xl ring-1 ring-inset ring-black/20 m-2  ">
              <h2 className="text-4xl font-bold text-center mb-8">Why Choose Our Company?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[{ icon: FaCheckCircle, title: "Expertise", text: "With over 20 years in the inspection industry, we offer unmatched knowledge and skills to guarantee your products meet global standards." },
                  { icon: FaBalanceScale, title: "Integrity", text: "Our business operates with the highest standards of ethics and transparency, ensuring you can trust us with your compliance needs." },
                  { icon: FaLightbulb, title: "Innovation", text: "We continuously innovate and adapt our services to stay ahead in the industry, ensuring you always have the best solutions." }
                ].map((item, index) => (
                  <motion.div key={index} className="p-6 bg-gray-100 rounded-3xl shadow-lg text-center hover:scale-105 transition">
                    <item.icon className="text-5xl text-teal-500 mb-4 mx-auto" />
                    <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
                    <p className="mt-4 font-normal text-gray-800">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <section className="m-2 ring-1 ring-inset ring-black/20 rounded-3xl bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center py-16">
            <h2 className="text-3xl font-bold">Ensuring Global Compliance & Safety</h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto font-medium">Partner with us for certified, DGFT-approved pre-shipment inspections, guaranteeing secure and seamless trade.</p>
            <Link
                to="/contact-us"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 font-semibold rounded-lg shadow-md transition-all"
                aria-label="Contact Us for more details">
                Get in Touch
            </Link>
          </section>
        </div>
      </body>
    </>
  );
}
