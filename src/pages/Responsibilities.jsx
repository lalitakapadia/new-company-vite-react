import React, { useState, useRef, useEffect } from "react";
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
  { image: ourCommitmentImage, title: "Our Commitment", description: "Worldwide Quality Inspection Ltd. partners with leading multinational corporations to strengthen social responsibility, ethical practices, and environmental stewardship across global supply chains." },
  { image: ourValuesImage, title: "Our Values", description: "Integrity, transparency, and accountability drive every action at Worldwide Quality Inspection Ltd., ensuring sustainable growth and regulatory excellence." },
  { image: ourApproachImage, title: "Our Approach", description: "At Worldwide Quality Inspection Ltd., our operations are built on trust and ethical conduct, upholding the highest professional standards in compliance and quality assurance." },
  { image: ourImpactImage, title: "Our Impact", description: "Our global compliance framework reinforces ethical standards, corporate governance, and risk mitigation—supporting secure, responsible international trade." },
];

const slideDuration = 4000; // ms

const Responsibilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  // Progress bar timer logic
  useEffect(() => {
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timerRef.current);
          return 100;
        }
        return prev + 100 / (slideDuration / 100);
      });
    }, 100);

    return () => clearInterval(timerRef.current);
  }, [activeIndex]);

  // Reset progress on manual navigation
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setProgress(0);
  };

  return (
    <>
      <Helmet>
        <title>Corporate Responsibilities | Ethical & Sustainable Compliance</title>
      </Helmet>
      <div className="text-gray-800">
        <div className="relative mx-auto overflow-hidden ">
          <div
            className="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 
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
          description="At Worldwide Quality Inspection Ltd., we uphold global standards in corporate governance, sustainability, and regulatory compliance to support ethical and secure international trade."
        />

        <main className="m-2">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            autoplay={{ delay: slideDuration, disableOnInteraction: false }}
            onSlideChange={handleSlideChange}
            className="w-full ring-1 ring-inset ring-black/20 rounded-3xl"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-auto sm:h-[80vh] flex flex-col sm:flex-row-reverse sm:items-center justify-right sm:pr-6">
                  {/* Mobile View: Image on top, text below, progress bar at bottom */}
                  <div className="w-full sm:hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-64 object-cover rounded-3xl"
                      loading="lazy"
                    />
                    <div className="p-4 text-center">
                      <h2 className="text-2xl font-bold text-gray-900">{slide.title}</h2>
                      <p className="text-lg text-gray-700 m-2">{slide.description}</p>
                    </div>
                    {/* Progress Bar (Mobile) */}
                    <div className="w-full px-2 mt-4">
                      <div className="flex gap-2">
                        {slides.map((_, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center">
                            <div className="relative w-full h-2 bg-white/30 rounded-full overflow-hidden">
                              <div
                                className={`absolute left-0 h-full ${activeIndex === idx
                                  ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                                  : "bg-transparent"
                                  }`}
                                style={{
                                  width: activeIndex === idx ? `${progress}%` : "0%",
                                  transition: "width 0.1s linear",
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Slide titles below progress bar (optional, remove if not needed) */}
                      <div className="flex gap-2 mt-1">
                        {slides.map((slide, idx) => (
                          <span
                            key={idx}
                            className={`flex-1 text-xs font-semibold truncate ${activeIndex === idx
                              ? "text-blue-700"
                              : "text-gray-400"
                              }`}
                          >
                            {slide.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop View: Image left, text right, progress bar at bottom */}
                  <div className="absolute inset-0 hidden sm:block">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-black/60 to-black"></div>
                  </div>

                  {/* Desktop: Title/desc on image, right center */}
                  <div className="relative w-full sm:w-1/2 p-6 text-center sm:text-right text-white z-10">
                    <h2 className="text-3xl md:text-5xl font-bold hidden sm:block">{slide.title}</h2>
                    <p className="m-4 text-lg md:text-xl text-gray-300 font-normal hidden sm:block">{slide.description}</p>
                  </div>

                  {/* Progress Bar (Desktop) */}
                  <div className="absolute bottom-10 left-0 w-full px-6 md:px-12 hidden sm:block">
                    <div className="max-w-7xl mx-auto flex gap-12">
                      {slides.map((slide, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center">
                          <span
                            className={`text-sm font-semibold ${activeIndex === idx
                              ? "text-white opacity-100"
                              : "text-white/60 opacity-60"
                              }`}
                          >
                            {slide.title}
                          </span>
                          <div className="relative w-full h-2 bg-white/30 rounded-full mt-2 overflow-hidden">
                            <div
                              className={`absolute left-0 h-full ${activeIndex === idx
                                ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                                : "bg-transparent"
                                }`}
                              style={{
                                width: activeIndex === idx ? `${progress}%` : "0%",
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