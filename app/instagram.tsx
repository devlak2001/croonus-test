"use client";

import ScrollContainer from "react-indiana-drag-scroll";

import Image from "next/image";
import { useState } from "react";

import img1 from "./../public/images/products/product6.png";
import img2 from "./../public/images/products/product7.png";
import img3 from "./../public/images/products/product8.png";

export default function Instagram() {
  const [images] = useState([img1, img2, img3, img1, img2, img3]);
  return (
    <>
      <div className="flex flex-col-reverse items-start lg:items-end lg:flex-row w-full relative mb-28 pl-6 sm:pl-9 min-[1540px]:pl-0">
        <ScrollContainer className="flex w-full scrollbar-thumb-custom scrollbar-track-custom-light overflow-x-scroll pb-7 gap-6 scrollbar-thin scrollbar-thumb-[#A6A998] scrollbar-track-[#F4F4F4] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {images.map((image, key) => (
            <Image
              key={key}
              src={image}
              alt={"Photo"}
              className="h-72 w-72 object-cover"
              onMouseDown={(e) => {
                e.preventDefault();
              }}
            />
          ))}
        </ScrollContainer>
        <div className="flex flex-col items-start relative mb-6 lg:mb-12 w-auto lg:w-[420px] xl:w-[610px] shrink-0 lg:pl-12">
          <h2 className="font-bold text-xl mr-4 min-[400px]:text-3xl md:text-[32px] md:leading-tight">
            BE OUR INSTAGRAM <br className="hidden lg:block xl:hidden" />
            FOLLOWER
          </h2>
          <span className="mt-2">
            Our latest posts,
            <br />
            Profile: @ringz&tingz
          </span>
          <a href="" className="border-2 border-black text-sm px-12 py-2 mt-5">
            <span className="mt-0.5 block">FOLLOW</span>
          </a>
        </div>
      </div>
    </>
  );
}
