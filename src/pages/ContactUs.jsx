"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from '../components/Navbar';
import countryData from "../utils/countries"; // Assume a utility file for country codes & flags
import ContactUsForm from "../components/ContactUsForm";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import Heros from "../components/Heros";

export default function ContactUs() {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  return (
    <body class="bg-gray-100 text-gray-800">
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
        
        {/* Hero Section */}
          <Heros title="Contact Us – We're Here to Help!s" 
                description=" Let’s connect and make things happen!"/>
                
        <div className="bg-gray-900 rounded-3xl ring-1 ring-inset ring-black/20 m-2">
          {/* Contact Form & Info */}
          <section className="p-12 grid grid-cols-1 md:grid-cols-2 
          gap-12  mx-auto text-gray-300">
            {/* Contact Form */}

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                  required
                />
                <div className="flex space-x-3">
                  {/* Country Code Dropdown */}
                  <select
                    value={selectedCountry.code}
                    onChange={(e) =>
                      setSelectedCountry(
                        countryData.find((c) => c.code === e.target.value)
                      )
                    }
                    className="p-3 bg-gray-700 text-white rounded focus:outline-none"
                  >
                    {countryData.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name} ({country.dialCode})
                      </option>
                    ))}
                  </select>
                  {/* Phone Number Field */}
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white p-3 rounded-lg font-semibold shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-400 text-2xl" />
                <p>+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-400 text-2xl" />
                <p>contact@yourcompany.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                <p>123 Business Street, City, Country</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Call to Action */}

    </body>
  );
}
