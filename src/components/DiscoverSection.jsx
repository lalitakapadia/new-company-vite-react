import React from 'react';
import { Link } from "react-router-dom"; // ✅ Import Link for React Router
import { FaGlobe, FaShieldAlt, FaUsers, FaCheckCircle, FaIndustry } from 'react-icons/fa';

const DiscoverSection = () => {
  const services = [
    { icon: <FaShieldAlt className="w-12 h-12 text-blue-500 mx-auto" />, 
      title: 'Inspection Services', 
      description: 'Ensuring international shipment compliance with expert inspections.', 
      link: './metal-inspection' 
    },
    { icon: <FaIndustry className="w-12 h-12 text-orange-500 mx-auto" />, 
      title: 'Scrap Loading Experts', 
      description: 'Specializing in inspecting metal and paper scrap at the port of origin for safety assurance.', 
      link: '/services#ShipmentIntegrityVerification' 
    },
    { icon: <FaGlobe className="w-12 h-12 text-green-500 mx-auto" />, 
      title: 'Global Reach', 
      description: 'Operating in 60+ countries to facilitate seamless trade worldwide.', 
      link: '/about-us#continent' 
    },
    { icon: <FaCheckCircle className="w-12 h-12 text-yellow-500 mx-auto" />, 
      title: 'Safety & Compliance', 
      description: 'We ensure shipments meet all regulatory and safety requirements.', 
      link: '/services#SupplierComplianceAssistance' 
    },
    { icon: <FaCheckCircle className="w-12 h-12 text-yellow-500 mx-auto" />, 
      title: 'Hazard-Free Shipments', 
      description: 'We certify that shipments are free from hazardous materials before export to India.', 
      link: '/metal-import' 
    },
    { icon: <FaUsers className="w-12 h-12 text-purple-500 mx-auto" />, 
      title: 'Expert Team', 
      description: 'A dedicated team ensuring precision, efficiency, and reliability.', 
      link: '/contact-us' 
    },
  ];

  return (
    <div className="m-2 rounded-3xl relative px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-6">Discover Our Expertise</h2>
        <p className="text-lg text-gray-300 max-w-2xl font-normal mx-auto mb-12">
          We specialize in globally recognized, DGFT-approved pre-shipment inspections. Our expertise ensures compliance, safety, and smooth international trade operations.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group overflow-hidden rounded-3xl bg-gray-100 shadow-lg hover:shadow-2xl transition-transform hover:scale-105 p-6">
              {/* Left Animated Border */}
              <div className="rounded-3xl absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-green-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              
              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-800 text-lg font-normal">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="mt-4 inline-block text-blue-500 font-semibold relative"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More → 
                  {/* Bottom Underline Animation */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
