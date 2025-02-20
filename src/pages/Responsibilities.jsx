// import React from "react";
// import Navbar from "../components/Navbar";

// const Responsibilities = () => {
//   return (
//     <div className="bg-gray-100 text-gray-800">
//       <Navbar />

//       {/* Header Section */}
//       <section className="relative overflow-hidden">
//         <div className="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] rotate-[-10deg] rounded-full blur-3xl"></div>
//         <div className="container mx-auto px-6 py-16 text-center">
//           <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900">
//             Our Responsibilities
//           </h1>
//           <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
//             We are committed to integrity, transparency, and accountability,
//             ensuring the long-term success and sustainability of our company.
//           </p>
//         </div>
//       </section>

//       {/* Responsibilities Cards */}
//       <section className="relative py-16 bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] rounded-t-3xl">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
//             {[
//               {
//                 title: "Our Commitment",
//                 image: "/images/OurCommitment.jpg",
//                 description:
//                   "We collaborate with top multinational corporations to enhance the social, ethical, and environmental impact of their supply chains.",
//               },
//               {
//                 title: "Our Values",
//                 image: "/images/OurValues.jpg",
//                 description:
//                   "We emphasize integrity, transparency, and accountability to ensure long-term corporate success and sustainability.",
//               },
//               {
//                 title: "Our Approach",
//                 image: "/images/Approach.jpg",
//                 description:
//                   "Integrity is at the core of our business values. We maintain high standards of professional conduct with all stakeholders.",
//               },
//               {
//                 title: "Our Impact",
//                 image: "/images/Impact1.jpg",
//                 description:
//                   "Our compliance code supports adherence to ethical standards and corporate governance principles.",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-3xl shadow-xl ring-1 ring-gray-200"
//               >
//                 <h3 className="text-xl font-bold uppercase text-center text-gray-900">
//                   {item.title}
//                 </h3>
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="mt-6 w-full h-56 object-cover rounded-2xl shadow-md"
//                 />
//                 <p className="mt-4 text-gray-700 text-sm text-justify">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Responsibilities;

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Responsibilities = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cards = [
    {
      title: "Our Commitment",
      image: "/public/images/OurCommitment.jpg",
      description:
        "We collaborate with top multinational corporations to enhance the social, ethical, and environmental impact of their supply chains.",
    },
    {
      title: "Our Values",
      image: "/public/images/OurValues.jpg",
      description:
        "We emphasize integrity, transparency, and accountability to ensure long-term corporate success and sustainability.",
    },
    {
      title: "Our Approach",
      image: "/public/images/Approach.jpg",
      description:
        "Integrity is at the core of our business values. We maintain high standards of professional conduct with all stakeholders.",
    },
    {
      title: "Our Impact",
      image: "/public/images/Impact1.jpg",
      description:
        "Our compliance code supports adherence to ethical standards and corporate governance principles.",
    },
  ];

  return (
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
    <div className="bg-gray-100 text-gray-800 min-h-screen">


      {/* Header Section with Animated Gradient */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden text-center py-20 bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] to-[#5e60ff] text-black"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-extrabold"
        >
          Our Responsibilities
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-3xl mx-auto text-lg text-black/80"
        >
          We are committed to integrity, transparency, and accountability,
          ensuring the long-term success and sustainability of our company.
        </motion.p>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 blur-3xl"></div>
      </motion.section>

      {/* Responsibilities Cards Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {cards.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white backdrop-blur-lg p-6 rounded-3xl shadow-lg transition-transform duration-300 cursor-pointer hover:shadow-2xl ring-1 ring-gray-200"
              >
                <h3 className="text-xl font-bold uppercase text-center text-gray-900">
                  {item.title}
                </h3>
                <motion.img
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.1 }}
                  className="mt-6 w-full h-56 object-cover rounded-2xl shadow-md transition-transform duration-300"
                />
                <p className="mt-4 text-gray-700 text-sm text-justify">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
    </div>
    </body>
  );
};

export default Responsibilities;

