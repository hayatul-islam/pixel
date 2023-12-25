import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";

const HeaderTop = () => {
  return (
    <div className="flex justify-between items-center">
      <svg
        width="116"
        height="30"
        viewBox="0 0 116 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[30px]"
      >
        <path
          d="M82.7872 7.5H90.5464C91.7377 7.5 92.7005 6.52868 92.7005 5.32673V0H72.874V7.5H82.7872Z"
          fill="#FCF6F6"
        />
        <path
          d="M21.4002 2.79864C19.4528 0.931401 16.6612 0 13.0213 0H0V7.54435H12.1596C14.0895 7.54435 15.0567 8.46245 15.0567 10.2986C15.0567 12.1348 14.0895 13.0529 12.1596 13.0529H0V30.0044H9.32414V21.4089C9.32414 20.89 9.74177 20.4687 10.2561 20.4687H13.0213C15.4303 20.4687 17.4789 20.0163 19.1758 19.1115C20.8683 18.2067 22.152 16.987 23.018 15.448C23.884 13.9089 24.3192 12.1925 24.3192 10.2986C24.3192 7.16292 23.3477 4.66144 21.4002 2.79864Z"
          fill="#FCF6F6"
        />
        <path
          d="M27.2603 0H36.5844V9.2741C36.5844 10.3297 35.7359 11.1857 34.6897 11.1857H29.1594C28.1131 11.1857 27.2647 10.3297 27.2647 9.2741V0H27.2603Z"
          fill="#FCF6F6"
        />
        <path
          d="M30.5529 11.9485H33.2917C35.1073 11.9485 36.5844 13.4387 36.5844 15.2705V29.9999H27.2603V15.2705C27.2603 13.4387 28.7373 11.9485 30.5529 11.9485Z"
          fill="#FCF6F6"
        />
        <path
          d="M60.9169 15.1685L70.0168 0H59.9629L40.8047 30H50.863L55.1536 22.2028L60.319 30H70.7729L60.9169 15.1685Z"
          fill="#FCF6F6"
        />
        <path
          d="M50.0103 0H39.02L48.1551 11.372C48.7574 12.1215 50.3444 12.8578 51.2983 11.5849L54.0943 7.50443C54.5515 6.52425 54.6833 5.65494 53.8745 4.67918L50.0103 0Z"
          fill="#FCF6F6"
        />
        <path
          d="M72.874 30H92.7005V24.5269C92.7005 23.4092 91.7993 22.5 90.6914 22.5H72.874V30Z"
          fill="#FCF6F6"
        />
        <path
          d="M72.874 18.2644H89.3682C90.5112 18.2644 91.4388 17.3286 91.4388 16.1754V11.1858H72.874V18.2644Z"
          fill="#FCF6F6"
        />
        <path d="M105.551 0H96.2266V30H105.41L105.551 0Z" fill="#FCF6F6" />
        <path
          d="M116 22.8813H109.78C108.689 22.8813 107.806 23.7728 107.806 24.8728V29.9999H116V22.8813Z"
          fill="#FCF6F6"
        />
      </svg>
      <div className="flex gap-4 items-center">
        <RiUser3Line className="text-primary w-[24px] h-[24px]" />
        <FiShoppingCart className="text-primary w-[24px] h-[24px]" />
        <MdOutlineSearch className="text-primary w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default HeaderTop;
