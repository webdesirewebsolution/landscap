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
  location: string;
  title: string;
  desc: string;
  video: string;
};

const slides: Slide[] = [
  {
    id: 1,
    location: "SAUDI ARABIA",
    title: "Riyadh Metro",
    desc: "The largest metro project to be built in a single phase — with all six lines designed, constructed, and integrated simultaneously.",
    video: "/video.mp4",
  },
  {
    id: 2,
    location: "GEORGIA, U.S.",
    title: "Vogtle Units 3 and 4",
    desc: "The first new nuclear units built in the United States in more than 30 years.",
    video: "/video.mp4",
  },
  {
    id: 3,
    location: "AUSTRALIA",
    title: "Western Sydney International Airport",
    desc: "Delivering a once-in-a-generation airport project for Australia.",
    video: "/video.mp4",
  },
  {
    id: 4,
    location: "GEORGIA, U.S.",
    title: "Vogtle Units 3 and 4",
    desc: "The first new nuclear units built in the United States in more than 30 years.",
    video: "/video.mp4",
  },
];

export default function Projectpeb() {
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePlay = (id: number) => {
    Object.keys(videoRefs.current).forEach((key) => {
      const vid = videoRefs.current[parseInt(key)];
      if (vid && parseInt(key) !== id) {
        vid.pause();
      }
    });

    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold mb-8 text-left text-[#000080]">
        Featured Projects
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onBeforeInit={(swiper) => {
          // Attach custom navigation buttons before Swiper initializes
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
            <div
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group h-[500px]"
              onClick={() => handlePlay(slide.id)}
            >
              {/* Video */}
              <video
                ref={(el) => {
                  videoRefs.current[slide.id] = el;
                }}
                src={slide.video}
                className="w-full h-full object-cover"
                preload="metadata"
                muted
                loop
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 group">
                <p className="text-white text-sm opacity-0 translate-y-4 group-hover:opacity-90 group-hover:translate-y-0 transition-all duration-300 mb-2">
                  {slide.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-yellow-400 text-xs font-semibold tracking-wide block">
                      {slide.location}
                    </span>
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
