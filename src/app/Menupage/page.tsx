"use client";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Platform from "../platform/page";
import Pebcall from "../pebcall/page";
import Pebfooter from "../pebfooter/page";
import Explore from"../explore/page";
import Menubussiness from"../menubussiness/page";
export default function Menupage() {
    interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is a factory building?",
    answer:
      "A factory building is a structure designed to house manufacturing or production operations."
  },
  {
    question: "What materials are used in factory building construction?",
    answer:
      "Factory buildings are typically constructed using steel, prefabricated panels, reinforced concrete, and insulated materials for durability and efficiency."
  },
  {
    question: "What are the benefits of prefabricated factory buildings?",
    answer:
      "They are faster to build, cost-effective, customizable, and more sustainable."
  },
  {
    question:
      "How does a pre-engineered factory building differ from traditional buildings?",
    answer:
      "Pre-engineered buildings are manufactured off-site and assembled on-site, reducing construction time and cost."
  },
  {
    question: "Can factory buildings be customized?",
    answer:
      "Yes, they can be tailored to specific design, size, and operational requirements."
  },
  {
    question: "How long does it take to construct a prefabricated factory building?",
    answer:
      "Construction time depends on the size and complexity but is generally much faster than traditional methods."
  }
];

   const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const slides = [
    {
      image: "/industry.jpg",
      title: "Affordability Is Key to Nuclear Power’s Big Future",
      link: "#",
    },
    {
      image: "/service.jpg",
      title: "Building Tomorrow’s Infrastructure",
      link: "#",
    },
    {
      image: "/system.jpg",
      title: "Clean Energy for the Next Generation",
      link: "#",
    },
  ];

  return (
    <>
    <section className="relative h-screen flex items-center text-white overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            We Live for a Challenge
          </h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            At Bechtel, we partner with our customers to bring their ambitions
            to life, delivering projects that make a lasting, meaningful
            difference for people and communities around the world.
          </p>
        </div>

        {/* Right Slider */}
        <div className="w-full relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="pb-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center mx-auto w-[250px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{slide.title}</h3>
                    <a
                      href={slide.link}
                      className="mt-3 inline-block text-[#000080] hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
                
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            {/* <div className="swiper-button-prev !text-white !top-1/2 !-translate-y-1/2 !left-0"></div>
            <div className="swiper-button-next !text-white !top-1/2 !-translate-y-1/2 !right-0"></div> */}
          </Swiper>
        </div>
      </div>
     
    </section>
    {/* description */}
      <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#000080] leading-snug  ">
EPACK Prefab: Delivering Customized Prefabricated Solutions for Industrial Buildings          </h2>
          <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            As industrialization becomes more commonplace, prefabrication is the new age construction
            technology that the industry is adopting. It minimizes construction time and cost,
            reduces waste, and also offers greater design customization ability.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            At <span className="font-bold">Landsking Infra pvt.ltd</span> offers high-quality prefabricated multi-storey buildings using advanced PEB and LGSF technologies. Designed for fast installation, durability, and energy efficiency, our structures are ideal for commercial spaces, offices, and industrial use—especially where land is limited.

We provide end-to-end turnkey solutions, from design to installation, using insulated panels (PUF/EPS) and fire-rated finishes. Our buildings meet all structural standards, including seismic and wind load considerations, ensuring safety and long-term performance

          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our professional team is trained to deliver excellence, having mastered every stage of manufacturing –
            from gathering requirements to production installation.
          </p>

          <button className="border border-[#000080] px-6 py-2 font-semibold hover:bg-[#000080] hover:text-white transition-colors">
            GET A QUOTE
          </button>
        </div>
<div className="flex justify-center">
          <img
  src="/industry.jpg"
  alt="EPACK Prefab Industrial Building"
  className="rounded-md shadow-md w-[600px] h-[400px] object-cover"
/>

        </div>

      </div>
    </section>
    {/* end description */}
    <Explore />
    <Menubussiness/>
    {/* special section */}
      <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080] text-center mb-8">
          SPECIFICATIONS OF INDUSTRIAL SHED COMPONENTS
          <span className="block w-20 h-[2px] bg-[#000080] mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
            <li>
              <span className="font-bold">Wall:</span> PUF / EPS insulated sandwich
              panels of 50 / 60mm with PPGI sheet on both sides.
            </li>
            <li>
              <span className="font-bold">Roof:</span> PUF / EPS insulated sandwich
              panels of 30 / 40 mm or PPGI roofing sheets.
            </li>
            <li>
              <span className="font-bold">Doors:</span> Insulated doors with all
              accessories will be provided from our manufacturing setup.
            </li>
            <li>
              <span className="font-bold">Windows:</span> Aluminum anodized sliding
              windows will be provided from our manufacturing setup.
            </li>
            <li>
              <span className="font-bold">Structure and Accessories:</span> All
              required supporting accessories and structures will be provided before
              project delivery.
            </li>
            <li>
              <span className="font-bold">Electrical fittings, sanitary fittings,
              beds, etc.,</span> will be provided as per client requirements and
              fitted as per the contract.
            </li>
          </ul>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#000080] z-10"></div>
            <img
              src="/industry.jpg"
              alt="PUF panels in industrial shed"
              width={600}
              height={400}
              className="rounded-md shadow-md relative z-20"
            />
          </div>
        </div>
      </div>
    </section>
    {/* end special section */}
     <Platform/>
     <Pebcall/>
     {/* faqs */}
     <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl  text-[#000080] md:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        {/* Yellow divider line */}
        <div className="w-16 h-1 bg-[#272727] mx-auto rounded"></div>
      </div>

      {/* FAQ Items */}
      <div className="border-t border-gray-200">
        {faqs.map((faq: FAQ, index: number) => (
          <div key={index} className="border-b border-gray-200">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span
                className={`font-medium transition-colors duration-200 ${
                  openIndex === index ? "text-[#000080]" : "text-gray-800"
                }`}
              >
                {faq.question}
              </span>
              <span className="text-gray-500 text-sm">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
     {/* end faqs */}
     {/* <Pebfooter/> */}
    </>
  );
}
