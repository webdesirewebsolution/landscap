"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { FaWarehouse, FaIndustry, FaSnowflake, FaShieldAlt } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";

// Props type for Card
type CardProps = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ProductCard() {
  return (
    <main className="bg-white px-12">
      <section className="bg-gray-50 py-12 px-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          <Card
            image="/NDR.webp"
            icon={<FaWarehouse size={38} className="text-white" />}
            title="Warehouse"
            description="Built for high performance and durability, our prefab warehouses offer quick installation, flexible layouts, and excellent storage efficiency. Perfect for logistics, agriculture, and industrial needs."
          />
          <Card
            image="/clean-room-2.webp"
            icon={<MdOutlineCleanHands size={38} className="text-white" />}
            title="Clean Room"
            description="Landsking Infra Pvt Ltd provides advanced cleanroom solutions for controlled environments in pharmaceuticals, electronics, and biotechnology, ensuring top hygiene and quality."
          />
          <Card
            image="/7-2.webp"
            icon={<FaIndustry size={38} className="text-white" />}
            title="Factory Building"
            description="Our factory buildings are designed for efficiency, with superior insulation, high load capacity, and optimized ventilation, ensuring smooth manufacturing operations."
          />
          <Card
            image="/NDR.webp"
            icon={<FaIndustry size={38} className="text-white" />}
            title="Industrial Shed"
            description="Designed for reliability and adaptability, EPACK’s industrial sheds are perfect for workshops, factories, and heavy-duty operations. They ensure faster setup, superior strength, and scalable configurations tailored to your business."
          />
          <Card
            image="/clean-room-2.webp"
            icon={<FaSnowflake size={38} className="text-white" />}
            title="Cold Storage & Cold Room Manufacturer"
            description="Our cold storage solutions are built with precision-insulated panels and advanced cooling systems for unmatched energy efficiency. From pharmaceuticals to perishables, EPACK ensures long-lasting preservation and compliance with temperature control standards."
          />
          <Card
            image="/7-2.webp"
            icon={<FaShieldAlt size={38} className="text-white" />}
            title="Portable Security Guard Cabins"
            description="EPACK Prefab offers portable security guard cabins, designed for quick installation and mobility. These robust cabins provide a safe and comfortable space for security personnel, made from high-quality materials such as insulated panels. They are ideal for use at construction sites, industrial areas, and other temporary locations requiring secure monitoring stations."
          />
        </div>
      </section>
    </main>
  );
}

function Card({ image, icon, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-lg">
      {/* Image with centered underline */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-[88%] group-hover:opacity-100"></div>
      </div>

      {/* Icon */}
      <div className="relative -mt-8 ml-auto mr-4 bg-blue-900 p-3 rounded shadow-lg flex items-center justify-center">
        {icon}
      </div>

      {/* Content */}
      <div className="px-5 pb-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold tracking-wide mb-3">{title}</h3>
        <p className="text-gray-600 text-base tracking-wide mb-5 flex-1">
          {description}
        </p>

        <a
          href="#"
          className="relative border border-blue-900 text-lg tracking-wider text-black px-5 py-2 font-semibold w-fit overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            READ MORE
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-blue-900 transition-all duration-500 ease-out group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
}
