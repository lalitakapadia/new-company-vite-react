import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ SEO Optimization
import { FaCheckCircle, FaBalanceScale, FaLightbulb } from "react-icons/fa";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutUsAccordion from "../components/AbboutUsAccordion";
import GlobalPresence from "../components/GlobalPresence";
import Heros from "../components/Heros";

export default function AboutUs() {
  const { hash } = useLocation(); // Get URL hash for smooth scrolling

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      {/* 🔹 SEO Meta Tags */}
      <Helmet>
        <title>About Us - Trusted Inspection Partner</title>
        <meta
          name="description"
          content="Learn more about our inspection services, global presence, and why we are the trusted partner for ensuring compliance and safety."
        />
        <meta name="keywords" content="inspection, compliance, safety, global presence, trusted partner" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - Trusted Inspection Partner" />
        <meta property="og:description" content="We ensure quality and safety with cutting-edge inspections worldwide." />
        <meta property="og:url" content="https://www.yourwebsite.com/about-us" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="text-gray-800">
      <div class="relative mx-auto overflow-hidden">
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
          <Navbar />
        </div>

        {/* 🔹 Hero Section */}
        <Heros
          title="Your Trusted Inspection Partner"
          description="Worldwide Quality Inspection Ltd. ensures global quality, compliance, and safety through DGFT-approved, industry-leading inspection services."
        />

        <main className="text-white font-sans">
          <AboutUsAccordion />
          <GlobalPresence />

          {/* 🔹 Why Choose Us Section */}
          <section className="bg-gray-900 container  sm:px-8 px-6 py-12
          rounded-3xl ring-1 ring-inset ring-black/20 m-2">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose Our Company?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCheckCircle,
                  title: "Expertise",
                  text: "With over 20 years in the inspection industry, Worldwide Quality Inspection Ltd offers unmatched knowledge and skills to guarantee your products meet global standards.",
                },
                {
                  icon: FaBalanceScale,
                  title: "Integrity",
                  text: "Our business operates with the highest standards of ethics and transparency, ensuring you can trust us with your compliance needs.",
                },
                {
                  icon: FaLightbulb,
                  title: "Innovation",
                  text: "We continuously innovate and adapt our services at Worldwide Quality Inspection Ltd to stay ahead in the industry, delivering cutting-edge solutions tailored to your needs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-100 rounded-3xl shadow-lg text-center hover:scale-105 transition"
                >
                  <item.icon className="text-5xl text-teal-500 mb-4 mx-auto" aria-hidden="true" />
                  <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
                  <p className="mt-4 font-normal text-gray-800">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* 🔹 Call to Action */}
        <section className="bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black text-center sm:py-16 ring-1 ring-inset ring-black/20 rounded-3xl m-2 mb-2 p-4 py-12">
          <h2 className="text-3xl font-semibold">Ensuring Global Compliance & Safety</h2>
          <p className="m-4 mb-6 text-lg max-w-2xl mx-auto font-medium">
            Partner with <strong>Worldwide Quality Inspection Ltd</strong> for certified, DGFT-approved pre-shipment inspections—ensuring your goods meet international safety and regulatory standards.
          </p>
          <Link
            to="/contact-us"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-[#5e60ff] via-[#4a90e2] to-[#4fd1c5] 
                    rounded-full shadow-md transition-all 
                    duration-300 hover:scale-105 hover:shadow-lg  hover:to-blue-500 font-semibold rounded-lg shadow-md transition-all"
            aria-label="Contact Us for more details"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </>
  );
}
