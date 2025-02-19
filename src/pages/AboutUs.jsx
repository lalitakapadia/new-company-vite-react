import { motion } from "framer-motion";
import { FaHandshake, FaCheckCircle, FaLightbulb, FaGlobe, FaBalanceScale } from "react-icons/fa";
import Navbar
  from "../components/Navbar";
export default function AboutUs() {
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
        <div className="bg-gray-900 text-white font-sans">
          {/* Hero Section */}
          <section className="h-screen/2 text-cyan-800 relative flex flex-col justify-center items-center text-center bg-[url(./public/images/about-us-map1.jpg)] bg-gradient-to-br from-purple-600 to-blue-500 p-8">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Your Trusted Inspection Partner
            </motion.h1>
            <motion.p
              className="text-lg opacity-80 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Ensuring quality and safety with cutting-edge inspections.
            </motion.p>
            <motion.a
              href="#about"
              className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-opacity-90 transition"
              whileHover={{ scale: 1.1 }}
            >
              Learn More
            </motion.a>
          </section>

          {/* About Section */}
          <section id="about" className="flex flex-col md:flex-row items-center p-12 gap-8">
            <motion.img
              src="./public/images/about-us-core-values.jpg"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
              <p className="text-gray-300 mb-4">
                With a legacy of excellence, we provide top-tier inspection services worldwide.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" /> Over 20 years of expertise
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" /> Trusted in 50+ countries
                </li>
              </ul>
              <p className="font-medium py-6">
                Integrity is at the core of our business values. Our Company is committed to maintaining high standards of professional conduct and engaging in ethical and fair business practices with our employees, stakeholders, and third parties.<br></br><br></br>
                Our company collaborates with some of the world's largest multinational corporations and most renowned brands to enhance the social, ethical, and environmental impacts of their products, services, and supply chains. <br></br> <br></br>Our Compliance Code and compliance structure are designed to support adherence to our Code of Ethics.
              </p>

            </div>
          </section>

          {/* Core Values */}
          <section className="p-12">
            <h2 className="text-4xl font-bold text-center mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{ title: "Integrity", icon: FaBalanceScale, text: "We emphasize integrity, transparency, and accountability to ensure long-term success and sustainability." },
              { title: "Innovation", icon: FaLightbulb, text: "" },
              { title: "Collaboration", icon: FaHandshake, text: "We partner with leading corporations to enhance social, ethical, and environmental impact." },
              { title: "Global Reach", icon: FaGlobe, text: "" }].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 bg-opacity-10 p-6 rounded-xl shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <value.icon className="text-5xl mb-4 mx-auto text-blue-400" />
                  <h3 className="text-2xl font-semibold">{value.title}</h3>
                  <h2 className="mt-4 font-medium">{value.text}</h2>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Timeline / Achievements */}
          {/* <section className="p-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Journey</h2>
        <div className="relative border-l-4 border-blue-500 pl-6 space-y-6">
          {[{ year: "2010", event: "Company Founded" }, { year: "2015", event: "Expanded to 20 Countries" }, { year: "2020", event: "Recognized as Industry Leader" }].map((item, index) => (
            <motion.div key={index} className="relative" whileHover={{ scale: 1.02 }}>
              <span className="absolute -left-6 top-0 h-6 w-6 bg-blue-500 rounded-full"></span>
              <h3 className="text-2xl font-bold">{item.year}</h3>
              <p className="text-lg">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section> */}


        </div>
      </div>
    </body>



  );
}
