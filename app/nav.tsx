"use client";

import Image from "next/image";

import logo from "./../public/images/logo/logo.jpg";
import searchIcon from "./../public/icons/search.png";
import heartIcon from "./../public/icons/heart.png";
import shopIcon from "./../public/icons/shopping-bag.png";
import { useState } from "react";

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className="max-w-[1520px] h-24 gap-12 relative w-full flex items-center px-4 sm:px-6 justify-between xl:justify-center">
        <div className="absolute left-0 top-0 w-full h-full z-20 bg-white lg:hidden"></div>
        <div className="flex items-center relative z-30 lg:hidden">
          <div className="mr-2">
            <button
              className="relative group"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[45px] h-[45px] transform transition-all bg-black ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                      navOpen ? "translate-x-10" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
                      navOpen ? "translate-x-10" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${
                      navOpen ? "translate-x-10" : ""
                    }`}
                  ></div>

                  <div
                    className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
                      navOpen ? "translate-x-0 w-12" : ""
                    }`}
                  >
                    <div
                      className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                        navOpen ? "rotate-45" : ""
                      }`}
                    ></div>
                    <div
                      className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                        navOpen ? "-rotate-45" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <Image src={logo} alt="logo" className="lg:hidden w-auto h-12" />
        </div>

        <div
          className={`flex flex-col lg:flex-row py-6 transition-all duration-300 ${
            navOpen
              ? "translate-y-0 opacity-100 shadow-2xl pointer-events-auto"
              : "-translate-y-full opacity-0 shadow-none pointer-events-none"
          } lg:pb-0 lg:shadow-none z-10 absolute lg:opacity-100 lg:static lg:pointer-events-auto left-0 w-full lg:w-auto lg:py-0 lg:translate-y-0 top-24 bg-white items-center lg:h-full gap-6 lg:gap-12`}
        >
          <a href="" className="hover:underline">
            NEW IN
          </a>
          <a href="" className="hover:underline">
            INSPO
          </a>
          <a href="" className="hover:underline">
            SHOP
          </a>
          <Image
            src={logo}
            alt="logo"
            className="-order-1 xl:order-none hidden lg:block w-auto xl:mx-6 absolute h-[72px] lg:static left-0 md:-translate-x-1/2 lg:translate-x-0"
          />
          <a href="" className="hover:underline">
            OUTLET
          </a>
          <a href="" className="hover:underline">
            ABOUT
          </a>
        </div>
        <div className="lg:absolute shrink-0 right-0 z-30 flex items-center lg:right-6 min-[1540px]:right-0">
          <a href="" className=" mr-8 md:mr-12">
            <Image src={searchIcon} alt="search icon" className="h-6 w-auto" />
          </a>
          <a href="" className="mr-6 md:mr-10">
            <Image src={heartIcon} alt="heart icon" className="h-6 w-auto" />
          </a>
          <a href="" className="relative">
            <Image src={shopIcon} alt="shop icon" className="h-9 w-auto" />
            <div className="flex absolute left-[18px] bg-[#A6A998] top-5 items-center justify-center size-4 text-white rounded text-[10px]">
              0
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}
