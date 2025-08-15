"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoCallOutline } from "react-icons/io5";

export default function Pebcall() {
  const brands = [
    { id: 1, img: "/clientlogo1.png", name: "FWS" },
    { id: 2, img: "/clientlogo1.png", name: "GMR" },
    { id: 3, img:"/clientlogo1.png", name: "GAIL" },
    { id: 4, img: "/clientlogo1.png", name: "GE" },
    { id: 5, img: "/clientlogo1.png", name: "Gold Plus" },
    { id: 6, img: "/clientlogo1.png", name: "Hankuk" },
    { id: 7, img: "/clientlogo1.png", name: "Hankuk" },
    { id: 8, img: "/clientlogo1.png", name: "Hankuk" },
    { id: 9, img: "/clientlogo1.png", name: "Hankuk" },
  ];

  return (
    <section>
      {/* Banner Section */}
      <div className="bg-[#272727]  bg-repeat py-10 px-4 mt-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left text */}
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            COMMITTED TO YOUR SATISFACTION
          </h2>

          {/* Right call info */}
          <div className="flex items-center gap-4 bg-white text-[#000080] px-4 py-2 rounded-full shadow-lg">
            <div className="bg-[#000080] text-white p-3 rounded-full">
              <IoCallOutline />
            </div>
            <div>
              <p className="text-sm font-semibold">CALL US</p>
              <a
                href="tel:+918130444466"
                className="text-lg font-bold hover:underline"
              >
                +91 8130 444 466
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="py-8 text-center">
        <h3 className="text-xl text-[#000080] font-bold md:text-4xl font-bold mb-8">
           Brands That Trust Us
        </h3>
       

       <Swiper
  modules={[Pagination, Autoplay]}
  slidesPerView={2}
  spaceBetween={20}
  autoplay={{ delay: 2000 }}
  pagination={{
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} swiper-line"></span>`;
    },
  }}
  breakpoints={{
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  }}
  className="max-w-6xl mx-auto"
>
  {brands.map((brand) => (
    <SwiperSlide key={brand.id}>
      <div className="p-4 border border-[#bfbbbb] rounded-lg flex justify-center items-center bg-white">
        <img
          src={brand.img}
          alt={brand.name}
          className="max-h-16 object-contain"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
}
