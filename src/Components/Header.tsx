// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   Bars3Icon,
//   XMarkIcon,
//   MagnifyingGlassIcon,
//   EnvelopeIcon,
// } from "@heroicons/react/24/outline";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [language, setLanguage] = useState("EN");
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleDropdown = (name: string) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sliderHeight =
//         document.getElementById("main-slider")?.offsetHeight || 200;
//       setIsScrolled(window.scrollY > sliderHeight - 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-[#fff] shadow-md text-[#000080]"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden capitalize md:flex items-center space-x-6 font-medium relative">
//           <Link href="/" className="hover:opacity-80">
//             HOME
//           </Link>

//           {/* Industries */}
//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown("industries")}
//               className="hover:opacity-80"
//             >
//               INDUSTRIES
//             </button>
//             {openDropdown === "industries" && (
//               <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded w-64 border border-gray-100 z-50">
//                 <Link
//                   href="#"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Industry Installation
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Pre Engineered Building
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Infrastructure & Energy
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Engineering R&D
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Renewable Energy
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Real Estate
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Civil Services
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Industrial Construction
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Structural Engineering Services
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Heavy Engineering
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Mining Metals
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Other Industries
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Expertise */}
//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown("expertise")}
//               className="hover:opacity-80"
//             >
//               EXPERTISE
//             </button>
//             {openDropdown === "expertise" && (
//               <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded w-64 border border-gray-100 z-50">
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Defence Installations
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Other Services
//                 </Link>
//                 <Link
//                   href="https://staging.landsking.com/industries/"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Industry Building Solutions
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Fabrication
//                 </Link>
//                 <Link
//                   href="https://staging.landsking.com/fabrication/"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Factories Installation
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Cold Storage &amp; Warehouse
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Structure Design Services
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   HVAC Services
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link href="/projects" className="hover:opacity-80">
//             PROJECTS
//           </Link>
//           <Link href="/sectors" className="hover:opacity-80">
//             INSIGHTS
//           </Link>
//           <Link href="/media" className="hover:opacity-80">
//             MEDIA
//           </Link>
//           <Link href="/about" className="hover:opacity-80">
//             ABOUT
//           </Link>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <button>
//             <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
//           </button>
//           <button>
//             <EnvelopeIcon className="h-6 w-6 hover:opacity-80" />
//           </button>
//           <button
//             onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
//             className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
//           >
//             {language}
//           </button>

//           <Link
//             href="/contact"
//             className="bg-[#000080] text-white px-4 py-2 rounded hover:bg-black font-semibold"
//           >
//             CONTACT US
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//           {menuOpen ? (
//             <XMarkIcon className="h-7 w-7" />
//           ) : (
//             <Bars3Icon className="h-7 w-7" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {/* Mobile Menu */}
// {/* Mobile Menu */}
// {menuOpen && (
//   <nav className="md:hidden bg-white text-black px-4 py-4 shadow-lg max-h-screen overflow-auto">
//     <Link href="/" className="block py-2 border-b border-gray-200">
//       HOME
//     </Link>

//     {/* Industries collapsible */}
//     <div className="border-b border-gray-200 py-2">
//       <button
//         onClick={() => toggleDropdown("industries")}
//         className="w-full text-left font-semibold flex justify-between items-center"
//       >
//         INDUSTRIES
//         <span>{openDropdown === "industries" ? "−" : "+"}</span>
//       </button>

//       {openDropdown === "industries" && (
//         <ul className="pl-4 mt-2 space-y-1">
//           <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//               Industry Installation
//             </Link>
//           </li>
//            <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//               Pre Engineered Building
//             </Link>
//           </li> <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//              Infrastructure & Energy
//             </Link>
//           </li> <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//               Engineering R&D
//             </Link>
//           </li> <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//                Renewable Energy
//             </Link>
//           </li> 
//           <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//              Real State
//             </Link>
//           </li>
//             <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//               Civil Services
//             </Link>
//           </li>  <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//              Industrial Construction
//             </Link>
//           </li> 
//            <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//               Structural Engineering Services
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Heavy Engineering
//                 </Link>
//           </li>
//           <li>
//              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Mining Metals
//                 </Link>
               
