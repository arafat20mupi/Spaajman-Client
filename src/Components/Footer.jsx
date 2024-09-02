 
 
import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex items-center justify-between py-5 border-b border-gray-200">
          <p className="text-4xl font-semibold text-indigo-600">Spaajman</p>
          <div className="flex space-x-4 text-gray-700">
            <a href="#" target="_blank" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-indigo-600 transition-colors duration-300" />
            </a>
            <a href="#" target="_blank" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-indigo-600 transition-colors duration-300" />
            </a>
            <a href="#" target="_blank" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-indigo-600 transition-colors duration-300" />
            </a>
            <a href="#" target="_blank" aria-label="Whatsapp">
              <FaWhatsapp className="text-2xl hover:text-indigo-600 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 py-10">
          <ul className="space-y-3">
            <li className="text-xl font-semibold text-gray-800">Services</li>
            <li className="text-gray-600">Spa Treatments</li>
            <li className="text-gray-600">Salon Services</li>
            <li className="text-gray-600">Massage Therapy</li>
          </ul>
          <ul className="space-y-3">
            <li className="text-xl font-semibold text-gray-800">Company</li>
            <li className="text-gray-600">About Us</li>
            <li className="text-gray-600">Careers</li>
            <li className="text-gray-600">Press</li>
          </ul>
          <ul className="space-y-3">
            <li className="text-xl font-semibold text-gray-800">Helpful Links</li>
            <li className="text-gray-600">FAQs</li>
            <li className="text-gray-600">Privacy Policy</li>
            <li className="text-gray-600">Terms of Service</li>
          </ul>
          <ul className="space-y-3">
            <li className="text-xl font-semibold text-gray-800">Contact Info</li>
            <li className="text-gray-600">123 Spa Avenue</li>
            <li className="text-gray-600">City, State, ZIP</li>
            <li className="text-gray-600">Phone: (123) 456-7890</li>
          </ul>
        </div>

        {/* Bottom Section */}
        <p className="text-center text-gray-600 py-5    ">
          © 2024 Spaajman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
