"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function ExpertiseP() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const services = [
    { title: "Architecture & Design services", image: "/industry.jpg" },
    { title: "Architecture & Design services", image: "/industry.jpg" },
    { title: "Cold Storage and warehouse", image: "/industry.jpg" },
    { title: "Solar Plant Installation", image: "/industry.jpg" },
    { title: "HVAC", image: "/industry.jpg" },
    { title: "Fire and Safety", image: "/industry.jpg" },
    { title: "STRUCTURAL ENGINEERING SERVICES", image: "/industry.jpg" },
    { title: "Infrastructure, Energy & Materials Civil Services", image: "/Infras.jpg" },
    { title: "Infrastructure, Energy & Materials Civil Services", image: "/industry.jpg" },
    { title: "Heavy Engineering", image: "/industry.jpg" },
    { title: "Mining Metals", image: "/core/mining.jpg" },
    { title: "Factories Installation", image: "/factories Installation.jpg" },
    { title: "Green buildings", image: "/green.png" },
    { title: "PEB Erection and fabrication", image: "/PEB.jpg" },
    { title: "Advisory & Auditing", image: "/industry.jpg" },
    { title: "T&D Engineering & Simulation", image: "/industry.jpg" },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#061b49]">Our Expertise</h2>

        {/* Custom navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="bg-[#1F4B9A] text-white p-2 rounded-full hover:bg-[#163b78] transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mt-10 mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
            // Bind navigation elements before init
            const nav = swiper.params.navigation;
            if (nav && typeof nav !== "boolean") {
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#1F4B9A] flex items-center justify-between px-4 py-3">
                  <p className="text-white font-semibold text-sm">{service.title}</p>
                  <div className="bg-white rounded-full p-1">
                    <ArrowUpRight className="w-4 h-4 text-[#1F4B9A]" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