//           </li>
//           <li> <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Other Industries
//                 </Link></li>
          
         
          
//         </ul>
//       )}
//     </div>

//     {/* Expertise collapsible */}
//     <div className="border-b border-gray-200 py-2">
//       <button
//         onClick={() => toggleDropdown("expertise")}
//         className="w-full text-left font-semibold flex justify-between items-center"
//       >
//         EXPERTISE
//         <span>{openDropdown === "expertise" ? "−" : "+"}</span>
//       </button>

//       {openDropdown === "expertise" && (
//         <ul className="pl-4 mt-2 space-y-1">
//           <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//               Defence Installations
//             </Link>
//           </li>
//           <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Other Services
//                 </Link></li>
//                 <li><Link
//                   href="https://staging.landsking.com/industries/"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Industry Building Solutions
//                 </Link></li>
//                  <li> <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Fabrication
//                 </Link></li>
//                   <li> <Link
//                   href="https://staging.landsking.com/fabrication/"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Factories Installation
//                 </Link>
//                 </li>
//                    <li> 
//                     <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Cold Storage &amp; Warehouse
//                 </Link>
               
               
//                  </li>
//                     <li>  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Structure Design Services
//                 </Link></li>

//          <li>
//             <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
//               HVAC Services
//             </Link>
//           </li>
          
//         </ul>
//       )}
//     </div>

//     <Link href="/projects" className="block py-2 border-b border-gray-200">
//       PROJECTS
//     </Link>
//     <Link href="/sectors" className="block py-2 border-b border-gray-200">
//       INSIGHTS
//     </Link>
//     <Link href="/media" className="block py-2 border-b border-gray-200">
//       MEDIA
//     </Link>
//     <Link href="/about" className="block py-2 border-b border-gray-200">
//       ABOUT
//     </Link>

//     <div className="flex items-center space-x-4 pt-4 border-t">
//       <button>
//         <MagnifyingGlassIcon className="h-6 w-6" />
//       </button>
//       <button>
//         <EnvelopeIcon className="h-6 w-6" />
//       </button>
//       <button
//         onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
//         className="px-2 py-1 border rounded text-sm"
//       >
//         {language}
//       </button>
//     </div>

