"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import countryData from "../utils/countries"; // ✅ Assumes country data exists

export default function ContactUsForm() {
  const formRef = useRef();
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  const validateForm = () => {
    let formErrors = {};

    if (!name) formErrors.name = "Please enter your name.";
    if (!email || !emailRegex.test(email))
      formErrors.email = "Please enter a valid email address.";
    if (!phone || !phoneRegex.test(phone))
      formErrors.phone = "Please enter a valid phone number.";
    if (!message) formErrors.message = "Please enter a message.";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSuccessMsg("");

    const fullPhone = `${selectedCountry.dialCode} ${phone}`;

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "template_dvkjexn", // Replace with your Template ID
        formRef.current,
        "D9FnTyYKD8BtzXnD7" // Replace with your Public Key
      )
      .then(
        () => {
          setSuccessMsg("✅ Your message has been sent!");
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setErrors({ submit: "❌ Failed to send message. Please try again." });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="bg-gray-800 p-2 sm:p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>

      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 p-3 rounded bg-green-600 text-white font-medium shadow-md"
          >
            {successMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className={`w-full p-3 rounded bg-gray-700 text-white focus:outline-none pr-10 ${
              name ? "border-2 border-green-500" : "border border-gray-600"
            }`}
          />
          <span className="absolute right-3 top-3 text-lg">
            {name ? "✅" : "❌"}
          </span>
          <AnimatePresence>
            {errors.name && (
              <motion.p
                className="text-red-400 text-sm mt-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className={`w-full p-3 rounded bg-gray-700 text-white focus:outline-none pr-10 ${
              email && emailRegex.test(email)
                ? "border-2 border-green-500"
                : "border border-gray-600"
            }`}
          />
          <span className="absolute right-3 top-3 text-lg">
            {email ? (emailRegex.test(email) ? "✅" : "❌") : ""}
          </span>
          <AnimatePresence>
            {errors.email && (
              <motion.p
                className="text-red-400 text-sm mt-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Country + Phone Input */}
        <div className="flex space-x-3">
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

          <div className="relative w-full">
            <input
              type="tel"
              name="user_phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className={`w-full p-3 rounded bg-gray-700 text-white focus:outline-none pr-10 ${
                phone && phoneRegex.test(phone)
                  ? "border-2 border-green-500"
                  : "border border-gray-600"
              }`}
            />
            <span className="absolute right-3 top-3 text-lg">
              {phone ? (phoneRegex.test(phone) ? "✅" : "❌") : ""}
            </span>
          </div>
        </div>

        {/* Country Info */}
        <div className="flex items-center text-white text-sm space-x-2 mt-1">
          <span className="text-lg">{selectedCountry.flag}</span>
          <span>
            {selectedCountry.name} ({selectedCountry.dialCode})
          </span>
        </div>

        <AnimatePresence>
          {errors.phone && (
            <motion.p
              className="text-red-400 text-sm mt-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              {errors.phone}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Message */}
        <div>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                className="text-red-400 text-sm mt-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white p-3 rounded-lg font-semibold shadow-md transition-all"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

        {errors.submit && (
          <motion.p
            className="text-red-400 text-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {errors.submit}
          </motion.p>
        )}
      </form>
    </div>
  );
}
