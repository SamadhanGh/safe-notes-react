import React from "react";
import Avatar from "@mui/material/Avatar";
import { motion } from "framer-motion";

const TestimonialItem = ({ title, text, name, status, imgurl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200
                 flex flex-col p-6 shadow-md rounded-lg border border-gray-300
                 dark:border-gray-600 hover:shadow-lg hover:shadow-indigo-100
                 dark:hover:shadow-indigo-500 transition-all duration-300"
    >
      <h1 className="text-2xl font-bold pb-4 text-indigo-400 dark:text-indigo-300">
        {title}
      </h1>

      <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>

      <div className="pt-5 flex gap-3 items-center">
        <Avatar alt={name} src={imgurl} />
        <div className="flex flex-col">
          <span className="font-semibold text-indigo-500 dark:text-indigo-300">{name}</span>
          <span className="-mt-1 text-gray-500 dark:text-gray-400">{status}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialItem;
