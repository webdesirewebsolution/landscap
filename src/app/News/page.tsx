// components/NewsSlider.tsx
"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    tag: "Highlights",
    title: "LTTS CEO Amit Chadha on plan for multiple billion-dollar units",
    description:
      "In this episode, Amit Chadha, CEO and MD at LTTS, gives us a quick update on the company’s progress after a recent reorganization.",
    image: "/news.jpeg", 
    link: "#",
  },
  {
    id: 2,
    tag: "Updates",
    title: "LTTS expands global operations with new R&D centers",
    description:
      "The company has launched new research and development facilities to enhance innovation across industries.",
   image: "/news2..jpeg", 
    link: "#",
  },
  {
    id: 3,
    tag: "Interview",
    title: "Exclusive: How LTTS is shaping the future of engineering",
    description:
      "A deep dive into LTTS’s latest strategies and their impact on global engineering trends.",
    image: "/news3.jpeg", 
    link: "#",
  },
];

export default function News() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-[#03234C] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Image */}
        <div>
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-white font-medium mb-2">{slides[current].tag}</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {slides[current].title}
          </h2>
          <p className="mb-6 text-gray-200">{slides[current].description}</p>
          <a
            href={slides[current].link}
            className="inline-block bg-black hover:bg-[#272727] px-5 py-2 rounded transition"
          >
            Know More
          </a>

          {/* Arrows */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={prevSlide}
              className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
