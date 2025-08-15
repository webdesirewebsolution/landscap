"use client";

import { useState } from "react";
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

type Item = string | { name: string; subItems?: string[] };
type Section = {
  title: string;
  link?: string;
  external?: boolean;
  items: Item[];
};

export default function Footer() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const sections: Section[] = [
    {
      title: "Industry",
      external: true,
      items: [
        { name: "Mobility", subItems: ["Aerospace Engineering", "Automotive", "Rail Transportation", "Trucks & Off-Highway Vehicles"] },
        { name: "Sustainability", subItems: ["Discrete Manufacturing & Industrial Products", "Process Manufacturing"] },
        { name: "Tech", subItems: ["Consumer Electronics", "MedTech", "Media & Entertainment", "NexGen Comms", "Semiconductors", "Software & Platforms", "Public Infrastructure & Smart Cities"] },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Digital Engineering", subItems: ["Artificial Intelligence", "Cybersecure", "Security Monitoring", "Security Solutions", "Security Services", "Immersive Experiences", "Industry 4.0", "Product Consulting", "Sustainability Engineering", "Sustainable Smart World", "5G"] },
        { name: "Product Engineering", subItems: ["CAE & CFD", "CAx Automation", "Software Engineering", "Cloud Engineering", "DevOps", "Embedded Systems", "Engineering Analytics", "Integrated Design, Validation & Testing", "Lab as a Service", "Sustenance", "Testing", "Testing & Validation", "User Experience", "VLSI", "Voice Innovations", "Wearables Engineering"] },
        { name: "Manufacturing Engineering", subItems: ["Accelerated Operations", "Agile Supply Chain", "Content Engineering", "Digital Factory & Simulations", "Line Expansion & Transfer", "Manufacturing Automation", "New Product Development", "PLM on Cloud", "Plant Design & Engineering", "Sourcing & Procurement"] },
        { name: "Plant Engineering", subItems: ["CAPEX Project E/EPCM Services", "Material & Parts Management", "Operational Excellence", "Plant Sustenance & Management", "Sourcing & Procurement", "Regulatory Compliance Engineering"] },
      ],
    },
    {
      title: "Solutions",
      external: true,
      items: [
        "AiCE",
        "AiKno®",
        "AnnotAI",
        "ARC",
        "Asset Health Framework",
        "CHEST-rAi™",
        "Connected Security",
        "EDGYneer",
        "EvQUAL",
        "FlyBoard®",
        "Fusion",
        "i-BEMS",
        "Nilten",
        "nBOn",
        "PSM",
        "SafeX",
        "Semiconductor IP",
        "Sensor & Gateway Solution",
        "UBIQWeise 2.0",
      ],
    },
    {
      title: "About Us",
      external: true,
      items: [
        "Accolades",
        "Alliances",
        "Blogs",
        "Board of Directors",
        "CSR",
        "Events & Webinars",
        "Investors",
        "Media Kit",
        "Nearshore Centers",
        "News & Media",
        "Quality Management",
      ],
    },
  ];

  const toggleItem = (name: string) => {
    setOpenItem(openItem === name ? null : name);
  };

  return (
    <footer className="bg-[#002b5c] py-12 px-6 md:px-20 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="flex items-center text-lg font-semibold border-b border-gray-500 pb-3 text-[#23dce1]">
              <span>{section.title}</span>
              {section.external && <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />}
            </h3>

            <ul
              className={`mt-5 ${
                section.title === "Solutions"
                  ? "grid grid-cols-2 gap-x-4 gap-y-2"
                  : "space-y-3"
              }`}
            >
              {section.items.map((item) => {
                if (typeof item === "string") {
                  return (
                    <li
                      key={item}
                      className="text-[#c1cbd1] hover:text-[#23dce1] cursor-pointer text-sm leading-relaxed px-1"
                    >
                      {item}
                    </li>
                  );
                } else {
                  const hasSub = item.subItems && item.subItems.length > 0;
                  return (
                    <div
                      key={item.name}
                      className={`${hasSub ? "border-b border-gray-700" : ""} rounded-md`}
                    >
                      <div
                        className={`flex items-center justify-between cursor-pointer ${
                          hasSub ? "text-[#23dce1]" : "text-[#c1cbd1]"
                        } hover:text-[#23dce1] px-1 py-2`}
                        onClick={() => hasSub && toggleItem(item.name)}
                      >
                        {item.name}
                        {hasSub && (
                          <span>
                            {openItem === item.name ? (
                              <FaChevronUp className="ml-2 text-xs" />
                            ) : (
                              <FaChevronDown className="ml-2 text-xs" />
                            )}
                          </span>
                        )}
                      </div>

                      {hasSub && (
                        <ul
                          className={`pl-6 space-y-2 transition-all duration-300 overflow-hidden ${
                            openItem === item.name ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          {item.subItems!.map((sub) => (
                            <li
                              key={sub}
                              className="text-[#c1cbd1] hover:text-[#23dce1] cursor-pointer text-sm py-1 pl-1"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                }
              })}

              {/* Extra links for Industry */}
              {section.title === "Industry" && (
                <>
                <div className="mt-21">
                       <li className="text-[#92b7f7] hover:text-[#23dce1] cursor-pointer text-lg px-1 flex items-center">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Engineering The Change
                      <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />
                    </a>
                  </li>
                  <li className="text-[#92b7f7] hover:text-[#23dce1] cursor-pointer mt-6 text-lg px-1 flex items-center">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Engineer at Heart
                      <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />
                    </a>
                  </li>
                  </div>
 
                </>
              )}

              {/* Extra links for Services */}
              {section.title === "Services" && (
                <>
                <div className="mt-8">

                  <li className="text-[#92b7f7] hover:text-[#23dce1] cursor-pointer text-lg px-1 flex items-center">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Careers
                      <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />
                    </a>
                  </li>
                  <li className="text-[#92b7f7] hover:text-[#23dce1] cursor-pointer mt-6 text-lg px-1 flex items-center">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Resources
                      <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />
                    </a>
                  </li>                  
                </div>

                </>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-xs text-gray-400 text-center">
        © {new Date().getFullYear()} LTTS. All Rights Reserved.
      </div>
    </footer>
  );
}
