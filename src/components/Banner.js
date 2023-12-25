import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../assets/img/banner.png";

const Banner = () => {
  return (
    <div>
      <Swiper
        touchEventsTarget="wrapper"
        style={{
          "--swiper-pagination-color": "#F33838",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          //   "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "8px",
        }}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {[0, 1, 2]?.map((_, i) => (
          <SwiperSlide
            key={i}
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container bg-black bg-opacity-30 h-[78vh] grid items-end py-[50px]">
              <div className="flex">
                <div className="text-white py-[40px]">
                  <h2 className=" text-[64px] font-bold">MAKE BELIEVE</h2>
                  <div className="flex justify-between items-center ">
                    <p className="text-[20px]">
                      Sales on selected SONY products
                    </p>
                    <FaArrowRight className="text-primary w-[30px] h-[30px] font-bold" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
