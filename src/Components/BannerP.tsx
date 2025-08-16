"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Industry Installation and Construction",
    description:
      "Quality Construction Project Delivery on time with customer satisfaction.",
    video: "/homeslider.mp4",
  },
  {
    title: "Real Estate",
    description:
      "Innovative real estate solutions designed for modern needs and sustainable growth.",
    video: "/homeslider.mp4",
  },
  {
    title: "Engineering & RND Services",
    description:
      "Committed to advancing innovation, fairness, equity, and quality in assessment.",
   video: "/homeslider.mp4",
  },
  {
    title: "Renewable Energy Solution Provider",
    description:
      "Explore innovation in industrial equipment with green technologies.",
   video: "/homeslider.mp4",
  },
];

export default function BannerP() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 100);

    const slideTimer = setTimeout(() => {
      setActive((prevActive) => (prevActive + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [active]);

  return (
    <div className="relative w-full h-[70vh] sm:h-[100vh] overflow-hidden">
  {/* Background Video */}
  <video
    key={slides[active].video}
    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
    autoPlay
    loop
    muted
  >
    <source src={slides[active].video} type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-20 text-white">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight max-w-full md:max-w-3xl">
      {slides[active].title}
    </h1>
    <p className="mt-3 text-sm sm:text-base md:text-lg max-w-full md:max-w-2xl">
      {slides[active].description}
    </p>

    <button className="mt-5 mb-8 sm:mb-10 w-fit sm:max-w-[50%] md:max-w-[20%] inline-block px-5 sm:px-6 py-2 text-sm sm:text-base font-semibold text-blue-600 bg-white rounded-full shadow-md hover:bg-blue-100 transition">
      Learn more
    </button>

    {/* Tabs with blue progress bar */}
    <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row gap-3 sm:gap-6 px-4 sm:px-8 md:px-20 pb-6">
      {slides.map((slide, index) => (
        <div key={index} className="relative w-full sm:w-auto">
          {active === index && (
            <div
              className="absolute -top-1 left-0 h-1 bg-blue-500 rounded"
              style={{
                width: `${progress}%`,
                transition: "width 0.1s linear",
              }}
            ></div>
          )}
          <button
            onClick={() => setActive(index)}
            className={`pt-4 sm:pt-8 text-left sm:text-center transition-all duration-300 break-words 
              ${
                active === index
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }`}
          >
            {slide.title}
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
