import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdMenu, MdOutlineSearch } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import logo from "../../assets/img/logo.svg";

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
        <div className="flex justify-between items-center">
          <div className="lg:hidden">
            <MdMenu className="text-white" size={28} />
          </div>
          <img className="h-[18px] lg:h-[30px] " src={logo} alt="" />
          <div className="flex gap-4 items-center">
            <RiUser3Line className="text-primary w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
            <FiShoppingCart className="text-primary w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
            <MdOutlineSearch className="text-primary w-[24px] h-[24px] hidden lg:block" />
          </div>
        </div>
        <ul className="hidden lg:flex justify-between text-white items-center uppercase font-medium text-[18px]">
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
