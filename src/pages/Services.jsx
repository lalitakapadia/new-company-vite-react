import React from 'react';
import Navbar from '../components/Navbar';

const Services = () => {
    return (
        <body class="bg-gray-100 text-gray-800 ">
        <div class="overflow-hidden">
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
            
            <Navbar />

            <section id="services" class="py-24 bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] to-[#5e60ff]">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
      Our Services
    </h2>
    <p class="mt-4 text-lg text-white sm:text-xl">
      We offer a variety of services to help optimize your shipments and operations, ensuring compliance and efficiency at every step.
    </p>

    <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-2xl font-semibold text-gray-800">Comprehensive Inspection Services</h3>
        <p class="mt-4 text-gray-600">
          We offer a wide range of inspection services designed to mitigate risks, enhance performance, and ensure superior product quality. Our comprehensive approach helps businesses comply with international standards while minimizing operational disruptions.
        </p>
        <div class="mt-6 space-y-4 text-left text-gray-700">
          <ul>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Risk Mitigation for compliance and minimal disruptions</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Increased Efficiency and reduced delays</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Enhanced Quality Control and Customer Trust</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Global Compliance in over 60+ countries</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-2xl font-semibold text-gray-800">Certification Services</h3>
        <p class="mt-4 text-gray-600">
          We provide Scrap Inspection services for exporters and importers, ensuring compliance with regulatory standards through thorough testing, validation, and certification.
        </p>
        <div class="mt-6 space-y-4 text-left text-gray-700">
          <ul>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Regulatory Compliance for seamless global trade</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Streamlined Transactions and faster clearances</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Increased Credibility and enhanced customer trust</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Banking and Legal Support for smooth transactions</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-2xl font-semibold text-gray-800">Consulting Services</h3>
        <p class="mt-4 text-gray-600">
          Our expert consulting services help businesses reduce overhead costs, navigate market uncertainties, and achieve sustainable growth. We provide actionable insights to guide your decisions in a dynamic and competitive environment.
        </p>
        <div class="mt-6 space-y-4 text-left text-gray-700">
          <ul>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Cost Optimization for better profitability</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Expert Guidance on global market trends</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Informed Decision-Making for your business growth</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Growth Enablement in a competitive market</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>


            <section id="services" class="py-24 bg-gray-100">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-extrabold text-gray-800 sm:text-5xl">
      Our Services
    </h2>
    <p class="mt-4 text-lg text-gray-600 sm:text-xl">
      We offer a variety of services to help optimize your shipments and operations, ensuring compliance and efficiency at every step.
    </p>


    <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">


      <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-2xl font-semibold text-gray-800">Comprehensive Inspection Services</h3>
        <p class="mt-4 text-gray-600">
          We offer a wide range of inspection services designed to mitigate risks, enhance performance, and ensure superior product quality. Our comprehensive approach helps businesses comply with international standards while minimizing operational disruptions.
        </p>
        <div class="mt-6 space-y-4 text-left text-gray-700">
          <ul>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Risk Mitigation for compliance and minimal disruptions</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Increased Efficiency and reduced delays</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Enhanced Quality Control and Customer Trust</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Global Compliance in over 60+ countries</span>
            </li>
          </ul>
        </div>
      </div>


      <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-2xl font-semibold text-gray-800">Certification Services</h3>
        <p class="mt-4 text-gray-600">
          We provide Scrap Inspection services for exporters and importers, ensuring compliance with regulatory standards through thorough testing, validation, and certification.
        </p>
        <div class="mt-6 space-y-4 text-left text-gray-700">
          <ul>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Regulatory Compliance for seamless global trade</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Streamlined Transactions and faster clearances</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Increased Credibility and enhanced customer trust</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Banking and Legal Support for smooth transactions</span>
            </li>
          </ul>
        </div>
      </div>

 
      <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-2xl font-semibold text-gray-800">Consulting Services</h3>
        <p class="mt-4 text-gray-600">
          Our expert consulting services help businesses reduce overhead costs, navigate market uncertainties, and achieve sustainable growth. We provide actionable insights to guide your decisions in a dynamic and competitive environment.
        </p>
        <div class="mt-6 space-y-4 text-left text-gray-700">
          <ul>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Cost Optimization for better profitability</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Expert Guidance on global market trends</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Informed Decision-Making for your business growth</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">Growth Enablement in a competitive market</span>
            </li>
          </ul>
        </div>
      </div>

    </div> 
  </div>
</section>


            // Services Page Section
<div className="bg-gray-50 py-24 px-6 lg:px-8">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-4xl font-semibold text-gray-950">Our Services</h2>
    <p className="mt-4 text-xl text-gray-700">We offer a wide range of services to ensure your shipments are inspected, certified, and ready for global trade.</p>
    
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Pre-Shipment Inspection */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-950">Pre-Shipment Inspection</h3>
        <p className="mt-4 text-gray-600">We offer a comprehensive Pre-Shipment Inspection service, ensuring your products comply with international regulations and quality standards before they leave for their destination. This guarantees that your shipments are risk-free and meet safety protocols.</p>
      </div>
      
      {/* Compliance Certification */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-950">Compliance Certification</h3>
        <p className="mt-4 text-gray-600">We issue official Compliance Certificates for your products, confirming they meet necessary quality and regulatory standards. Our certifications ensure your goods will clear customs smoothly and meet international safety norms.</p>
      </div>

      {/* Consultancy Services */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-950">Consultancy Services</h3>
        <p className="mt-4 text-gray-600">Our Consultancy Services offer expert guidance in the realm of international trade. From documentation support to navigating legal and regulatory challenges, we ensure smooth and safe business scaling.</p>
      </div>

      {/* Global Reach */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-950">Global Reach</h3>
        <p className="mt-4 text-gray-600">With our services spanning across over 60 countries, we ensure your shipments comply with both local and international standards. Our global network allows for seamless international operations and enhanced reliability.</p>
      </div>
    </div>
  </div>
</div>

// Services Page Section
<div className="bg-gray-50 py-24 px-6 lg:px-8">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-4xl font-semibold text-gray-950">Our Services</h2>
    <p className="mt-4 text-xl text-gray-700">
      We specialize in Metal and Paper Scrap Inspection, Certification, Quality Testing, and Consulting to ensure compliance, mitigate risks, and optimize business performance. Our end-to-end solutions help exporters and importers meet regulatory standards, enhance product quality, and navigate industry challenges with confidence.
    </p>
    <p className="mt-4 text-xl text-gray-700 font-semibold">
      Partner with us for expert inspection, certification, and strategic consulting—ensuring smooth, secure, and compliant shipments.
    </p>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      
      {/* Comprehensive Inspection Services */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-950">Comprehensive Inspection Services</h3>
        <p className="mt-4 text-gray-600">
          We offer a wide range of inspection services designed to mitigate risks, enhance performance, and ensure superior product quality. Our quality-focused approach helps businesses meet industry standards while maintaining compliance and reliability.
        </p>
        <ul className="mt-6 space-y-2 text-gray-600">
          <li>✅ Diverse Inspection Solutions tailored to your needs</li>
          <li>✅ Risk Mitigation to safeguard operations</li>
          <li>✅ Performance Optimization for better efficiency</li>
          <li>✅ Product Quality Assurance at every stage</li>
          <li>✅ Commitment to Excellence through rigorous inspections</li>
        </ul>
      </div>

      {/* Certification Services */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-950">Certification Services</h3>
        <p className="mt-4 text-gray-600">
          We provide Scrap Inspection services for exporters and importers, ensuring compliance with regulatory standards through thorough testing, validation, and certification.
        </p>
        <ul className="mt-6 space-y-2 text-gray-600">
          <li>✅ Comprehensive Scrap Inspection for quality assurance</li>
          <li>✅ Testing, Validation & Certification for compliance</li>
          <li>✅ Regulatory & Legal Compliance support</li>
          <li>✅ Banking Certification Assistance for smooth transactions</li>
        </ul>
      </div>

      {/* Consulting Services */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-950">Consulting Services</h3>
        <p className="mt-4 text-gray-600">
          We provide expert consulting services to help businesses reduce overhead costs, navigate market uncertainties, and drive sustainable growth.
        </p>
        <ul className="mt-6 space-y-2 text-gray-600">
          <li>✅ Cost Optimization to improve profitability</li>
          <li>✅ Strategic Guidance for navigating global challenges</li>
          <li>✅ Insights on Market Dynamics to stay competitive</li>
          <li>✅ Industry Expertise in shipping and trade</li>
          <li>✅ Trusted Advisory Support for informed decision-making</li>
          <li>✅ Solutions for Business Complexities to ensure smooth operations</li>
        </ul>
      </div>
      
    </div>
  </div>
</div>

// Services Page Section
<div className="bg-gray-50 py-24 px-6 lg:px-12">
  <div className="mx-auto max-w-7xl text-center">
    {/* Page Title */}
    <h2 className="text-5xl font-semibold text-gray-950">Our Services</h2>
    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
      We specialize in Metal and Paper Scrap Inspection, Certification, Quality Testing, and Consulting to ensure compliance, mitigate risks, and optimize business performance. Our end-to-end solutions help exporters and importers meet regulatory standards, enhance product quality, and navigate industry challenges with confidence.
    </p>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 font-semibold">
      Partner with us for expert inspection, certification, and strategic consulting—ensuring smooth, secure, and compliant shipments.
    </p>

    {/* Services Grid */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
      
      {/* Comprehensive Inspection Services */}
      <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-3xl font-semibold text-gray-950">Comprehensive Inspection Services</h3>
        <p className="mt-4 text-gray-600">
          We offer a wide range of inspection services designed to mitigate risks, enhance performance, and ensure superior product quality. Our quality-focused approach helps businesses meet industry standards while maintaining compliance and reliability.
        </p>
        <div className="mt-6 space-y-4 text-gray-600">
          <p>✅ Tailored Inspection Solutions</p>
          <p>✅ Risk Mitigation & Compliance</p>
          <p>✅ Performance Optimization & Efficiency</p>
          <p>✅ Quality Assurance at Every Stage</p>
        </div>
      </div>

      {/* Certification Services */}
      <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-3xl font-semibold text-gray-950">Certification Services</h3>
        <p className="mt-4 text-gray-600">
          We provide Scrap Inspection services for exporters and importers, ensuring compliance with regulatory standards through thorough testing, validation, and certification.
        </p>
        <div className="mt-6 space-y-4 text-gray-600">
          <p>✅ Comprehensive Scrap Inspection for Quality Assurance</p>
          <p>✅ Certification for Regulatory & Legal Compliance</p>
          <p>✅ Testing & Validation for Seamless Transactions</p>
          <p>✅ Banking Certification Assistance</p>
        </div>
      </div>

      {/* Consulting Services */}
      <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-3xl font-semibold text-gray-950">Consulting Services</h3>
        <p className="mt-4 text-gray-600">
          We provide expert consulting services to help businesses reduce overhead costs, navigate market uncertainties, and drive sustainable growth.
        </p>
        <div className="mt-6 space-y-4 text-gray-600">
          <p>✅ Cost Optimization for Profitability</p>
          <p>✅ Strategic Guidance through Global Challenges</p>
          <p>✅ Industry Insights for Market Competitiveness</p>
          <p>✅ Trusted Advisors for Informed Decision-making</p>
        </div>
      </div>

    </div>
  </div>
</div>

// Services Page Section
<div className="bg-gray-50 py-24 px-6 lg:px-12">
  <div className="mx-auto max-w-7xl text-center">
    {/* Page Title */}
    <h2 className="text-5xl font-semibold text-gray-950">Our Services</h2>
    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
      We specialize in Metal and Paper Scrap Inspection, Certification, Quality Testing, and Consulting to ensure compliance, mitigate risks, and optimize business performance. Our end-to-end solutions help exporters and importers meet regulatory standards, enhance product quality, and navigate industry challenges with confidence.
    </p>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 font-semibold">
      Partner with us for expert inspection, certification, and strategic consulting—ensuring smooth, secure, and compliant shipments.
    </p>

    {/* Services Grid with equal width for all three services */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
      
      {/* Comprehensive Inspection Services */}
      <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-3xl font-semibold text-gray-950">Comprehensive Inspection Services</h3>
        <p className="mt-4 text-gray-600">
          We offer a wide range of inspection services designed to mitigate risks, enhance performance, and ensure superior product quality. Our quality-focused approach helps businesses meet industry standards while maintaining compliance and reliability.
        </p>
        <div className="mt-6 space-y-4 text-gray-600">
          <p>✅ Tailored Inspection Solutions</p>
          <p>✅ Risk Mitigation & Compliance</p>
          <p>✅ Performance Optimization & Efficiency</p>
          <p>✅ Quality Assurance at Every Stage</p>
        </div>
      </div>

      {/* Certification Services */}
      <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-3xl font-semibold text-gray-950">Certification Services</h3>
        <p className="mt-4 text-gray-600">
          We provide Scrap Inspection services for exporters and importers, ensuring compliance with regulatory standards through thorough testing, validation, and certification.
        </p>
        <div className="mt-6 space-y-4 text-gray-600">
          <p>✅ Comprehensive Scrap Inspection for Quality Assurance</p>
          <p>✅ Certification for Regulatory & Legal Compliance</p>
          <p>✅ Testing & Validation for Seamless Transactions</p>
          <p>✅ Banking Certification Assistance</p>
        </div>
      </div>

      {/* Consulting Services */}
      <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-3xl font-semibold text-gray-950">Consulting Services</h3>
        <p className="mt-4 text-gray-600">
          We provide expert consulting services to help businesses reduce overhead costs, navigate market uncertainties, and drive sustainable growth.
        </p>
        <div className="mt-6 space-y-4 text-gray-600">
          <p>✅ Cost Optimization for Profitability</p>
          <p>✅ Strategic Guidance through Global Challenges</p>
          <p>✅ Industry Insights for Market Competitiveness</p>
          <p>✅ Trusted Advisors for Informed Decision-making</p>
        </div>
      </div>

    </div>
  </div>
</div>


            <div class="mt-16 px-6 lg:px-8">
                <div class="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div class="mx-auto max-w-2xl lg:max-w-7xl">
                        <div class="grid grid-cols-1 gap-8 lg:grid-cols-1">
                        <h1
                            class="text-pretty text-3xl font-medium tracking-tighter text-gray-950 data-[dark]:text-white sm:text-6xl">
                            Our Services</h1>
                        <p class="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
                            We have expertise in Metal and Paper Scrap Inspection, Inspection Certificate, Quality Testing, and
                            Consultancy. Sign up today and start moving your shipment.</p>
                        </div>
                    </div>
                    <div class="mx-auto max-w-2xl lg:max-w-7xl  ">
                        <img src="./public/images/inspection.jpg" alt="inspection" class="rounded-3xl mt-4 rounded-3 shadow-md"></img> 
                    </div>
                </div>
            </div>
            <div class="relative py-24">
                <div
                    class="absolute inset-x-2 bottom-0 top-48 rounded-3xl ring-1 ring-inset ring-black/5 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
                    from-[#fff1be] from-[28%]   
                    via-[#4fd1c5] via-[55%]    
                    via-[#4a90e2] via-[70%]    
                    to-[#5e60ff] to-[100%]
                    sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
                </div>
                <div class="relative px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:max-w-7xl">
                        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div
                                class="-m-2 grid grid-cols-1 rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                                <div class="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
                                    <div class="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                                        <h2
                                            class="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-900 data-[dark]:text-gray-400">
                                            Inspection Service</h2>
                                        <p class="mt-2 text-sm/6 text-gray-950/75">
                                            We provide diversified inspection services to manage risks, improve performance,
                                            and ensure product quality.
                                        </p>

                                        <div class="mt-8">
                                            <h3 class="text-sm/6 font-medium text-gray-950">Assurance:</h3>
                                            <ul class="mt-3 space-y-3">
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Diversified inspection services
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Risk management
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Performance improvement

                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span> Product quality assurance

                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Quality-conscious approach

                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Critical role of inspection
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="-m-2 grid grid-cols-1 rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                                <div class="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
                                    <div class="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                                        <h2
                                            class="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-900 data-[dark]:text-gray-400">
                                            Certification</h2>
                                        <p class="mt-2 text-sm/6 text-gray-950/75">We offer Scrap Inspection services to
                                            exporters and importers, ensuring all services are tested, validated, and
                                            certified.</p>

                                        <div class="mt-8">
                                            <h3 class="text-sm/6 font-medium text-gray-950">Start selling with:</h3>
                                            <ul class="mt-3 space-y-3">
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Scrap Inspection services
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Tested, validated, certified 
                                                </li>
                                                
                                                <li
                                                class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                        aria-hidden="true"
                                                        class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                        <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                        </path>
                                                    </svg></span>Regulatory and legal compliance
                                            </li>
                                            <li
                                            class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                            <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                    aria-hidden="true"
                                                    class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                    <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                    </path>
                                                </svg></span>Banking certification support
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="-m-2 grid grid-cols-1 rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                                <div class="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
                                    <div class="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                                        <h2
                                            class="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-900 data-[dark]:text-gray-400">
                                            Consulting services</h2>
                                        <p class="mt-2 text-sm/6 text-gray-950/75">Consulting services to minimize overhead
                                            costs and drive growth.</p>
                                        <div class="mt-8 flex items-center gap-4">
                                            
                                        </div>
                                        
                                        <div class="mt-8">
                                            <h3 class="text-sm/6 font-medium text-gray-950">Start selling with:</h3>
                                            <ul class="mt-3 space-y-3">
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Minimize overhead costs
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Navigate global uncertainties
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>New business challenges
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Market dynamics
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Shipping industry experts
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Trusted advisors
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Overcoming complexities
                                                </li>
                                                <li
                                                    class="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25">
                                                    <span class="inline-flex h-6 items-center"><svg viewBox="0 0 15 15"
                                                            aria-hidden="true"
                                                            class="size-[0.9375rem] shrink-0 fill-gray-950/25">
                                                            <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z">
                                                            </path>
                                                        </svg></span>Informed decision-making
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</body>
    )
};

export default Services;