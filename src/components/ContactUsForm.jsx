"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import countryData from "../utils/countries"; // Assume a utility file for country codes & flags


export default function ContactUsForm(){
    const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
    <>
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
    </>
}