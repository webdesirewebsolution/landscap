// components/CoreBusiness.tsx
"use client";

export default function CoreBusiness() {
  const services = [
    {
      title: "Industry Installation and Construction",
      image: "/industry.jpg",
      description:
        "Quality Construction Project Delivery on time with customer Satisfaction",
    },
    {
      title: "Engineering and R&D Services",
      image: "/engineer.jpg",
      description:
        "Committed to advancing innovation, fairness, equity, measurement quality in assessment , learning Materials.",
    },
    {
      title: "Renewable Energy Solution Provider",
      image: "/renewable.jpg",
      description:
        "Committed to providing affordable, clean and abundant power with Renewable Energy Solutions.",
    },
    {
      title: "Real Estate Development",
      image: "/realstate.png",
      description:
        "Landsking Infra s Real Estate Division specializes in unlocking high-value industrial and premium real estate deals across India's emerging growth corridors. From industrial plots, townships, mega-farmhouses",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#061b49] mb-10 tracking-wide">
        Core Business
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative group w-full h-72 rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white px-4 text-center text-lg md:text-xl font-semibold tracking-wide opacity-100 group-hover:opacity-0 transition-opacity duration-500">
              {service.title}
            </div>

            {/* Description */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-base md:text-lg tracking-wide">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
