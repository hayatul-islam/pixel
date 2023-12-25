import React from "react";
import HeaderTop from "./HeaderTop";

const Header = () => {
  const menu = [
    "brands",
    "cameras",
    "lenses",
    "accessories",
    "studio",
    "extreme",
    "used",
  ];

  return (
    <div className="bg-black">
      <div className="container py-7 space-y-10">
        <HeaderTop />
        <ul className="flex justify-between text-white items-center uppercase font-medium text-[18px]">
          {menu?.map((item, i) => (
            <li className="cursor-pointer hover:text-primary" to="">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
