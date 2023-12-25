import React from "react";
import { highlightProducts } from "../constants/highlightProducts";
import HighlightProduct from "./HighlightProduct";

const HighlightProducts = () => {
  return (
    <div className="container  py-[32px] lg:py-[60px]">
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4">
        {highlightProducts?.slice(0, 3)?.map((product, i) => (
          <HighlightProduct product={product} i={i} />
        ))}
      </div>
      <div className="md:hidden grid grid-cols-2 md:grid-cols-3 gap-4">
        {highlightProducts?.map((product, i) => (
          <HighlightProduct product={product} i={i} />
        ))}
      </div>
    </div>
  );
};

export default HighlightProducts;
