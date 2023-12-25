import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-white font-medium">
        Join our newsletter for exclusive offers!
      </h3>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Name"
          className="py-2 px-4 rounded focus:outline-none bg-[#E9E9E9]"
        />
        <input
          type="email"
          placeholder="Email"
          className="py-2 px-4 rounded focus:outline-none bg-[#E9E9E9]"
        />
      </div>
      <div className="flex items-center gap-5">
        <FaSquareInstagram className="text-primary" size={24} />
        <FaFacebookSquare className="text-primary" size={24} />
        <FaTwitterSquare className="text-primary" size={24} />
      </div>
    </div>
  );
};

export default Newsletter;
