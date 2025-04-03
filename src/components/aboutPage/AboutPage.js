import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
      <div className="md:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-cyan-400">About Us</h1>
        <p className="mb-6 text-lg leading-relaxed">
          Welcome to Safe Note, your trusted companion for secure and private note-taking. We believe in providing a safe space where your thoughts and ideas are protected with the highest level of security. Our mission is to ensure that your notes are always accessible to you and only you. With state-of-the-art encryption and user-friendly features, Safe Note is designed to keep your information confidential and secure.
        </p>
        <ul className="list-disc list-inside mb-6 text-base space-y-3">
          <li>Add an extra layer of security with two-factor authentication.</li>
          <li>Your notes are encrypted from the moment you create them.</li>
          <li>Access your notes from anywhere with the assurance of security.</li>
          <li>Our app is designed to be intuitive and user-friendly.</li>
        </ul>
        <div className="flex space-x-4 mt-10">
          <Link className="text-gray-100 hover:text-cyan-400 rounded-full p-3 bg-gray-700 hover:bg-cyan-600 transition" to="/">
            <FaFacebookF size={20} />
          </Link>
          <Link className="text-gray-100 hover:text-cyan-400 rounded-full p-3 bg-gray-700 hover:bg-cyan-600 transition" to="/">
            <FaTwitter size={20} />
          </Link>
          <Link className="text-gray-100 hover:text-cyan-400 rounded-full p-3 bg-gray-700 hover:bg-cyan-600 transition" to="/">
            <FaLinkedinIn size={20} />
          </Link>
          <Link className="text-gray-100 hover:text-cyan-400 rounded-full p-3 bg-gray-700 hover:bg-cyan-600 transition" to="/">
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
