import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdAccessTime, MdCompareArrows } from "react-icons/md";
import { products } from "../constants/products";

const Product = ({ product, i }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (totalQuantity > 1) {
      setTotalQuantity(totalQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    setTotalQuantity(totalQuantity + 1);
  };

  return (
    <div
      style={{
        borderRight: products?.length > i + 1 && "1px solid #B4B4B4",
        padding: "0 20px",
      }}
      className="space-y-2 pt-1"
    >
      <div className="relative">
        <img
          style={{ height: "240px", margin: "auto" }}
          src={product?.image}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
            className=" gap-2"
          >
            <FaRegHeart className="text-dark-gary" />
            <MdCompareArrows className="text-dark-gary" size={18} />
          </div>
        </div>
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
      <ul style={{ paddingTop: "10px" }} className="group-hover:hidden">
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
      <div className="group-hover:block hidden space-y-3 transform duration-500 ">
        <div className="flex border rounded-full border-gray">
          <button
            onClick={() => {
              setQuantity(1);
              setTotalQuantity(1);
            }}
            className={`${
              quantity === 1 && "bg-primary text-white"
            }  w-full rounded-full py-3 px-4`}
          >
            1 Len
          </button>
          <button
            onClick={() => {
              setQuantity(2);
              setTotalQuantity(2);
            }}
            className={`${
              quantity === 2 && "bg-primary text-white"
            }  w-full rounded-full py-3 px-4`}
          >
            2 Lens Kit
          </button>
        </div>
        <div className="flex items-center border rounded-full border-gray">
          <button
            onClick={decreaseQuantity}
            className={` bg-primary text-white w-[42px] rounded-l-full py-3 px-4`}
          >
            -
          </button>
          <p className="w-full text-center">{totalQuantity}</p>
          <button
            onClick={increaseQuantity}
            className={` bg-primary text-white w-[42px] rounded-r-full py-3 px-4`}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between text-black">
        <p className="flex items-center gap-2">
          <MdAccessTime className="text-primary font-medium" />{" "}
          <span>{product?.time}</span>
        </p>
        <p className="font-medium text-[20px]">${product?.currentPrice}</p>
      </div>
    </div>
  );
};

export default Product;
