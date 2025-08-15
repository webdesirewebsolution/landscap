import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube, 
  FaInstagram, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function Pebfooter() {
  return (
    <footer className="bg-[#000080] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-8">
          
          {/* 1 - Brand & Description */}
          <div className="md:w-1/3 space-y-4">
            <img src="/logo.png" alt="Company Logo" className="h-12" />
            <p className="text-sm leading-relaxed">
              We specialize in engineering, fabrication, and project management for a diverse range of industries, offering a total PEB solution. Established February 12, 1999 in Greater Noida, we hold ISO 9001:2015 and ISO 14001:2015 certifications, with a Pan-India presence and efficient delivery capabilities.
            </p>
            <img src="/logo.png" alt="IGBC Member" className="h-12 mt-4" />
          </div>

          {/* 2 - Links */}
          <div className="md:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white">Helpful Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Brochure Download</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Our Supply Network</a></li>
                <li><a href="#" className="hover:text-white">PEB Solutions</a></li>
                <li><a href="#" className="hover:text-white">Newsletter</a></li>
                <li><a href="#" className="hover:text-white">Investor Relations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Group Overview</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Project Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Zone-Wise Coverage</a></li>
                <li><a href="#" className="hover:text-white">Vendor Registration</a></li>
                <li><a href="#" className="hover:text-white">Our Certifications</a></li>
              </ul>
            </div>
          </div>

          {/* 3 - Contact Info */}
          <div className="md:w-1/3 space-y-4">
            <h3 className="text-white font-semibold">EPACK Prefab</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> 
                <a href="tel:+918130444466" className="hover:text-white">+91 8130 444 466</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> 
                <a href="mailto:enquiry@epack.in" className="hover:text-white">enquiry@epack.in</a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> 
                B-13, Ecotech-I Extension, Gautam Buddha Nagar, Greater Noida, Uttar Pradesh 201306, India
              </li>
            </ul>
            <div className="flex space-x-4 mt-4 text-lg">
              <a href="#" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-white"><FaYoutube /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2025 EPACK Prefab. All Rights Reserved. 
          <a href="#" className="hover:text-white mx-2">Privacy Policy</a> | 
          <a href="#" className="hover:text-white mx-2">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
