"use client";
import { useState } from "react";
import Footer from "../../Components/Footer";
// import Pebcall from "../pebcall/page";
import Pebheader from "../../Components/Pebheader"
import PebCallP from "../../Components/PebCallP";
// Product interface
interface Product {
  title: string;
  img: string;
}

// ProductCard props interface
interface ProductCardProps {
  product: Product;
  index: number;
  setActiveProductIndex: (index: number) => void;
  activeProductIndex: number | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  setActiveProductIndex,
  activeProductIndex,
}) => (
  <div
    key={index}
    className="relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
  >
    <img
      src={product.img}
      alt={product.title}
      className="w-full h-56 object-contain bg-white"
    />
    <div
      onClick={() => setActiveProductIndex(index)}
      className={`p-4 cursor-pointer transition ${
        activeProductIndex === index ? "bg-[#ccc]" : ""
      } group-hover:bg-[#ccc]`}
    >
      <h4 className="text-lg font-semibold">{product.title}</h4>
    </div>
  </div>
);

export default function System() {
  // Tabs
  const [activeTabProducts, setActiveTabProducts] = useState<
    "standard" | "substructural"
  >("standard");
  const [activeTabSheeting, setActiveTabSheeting] = useState<
    "profile" | "color" | "materials"
  >("profile");

  // Hover/active
  const [activeProductIndex, setActiveProductIndex] = useState<number | null>(
    null
  );

  // View More states
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllSheeting, setShowAllSheeting] = useState(false);
  const [showAllAccessories, setShowAllAccessories] = useState(false);

  // DATA
  const standardProducts: Product[] = [
    { title: "Single Slope", img: "/Singleslope.JPG" },
    { title: "Roof System", img: "/roofsystem.jpg" },
    { title: "Multi-Span", img: "/system/multi.jpg" },
    { title: "Tapered Column", img: "/multi.jpg" },
    { title: "Extra Product 1", img: "/extra1.jpg" },
    { title: "Extra Product 2", img: "/extra2.jpg" },
  ];

  const substructuralProducts: Product[] = [
    { title: "Ridge", img: "/system/ridge.png" },
    { title: "Canopy", img: "/system/canopy.jpg" },
    { title: "Crane", img: "/system/crane.jpg" }
  ];

  const profileSheeting: Product[] = [
    { title: "LokSeam", img: "/profiles/LokSeam.jpg" },
    { title: "PebDek", img: "/profiles/PebDek.jpg" },
    { title: "PebLiner", img: "/profiles/PebLiner.jpg" },
    { title: "PebSeam128", img: "/profiles/PebSeam128.jpg" },
    { title: "PebWall", img: "/profiles/PebWall.png" },
  ];

  const color: Product[] = [
    { title: "Blue Steel", img: "/colour/Alumin.jpg" },
    { title: "Red Steel", img: "/colour/Blue-Tooth.jpg" },
    { title: "Green Steel", img: "/colour/Green-Tea.jpg" },
    { title: "Opal Green", img: "/colour/Opal-Green.jpg" },
    { title: "White Cream", img: "/colour/White Cream.jpg" },
  ];

  const materials: Product[] = [
    { title: "Alupeb-Pebsteel", img: "/material/Alupeb-Pebsteel.jpg" },
    { title: "GalvaPeb™", img: "/materials/GalvaPeb.jpg" },
    { title: "Hyper180®", img: "/materials/Hyper180.jpg" },
    { title: "PebLeed™", img: "/materials/PebLeed.jpg" },
  ];

  const accessories: Product[] = [
    {
      title: "Bolts & Sheeting fasteners",
      img: "/Accessories/Bolts & Sheeting fasteners.jpg",
    },
    {
      title: "VentilatorGable trim & Corner trim",
      img: "/Accessories/Gable trim & Corner trim.jpg",
    },
    { title: "Gutter & Downspout", img: "/Accessories/Gutter & Downspout.jpg" },
    { title: "Louver", img: "/Accessories/Louver.jpg" },
  ];

  // Switch based on tabs
  const productList =
    activeTabProducts === "standard" ? standardProducts : substructuralProducts;
  const sheetingList =
    activeTabSheeting === "profile"
      ? profileSheeting
      : activeTabSheeting === "color"
      ? color
      : materials;

  return (
    <>
    <Pebheader/>
      <section>
        {/* Hero */}
        <div className="relative w-full mb-6">
          <img
            src="/system/stell.jpg"
            alt="Hero Image"
            className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold bg-black/50 px-4 py-2 rounded">
              Our Complete Solutions
            </h1>
          </div>
        </div>

        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col">
            <img
              src="/system/building.png"
              alt="Structural Steel"
              className="rounded-lg mx-auto w-full h-56 object-cover"
            />
            <h2 className="mt-4 text-lg sm:text-xl font-semibold">
              Structural Steel
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 flex-grow">
              Pebsteel utilizes Structural Steel (S.T.S) for complex and
              large-scale projects, including skyscrapers, airport terminals,
              and oil and gas facilities, among others.
            </p>
            <a
              href="#"
              className="mt-4 inline-block px-5 py-2 bg-[#000080] text-white rounded hover:opacity-90"
            >
              Explore More
            </a>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col">
            <img
              src="/system/steelbuild.jpg"
              alt="Pre-Engineered Buildings"
              className="rounded-lg mx-auto w-full h-56 object-cover"
            />
            <h2 className="mt-4 text-lg sm:text-xl font-semibold">
              Pre-Engineered Buildings
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 flex-grow">
              Pre-engineered Buildings (PEB), also known as Prefabricated Steel
              Buildings, are widely used for factories, warehouses, hangars, and
              more. Their flexible design allows us to optimize functionality,
              enhance aesthetics, and improve the end-user experience.
            </p>
            <a
              href="#"
              className="mt-4 inline-block px-5 py-2 bg-[#000080] text-white rounded hover:opacity-90"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Products</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setActiveTabProducts("standard")}
                className={`${
                  activeTabProducts === "standard"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Standard Framing System
              </button>
              <button
                onClick={() => setActiveTabProducts("substructural")}
                className={`${
                  activeTabProducts === "substructural"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Sub-structural Framing System
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productList
                .slice(0, showAllProducts ? productList.length : 3)
                .map((p, i) => (
                  <ProductCard
                    key={i}
                    product={p}
                    index={i}
                    setActiveProductIndex={setActiveProductIndex}
                    activeProductIndex={activeProductIndex}
                  />
                ))}
            </div>
            {productList.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllProducts(!showAllProducts)}
                  className="px-6 py-2 text-[#000080] rounded hover:opacity-90"
                >
                  {showAllProducts ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SHEETING COMPONENTS */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Sheeting Components</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setActiveTabSheeting("profile")}
                className={`${
                  activeTabSheeting === "profile"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTabSheeting("color")}
                className={`${
                  activeTabSheeting === "color"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Colors
              </button>
              <button
                onClick={() => setActiveTabSheeting("materials")}
                className={`${
                  activeTabSheeting === "materials"
                    ? "text-[#000080] font-semibold"
                    : ""
                }`}
              >
                Materials
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sheetingList
                .slice(0, showAllSheeting ? sheetingList.length : 3)
                .map((p, i) => (
                  <ProductCard
                    key={i}
                    product={p}
                    index={i}
                    setActiveProductIndex={setActiveProductIndex}
                    activeProductIndex={activeProductIndex}
                  />
                ))}
            </div>
            {sheetingList.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllSheeting(!showAllSheeting)}
                  className="px-6 py-2 text-[#000080] rounded hover:opacity-90"
                >
                  {showAllSheeting ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ACCESSORIES */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Accessories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accessories
                .slice(0, showAllAccessories ? accessories.length : 3)
                .map((p, i) => (
                  <ProductCard
                    key={i}
                    product={p}
                    index={i}
                    setActiveProductIndex={setActiveProductIndex}
                    activeProductIndex={activeProductIndex}
                  />
                ))}
            </div>
            {accessories.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllAccessories(!showAllAccessories)}
                  className="px-6 py-2 text-[#000080] rounded hover:opacity-90"
                >
                  {showAllAccessories ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <PebCallP />
      <Footer />
    </>
  );
}
