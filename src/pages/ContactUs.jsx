"use client";

import { useState } from "react";
import { Helmet } from "react-helmet"; // ✅ SEO Optimization
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import countryData from "../utils/countries"; // ✅ Assume a utility file for country codes & flags
import { Link } from "react-router-dom";
import Heros from "../components/Heros";
import ContactUsForm from "../components/ContactUsForm";

export default function ContactUs() {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };


  return (
    <>
      {/* 🔹 SEO Meta Tags */}
      <Helmet>
        <title>Contact Us - Reach Out for Assistance</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries, support, or partnerships. Our team is ready to assist you with any questions."
        />
        <meta name="keywords" content="contact us, customer support, inquiry, phone, email, business address" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us - Reach Out for Assistance" />
        <meta property="og:description" content="Need help? Get in touch with us for support and inquiries. We're here to assist you!" />
        <meta property="og:url" content="https://www.yourwebsite.com/contact-us" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-gray-100 text-gray-800 overflow-hidden">
      <div class="relative mx-auto ">
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
                </div>
        <Navbar />

        {/* 🔹 Hero Section */}
        <Heros
          title="We're Here to Help!"
          description="Let’s connect and make things happen!"
        />

        <div className="bg-gray-900 rounded-3xl ring-1 ring-inset ring-black/20 m-2">
          {/* 🔹 Contact Form & Info */}
          <section className="p-6 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto text-gray-300">
          {/* <ContactUsForm/> */}
            
            {/* 🔹 Contact Form */}
            <div className="bg-gray-800 sm:p-12 p-4 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-lg font-medium">Your Name</label>
                  <input
                    id="name"
                     name="name" 
                     type="text" 
                     value={formData.name} 
                     onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-lg font-medium">Your Email</label>
                  <input
                    id="email"
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none" 
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address."
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  
                  {/* 🔹 Country Code Dropdown */}
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

                  {/* 🔹 Phone Number Field */}
                  <div className="flex-1 space-y-2">
                    <label htmlFor="phone" className="text-lg font-medium">Phone Number</label>
                    <input
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleChange}
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
                   name="message" 
                   rows="5" 
                   value={formData.message} 
                   onChange={handleChange}
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
              {status === "sending" && <p className="text-yellow-400 mt-4">Sending...</p>}
              {status === "success" && <p className="text-green-400 mt-4">Email sent successfully!</p>}
              {status === "error" && <p className="text-red-400 mt-4">Failed to send email. Try again later.</p>}
            </div>

            {/* 🔹 Contact Info */}
            <div className="bg-gray-800 p-4 sm:p-12 rounded-lg shadow-lg space-y-6">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-400 text-2xl" aria-hidden="true" />
                <p>+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-400 text-2xl" aria-hidden="true" />
                <p>contact@yourcompany.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-400 text-2xl" aria-hidden="true" />
                <p>123 Business Street, City, Country</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
