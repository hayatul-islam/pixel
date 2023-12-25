import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../constants/products";
import Product from "./Product";

const Products = () => {
  return (
    <div className="container py-[60px]">
      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={0}
        style={{ display: "grid" }}
      >
        {products?.map((product, i) => (
          <SwiperSlide key={i} className="group">
            <Product product={product} i={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
