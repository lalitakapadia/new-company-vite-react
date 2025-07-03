import { motion } from "framer-motion";
import { FaGlobe, FaBuilding, FaShieldAlt } from "react-icons/fa";
import ContinentsSection from "../components/ContinentsSection";

export default function GlobalPresence() {
  return (
    <section
      id="continent"
      className="bg-gray-800 text-white p-4 sm:p-8 rounded-3xl m-2"
      role="region"
      aria-labelledby="global-presence-heading"
    >
      <h2 id="global-presence-heading" className="text-4xl font-bold text-center m-6">
        Our Global Presence
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map(({ title, description, icon: Icon }, index) => (
          <motion.article
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            tabIndex={0}
            className="relative group text-center p-4 py-8 rounded-3xl shadow-lg bg-gray-700 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-400"
            aria-label={`${title} - ${description}`}
          >
            {/* Gradient Background Effect */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 bg-gradient-to-br from-yellow-200 via-teal-400 via-blue-500 to-indigo-600 transition-opacity duration-1000 group-hover:opacity-100 pointer-events-none"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10">
              <Icon
                className="text-5xl text-blue-500 mb-4 mx-auto transition-colors duration-500 group-hover:text-white"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="font-normal mt-4 text-gray-300">{description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <ContinentsSection />
    </section>
  );
}

const data = [
  {
    title: "Global Reach",
    description:
      "With a network spanning multiple continents, Worldwide Quality Inspection Ltd brings global insights to ensure your products meet regional and international standards. Wherever you do business, we are there.",
    icon: FaGlobe,
  },
  {
    title: "Local Expertise",
    description:
      "Our local experts at Worldwide Quality Inspection Ltd understand the intricacies of different regions and markets, ensuring compliance with every regulatory requirement and maintaining quality at every step.",
    icon: FaBuilding,
  },
  {
    title: "Comprehensive Solutions",
    description:
      "Whether you're expanding into new markets or ensuring compliance in existing ones, Worldwide Quality Inspection Ltd offers services that span industries and sectors to meet your needs globally.",
    icon: FaShieldAlt,
  },
];
