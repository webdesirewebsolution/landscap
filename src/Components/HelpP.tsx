"use client";

import { useState } from "react";
import { FaVideo, FaTrophy, FaVrCardboard } from "react-icons/fa";
import { MdEmergency } from "react-icons/md";

export default function HelpP() {
  // State now typed so numbers are allowed
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const topics = [
    { title: "Latest Media", icon: <FaVideo size={30} />, bg: "white" },
    { title: "Awards", icon: <FaTrophy size={30} />, bg: "blue-600" },
    { title: "VR Exhibition", icon: <FaVrCardboard size={30} />, bg: "white" },
    { title: "Emergency Rescue", icon: <MdEmergency size={30} />, bg: "white" },
  ];

  return (
    <section className="py-10 bg-blue-50">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#061b49]">
          How Can We Help?
        </h2>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Type keywords to find answer"
            className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 md:w-96 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      {/* Topics */}
      <div className="mt-10 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-blue-900">
            Most Searched Topics
          </h3>
          <button className="text-blue-600 hover:underline">View All</button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {topics.map((topic, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center justify-center border rounded-lg py-8 cursor-pointer transition ${
                activeIndex === index
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-900 hover:shadow-lg"
              }`}
            >
              <div className="mb-3">{topic.icon}</div>
              <p className="font-medium">{topic.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