//     <Link
//       href="/contact"
//       className="block bg-[#000080] text-white px-4 py-2 rounded font-semibold mt-3"
//     >
//       CONTACT US
//     </Link>
//   </nav>
// )}


    
//     </header>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState("EN");

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fff] shadow-md text-[#000080] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden capitalize md:flex items-center space-x-6 font-medium relative">
          <Link href="/" className="hover:opacity-80">
            HOME
          </Link>

          {/* Industries */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("industries")}
              className="hover:opacity-80"
            >
              INDUSTRIES
            </button>
            {openDropdown === "industries" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded w-64 border border-gray-100 z-50">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Industry Installation
                </Link>
                
            <Link href="/Pebbanner" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Pre Engineered Building
            </Link>
          
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
             Infrastructure & Energy
            </Link>
          
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Engineering R&D
            </Link>
         
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
               Renewable Energy
            </Link>
          <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
             Real State
            </Link>
          
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Civil Services
            </Link>
          
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
             Industrial Construction
            </Link>
          
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Structural Engineering Services
            </Link>
         
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Heavy Engineering
                </Link>
          
             <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Mining Metals
                </Link>
               
           <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Other Industries
                </Link>
              </div>
            )}
          </div>

          {/* Expertise */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("expertise")}
              className="hover:opacity-80"
            >
              EXPERTISE
            </button>
            {openDropdown === "expertise" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded w-64 border border-gray-100 z-50">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Defence Installations
                </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Other Services
                </Link>
               <Link
                  href="https://staging.landsking.com/industries/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Industry Building Solutions
                </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Fabrication
                </Link><Link
                  href="https://staging.landsking.com/fabrication/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Factories Installation
                </Link>
                
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Cold Storage &amp; Warehouse
                </Link>
               
               
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Structure Design Services
                </Link>

         
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              HVAC Services
            </Link>
          
              </div>
            )}
          </div>

          <Link href="/projects" className="hover:opacity-80">
            PROJECTS
          </Link>
          <Link href="/sectors" className="hover:opacity-80">
            INSIGHTS
          </Link>
          <Link href="/media" className="hover:opacity-80">
            MEDIA
          </Link>
          <Link href="/about" className="hover:opacity-80">
            ABOUT
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button>
            <EnvelopeIcon className="h-6 w-6 hover:opacity-80" />
          </button>
          <button
            onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
          >
            {language}
          </button>
          <Link
            href="/contact"
            className="bg-[#000080] text-white px-4 py-2 rounded hover:bg-black font-semibold"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <nav className="md:hidden bg-white text-black px-4 py-4 shadow-lg max-h-screen overflow-auto">
    <Link href="/" className="block py-2 border-b border-gray-200">
      HOME
    </Link>

    {/* Industries collapsible */}
    <div className="border-b border-gray-200 py-2">
      <button
        onClick={() => toggleDropdown("industries")}
        className="w-full text-left font-semibold flex justify-between items-center"
      >
        INDUSTRIES
        <span>{openDropdown === "industries" ? "−" : "+"}</span>
      </button>

      {openDropdown === "industries" && (
        <ul className="pl-4 mt-2 space-y-1">
          <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Industry Installation
            </Link>
          </li>
           <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Pre Engineered Building
            </Link>
          </li> <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
             Infrastructure & Energy
            </Link>
          </li> <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Engineering R&D
            </Link>
          </li> <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
               Renewable Energy
            </Link>
          </li> 
          <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
             Real State
            </Link>
          </li>
            <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Civil Services
            </Link>
          </li>  <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
             Industrial Construction
            </Link>
          </li> 
           <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Structural Engineering Services
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Heavy Engineering
                </Link>
          </li>
          <li>
             <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Mining Metals
                </Link>
               
          </li>
          <li> <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Other Industries
                </Link></li>
          
         
          
        </ul>
      )}
    </div>

    {/* Expertise collapsible */}
    <div className="border-b border-gray-200 py-2">
      <button
        onClick={() => toggleDropdown("expertise")}
        className="w-full text-left font-semibold flex justify-between items-center"
      >
        EXPERTISE
        <span>{openDropdown === "expertise" ? "−" : "+"}</span>
      </button>

      {openDropdown === "expertise" && (
        <ul className="pl-4 mt-2 space-y-1">
          <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              Defence Installations
            </Link>
          </li>
          <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Other Services
                </Link></li>
                <li><Link
                  href="https://staging.landsking.com/industries/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Industry Building Solutions
                </Link></li>
                 <li> <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Fabrication
                </Link></li>
                  <li> <Link
                  href="https://staging.landsking.com/fabrication/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Factories Installation
                </Link>
                </li>
                   <li> 
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Cold Storage &amp; Warehouse
                </Link>
               
               
                 </li>
                    <li>  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Structure Design Services
                </Link></li>

         <li>
            <Link href="#" className="block hover:bg-gray-100 px-2 py-1 rounded">
              HVAC Services
            </Link>
          </li>
          
        </ul>
      )}
    </div>

    <Link href="/projects" className="block py-2 border-b border-gray-200">
      PROJECTS
    </Link>
    <Link href="/sectors" className="block py-2 border-b border-gray-200">
      INSIGHTS
    </Link>
    <Link href="/media" className="block py-2 border-b border-gray-200">
      MEDIA
    </Link>
    <Link href="/about" className="block py-2 border-b border-gray-200">
      ABOUT
    </Link>

    <div className="flex items-center space-x-4 pt-4 border-t">
      <button>
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
      <button>
        <EnvelopeIcon className="h-6 w-6" />
      </button>
      <button
        onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
        className="px-2 py-1 border rounded text-sm"
      >
        {language}
      </button>
    </div>

    <Link
      href="/contact"
      className="block bg-[#000080] text-white px-4 py-2 rounded font-semibold mt-3"
    >
      CONTACT US
    </Link>
  </nav>
)}

    </header>
  );
}
