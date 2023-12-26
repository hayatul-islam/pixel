import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import card_1 from "../../assets/img/card-1.svg";
import card_2 from "../../assets/img/card-2.svg";
import card_3 from "../../assets/img/card-3.svg";
import card_4 from "../../assets/img/card-4.svg";
import card_5 from "../../assets/img/card-5.svg";
import logo from "../../assets/img/logo.svg";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="bg-black py-6">
      <div className="container">
        <div className="grid md:grid-cols-2 justify-between lg:px-12">
          <div className="grid md:flex md:gap-7 gap-5">
            <div className="md:hidden">
              <img className="h-[28px] mx-auto" src={logo} alt="" />
            </div>

            <div className="hidden md:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064073197!2d-0.43123970044350396!3d51.52860701956136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1703515336758!5m2!1sen!2sbd"
                width="220"
                height="180"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="location"
              />
            </div>
            <div className="md:w-[200px] w-full space-y-3">
              <h3 className="text-white text-[20px] font-medium">
                Come visit us!
              </h3>
              <div className="flex md:block justify-between gap-3">
                <p className="text-dark-gary flex md:items-center gap-4">
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[16px] h-[16px] md:w-[30px] md:h-[30px] pt-1 md:pt-0"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.6 0.600098V3.8001H0V5.4001H1.6V23.0001H3.2V5.4001H9.6V8.6001H7.2C6.98783 8.6001 6.78434 8.68438 6.63432 8.83441C6.48429 8.98444 6.4 9.18792 6.4 9.4001V19.0001C6.4 19.2123 6.48429 19.4158 6.63432 19.5658C6.78434 19.7158 6.98783 19.8001 7.2 19.8001H23.2C23.4122 19.8001 23.6157 19.7158 23.7657 19.5658C23.9157 19.4158 24 19.2123 24 19.0001V9.4001C24 9.18792 23.9157 8.98444 23.7657 8.83441C23.6157 8.68438 23.4122 8.6001 23.2 8.6001H20.8V5.4001H24V3.8001H3.2V0.600098H1.6ZM11.2 8.6001V5.4001H19.2V8.6001H11.2Z"
                      fill="#F33838"
                    />
                  </svg>

                  <span>71 Park Lane, London SW43 2LW</span>
                </p>
                <p className="text-dark-gary flex md:items-center gap-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[16px] h-[16px] md:w-[30px] md:h-[30px] pt-1 md:pt-0"
                  >
                    <path
                      d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z"
                      fill="#F33838"
                    />
                    <path
                      d="M11 5H9V10.414L12.293 13.707L13.707 12.293L11 9.586V5Z"
                      fill="#F33838"
                    />
                  </svg>

                  <span>Sunday to Friday 8:00 - 21:00</span>
                </p>
              </div>
            </div>
            <div className="md:hidden mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064073197!2d-0.43123970044350396!3d51.52860701956136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1703515336758!5m2!1sen!2sbd"
                width="full"
                height="88"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="location"
              />
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center">
            <img className="h-[26px] " src={logo} alt="" />

            <Newsletter />
          </div>
        </div>
        <div className="py-7 hidden md:block">
          <hr className="text-dark-gary" />
        </div>
        <div className="md:flex justify-between pt-7 md:pt-0">
          <div className="flex space-x-6 md:space-x-12 ">
            <div className="space-y-5">
              <h4 className="text-white font-medium text-[20px]">Shop</h4>
              <div className="md:flex gap-6">
                <ul className="text-dark-gary space-y-2">
                  <li>Cameras</li>
                  <li>Lenses</li>
                  <li>Accessories</li>
                </ul>
                <ul className="text-dark-gary space-y-2">
                  <li>Studio</li>
                  <li>Brands</li>
                  <li>Extreme</li>
                </ul>
              </div>
            </div>
            <div className="space-y-5">
              <h4 className="text-white font-medium text-[20px]">Used</h4>

              <ul className="text-dark-gary space-y-2">
                <li>Buy & Sell</li>
                <li>Policy</li>
                <li>Report Fraud</li>
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-white font-medium text-[20px]">About</h4>

              <ul className="text-dark-gary space-y-2">
                <li>Contact</li>
                <li>Our story</li>
                <li>Blog </li>
              </ul>
            </div>
          </div>
          <div className="md:flex justify-between w-full max-w-[800px] pt-8 md:pt-0 md:pr-16">
            <div>
              <div className=" hidden md:flex items-center gap-2">
                <button className="bg-primary font-medium px-4 py-2">
                  USD $
                </button>
                <button className=" font-medium px-4 py-2 text-gray border border-gray">
                  EUR &#8364;
                </button>
              </div>
            </div>
            <div className="space-y-5">
              <h4 className="text-white font-medium text-[20px]">
                Contact Information
              </h4>

              <ul className="text-dark-gary space-y-2">
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-primary" />{" "}
                  <span>+972 123-456-78</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdEmail className="text-primary" />{" "}
                  <span>name@camera.com</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 md:hidden">
              <Newsletter />
            </div>
          </div>
        </div>
        <div className="grid md:flex md:justify-between md:items-center pt-8 gap-6">
          <div className="text-dark-gary max-w-[550px] w-full order-last md:order-first text-center md:text-left">
            <p className="hidden md:block">© 2023 PIXEL.</p>
            <p>
              <span className="md:hidden">© 2023 PIXEL.</span> All Rights
              Reserved
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center w-full md:justify-start">
            <img src={card_1} alt="" />
            <img src={card_2} alt="" />
            <img src={card_3} alt="" />
            <img src={card_4} alt="" />
            <img src={card_5} alt="" />
          </div>
          <div className="text-dark-gary md:flex w-full gap-6 hidden ">
            <p>Return Policy</p>
            <p>Accessibility</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
