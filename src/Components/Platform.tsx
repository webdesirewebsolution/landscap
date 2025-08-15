// components/PlatformSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TABS = [
  {
    title: "Industries",
    headline: "Transforming industries, markets and customer experiences",
    body:
      "Every day, leading companies turn industry challenges into business opportunities thanks to the 3DEXPERIENCE platform. Our clients range from global leaders to startups, and even individuals.",
    img: "/about.png",
    buttonText: "DISCOVER ALL",
    url: "/industries", 
  },
  {
    title: "Products",
    headline: "Explore our 3DEXPERIENCE portfolio and find the solution you’re looking for",
    body:
      "We provide 3D modeling and simulating applications.We are experts in creating virtual twins of products and supply chains. We revolutionize workflows thanks to our social, collaborative and information intelligence applications.",
    img: "/about.png",
    buttonText: "EXPLORE PRODUCTS",
    url: "/products", 
  },
  {
    title: "Learn & Support",
    headline: "3DEXPERIENCE EDU",
    body:
      "Reach a new milestone in your lifelong learning path.Boost your employability and innovation power!",
    img: "/about.png",
    buttonText: "LEARN MORE",
    url: "/learn-support", 
  },
];

export default function Platform() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  return (
    <section className="w-full">
      {/* Top heading + subheading */}
      <div className="max-w-4xl mx-auto px-4 pt-12 text-center">
        <h1 className="text-3xl text-[#000080] md:text-4xl font-semibold tracking-tight">
          One Platform, Endless Possibilities
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          By combining a diversity of talents and breaking up traditional silos, the
          3DEXPERIENCE platform empowers organizations to invent, learn, produce, and
          trade in entirely new ways.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative flex items-center justify-center gap-8 overflow-x-auto">
            {TABS.map((t, i) => (
              <button
                key={t.title}
                onClick={() => setActive(i)}
                className={`pb-3 text-sm md:text-base font-medium transition-colors whitespace-nowrap
                  ${active === i ? "text-[#272727]" : "text-gray-600 hover:text-[#000080]"}`}
              >
                {t.title}
              </button>
            ))}
          </div>
          {/* Active underline */}
          <div className="relative mx-auto mt-0.5 h-px max-w-4xl bg-gray-200">
            <span
              className="absolute -top-[1px] block h-0.5 bg-[#000080] transition-all duration-300"
              style={{
                width: `${100 / TABS.length}%`,
                left: `calc(${(100 / TABS.length) * active}% )`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="mt-8 relative rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full h-[340px] md:h-[420px]">
            <Image
              src={TABS[active].img}
              alt={TABS[active].title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full p-6 md:p-10">
                <div className="max-w-2xl text-white text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                    {TABS[active].headline}
                  </h2>
                  <p className="mt-4 text-sm md:text-base text-gray-200">
                    {TABS[active].body}
                  </p>
                  <button
                    className="mt-6 bg-[#000080] hover:bg-[#272727] text-white font-semibold px-4 py-2 rounded"
                    onClick={() => router.push(TABS[active].url)}
                  >
                    {TABS[active].buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
