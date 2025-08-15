"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowUpRight } from "lucide-react";

type Slide = {
  id: number;
  location?: string; // made optional since you didn’t provide values
  title: string;
  desc: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Pre Engineered Buildings",
    desc: "Customized steel structures designed for quick assembly and durability, ideal for warehouses, factories, and commercial spaces.",
    image: "/riyadh-metro.jpg",
  },
  {
    id: 2,
    title: "Prefabricated Structures",
    desc: "Modular buildings constructed off-site for applications like site offices, classrooms, and healthcare facilities.",
    image: "/vogtle.jpg",
  },
  {
    id: 3,
    title: "Light Gauge Steel Framing",
    desc: "Lightweight steel structures suitable for residential and commercial buildings, offering design flexibility and rapid construction.",
    image: "/ws-airport.jpg",
  },
  {
    id: 4,
    title: "Sandwich Panels",
    desc: "Insulated panels used for walls and roofs, providing thermal efficiency and structural strength.",
    image: "/vogtle2.jpg",
  },
  {
    id: 5, // changed from 4 → 5
    title: "Standard Modular Solutions",
    desc: "Ready-to-use modular units like porta cabins and liftable cabins for immediate deployment.",
    image: "/vogtle2.jpg",
  },
];

export default function Pebexpertise() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold mb-8 text-left text-[#000080]">
        Explore Our Comprehensive Prefabricated Building Solutions
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation!.prevEl = prevRef.current;
            swiper.params.navigation!.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative rounded-xl overflow-hidden shadow-lg group h-[500px]">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 group">
                <p className="text-white text-sm opacity-0 translate-y-4 group-hover:opacity-90 group-hover:translate-y-0 transition-all duration-300 mb-2">
                  {slide.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    {slide.location && (
                      <span className="text-yellow-400 text-xs font-semibold tracking-wide block">
                        {slide.location}
                      </span>
                    )}
                    <h3 className="text-white text-lg font-bold">
                      {slide.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 bg-[#000080] rounded-full flex items-center justify-center shrink-0">
                    <ArrowUpRight size={18} color="white" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-0">
        <button
          ref={prevRef}
          className="bg-[#000080] rounded-full w-12 h-12 flex items-center justify-center text-white"
        >
          ‹
        </button>
        <button
          ref={nextRef}
          className="bg-[#000080] rounded-full w-12 h-12 flex items-center justify-center text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}
