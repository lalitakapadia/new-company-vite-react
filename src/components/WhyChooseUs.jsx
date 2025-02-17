import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="relative bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#4fd1c5] via-[55%] via-[#4a90e2] via-[70%] to-[#5e60ff] to-[100%] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] py-16">
      <div className="absolute inset-3 rounded-4xl bg-white/25 backdrop-blur-lg"></div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Why Choose Us?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {[
            { title: "Global Inspection", text: "We provide Pre-shipment Inspection services in over 60 countries." },
            { title: "Certifications", text: "We are DGFT approved to issue certifications for international shipments." },
            { title: "Expert Consultancy", text: "Our specialists guide you through the complexities of shipping and customs regulations." },
            { title: "Get in Touch", text: "Start a conversation and learn how we can help streamline your shipments." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ scale: 1.08, transition: { duration: 0.2, ease: "easeInOut" } }}
              className="rounded-3xl shadow-lg p-8 bg-white backdrop-blur-lg bg-opacity-80 transition-all hover:bg-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-950">{item.title}</h3>
              <p className="mt-4 text-base text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
