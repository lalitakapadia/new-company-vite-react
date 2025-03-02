import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaShip,FaCheckCircle, FaClipboardCheck, FaTruck, FaExchangeAlt } from "react-icons/fa";
import MetalImportImage from "../assets/shipmentInspection.jpg";
import Heros from "../components/Heros";
const MetalImport = () => {
  return (
    <>
     <body className="bg-gray-100 text-gray-800">
      <div className="overflow-hidden">
        <div class="relative mx-auto max-w-7xl">
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

        {/* Hero Section */}
          <Heros title="Seamless Metal Import Services" 
                description="Your trusted partner in efficient and compliant metal imports"/>

      {/* Services Overview */}
      <section className="m-2 py-20 px-6 lg:px-12 bg-gray-900 text-white rounded-3xl ring-1 ring-inset ring-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">Expert Metal Import Solutions</h2>
            <p className="mt-4 text-lg text-gray-300 font-normal">
              We offer reliable and efficient solutions for importing metal materials globally. Our services ensure compliance with local regulations, timely delivery, and safe handling of all shipments.
            </p>
            <ul className="mt-6 space-y-3 font-normal">
              <li className="flex items-center gap-3">
                <FaShip className="text-green-400 text-xl" />
                International shipping and logistics management
              </li>
              <li className="flex items-center gap-3">
                <FaClipboardCheck className="text-green-400 text-xl" />
                Compliance with import/export regulations
              </li>
              <li className="flex items-center gap-3">
                <FaTruck className="text-green-400 text-xl" />
                Secure transportation and handling
              </li>
              <li className="flex items-center gap-3">
                <FaExchangeAlt className="text-green-400 text-xl" />
                Efficient customs clearance and documentation
              </li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-full h-96"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60 rounded-lg"></div>
            <img
              src={MetalImportImage}
              alt="Metal Import"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Detailed Import Process */}
      <section className="m-2 py-20 px-6 lg:px-12 bg-gray-800 text-white rounded-3xl ring-1 ring-inset ring-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center">The Metal Import Process</h2>
          <p className="mt-4 text-lg text-center text-gray-300">We ensure smooth and compliant metal imports, every step of the way.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 font-normal">
            {["Global shipping coordination for timely delivery",
              "Customs clearance and regulatory compliance",
              "Inspection for quality and purity of metal materials",
              "Efficient logistics and warehouse management",
              "Final delivery and documentation process"].map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-gray-900 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <FaCheckCircle className="text-blue-400 text-3xl" />
                <p className="text-lg">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="m-2  rounded-3xl ring-1 ring-inset ring-black/20 bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center py-16">
        <h2 className="text-3xl font-bold">Ready for Smooth and Safe Metal Imports?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto font-medium">Contact our experts today to ensure compliance, safety, and efficiency in your next metal import.</p>
          <Link
            to="/contact-us"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black rounded-full hover:from-[#4a90e2] hover:to-[#5e60ff] font-semibold rounded-lg shadow-md transition-all">
            Get in Touch
          </Link>
      </section>
      </div>
      </body>
    </>
  );
};

export default MetalImport;
