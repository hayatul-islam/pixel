import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { highlightProducts } from "../constants/highlightProducts";

const HighlightProducts = () => {
  return (
    <div className="container grid grid-cols-3 gap-4 py-[60px]">
      {highlightProducts?.map((product, i) => (
        <div key={i} className="relative rounded">
          <img src={product?.image} alt="" className="rounded" />
          <div className="absolute bottom-0 p-6 w-full">
            <div>
              <h3 className="text-white text-[32px] font-semibold">
                {product?.title}
              </h3>
              <div className="flex justify-between items-center w-full">
                <p className="text-gray">{product?.description}</p>
                <FaArrowRight className="text-primary w-[20px] h-[20px] font-bold" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightProducts;
