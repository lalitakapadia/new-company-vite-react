import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

// Flag URLs for each country
const flagUrls = {
  "Nigeria": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
  "South Africa": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
  "Egypt": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
  "Kenya": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
  "Ghana": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
  "Morocco": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
  "Ethiopia": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
  "United States": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
  "Canada": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  "Mexico": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  "Brazil": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  "Argentina": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
  "Colombia": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
  "Chile": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
  "Australia": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
  "New Zealand": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
  "China": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
  "India": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
  "Japan": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
  "South Korea": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
  "Indonesia": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
  "Malaysia": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
  "Singapore": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
  "Germany": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
  "United Kingdom": "https://flagcdn.com/w320/gb.png",
  "France": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
  "Italy": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  "Spain": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  "Russia": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
  "Ukraine": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  "Turkey": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
};

// Data for continents and their countries
const continentsData = [
  {
    name: "Africa",
    countries: [
      { name: "Nigeria", flag: flagUrls["Nigeria"] },
      { name: "South Africa", flag: flagUrls["South Africa"] },
      { name: "Egypt", flag: flagUrls["Egypt"] },
      { name: "Kenya", flag: flagUrls["Kenya"] },
      { name: "Ghana", flag: flagUrls["Ghana"] },
      { name: "Morocco", flag: flagUrls["Morocco"] },
      { name: "Ethiopia", flag: flagUrls["Ethiopia"] }
    ]
  },
  {
    name: "North America",
    countries: [
      { name: "United States", flag: flagUrls["United States"] },
      { name: "Canada", flag: flagUrls["Canada"] },
      { name: "Mexico", flag: flagUrls["Mexico"] }
    ]
  },
  {
    name: "South America",
    countries: [
      { name: "Brazil", flag: flagUrls["Brazil"] },
      { name: "Argentina", flag: flagUrls["Argentina"] },
      { name: "Colombia", flag: flagUrls["Colombia"] },
      { name: "Chile", flag: flagUrls["Chile"] }
    ]
  },
  {
    name: "Oceania",
    countries: [
      { name: "Australia", flag: flagUrls["Australia"] },
      { name: "New Zealand", flag: flagUrls["New Zealand"] }
    ]
  },
  {
    name: "Asia",
    countries: [
      { name: "China", flag: flagUrls["China"] },
      { name: "India", flag: flagUrls["India"] },
      { name: "Japan", flag: flagUrls["Japan"] },
      { name: "South Korea", flag: flagUrls["South Korea"] },
      { name: "Indonesia", flag: flagUrls["Indonesia"] },
      { name: "Malaysia", flag: flagUrls["Malaysia"] },
      { name: "Singapore", flag: flagUrls["Singapore"] }
    ]
  },
  {
    name: "Europe",
    countries: [
      { name: "Germany", flag: flagUrls["Germany"] },
      { name: "United Kingdom", flag: flagUrls["United Kingdom"] },
      { name: "France", flag: flagUrls["France"] },
      { name: "Italy", flag: flagUrls["Italy"] },
      { name: "Spain", flag: flagUrls["Spain"] },
      { name: "Russia", flag: flagUrls["Russia"] },
      { name: "Ukraine", flag: flagUrls["Ukraine"] },
      { name: "Turkey", flag: flagUrls["Turkey"] }
    ]
  },
];

export default function ContinentsSection() {
  const [expandedContinent, setExpandedContinent] = useState(0);

  const handleContinentClick = (index) => {
    setExpandedContinent((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
    <section className="flex bg-gray-800 text-white sm:py-8 px-4 flex-wrap  rounded-3xl m-2">
      {/* Left: Continent List */}
      <div className="w-full sm:w-1/4 space-y-4">
        {continentsData.map((continent, index) => (
          <div
            key={index}
            className="group relative"
            onClick={() => handleContinentClick(index)}
          >
            <motion.div
              className="flex items-center cursor-pointer p-4 rounded-md hover:bg-gray-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaGlobe className="text-3xl mr-4 text-blue-400" />
              <h3 className="text-xl font-semibold">{continent.name}</h3>
            </motion.div>
            {/* Gradient bar effect */}
            <div
              className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-green-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ${expandedContinent === index ? "scale-y-100" : ""
                }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Right: Country List (Flowing in next row within available space) */}
      <div className="w-full sm:w-3/4 pl-8 ">
        {continentsData.map((continent, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${expandedContinent === index ? "max-h-screen" : "max-h-0 overflow-hidden"
              }`}
          >
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {continent.countries.map((country, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transform transition-all duration-200 hover:scale-105 relative flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-20 h-12 rounded-md object-cover"
                    loading="lazy"
                    onError={e => { 
                      e.target.onerror = null; 
                      e.target.src = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.png"; 
                    }}

                  />
                  <span className="text-sm font-semibold text-center mt-2">{country.name}</span>
                  {/* Bottom Animation for Card */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
    
  );
}
