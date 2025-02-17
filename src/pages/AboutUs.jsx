import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
//import aboutImage from "./public/images/inspection.jpg";// Update the path as needed
//import rusticImage from "../assets/images/RusticAboutUs.jpg"; // Update the path as needed

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />

      {/* Gradient Background */}
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#4fd1c5] via-[55%] via-[#4a90e2] via-[70%] to-[#5e60ff] to-[100%] rotate-[-10deg] rounded-full blur-3xl"></div>
      </div>

      {/* About Us Section */}
      <div className="mt-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:max-w-7xl"
          >
            <h1 className="text-3xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
              Our Commitment to Excellence
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              We are dedicated to conducting our operations in a socially
              responsible manner, recognizing our role as a global corporate
              citizen.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:max-w-7xl"
          >
            <img
              src="../public/images/inspection.jpg"
              alt="Inspection"
              className="rounded-3xl mt-4 shadow-md"
            />
          </motion.div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="relative py-24">
        <div className="absolute inset-x-2 bottom-0 top-48 rounded-3xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#4fd1c5] via-[55%] via-[#4a90e2] via-[70%] to-[#5e60ff] to-[100%] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>

        <div className="relative px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:max-w-7xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-1">
              <div className="grid grid-cols-1 rounded-3xl shadow-lg ring-1 ring-black/5 bg-white p-10">
                <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Our Values
                </h3>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  We emphasize integrity, transparency, and accountability to
                  ensure long-term success and sustainability.
                </p>

                <div className="mt-8 space-y-8">
                  {/* Value Item */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#4fd1c5] to-[#5e60ff] text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Integrity
                      </h4>
                      <p className="mt-2 text-base text-gray-500">
                        We uphold ethical business practices with fairness and
                        professionalism.
                      </p>
                    </div>
                  </div>

                  {/* Collaboration */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#4a90e2] to-[#5e60ff] text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Collaboration
                      </h4>
                      <p className="mt-2 text-base text-gray-500">
                        We partner with leading corporations to enhance social,
                        ethical, and environmental impact.
                      </p>
                    </div>
                  </div>

                  {/* Ethics */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#fff1be] to-[#4fd1c5] text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Ethics
                      </h4>
                      <p className="mt-2 text-base text-gray-500">
                        Our compliance structure ensures adherence to ethical
                        business practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
