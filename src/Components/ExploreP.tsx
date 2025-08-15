"use client";

import { useState } from "react";

const areas = [
  {
    id: 1,
    title: "Soluciones",
    subtitle: "Soluciones Globales",
    description:
      "Ofrecemos soluciones innovadoras para diversos sectores, adaptándonos a las necesidades de cada cliente.",
    image: "/green.png",
  },
  {
    id: 2,
    title: "Ingeniería",
    subtitle: "Proyectos de Ingeniería",
    description:
      "Diseñamos y desarrollamos proyectos de ingeniería de alta complejidad, garantizando calidad y eficiencia.",
     image: "/green.png",
  },
  {
    id: 3,
    title: "Infraestructuras",
    subtitle: "Inversión en Infraestructuras",
    description:
      "Combinamos fórmulas de colaboración tradicionales con alianzas específicas para minimizar el riesgo e impulsar la eficiencia.",
    image: "/green.png",
  },
  {
    id: 4,
    title: "Otros",
    subtitle: "Otras Áreas",
    description:
      "Participamos en múltiples sectores, ofreciendo valor añadido y soluciones integrales.",
    image: "/green.png",
  },
];

export default function ExploreP() {
  const [selectedId, setSelectedId] = useState(3);

  const selectedArea = areas.find((area) => area.id === selectedId);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
        Áreas de negocio
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Menu */}
        <div className="bg-blue-900 text-white rounded-lg flex flex-col w-full md:w-1/4">
          {areas.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => setSelectedId(area.id)}
              className={`flex items-center gap-3 px-5 py-4 text-left transition ${
                selectedId === area.id
                  ? "bg-blue-800 font-bold"
                  : "hover:bg-blue-800 text-gray-300"
              }`}
            >
              <span className="text-sm opacity-70">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span>{area.title}</span>
            </button>
          ))}
        </div>

        {/* Right Content */}
        {selectedArea && (
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden w-full">
            {/* Text Content */}
            <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                {selectedArea.subtitle}
              </h3>
              <p className="text-gray-700 mb-5">{selectedArea.description}</p>
              <button className="flex items-center gap-2 text-blue-900 font-semibold hover:underline">
                VER MÁS
                <span className="bg-yellow-400 p-1 rounded-full text-black">
                  →
                </span>
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={selectedArea.image}
                alt={selectedArea.subtitle}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}