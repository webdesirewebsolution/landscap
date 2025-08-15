"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    id: 1,
    tag: "Whitepaper",
    title: "How AI is Driving the Next Era of Mobility",
    description:
      "The mobility industry experts at LTTS engaged in an extensive analysis of these trends, across three domains – Product Development Life Cycle, Software Development Life Cycle and User Experience.",
    image: "/industry.jpg",
  },
  {
    id: 2,
    tag: "Whitepaper",
    title: "EU AI Act is Critical for Innovation",
    description:
      "The integration of Artificial Intelligence is transforming the medical device industry, facilitating smarter diagnosis, physiological monitoring, and treatment decisions",
     image: "/industry.jpg",
  },
  {
    id: 3,
    tag: "Blog",
    title: "Agentic AI Meets ER&D: Engineering the Next Leap in Autonomy",
    description:
      "Agentic AI is redefining autonomy—LTTS fuses AI with engineering to build intelligent, adaptive systems across mobility, manufacturing, and healthcare.",
    image: "/industry.jpg",
  },
  {
    id: 4,
    tag: "Whitepaper Study",
    title: "Everest Group: Unlocking Business Brilliance with GenAI and ...",
    description:
      "The comprehensive playbook to learn how unlock the full potential of gen AI and LLMs to drive your business towards unprecedented success.",
     image: "/industry.jpg",
  },
];

export default function Insights() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Responsive cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const nextSlide = () => {
    if (startIndex < cards.length - cardsPerSlide) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative max-w-8xl mx-auto px-10 md:px-20 py-10 my-40">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 mx-10"
          style={{
            transform: `translateX(-${(startIndex * 100) / cardsPerSlide}%)`,
          }}
        >
          {cards
            .slice(startIndex, startIndex + cardsPerSlide)
            .map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 relative w-full sm:w-1/2 lg:w-1/3 h-[500px] rounded-md overflow-hidden cursor-pointer group"
              >
                {/* Tag */}
                <div
                  className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-md bg-[#23dce1] text-[#112868]`}
                >
                  {card.tag}
                </div>

                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Title (default) */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-bold transition-opacity duration-500 group-hover:opacity-0 tracking-widest">
                  {card.title}
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 bg-[#f8f8f8] flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-900 tracking-widest">
                      {card.title}
                    </h3>
                    <p className="text-base text-gray-600 mb-6 tracking-widest">
                      {card.description}
                    </p>
                  </div>
                  <div>
                    <button className="bg-blue-900 text-xl text-[#23dce1] px-4 py-2 rounded-lg font-medium hover:bg-blue-900 transition">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-[-40px] right-4 flex gap-3 px-20">
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="bg-white text-blue-900 p-2 rounded-[6px] shadow border-2 border-blue-900 hover:bg-blue-50 disabled:opacity-50 disabled:border-gray-300"
        >
          <FaArrowLeft size={26} />
        </button>
        <button
          onClick={nextSlide}
          disabled={startIndex >= cards.length - cardsPerSlide}
          className="bg-white text-blue-900 p-2 rounded-[6px] shadow border-2 border-blue-900 hover:bg-blue-50 disabled:opacity-50 disabled:border-gray-300"
        >
          <FaArrowRight size={26} />
        </button>
      </div>
    </div>
  );
}
