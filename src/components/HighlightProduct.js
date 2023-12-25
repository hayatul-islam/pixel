import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HighlightProduct = ({ product }) => {
  return (
    <div className="relative rounded space-y-2 md:space-y-0">
      <img src={product?.image} alt="" className="rounded" />
      <div className="md:absolute bottom-0 md:p-6 w-full">
        <div>
          <h3 className="text-black flex justify-between items-center md:text-white text-[20px] lg:text-[32px] font-semibold">
            {product?.title}
            <FaArrowRight className="text-primary w-[14px] h-[14px] md:w-[20px] md:h-[20px] font-bold md:hidden" />
          </h3>
          <div className="hidden md:flex justify-between items-center w-full">
            <p className="text-gray ">{product?.description}</p>
            <FaArrowRight className="text-primary w-[20px] h-[20px] font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightProduct;
