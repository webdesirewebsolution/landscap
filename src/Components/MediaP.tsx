// components/NewsSection.jsx
import Image from "next/image";

export default function MediaP() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section - Media Highlights */}
        <div>
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            Latest News Highlights
          </h2>
          <h3 className="text-2xl font-bold border-l-4 border-[#000080] pl-2 mb-6">
            MEDIA HIGHLIGHTS
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border-[#bfbbbb] rounded-lg shadow-sm p-4 hover:shadow-lg transition">
              <Image
                src="/Infrastructure.jpg"
                alt="The Hindu"
                width={350}
                height={130}
                className="mb-4"
              />
              <p className="text-sm text-gray-700 font-semibold">
                Landsking Infra is one of India’s Fastest Growing Company as an Industrial Solution Provider, It works on engineering, procurement, construction (EPC) and maintenance companies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-[#bfbbbb] rounded-lg shadow-sm p-4 hover:shadow-lg transition">
              <Image
                src="/PEB.jpg"
                alt="IPO"
                width={350}
                height={130}
                className="mb-4"
              />
              <p className="text-sm text-gray-700 font-semibold">
                We are a solution-driven company that handles all aspects of a project from concept to erection, employing optimized solutions and value engineering.
              </p>
            </div>
          </div>

          <button className="mt-6 bg-[#000080] hover:bg-[#272727] text-white font-semibold px-4 py-2 rounded">
            DISCOVER ALL
          </button>
        </div>

        {/* Right Section - EPACK Update */}
        <div>
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            Latest News and Update
          </h2>
          <h3 className="text-2xl font-bold border-l-4 border-[#000080] pl-2 mb-6">
            EPACK UPDATE
          </h3>

          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <Image
                src="/PEB.jpg"
                alt="Event 1"
                width={80}
                height={60}
                className="rounded"
              />
              <div>
                <p className="text-sm text-gray-500">Jun 26, 2025</p>
                <p className="text-gray-800 font-semibold">
                  EPACK Prefab Participated In India Warehousing Show 2025 –
                  Yashobhoomi, Dwarka
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <Image
                src="/PEB.jpg"
                alt="Event 2"
                width={80}
                height={60}
                className="rounded"
              />
              <div>
                <p className="text-sm text-gray-500">Jun 17, 2025</p>
                <p className="text-gray-800 font-semibold">
                  EPACK Prefab Recognised at ISDA’s IIN Awards 2025
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <Image
                src="/PEB.jpg"
                alt="Event 3"
                width={80}
                height={60}
                className="rounded"
              />
              <div>
                <p className="text-sm text-gray-500">Apr 26, 2025</p>
                <p className="text-gray-800 font-semibold">
                  EPACK Prefab Participated In Roof India Exhibition, Mumbai
                  2025–26
                </p>
              </div>
            </li>
          </ul>

          <button className="mt-6 bg-[#000080] hover:bg-[#272727] text-white font-semibold px-4 py-2 rounded">
            DISCOVER ALL
          </button>
        </div>
      </div>
    </section>
  );
}
