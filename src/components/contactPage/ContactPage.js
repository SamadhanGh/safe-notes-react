import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="p-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-900 min-h-screen">
      <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-semibold mb-6 text-blue-600 text-center">Contact Us</h1>
        <p className="mb-6 text-md text-gray-600 text-center">
          We're here to help! Feel free to reach out with any questions or feedback.
        </p>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-md text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-md text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-md text-gray-700">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
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

export default ContactPage;
