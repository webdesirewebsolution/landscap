"use client";
import { useEffect, useState } from "react";

export default function Client() {
  const images = [
    "/clientlogo1.png",
    "/client2.jpeg",
     "/client3.jpeg",
     "/client4.jpeg",
      "/client5.jpeg",
     "/client6.jpeg",
       "/client7.jpeg",
       "/client8.jpeg",
       "/client9.jpeg",
       "/client10.jpeg",
         "/client11.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= images.length - 6 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#061b49] mb-6">
        Meet Our Clients
      </h2>
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / 5)}%)` }} 
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-none w-1/6 md:w-1/4 sm:w-1/3 xs:w-1/2 p-2"
            >
              <div className="bg-white border-2 border-gray-300 shadow-md rounded flex items-center justify-center p-4 h-24">
                <img
                  src={src}
                  alt={`Client ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
