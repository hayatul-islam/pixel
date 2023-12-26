import React from "react";
import { BsDot } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import photo_1 from "../assets/img/featured.png";
import user from "../assets/img/user-1.png";

const Featured = () => {
  return (
    <div className="container space-y-2 pb-[32px] lg:pb-[60px]">
      <h2 className="text-[20px] md:text-[32px] font-semibold text-black">
        Featured savings
      </h2>
      <div className="grid lg:grid-cols-[40%_60%]  gap-4 items-center">
        <div className="">
          <img className="w-full" src={photo_1} alt="" />
        </div>
        <div className="space-y-3 grid  h-full">
          <div>
            <h2 className="text-[20px] md:text-[32px] font-semibold">
              Turn used gear into new possibilities
            </h2>
            <p className="max-w-[790px] w-full">
              We offer a reliable platform for buying and selling used
              photography gear. Whether you're a beginner looking for affordable
              equipment or a professional photographer in search of high-end
              gear at a discounted price, we've got you covered.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[20px] font-medium">Top sellers this month</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {[0, 1, 2]?.map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex gap-2 ">
                    <img
                      className="rounded w-[53px] h-[53px] md:h-[75px] md:w-[75px]"
                      src={user}
                      alt=""
                    />
                    <div className="w-full">
                      <div className="flex justify-between max-w-[600px] w-full">
                        <h4 className="font-medium">Tom Smith</h4>
                        <p className="gap-2 items-center flex md:hidden">
                          <FaCheck className="text-primary" />
                          <span className="text-dark-gary">PIXEL Verified</span>
                        </p>
                      </div>
                      <p className="text-[14px]">Handmade Accessories</p>
                      <p className=" gap-2 items-center hidden md:flex">
                        <FaCheck className="text-primary" />
                        <span className="text-dark-gary">PIXEL Verified</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-1 pl-[53px] md:pl-0">
                    <li className="text-[14px] flex gap-1 text-dark-gary">
                      <BsDot size={24} />
                      Camera Bags
                    </li>
                    <li className="text-[14px] flex gap-1 text-dark-gary">
                      <BsDot size={24} />
                      Grips & Rigs
                    </li>
                    <li className="text-[14px] flex gap-1 text-dark-gary">
                      <BsDot size={24} />
                      Professional Straps
                    </li>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-6">
            <button className="w-full md:w-[150px] h-[44px] rounded font-medium bg-primary text-white">
              Buy
            </button>
            <button className="w-full md:w-[150px] h-[44px] rounded border font-medium text-dark-gary">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
