import { motion } from "framer-motion";
import { FaGlobe, FaBuilding, FaShieldAlt } from "react-icons/fa";

export default function GlobalPresence() {
  return (
    <section id="continent" className="bg-gray-800 text-white p-12 rounded-3xl ">
      <h2 className="text-4xl font-bold text-center mb-8">Our Global Presence</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative text-center p-6 rounded-3xl shadow-lg bg-gray-700 transition-all duration-500"
          >
            {/* Gradient Background Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-1000"
              whileHover={{ opacity: 1, background: "linear-gradient(135deg, #fff1be, #4fd1c5, #4a90e2, #5e60ff)" }}
            />

            {/* Content */}
            <div className="relative z-10">
              <item.icon className="text-5xl text-blue-400 mb-4 mx-auto transition-all duration-500 group-hover:text-white" />
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="font-normal mt-4 text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    title: "Global Reach",
    description:
      "With a network spanning multiple continents, we bring global insights to ensure your products meet regional and international standards. Wherever you do business, we are there.",
    icon: FaGlobe,
  },
  {
    title: "Local Expertise",
    description:
      "Our local experts understand the intricacies of different regions and markets, ensuring compliance with every regulatory requirement and maintaining quality in every step.",
    icon: FaBuilding,
  },
  {
    title: "Comprehensive Solutions",
    description:
      "Whether you're expanding into new markets or ensuring compliance in existing ones, our services span industries and sectors to meet your needs in every corner of the globe.",
    icon: FaShieldAlt,
  },
];
