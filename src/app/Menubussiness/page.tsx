"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const possibilities = [
  {
    title: "Fluids",
    subtitle: "Computational Fluids Dynamics Software",
    description:
      "CFD Fluids simulates fluid dynamics, enhancing engineering solutions for optimized performance.",
    image: "/industry.jpg",
  },
  {
    title: "Electronics",
    subtitle: "Multiphysics Analysis Solutions for Chips and 3D IC",
    description:
      "Create reliable and efficient designs with production-proven multiphysics analysis.",
    image: "/industry.jpg",
  },
  {
    title: "Structures",
    subtitle: "Structural Analysis & Simulation Software",
    description:
      "Ansys Structures provides robust structural analysis for engineering precision and durability.",
    image: "/industry.jpg",
  },
  {
    title: "Semiconductors",
    subtitle: "Semiconductor Design Software",
    description:
      "Semiconductor software solutions for design, simulation, and verification.",
     image: "/industry.jpg",
  },
  {
    title: "Thermal",
    subtitle: "Thermal Analysis Software",
    description:
      "Analyze heat transfer and thermal effects on your designs efficiently.",
    image: "/industry.jpg",
  },
  {
    title: "Optics",
    subtitle: "Optics Simulation Software",
    description:
      "Design and optimize optical systems with advanced simulation tools.",
    image: "/industry.jpg",
  },
];

export default function Menubussiness() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; // Show 4 cards per row

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? possibilities.length - visibleCards : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= possibilities.length ? 0 : prev + 1
    );
  };

  // Slice visible cards and wrap around if needed
  const cardsToShow = possibilities
    .slice(startIndex, startIndex + visibleCards)
    .concat(
      startIndex + visibleCards > possibilities.length
        ? possibilities.slice(
            0,
            (startIndex + visibleCards) % possibilities.length
          )
        : []
    );

  return (
    <section className="bg-[#272727] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Explore Ansys Possibilities
        </h2>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cardsToShow.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#23dce1]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 font-semibold mb-2">
                  {item.subtitle}
                </p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons Below */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prevSlide}
            className="bg-[#000080] p-2 rounded-full shadow hover:bg-gray-700"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#000080] p-2 rounded-full shadow hover:bg-gray-700"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
