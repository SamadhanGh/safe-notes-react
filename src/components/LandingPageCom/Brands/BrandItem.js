import React from "react";
import { motion } from "framer-motion";

const BrandItem = ({ title, text, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-6 rounded-lg shadow-md flex flex-col items-start transform hover:scale-105 transition-transform duration-300"
    >
      <div className="text-4xl text-blue-400 mb-4">
        <Icon />
      </div>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-600">{text}</p>
    </motion.div>
  );
};

export default BrandItem;
