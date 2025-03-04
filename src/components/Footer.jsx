import { Link } from "react-router-dom"; // ✅ Import Link
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTwitter, FaSkype, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="rounded-3xl  
      bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
      from-[#1f2937] to-[#6b7280] 
      p-6 text-center 
      text-black mx-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className=" mx-auto text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Connect with Us
        </motion.h2>

        {/* Social Media Links (External) */}
        <div className="flex justify-center space-x-6">
          <motion.a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-all" whileHover={{ scale: 1.2 }}>
            <FaLinkedin />
          </motion.a>
          <motion.a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-600 transition-all" whileHover={{ scale: 1.2 }}>
            <FaFacebook />
          </motion.a>
          <motion.a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-all" whileHover={{ scale: 1.2 }}>
            <FaTwitter />
          </motion.a>
          <motion.a href="https://www.skype.com/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500 transition-all" whileHover={{ scale: 1.2 }}>
            <FaSkype />
          </motion.a>
          <motion.a href="mailto:contact@yourcompany.com" className="text-3xl hover:text-blue-500 transition-all" whileHover={{ scale: 1.2 }}>
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Internal Links (Using <Link> for React Router) */}
        {/* <div className="mt-6 flex justify-center space-x-6 text-lg">
          <Link to="/about-us" className="hover:text-gray-300 transition-all">
            About Us
          </Link>
          <Link to="/contact-us" className="hover:text-gray-300 transition-all">
            Contact Us
          </Link>
          <Link to="/privacy-policy" className="hover:text-gray-300 transition-all">
            Privacy Policy
          </Link>
        </div> */}

        {/* Copyright */}
        <motion.p className="mt-6 text-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}>
          © 2025 YourCompany. All Rights Reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
