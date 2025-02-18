import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-4 mt-4">
             {/* CTA Section */}
            <section className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                >
                Contact Us
                </motion.a>
            </section>

            <div className="text-center">
                <p>© 2025 Your Company. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
                    </a>
                    <a href="mailto:info@yourcompany.com">
                        <img src="/path/to/email-icon.png" alt="Email" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;