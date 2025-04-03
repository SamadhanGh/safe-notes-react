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
    <div className="p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
      <div className="md:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-cyan-400">Contact Us</h1>
        <p className="mb-6 text-lg leading-relaxed">
          We're here to help! Feel free to reach out with any questions or feedback.
        </p>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-lg text-gray-100">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-lg text-gray-100">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-lg text-gray-100">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
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

export default ContactPage;
