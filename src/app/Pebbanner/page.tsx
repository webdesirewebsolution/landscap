"use client";
import { useState, useEffect } from "react";
import Aboutpeb from "../Aboutpeb/page";
import Pebexpertise from "../pebexpertise/page"
import Platform from "../platform/page"
import Totalsolution from "../totalsolution/page"
import Media from "../media/page"
import Pebbrand from "../pebbrand/page";
import Pebheader from "../../Components/Pebheader"
import Insights from "../Insights/page";
import Pebfooter from"../pebfooter/page";
import { IoCallOutline } from "react-icons/io5";
const slides = [
  
  {
    title: "PRE ENGINEERED BUILDINGS",
    description:
      "WE DELIVER HIGH PERFORMANCE PRE ENGINEERED STEEL BUILDINGS.",
     video: "/video.mp4",
  },
  {
  title: "EPC Solutions",
  description:
    "Delivering end-to-end Engineering, Procurement, and Construction solutions, we turn ambitious visions into iconic structures with precision and innovation.",
  video: "/video.mp4",
},
{
  title: "Project Management Consultancy",
  description:
    "Providing expert project management guidance, we ensure projects are delivered on time, within budget, and to the highest standards of quality.",
  video: "/video.mp4",
},
{
  title: "Structural Engineering Services",
  description:
    "Offering innovative structural engineering solutions, we design safe, durable, and efficient frameworks that form the backbone of iconic projects.",
  video: "/homeslider.mp4",
}

];

export default function Pebbanner() {
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
    <>
    <Pebheader/>
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

<Aboutpeb/>
<Pebexpertise/>
<Platform/>
<Totalsolution/>
<Insights/>
<Media/>
<Pebbrand/>
<div className="bg-[#272727]  bg-repeat py-10 px-4">
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
<Pebfooter/>
</>
  );
}
