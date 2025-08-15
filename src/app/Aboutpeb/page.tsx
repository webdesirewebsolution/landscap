"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";

export default function Aboutpeb() {
  const stats = [
    { value: 44, suffix: " mn", label: "square metres residential development" },
    { value: 31, suffix: " mn", label: "square metres commercial & retail development" },
    { value: 10000, suffix: "+", label: "Happy families" },
    { value: 13, suffix: "", label: "Mixed use & gated communities" },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !hasAnimated) {
          stats.forEach((stat, i) => {
            if (numberRefs.current[i]) {
              const countUp = new CountUp(numberRefs.current[i]!, stat.value, {
                duration: 2,
                suffix: stat.suffix,
                separator: ",",
              });
              countUp.start();
            }
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    numberRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-5 md:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section - Video & Images */}
        <div className="space-y-5">
          {/* Row 1: Only Video */}
          <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-lg shadow-lg">
            <video
              src="/aboutvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2: Two Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-44 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/about.png"
                alt="Building 1"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative w-full h-44 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/about.png"
                alt="Building 2"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Section - About Us */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#000080] to-blue-400 mb-6">
            ABOUT US
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed text-lg">
            Founded in 2011, L&T Realty is the real estate arm of Larsen & Toubro
            and ranks among the top real estate developers in India. With a
            robust portfolio covering 6.5 million square metres (equivalent to
            70 million sq. ft.) across Residential, Commercial, and Retail
            segments, L&T Realty has a strong presence in Mumbai, Navi Mumbai,
            NCR, Bengaluru, Hyderabad, and Chennai.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            L&T Realty is known for its landmark developments that combine
            design innovation with operational excellence to deliver exceptional
            customer experiences. As a trusted name in the Indian real estate
            industry, the company upholds its legacy of delivering on promises
            while embracing digitization and new technologies to drive future
            growth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <h3
                  ref={(el) => { numberRefs.current[i] = el; }} // ✅ Fixed TypeScript error
                  className="text-3xl md:text-4xl font-extrabold text-[#000080]"
                >
                  0
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
