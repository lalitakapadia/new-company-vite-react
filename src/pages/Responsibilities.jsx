import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "../components/Navbar";

const slides = [
  {
    image: "./public/images/ourcommitment.jpg",
    title: "Our Commitment",
    description:
      "We collaborate with top multinational corporations to enhance the social, ethical, and environmental impact of their supply chains.",
  },
  {
    image: "./public/images/ourvalues.jpg",
    title: "Our Values",
    description:
      "We emphasize integrity, transparency, and accountability to ensure long-term corporate success and sustainability.",
  },
  {
    image: "./public/images/approach.jpg",
    title: "Our Approach",
    description:
      "Integrity is at the core of our business values. We maintain high standards of professional conduct with all stakeholders.",
  },
  {
    image: "./public/images/impact1.jpg",
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

    <div className="relative w-full min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#4fd1c5] via-[#4a90e2] to-[#5e60ff] text-black h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0"></div> {/* Overlay */}
        <div className="relative text-center px-6 md:px-12 z-10">
          <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">Our Responsibilities in Global Compliance</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We are committed to ensuring the highest standards of corporate governance and sustainability across industries worldwide. We aim to impact supply chains with integrity and accountability.
          </p>
        </div>
      </section>
      

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
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen flex items-center justify-center">
              
              {/* Full-Screen Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay to Fade the Image */}
                <div className="absolute inset-0">
                  {/* Desktop: Fading from middle to right */}
                  <div className="hidden md:block w-full h-full bg-gradient-to-r from-transparent via-black/60 to-black"></div>
                  {/* Mobile: Fading from middle to top */}
                  <div className="md:hidden w-full h-full bg-gradient-to-t from-transparent via-black/60 to-black"></div>
                </div>
              </div>

              {/* Text Content - Properly Positioned */}
              <div className="absolute inset-0 flex flex-col justify-start md:justify-center px-6 md:px-12">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Empty Space for Alignment on Desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Text Appears on Faded Section */}
                  <div className="w-full md:w-1/2 text-white text-left md:text-right mt-10 md:mt-0">
                    <h2 className="text-4xl md:text-6xl font-bold">{slide.title}</h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-300">
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
                      {/* Slide Title */}
                      <span
                        className={`text-sm font-semibold ${
                          activeIndex === index
                            ? "text-white opacity-100"
                            : "text-white/60 opacity-60"
                        }`}
                      >
                        {slide.title}
                      </span>

                      {/* Transparent Progress Bar */}
                      <div className="relative w-full h-2 bg-white/30 rounded-full mt-1 overflow-hidden">
                        <div
                          className={`absolute left-0 h-full ${
                            activeIndex === index
                              ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                              : "bg-transparent"
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

      {/* Get in Touch Section */}
      <section className="bg-gradient-to-r from-[#5e60ff] via-[#4a90e2] to-[#4fd1c5] text-black py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Get in Touch with Us</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto font-medium">
            Have any questions or want to know more about our global compliance services? Feel free to contact us. We're here to assist you in navigating complex regulatory landscapes and ensuring business sustainability.
          </p>
          <a
            href="./contact-us"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Responsibilities;
