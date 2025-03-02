"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from '../components/Navbar';
import countryData from "../utils/countries"; // Assume a utility file for country codes & flags
import ContactUsForm from "../components/ContactUsForm";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import Heros from "../components/Heros";
import { Helmet } from "react-helmet"; // ✅ Import React Helmet for SEO

export default function ContactUs() {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us - We're Here to Help</title>
        <meta name="description" content="Get in touch with us for inquiries. Our team is ready to assist you with any questions you have." />
        <meta name="keywords" content="contact us, customer support, inquiry, phone, email, address" />
      </Helmet>

      <div className="bg-gray-100 text-gray-800 overflow-hidden">
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

        <Navbar />

        {/* Hero Section */}
        <Heros title="Contact Us – We're Here to Help!" 
               description="Let’s connect and make things happen!" />

        <div className="bg-gray-900 rounded-3xl ring-1 ring-inset ring-black/20 m-2">
          {/* Contact Form & Info */}
          <section className="p-6 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto text-gray-300">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-lg font-medium">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-lg font-medium">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address."
                  />
                </div>
                <div className="flex space-x-3 flex-wrap md:flex-nowrap">
                  {/* Country Code Dropdown */}
                  <div className="flex-1 space-y-2">
                    <label htmlFor="country" className="text-lg font-medium">Country Code</label>
                    <select
                      id="country"
                      value={selectedCountry.code}
                      onChange={(e) =>
                        setSelectedCountry(
                          countryData.find((c) => c.code === e.target.value)
                        )
                      }
                      className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none"
                    >
                      {countryData.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.name} ({country.dialCode})
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Phone Number Field */}
                  <div className="flex-1 space-y-2">
                    <label htmlFor="phone" className="text-lg font-medium">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                      required
                      minLength="10"
                      maxLength="15"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-lg font-medium">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                    required
                  ></textarea>
                </div>
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
    </>
  );
}
