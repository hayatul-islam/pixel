import React from "react";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../constants/products";

const Products = () => {
  return (
    <div className="container py-[60px]">
      <Swiper slidesPerView={5} loop={true} spaceBetween={30}>
        {products?.map((product, i) => (
          <SwiperSlide key={i}>
            <div className="space-y-2">
              <div>
                <img
                  style={{ height: "240px", margin: "auto" }}
                  src={product?.image}
                  alt=""
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <h4 className="text-[20px] font-medium">{product?.title}</h4>
                  <p className="flex items-center gap-2">
                    <FaStar color="red" />
                    <span className="text-dark-gray">{product?.rate}</span>
                  </p>
                </div>
                <p>{product?.brand}</p>
              </div>
              <ul style={{ paddingTop: "10px" }}>
                {product?.details?.map((item, i) => (
                  <li
                    style={{
                      display: "flex",
                      gap: "5px",
                      fontSize: "14px",
                      color: "#737373",
                    }}
                    key={i}
                  >
                    <BsDot className="pt-1" size={20} />
                    {item}
                  </li>
                ))}
                <li
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    fontSize: "14px",
                    color: "#737373",
                    textDecoration: "line-through",
                  }}
                >
                  ${product?.price}
                </li>
              </ul>
              <div className="flex justify-between text-black">
                <p>{product?.time}</p>
                <p className="font-medium text-[20px]">
                  ${product?.currentPrice}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
