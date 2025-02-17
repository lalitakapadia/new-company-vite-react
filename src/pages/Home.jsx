import React from 'react';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';


const Home = () => {
  return (
    <body className="bg-gray-100 text-gray-800">
      <div className="overflow-hidden">
        <div className="relative">
          <div
            id="certify-shipment"
            className="absolute inset-2 bottom-0 rounded-3xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#4fd1c5] via-[55%] via-[#4a90e2] via-[70%] to-[#5e60ff] to-[100%] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"
          ></div>

          <Navbar />

          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {/* <div className="mx-auto max-w-7xl text-center">
                <h1 className="font-display text-6xl sm:text-8xl text-gray-950 font-semibold leading-tight">
                  Secure Your Shipments with Confidence.
                </h1>
                <p className="mt-4 text-lg sm:text-2xl text-gray-700">
                  Our DGFT-approved inspection services ensure your goods are
                  compliant, safe, and ready to be shipped worldwide.
                </p>
                <div className="mt-12 flex justify-center gap-x-6">
                  <a
                    href="https://wa.me/+447506512666"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-white rounded-full hover:from-[#4a90e2] hover:to-[#5e60ff] transition duration-300"
                  >
                    Contact Us on WhatsApp
                  </a>
                  <a
                    href="./pages/signup.html"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-50 text-gray-900 rounded-full border border-transparent shadow-lg hover:bg-gray-200"
                  >
                    Leave a Message
                  </a>
                </div>
              </div> */}
              <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-16 md:pt-16">
                {/* <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
                  Certify Shipment
                </h1>
                <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                  We are DGFT approved and provide Pre-Shipment Inspection service in over 60+ countries.
                </p> */}
                <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
                  Secure Your Shipments with Confidence
                </h1>
                <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                  Our DGFT-approved inspection services ensure your goods are
                  compliant, safe, and ready to be shipped worldwide. 
                </p>

                <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                  <a
                    href="https://wa.me/+447506512666"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-white rounded-full hover:from-[#4a90e2] hover:to-[#5e60ff] transition duration-300"
                  >
                    Contact Us on WhatsApp
                  </a>
                  <a
                    href="./pages/signup.html"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-50 text-gray-900 rounded-full border border-transparent shadow-lg hover:bg-gray-200"
                  >
                    Leave a Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServicesSection />


        {/* About Us Section */}
        <div className="relative px-6 lg:px-8 mt-12 pb-12 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-justify">
              <div className="lg:order-1">
                <img src="./public/images/AboutHomePage.jpg" alt="About Us" className="rounded-3xl shadow-lg w-full object-cover h-80 md:h-auto" />
              </div>
              <div>
                <h2 className="font-medium text-4xl lg:text-5xl font-bold  tracking-widest text-black  mb-4">
                  About Us
                </h2>
                <p className="mt-4 font-medium text-base md:text-lg text-gray-800 leading-relaxed">
                  <b>New Company</b> is a <b>DGFT-approved Pre-shipment Inspection Agency (PSIA)</b>, authorized to issue <b>Pre-shipment Inspection Certificates (PSIC)</b> for metal and paper scrap shipments. We specialize in inspecting scrap loading at the port of origin, ensuring that all materials are free from hazardous substances before they are exported to India.
                </p>
                <p className="mt-4 font-medium text-base md:text-lg text-gray-800 leading-relaxed">
                  With our <b>global reach</b>, we provide <b>PSIC services in over 60 countries</b>, guaranteeing compliance with international standards and enhancing the safety and reliability of your shipments.
                </p>
                <p className="mt-4 font-medium text-base md:text-lg text-gray-800 leading-relaxed">
                  Our mission is to help businesses navigate the complexities of international trade while ensuring the highest levels of safety, quality, and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer>
          
          <WhyChooseUs></WhyChooseUs>
        </footer>
      </div>
    </body>
  );
};

export default Home;
