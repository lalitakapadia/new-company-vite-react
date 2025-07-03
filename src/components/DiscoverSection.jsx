import React from 'react';
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
  FaIndustry,
} from 'react-icons/fa';

const DiscoverSection = () => {
  const services = [
    {
      icon: <FaShieldAlt className="w-12 h-12 text-blue-500 mx-auto" />,
      title: 'Inspection Services',
      description:
        'Worldwide Quality Inspection Ltd. delivers DGFT-approved pre-shipment inspections, ensuring international shipment compliance and trusted trade operations.',
      link: '/metal-inspection',
    },
    {
      icon: <FaIndustry className="w-12 h-12 text-orange-500 mx-auto" />,
      title: 'Scrap Loading Experts',
      description:
        'Worldwide Quality Inspection Ltd. specializes in inspecting metal and paper scrap at ports of origin, guaranteeing safety and regulatory compliance for exports.',
      link: '/services#ShipmentIntegrityVerification',
    },
    {
      icon: <FaGlobe className="w-12 h-12 text-green-500 mx-auto" />,
      title: 'Global Reach',
      description:
        'OOperating in over 60 countries, Worldwide Quality Inspection Ltd. ensures seamless, compliant international trade with extensive global presence.',
      link: '/about-us#continent',
    },
    {
      icon: <FaCheckCircle className="w-12 h-12 text-yellow-500 mx-auto" />,
      title: 'Safety & Compliance',
      description:
        'Worldwide Quality Inspection Ltd. guarantees that all shipments meet rigorous safety and regulatory standards before they cross international borders.',
      link: '/services#SupplierComplianceAssistance',
    },
    {
      icon: <FaCheckCircle className="w-12 h-12 text-yellow-500 mx-auto" />,
      title: 'Hazard-Free Shipments',
      description:
        'Worldwide Quality Inspection Ltd. certifies that shipments are free from hazardous materials, complying with Indian import safety regulations.',
      link: '/metal-import',
    },
    {
      icon: <FaUsers className="w-12 h-12 text-purple-500 mx-auto" />,
      title: 'Expert Team',
      description:
        'Our dedicated team at Worldwide Quality Inspection Ltd. brings industry-leading expertise, precision, and reliability to every inspection.',
      link: '/contact-us',
    },
  ];

  return (
    <section
      id="discover-expertise"
      className="m-2 rounded-3xl px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-6">
          Discover Our Expertise
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-normal mb-12">
          At Worldwide Quality Inspection Ltd., we deliver DGFT-approved pre-shipment inspections ensuring safety, compliance, and smooth global trade.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl bg-white text-gray-900 shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              {/* Animated border */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-800 text-base mb-4 flex-grow font-normal">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  onClick={() => sessionStorage.setItem('scrollBackTo', 'discover-expertise')}
                  className="mt-auto inline-block text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200 relative"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More →
                  <span
                    className="block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
