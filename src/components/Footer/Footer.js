import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF size={18} />, url: "https://facebook.com" },
  { icon: <FaLinkedinIn size={18} />, url: "https://linkedin.com" },
  { icon: <FaTwitter size={18} />, url: "https://twitter.com" },
  { icon: <FaInstagram size={18} />, url: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-white border-t border-gray-700 shadow-inner">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
        
        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-6 text-sm justify-center lg:justify-start">
          {["About Us", "Services", "Contact", "Privacy Policy"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase().replace(/\s/g, "")}`} className="hover:text-gray-400">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-gray-400 text-xs mt-4 lg:mt-0">
          &copy; {new Date().getFullYear()} SafeNote | All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 lg:mt-0">
          {socialLinks.map(({ icon, url }, index) => (
            <Link key={index} to={url} className="text-gray-400 hover:text-blue-500">
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
