import { motion } from "framer-motion";

export default function Heros({ title, description }) {
  return (
    <div className="mx-auto px-2">
      {/* Hero Section */}
      <section
        className="rounded-3xl ring-1 ring-inset ring-black/20 h-auto p-8 lg:p-24 text-black relative flex flex-col justify-center items-center text-center
        bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
        from-[#fff1be] from-[28%] 
        via-[#4fd1c5] via-[55%] 
        via-[#4a90e2] via-[70%] 
        to-[#5e60ff] to-[100%] 
        sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"
      >
        {/* Heading with appropriate semantic tag for SEO */}
        <motion.h1
          className="text-3xl sm:text-5xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          aria-level="1"
        >
          {title}
        </motion.h1>

        {/* Description with better contrast for readability */}
        <motion.p
          className="text-lg opacity-80 max-w-xl text-gray-950/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          aria-describedby="hero-description"
        >
          {description}
        </motion.p>

        {/* Ensure accessibility on mobile */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/60 to-black opacity-50 sm:opacity-30"></div>
      </section>
    </div>
  );
}
