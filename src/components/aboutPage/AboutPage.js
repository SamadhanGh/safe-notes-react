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
    <div className="p-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-900 min-h-screen">
      <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-semibold mb-6 text-blue-600 text-center">About Us</h1>
        <p className="mb-6 text-md text-gray-600 text-center">
          Welcome to Safe Note, your trusted companion for secure and private note-taking.
          We ensure that your thoughts and ideas are protected with the highest level of security.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
          <li>Add an extra layer of security with two-factor authentication.</li>
          <li>Your notes are encrypted from the moment you create them.</li>
          <li>Access your notes from anywhere with the assurance of security.</li>
          <li>Our app is designed to be intuitive and user-friendly.</li>
        </ul>
        <div className="flex justify-center space-x-4 mt-8">
          <Link className="text-gray-600 hover:text-blue-500 p-3 transition" to="/">
            <FaFacebookF size={20} />
          </Link>
          <Link className="text-gray-600 hover:text-blue-500 p-3 transition" to="/">
            <FaTwitter size={20} />
          </Link>
          <Link className="text-gray-600 hover:text-blue-500 p-3 transition" to="/">
            <FaLinkedinIn size={20} />
          </Link>
          <Link className="text-gray-600 hover:text-blue-500 p-3 transition" to="/">
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
