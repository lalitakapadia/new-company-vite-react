"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from '../components/Navbar';
import countryData from "../utils/countries"; // Assume a utility file for country codes & flags
import ContactUsForm from "../components/ContactUsForm";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router

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
        <div className="bg-gray-900">
          {/* Hero Section */}
          <section className="rounded-3xl mt-4 ring-1 ring-inset ring-black/20 h-80 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden 
          bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
          from-[#fff1be] from-[28%] 
          via-[#4fd1c5] via-[55%] 
          via-[#4a90e2] via-[70%] 
          to-[#5e60ff] to-[100%] 
          sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
            <motion.h1
              className="text-3xl sm:text-5xl font-bold text-center text-gray-900 mt-6 px-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us – We're Here to Help!
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-center text-gray-800 mt-4 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
             Let’s connect and make things happen!
            </motion.p>
          </section>

          {/* Contact Form & Info */}
          <section className="p-12 grid grid-cols-1 md:grid-cols-2 
          gap-12 max-w-6xl mx-auto text-gray-300">
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
