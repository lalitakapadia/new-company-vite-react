import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "../components/Navbar";
import Heros from "../components/Heros";

import ourValuesImage from "../assets/ourvalues.jpg";
import ourCommitmentImage from "../assets/OurCommitment1.jpg";
import ourApproachImage from "../assets/approach.jpg";
import ourImpactImage from "../assets/impact1.jpg";

const slides = [
  { image: ourCommitmentImage, title: "Our Commitment", description: "We collaborate with top multinational corporations to enhance the social, ethical, and environmental impact of their supply chains." },
  { image: ourValuesImage, title: "Our Values", description: "We emphasize integrity, transparency, and accountability to ensure long-term corporate success and sustainability." },
  { image: ourApproachImage, title: "Our Approach", description: "Integrity is at the core of our business values. We maintain high standards of professional conduct with all stakeholders." },
  { image: ourImpactImage, title: "Our Impact", description: "Our compliance code supports adherence to ethical standards and corporate governance principles." },
];

const Responsibilities = () => {
  const slideDuration = 4000;
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Corporate Responsibilities | Ethical & Sustainable Compliance</title>
      </Helmet>
      <div className="bg-gray-100 text-gray-800">
        <div class="relative mx-auto overflow-hidden ">
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
        <Heros
          title="Our Responsibilities in Global Compliance"
          description="We are committed to ensuring the highest standards of corporate governance and sustainability across industries worldwide."
        />
        <main className="m-2">
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
                <div className="relative w-full h-auto sm:h-[80vh] flex flex-col sm:flex-row-reverse sm:items-center justify-right sm:pr-6">
                  {/* On Mobile: Image first, then Text */}
                  <div className="w-full sm:hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-64 object-cover rounded-3xl"
                      loading="lazy"
                    />
                    <div className="p-2 pt-10 text-center">
                      <h2 className="text-2xl font-bold text-gray-900">{slide.title}</h2>
                      <p className="text-lg text-gray-700">{slide.description}</p>
                    </div>
                  </div>

                  {/* On Desktop: Image on left, text on right */}
                  <div className="absolute inset-0 hidden sm:block">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-black/60 to-black"></div>
                  </div>

                  <div className="relative w-full sm:w-1/2 p-6 text-center sm:text-right text-white z-10">
                    <h2 className="text-3xl md:text-5xl font-bold hidden sm:block">{slide.title}</h2>
                    {/* Desktop only description */}
                    <p className="m-4 text-lg md:text-xl text-gray-300 font-normal hidden sm:block">{slide.description}</p>
                  </div>
                  {/* Progress Bar */}
                  <div className="absolute bottom-10 left-0 w-full px-6">
                    <div className="max-w-7xl mx-auto flex gap-6">
                      {slides.map((slide, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          {/* Slide Title */}
                          <span
                            className={`text-sm font-semibold ${activeIndex === index
                              ? "text-white opacity-100"
                              : "text-white/60 opacity-60"
                              }`}
                          >
                            {slide.title}
                          </span>

                          {/* Transparent Progress Bar */}
                          <div className="relative w-full h-2 bg-white/30 rounded-full mt-1 overflow-hidden">
                            <div
                              className={`absolute left-0 h-full ${activeIndex === index
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
        </main>
      </div>
    </>
  );
};

export default Responsibilities;
