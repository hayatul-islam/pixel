import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../constants/products";
import Product from "./Product";

const Products = () => {
  return (
    <div className="container py-[32px] lg:py-[60px]">
      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={0}
        style={{ display: "grid" }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
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
