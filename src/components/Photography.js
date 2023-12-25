import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import photo_1 from "../assets/img/photo-1.png";
import photo_2 from "../assets/img/photo-2.png";
import photo_3 from "../assets/img/photo-3.png";

const Photography = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 container items-center">
      <div className="hidden md:block">
        <img src={photo_1} alt="" />
      </div>
      <div className="space-y-3 max-w-[660px] w-full">
        <div>
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            New to photography? Let us help!
          </h2>
          <p>
            We offer a variety of written & recorded guides for all aspects of
            photography, ranging from equipment handling to artistic theory.
          </p>
        </div>
        <div className="relative">
          <input
            className="pl-8 py-2 px-4 md:w-[270px] w-full focus:outline-none"
            type="text"
            placeholder="Search guides"
          />
          <MdOutlineSearch className="text-primary absolute top-[50%] left-1 translate-y-[-50%] w-[20px] h-[20px]" />
        </div>
        <div className="space-y-3">
          <div className="grid md:flex gap-3 md:gap-6">
            <img
              className="rounded h-[138px] w-full md:w-auto"
              src={photo_2}
              alt=""
            />
            <div className="grid">
              <div>
                <h3 className="text-[20px] font-medium">Image Editing</h3>
                <p>
                  Learn the basics of Adobe Lightroom and elevate your photos to
                  a new standard.
                </p>
              </div>

              <div className="flex items-end">
                <button className="border-b flex gap-2 items-center text-gray border-gray">
                  <span>Learn more</span>
                  <FaArrowRight className="text-primary w-[16px] h-[16px] " />
                </button>
              </div>
            </div>
          </div>
          <div className="grid md:flex gap-3 md:gap-6">
            <img
              className="rounded h-[138px] w-full md:w-auto"
              src={photo_3}
              alt=""
            />
            <div className="grid">
              <div>
                <h3 className="text-[20px] font-medium">Composition</h3>
                <p>
                  Master the art of creating visually appealing photography that
                  tells a story, with practical tips and examples.
                </p>
              </div>

              <div className="flex items-end">
                <button className="border-b flex gap-2 items-center text-gray border-gray">
                  <span>Learn more</span>
                  <FaArrowRight className="text-primary w-[16px] h-[16px] " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
