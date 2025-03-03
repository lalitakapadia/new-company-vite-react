import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "../components/Navbar";

const slides = [
  {
    image: "/images/ourcommitment.jpg",
    title: "Our Commitment",
    description: "We collaborate with top multinational corporations to enhance the social, ethical, and environmental impact of their supply chains.",
  },
  {
    image: "/images/ourvalues.jpg",
    title: "Our Values",
    description: "We emphasize integrity, transparency, and accountability to ensure long-term corporate success and sustainability.",
  },
  {
    image: "/images/approach.jpg",
    title: "Our Approach",
    description: "Integrity is at the core of our business values. We maintain high standards of professional conduct with all stakeholders.",
  },
  {
    image: "/images/impact1.jpg",
    title: "Our Impact",
    description: "Our compliance code supports adherence to ethical standards and corporate governance principles.",
  },
];

const HomeSlider = () => {
  const slideDuration = 4000; // Matches autoplay duration (4 seconds)
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full ">
      <Navbar />

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
            <div className="relative w-full flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="w-full lg:w-1/2  relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient Overlay for Smooth Blend */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent"></div>
              </div>

              {/* Text Section with Fading Effect */}
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center px-6 bg-gray-900 text-white relative">
                {/* Gradient Overlay to Blend with Image */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900"></div>

                <div className="relative z-10 mt-20 mb-30">
                  <h2 className="text-4xl md:text-6xl font-bold">{slide.title}</h2>
                  <p className="mt-4 text-lg md:text-xl max-w-lg">{slide.description}</p>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="absolute bottom-10 left-0 w-full px-6">
                <div className=" mx-auto flex gap-6">
                  {slides.map((slide, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      {/* Slide Title */}
                      <span
                        className={`text-sm font-semibold ${
                          activeIndex === index ? "text-white opacity-100" : "text-white/60 opacity-60"
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
    </div>
  );
};

export default HomeSlider;
