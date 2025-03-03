"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import countryData from "../utils/countries"; // Assume a utility file for country codes & flags

export default function ContactUsForm() {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    
    if (!email || !emailRegex.test(email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    
    if (!phone || !phoneRegex.test(phone)) {
      formErrors.phone = "Please enter a valid phone number.";
    }

    if (!name) {
      formErrors.name = "Please enter your name.";
    }

    if (!message) {
      formErrors.message = "Please enter a message.";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Stop submission if there are errors
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Your message has been sent!");
      // Reset form fields after submission (optional)
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="bg-gray-800 p-2 sm:p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Message Input */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white p-3 rounded-lg font-semibold shadow-md transition-all"
          whileHover={{ scale: 1.05 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </div>
  );
}
