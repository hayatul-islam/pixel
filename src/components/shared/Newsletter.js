import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-white font-medium text-center md:text-left">
        <span className="hidden md:block">
          {" "}
          Join our newsletter for exclusive offers!
        </span>
        <span className="md:hidden "> Join our newsletter!</span>
      </h3>
      <div className="md:flex items-center gap-2 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Name"
          className="w-full md:w-auto py-2 px-4 rounded focus:outline-none bg-[#E9E9E9]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full md:w-auto  py-2 px-4 rounded focus:outline-none bg-[#E9E9E9]"
        />
        <div className="flex justify-center md:hidden">
          <button className="bg-primary text-white px-6 py-2 ">SIGN UP</button>
        </div>
      </div>
      <div className="flex items-center gap-5 justify-center md:justify-start pt-4 md:pt-0">
        <FaSquareInstagram className="md:text-primary text-white" size={24} />
        <FaFacebookSquare className="md:text-primary text-white" size={24} />
        <FaTwitterSquare className="md:text-primary text-white" size={24} />
      </div>
    </div>
  );
};

export default Newsletter;
