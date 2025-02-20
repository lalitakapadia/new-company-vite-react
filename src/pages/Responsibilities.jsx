import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../components/Navbar";

const responsibilities = [
  {
    title: "Our Commitment",
    image: "/images/OurCommitment.jpg",
    description:
      "We collaborate with top multinational corporations to enhance the social, ethical, and environmental impact of their supply chains.",
  },
  {
    title: "Our Values",
    image: "/images/OurValues.jpg",
    description:
      "We emphasize integrity, transparency, and accountability to ensure long-term corporate success and sustainability.",
  },
  {
    title: "Our Approach",
    image: "/images/Approach.jpg",
    description:
      "Integrity is at the core of our business values. We maintain high standards of professional conduct with all stakeholders.",
  },
  {
    title: "Our Impact",
    image: "/images/Impact1.jpg",
    description:
      "Our compliance code supports adherence to ethical standards and corporate governance principles.",
  },
];

const Responsibilities = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section className="text-center py-16 bg-gradient-to-r from-yellow-200 via-teal-400 to-blue-500 text-black">
        <h1 className="text-5xl font-extrabold">Our Responsibilities</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-black/80">
          We are committed to integrity, transparency, and accountability,
          ensuring the long-term success and sustainability of our company.
        </p>
      </section>

      {/* Swiper Carousel Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-3xl overflow-hidden"
          >
            {responsibilities.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-center mt-2">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Responsibilities;
