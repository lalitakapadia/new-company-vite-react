import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet"; // ✅ SEO Optimization
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "../components/Navbar";
import Heros from "../components/Heros";

// Import Images
import ourValuesImage from "../assets/ourvalues.jpg";
import ourCommitmentImage from "../assets/OurCommitment1.jpg";
import ourApproachImage from "../assets/approach.jpg";
import ourImpactImage from "../assets/impact1.jpg";

const slides = [
  {
    image: ourCommitmentImage,
    title: "Our Commitment",
    description:
      "We collaborate with top multinational corporations to enhance the social, ethical, and environmental impact of their supply chains.",
  },
  {
    image: ourValuesImage,
    title: "Our Values",
    description:
      "We emphasize integrity, transparency, and accountability to ensure long-term corporate success and sustainability.",
  },
  {
    image: ourApproachImage,
    title: "Our Approach",
    description:
      "Integrity is at the core of our business values. We maintain high standards of professional conduct with all stakeholders.",
  },
  {
    image: ourImpactImage,
    title: "Our Impact",
    description:
      "Our compliance code supports adherence to ethical standards and corporate governance principles.",
  },
];

const Responsibilities = () => {
  const slideDuration = 4000;
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  return (
    <>
      {/* 🔹 SEO Meta Tags */}
      <Helmet>
        <title>Corporate Responsibilities | Ethical & Sustainable Compliance</title>
        <meta
          name="description"
          content="We are committed to ensuring the highest standards of corporate governance, integrity, and sustainability across industries worldwide."
        />
        <meta name="keywords" content="corporate responsibility, compliance, sustainability, governance, ethical business practices" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Corporate Responsibilities | Ethical & Sustainable Compliance" />
        <meta property="og:description" content="Ensuring corporate governance and sustainability through ethical compliance and accountability." />
        <meta property="og:image" content={ourCommitmentImage} />
        <meta property="og:url" content="https://www.yourwebsite.com/responsibilities" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-gray-100 text-gray-800">
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
          <Navbar />
        </div>  

        {/* 🔹 Hero Section */}
        <Heros
          title="Our Responsibilities in Global Compliance"
          description="We are committed to ensuring the highest standards of corporate governance and sustainability across industries worldwide. We aim to impact supply chains with integrity and accountability."
        />

        <main className="m-2">
          {/* 🔹 Swiper Section */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            autoplay={{ delay: slideDuration, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onAutoplayTimeLeft={(swiper, timeLeft) => {
              setProgress(((slideDuration - timeLeft) / slideDuration) * 100);
            }}
            className="w-full ring-1 ring-inset ring-black/20 rounded-3xl"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[80vh] flex items-center justify-center">
                  {/* Full-Screen Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-black/60 to-black"></div>
                  </div>

                  {/* Text Content */}
                  <div className="absolute inset-0 flex flex-col justify-start md:justify-center px-6 md:px-12">
                    <div className="w-full max-w-7xl flex flex-col md:flex-row items-start md:items-center">
                      <div className="hidden md:block md:w-1/2"></div>
                      <div className="w-full md:w-1/2 text-white text-left md:text-right mt-10 md:mt-0">
                        <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                        <p className="m-4 text-lg md:text-xl text-gray-300 font-normal">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-10 left-0 w-full px-6">
                    <div className="max-w-7xl mx-auto flex gap-6">
                      {slides.map((slide, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <span
                            className={`text-sm font-semibold ${
                              activeIndex === index ? "text-white opacity-100" : "text-white/60 opacity-60"
                            }`}
                          >
                            {slide.title}
                          </span>
                          <div className="relative w-full h-2 bg-white/30 rounded-full mt-1 overflow-hidden">
                            <div
                              className={`absolute left-0 h-full ${
                                activeIndex === index ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" : "bg-transparent"
                              }`}
                              style={{
                                width: activeIndex === index ? `${progress}%` : "0%",
                                transition: "width 0.1s linear",
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>

        {/* 🔹 Call to Action */}
        <section className="ring-1 ring-inset ring-black/20 rounded-3xl m-2 p-6 bg-gradient-to-r from-[#fff1be] via-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black py-16">
          <div className="max-w-7xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4">Get in Touch with Us</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">
              Have any questions or want to know more about our global compliance services? Feel free to contact us. We're here to assist you in navigating complex regulatory landscapes.
            </p>
            <Link
              to="/contact-us"
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-black rounded-full font-semibold shadow-md transition-all"
              aria-label="Contact Us for Compliance and Ethical Business Practices"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Responsibilities;
