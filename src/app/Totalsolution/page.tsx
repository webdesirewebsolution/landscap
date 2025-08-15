// components/SolutionProvider.jsx
import Image from "next/image";

export default function Totalsolution() {
  const items = [
    {
      title: "System",
      description: "We provide solutions for Pre-Engineered Steel Buildings and Structural Steel.",
      img: "/system.jpg", 
      link: "#",
    },
    {
      title: "Service",
      description: "We stand by our customers at every stage of the building project process.",
      img: "/service.jpg", 
      link: "#",
    },
    {
      title: "Product",
      description: "Designed for sustainability and world-class quality.",
      img: "/product.jpg", 
      link: "#",
    },
  ];

  return (
    <section className="w-full py-12 mt-15 bg-[#f2f2f2]">
      <div className="max-w-6xl mx-auto px-4">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
  
  <h2 className="text-3xl font-bold md:text-4xl">
    A total solution provider
  </h2>


  <p className="text-gray-600">
    We are a solution-driven company that handles all aspects of a project from concept to
    erection, employing optimized solutions and value engineering.
  </p>
</div>


        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#f2f2f2] rounded-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-68">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover "
                />
              </div>
              <div className="p-5 flex flex-col flex-1 ">
                <h3 className="text-2xl   mb-2 md:text-3xl">{item.title}</h3>
                <p className="text-gray-600 flex-1">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-4 inline-flex items-center text-[#000080] font-medium hover:underline"
                >
                  Explore more <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
