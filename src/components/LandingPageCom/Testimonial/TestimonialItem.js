import React from "react";
import Avatar from "@mui/material/Avatar";

const TestimonialItem = ({ title, text, name, status, imgurl }) => {
  return (
    <div className="bg-white text-gray-700 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-semibold text-pink-700 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Avatar alt={name} src={imgurl} />
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
