"use client";
import { useEffect, useState } from "react";

interface CounterItem {
  value: number;
  label: string;
  suffix?: string; // like +, M, etc.
}

const counters: CounterItem[] = [
  { value: 1.2, label: "Sq. Ft. Area Delivered", suffix: "M" },
  { value: 55, label: "Global Clients", suffix: "+" },
  { value: 200, label: "Project Executed", suffix: "+" },
  { value: 5, label: "JV & Alliance Partners", suffix: "+" },
  { value: 7, label: "Years Manufacturing Experience", suffix: "+" },
];

export default function Counter() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((counter, i) => {
      const target = counter.value;
      const duration = 1500; // ms
      const step = target / (duration / 30);

      return setInterval(() => {
        setCounts(prev => {
          const updated = [...prev];
          if (updated[i] < target) {
            updated[i] = parseFloat((updated[i] + step).toFixed(2));
          }
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-8">
        Leading the charge in industries that are shaping the future with Purposeful Agile Innovation.
      </h2>

      <div className="bg-[#061b49] rounded-lg flex flex-col md:flex-row justify-around items-center py-8 px-4 gap-8">
        {counters.map((counter, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl font-bold text-teal-400">
              {counts[i] >= counter.value
                ? `${counter.value}${counter.suffix || ""}`
                : `${counts[i].toFixed(2)}${counter.suffix || ""}`}
            </p>
            <p className="text-white text-sm mt-2">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
