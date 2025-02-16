import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
            <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-display text-6xl sm:text-8xl text-gray-950 font-semibold leading-tight">
            Secure Your Shipments, Simplified.
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
        </div>
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
                Trusted by businesses worldwide, our DGFT-approved Pre-Shipment Inspection service ensures quality and compliance in over 60+ countries.
                </p>

                <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                  <a
                    href="https://wa.me/+447506512666"
                    className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium text-white hover:bg-green-700"
                  >
                    Contact Us On WhatsApp
                  </a>
                  <a
                    href="./pages/signup.html"
                    className="relative inline-flex items-center justify-center px-6 py-2 rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 text-base font-medium text-gray-950 hover:bg-white/20"
                  >
                    Leave a Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-semibold text-gray-950">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            We provide top-notch services to ensure that your shipments are
            inspected and certified in compliance with international standards.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service Card 1 */}
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-950">
                Pre-Shipment Inspection
              </h3>
              <p className="mt-4 text-gray-600">
                We conduct thorough inspections of your products before
                shipping, ensuring all compliance and safety requirements are met.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-950">
                Compliance Certification
              </h3>
              <p className="mt-4 text-gray-600">
                Our services include providing certificates that verify the
                compliance of your products with international standards.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-950">
                Global Reach
              </h3>
              <p className="mt-4 text-gray-600">
                We operate in over 60 countries, ensuring your products are
                ready to be shipped globally with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

                {/* Services Section */}
                <div className="mt-8 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-pretty text-3xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
              Our Expertise in Pre-Shipment Inspection Services
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              We specialize in providing world-class pre-shipment inspection services for scrap materials, ensuring safety, compliance, and quality across the globe. Let us help streamline your shipments and build trust with your clients.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="relative py-12">
          <div className="absolute inset-x-2 bottom-0 top-48 rounded-3xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#4fd1c5] via-[55%] via-[#4a90e2] via-[70%] to-[#5e60ff] to-[100%] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Pre-shipment Inspection Card */}
                <div className="grid grid-cols-1 rounded-3xl shadow-lg ring-1 ring-black/5">
                  <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-black">
                      Comprehensive Pre-shipment Inspection
                    </h2>
                    <p className="mt-2 text-sm text-gray-950/75 text-justify">
                      We ensure your materials meet international standards through thorough inspections. Our process includes visual checks, testing, and risk assessments, so you can ship with confidence.
                    </p>
                    <img src="./public/images/shipmentInspection1.jpg" alt="Pre-shipment Inspection" className="mt-8 rounded-3xl transition-transform transform hover:scale-105" />
                  </div>
                </div>
                {/* Certification Card */}
                <div className="grid grid-cols-1 rounded-3xl shadow-lg ring-1 ring-black/5">
                  <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-black">
                      Official Certification for Compliance
                    </h2>
                    <p className="mt-2 text-sm text-gray-950/75 text-justify">
                      Our certifications give your shipments the green light for international trade. We provide Pre-shipment Inspection Certificates (PSIC) to meet legal, regulatory, and banking requirements.
                    </p>
                    <img src="./public/images/Certification4.jpg" alt="Certification" className="mt-8 rounded-3xl transition-transform transform hover:scale-105" />
                  </div>
                </div>
                {/* Consultancy Card */}
                <div className="grid grid-cols-1 rounded-3xl shadow-lg ring-1 ring-black/5">
                  <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-black">
                      Expert Shipping Consultancy
                    </h2>
                    <p className="mt-2 text-sm text-gray-950/75 text-justify">
                      Navigating international shipping regulations can be complex. Our consultants offer expert guidance to ensure your shipments meet all legal, safety, and industry standards.
                    </p>
                    <img src="./public/images/Consultancy.jpg" alt="Consultancy" className="mt-8 rounded-3xl transition-transform transform hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Services Section */}
        <div className="mt-8 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-pretty text-3xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              We have expertise in Metal and Paper Scrap Inspection, Inspection Certificate, Quality Testing, and Consultancy. Sign up today and start selling smarter.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="relative py-12">
          <div className="absolute inset-x-2 bottom-0 top-48 rounded-3xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#4fd1c5] via-[55%] via-[#4a90e2] via-[70%] to-[#5e60ff] to-[100%] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Pre-shipment Inspection Card */}
                <div className="grid grid-cols-1 rounded-3xl shadow-lg ring-1 ring-black/5">
                  <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-black">
                      Pre-shipment Inspection
                    </h2>
                    <p className="mt-2 text-sm text-gray-950/75 text-justify">
                      To mitigate risks and enhance performance, we offer comprehensive inspection services for your products.
                    </p>
                    <img src="./public/images/shipmentInspection1.jpg" alt="Pre-shipment Inspection" className="mt-8 rounded-3xl transition-transform transform hover:scale-105" />
                  </div>
                </div>
                {/* Certification Card */}
                <div className="grid grid-cols-1 rounded-3xl shadow-lg ring-1 ring-black/5">
                  <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-black">
                      Certification
                    </h2>
                    <p className="mt-2 text-sm text-gray-950/75 text-justify">
                      We hold numerous global accreditations and recognitions, enabling us to meet regulatory, legal, and banking certification requirements.
                    </p>
                    <img src="./public/images/Certification4.jpg" alt="Certification" className="mt-8 rounded-3xl transition-transform transform hover:scale-105" />
                  </div>
                </div>
                {/* Consultancy Card */}
                <div className="grid grid-cols-1 rounded-3xl shadow-lg ring-1 ring-black/5">
                  <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-black">
                      Consultancy
                    </h2>
                    <p className="mt-2 text-sm text-gray-950/75 text-justify">
                      Our dedicated experts from the shipping industry will guide you through complexities and challenges.
                    </p>
                    <img src="./public/images/Consultancy.jpg" alt="Consultancy" className="mt-8 rounded-3xl transition-transform transform hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="relative px-6 lg:px-8 mt-12 pb-12 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-justify">
              <div className="lg:order-1">
                <img src="./public/images/AboutHomePage.jpg" alt="About Us" className="rounded-3xl shadow-lg w-full object-cover h-80 md:h-auto" />
              </div>
              <div>
                <h2 className="font-mono text-4xl lg:text-5xl font-bold uppercase tracking-widest text-black hover:text-slate-500 mb-4">
                  About Us
                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
                  <b>New Company</b> is a <b>DGFT-approved Pre-shipment Inspection Agency (PSIA)</b>, authorized to issue <b>Pre-shipment Inspection Certificates (PSIC)</b> for metal and paper scrap shipments. We specialize in inspecting scrap loading at the port of origin, ensuring that all materials are free from hazardous substances before they are exported to India.
                </p>
                <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
                  With our <b>global reach</b>, we provide <b>PSIC services in over 60 countries</b>, guaranteeing compliance with international standards and enhancing the safety and reliability of your shipments.
                </p>
                <p className="mt-4 text-base md:text-lg text-gray-800 leading-relaxed">
                  Our mission is to help businesses navigate the complexities of international trade while ensuring the highest levels of safety, quality, and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer>
          <div className="relative bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#4fd1c5] via-[55%] via-[#4a90e2] via-[70%] to-[#5e60ff] to-[100%] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
            <div className="absolute inset-3 rounded-4xl bg-white/25"></div>
            <div className="px-6 lg:px-8 py-4">
              <div className="mx-auto max-w-7xl">
                <div className="relative text-center sm:py-12 pb-4">
                  <p className="text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">Why Choose Us?</p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 pb-12">
                  {/* Inspection Section */}
                  <div className="rounded-3xl shadow-lg p-8 bg-white hover:bg-gray-100 transition-all">
                    <p className="text-2xl font-semibold text-gray-950">Global Inspection</p>
                    <p className="mt-4 text-base text-gray-600">We provide Pre-shipment Inspection services in over 60 countries.</p>
                  </div>
                  {/* Certification Section */}
                  <div className="rounded-3xl shadow-lg p-8 bg-white hover:bg-gray-100 transition-all">
                    <p className="text-2xl font-semibold text-gray-950">Certifications</p>
                    <p className="mt-4 text-base text-gray-600">We are DGFT approved to issue certifications for international shipments.</p>
                  </div>
                  {/* Consultancy Section */}
                  <div className="rounded-3xl shadow-lg p-8 bg-white hover:bg-gray-100 transition-all">
                    <p className="text-2xl font-semibold text-gray-950">Expert Consultancy</p>
                    <p className="mt-4 text-base text-gray-600">Our specialists guide you through the complexities of shipping and customs regulations.</p>
                  </div>
                  {/* Contact Section */}
                  <div className="rounded-3xl shadow-lg p-8 bg-white hover:bg-gray-100 transition-all">
                    <p className="text-2xl font-semibold text-gray-950">Get in Touch</p>
                    <p className="mt-4 text-base text-gray-600">Start a conversation and learn how we can help streamline your shipments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
};

  <Footer />
 
export default Home;
