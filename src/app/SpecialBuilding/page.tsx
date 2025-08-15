"use client";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Pebheader from "../../Components/Pebheader";
import ProductCard from "../../Components/ProductCard";
import Footer from "../../Components/Footer";
import Image from "next/image";

export default function SpecialBuilding() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
    <Pebheader/>
    <section className="w-full min-h-[500px] flex flex-col md:flex-row">
      {/* Left Column */}
      <div
  className="flex-1 flex items-center justify-center p-8 bg-cover bg-center relative"
  style={{
    backgroundImage: `linear-gradient(rgba(14,14,85,0.4), rgba(14,14,85,0.4)), url('/aboutright.jpeg')`,
  }}
>
  {/* Centered Text */}
  <div className="text-white text-center relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
      special Building
    </h1>
  </div>
</div>

      
    </section>

    <section className="w-full bg-white py-12 px-12">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-4xl mx-auto">
        LANDSKING INFRA PVT LTD: CUSTOMIZED PREFABRICATED SOLUTIONS FOR INDUSTRIAL BUILDINGS
      </h2>
      <div className="w-12 h-1 bg-blue-900 mt-3 mx-auto"></div>
    </div>

    {/* Two Columns */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left Text */}
      <div>
        <p className="text-gray-700 mb-4">
          As modern industrialization continues to expand, prefabrication has emerged as a
          revolutionary construction technology. It helps in reducing construction timelines
          and costs, minimizes material waste, and allows for highly flexible and tailored
          design options to meet diverse project needs.
        </p>
        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">Landsking Infra Pvt Ltd</span>, we bring over
          25 years of expertise in delivering top-quality pre-engineered and prefabricated
          industrial buildings. Our portfolio includes warehouses, manufacturing units,
          industrial sheds, poultry farms, cold storage facilities, clean rooms, and many
          other specialized structures. Every project is custom-built at our own advanced
          manufacturing facility to match the unique requirements of our clients.
        </p>
        <p className="text-gray-700 mb-6">
          Our skilled team ensures excellence at every stage — from understanding your vision,
          planning, and design to manufacturing and on-site installation — delivering durable,
          cost-effective, and efficient solutions.
        </p>
        <div className="flex items-center gap-4">
          <button className="border :text-blue-900 border-blue-900 px-6 py-2 hover:bg-blue-900 hover:text-white transition">
            GET A QUOTE
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-80 md:h-[450px]">
        <Image
          src="/Industrial-Buildings-Construction.webp"
          alt="Industrial Building"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>

<ProductCard/>


 <section className="bg-gray-50 py-16 px-6 md:px-16 text-center mb-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-black uppercase">
        Custom-Designed Buildings to Match Your Business Goals
      </h2>

      {/* Underline */}
      <div className="w-12 h-[2px] bg-blue-900 mx-auto mt-3 mb-6 relative">
        <span className="absolute -bottom-[3px] left-0 w-6 h-[2px] bg-blue-900"></span>
      </div>

      {/* Paragraph */}
      <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
        The{" "}
        <span className="text-blue-900 font-semibold">
          pre engineered building
        </span>{" "}
        technology has gained strong recognition worldwide. Across India, more
        industries are adopting this modern approach, which is transforming the
        construction sector. These prefabricated solutions deliver advanced and
        innovative building techniques, ensuring faster project completion — up
        to 50% quicker than traditional methods. They are cost-effective,
        energy-efficient, and adaptable for various business needs, making them
        a preferred choice in today’s competitive market.
      </p>
    </section>
    <Footer/>
    </>
  );
}
