"use client";

import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import countryData from "../utils/countries";
import Heros from "../components/Heros";

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
      <Helmet>
        <html lang="en" />
        <title>Contact Us | Worldwide Quality Inspection Ltd.</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.worldwidequalityinspection.com/contact-us" />
        <meta name="description" content="Contact Worldwide Quality Inspection Ltd. for expert inspection services. Get support via phone, email, or WhatsApp." />
        <meta name="keywords" content="contact inspection company, email, phone, Worldwide Quality Inspection Ltd." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us | Worldwide Quality Inspection Ltd." />
        <meta property="og:description" content="Reach out to us for all inspection-related services. We're here to help!" />
        <meta property="og:url" content="https://www.worldwidequalityinspection.com/contact-us" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Worldwide Quality Inspection Ltd.",
            "url": "https://www.worldwidequalityinspection.com",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-9123056093",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            ],
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "27 Old Glouster Street",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "WC1N3AX",
                "addressCountry": "UK"
              },  
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-gray-100 text-gray-800 overflow-hidden">
        <div className="relative mx-auto">
          <div className="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 
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
        <Heros title="We're Here to Help!" 
        description="Reach out to our certified inspection experts to ensure compliance, quality, and smooth global trade operations!" />

        <div className="bg-gray-900 rounded-3xl ring-1 ring-inset ring-black/20 m-2">
          <section className="px-4 py-8 sm:px-8 md:px-12 lg:px-6 grid grid-cols-1 xl:grid-cols-2  gap-8 max-w-screen-xl mx-auto text-gray-300">
            {/* 🔹 Contact Form */}
            <div className="bg-gray-800 p-4 sm:p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Get in Touch</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-lg font-normal text-gray-200">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none text-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-lg font-normal text-gray-200">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none text-lg"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address."
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <label htmlFor="country" className="text-lg font-normal text-gray-200">Country Code</label>
                    <select
                      id="country"
                      value={selectedCountry.code}
                      onChange={(e) =>
                        setSelectedCountry(countryData.find((c) => c.code === e.target.value))
                      }
                      className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none text-lg font-normal"
                    >
                      {countryData.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.name} ({country.dialCode})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1 space-y-2">
                    <label htmlFor="phone" className="text-lg font-normal text-gray-200">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none text-lg"
                      required
                      minLength="10"
                      maxLength="15"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-lg font-normal text-gray-200">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none text-lg"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#5e60ff] via-[#4a90e2] to-[#4fd1c5] 
                    rounded-full shadow-md transition-all 
                    duration-300 hover:scale-105 hover:shadow-lg  hover:to-blue-500  hover:to-blue-600 text-black p-3 rounded-lg font-semibold shadow-md transition-all text-lg"
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
            <address className="not-italic bg-gray-800 p-4 sm:p-12 rounded-lg shadow-lg space-y-8 text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Information</h2>
              <div className="flex items-center flex-nowrap gap-2 sm:gap-4">
                <FaPhone className="text-blue-400 text-2xl md:text-3xl flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919123056093"
                  className="text-lg md:text-xl font-normal text-gray-100 break-all"
                  aria-label="Call us"
                >
                  +91 91230 56093
                </a>
              </div>
              <div className="flex items-center flex-nowrap gap-2 sm:gap-4">
                <FaEnvelope className="text-blue-400 text-2xl md:text-3xl flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contact@worldwidequalityinspection.com"
                  className="text-lg md:text-xl font-normal text-gray-100 break-all"
                  aria-label="Send us an email"
                  style={{ wordBreak: "break-all" }}
                >
                  contact@worldwidequalityinspection.com
                </a>
              </div>
              <div className="flex items-center flex-nowrap gap-2 sm:gap-4">
                <FaMapMarkerAlt className="text-blue-400 text-2xl md:text-3xl flex-shrink-0" aria-hidden="true" />
                <p className="text-lg md:text-xl font-normal text-gray-100 break-words">
                  27 Old Glouster Street, Royal Borough of Kensington & Chelsea, UK WC1N3AX
                </p>
              </div>
              <a
                href="https://wa.me/919123056093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-black bg-gradient-to-r from-[#5e60ff] via-[#4a90e2] to-[#4fd1c5] 
      rounded-full shadow-md transition-all 
      duration-300 hover:scale-105 hover:shadow-lg hover:to-blue-500 px-4 py-2 rounded-lg text-lg font-semibold"
                aria-label="Chat with us on WhatsApp"
              >
                Chat on WhatsApp
              </a>
            </address>
          </section>
        </div>
      </div>
    </>
  );
}
