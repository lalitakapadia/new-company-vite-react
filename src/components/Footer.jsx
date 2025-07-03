import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTwitter, FaSkype, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="rounded-3xl  
        bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
        from-[#1f2937] to-[#6b7280] 
        p-6 text-center text-slate-200 mx-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      role="contentinfo"
      aria-label="Website Footer"
    >
      <div className="mx-auto text-center">

        {/* Optional: Social Media Links (External) with proper accessibility */}
        {/* 
        <nav aria-label="Social media links" className="mt-4">
          <ul className="flex justify-center space-x-6 text-2xl">
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-all">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition-all">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-all">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.skype.com/" target="_blank" rel="noopener noreferrer" aria-label="Skype" className="hover:text-blue-500 transition-all">
                <FaSkype />
              </a>
            </li>
            <li>
              <a href="mailto:worldwidequalityinspection@gmail.com" aria-label="Email us" className="hover:text-blue-500 transition-all">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </nav>
        */}

        {/* Internal Navigation Links */}
        <nav aria-label="Footer navigation" className="mt-6">
          <ul className="flex justify-center space-x-6 text-xl">
            <li>
              <Link to="/about-us" className="hover:text-gray-300 transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-gray-300 transition-all">
                Contact Us
              </Link>
            </li>
            {/* 
            <li>
              <Link to="/privacy-policy" className="hover:text-gray-300 transition-all">
                Privacy Policy
              </Link>
            </li> 
            */}
          </ul>
        </nav>

        {/* Copyright */}
        <motion.p
          className="mt-6 text-lg font-medium"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          © 2025 Worldwide Quality Inspection Ltd. All Rights Reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
