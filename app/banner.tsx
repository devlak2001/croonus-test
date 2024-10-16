"use client";

import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { get } from "@/api/api";

const getBanners = async () => {
  return await get("/banners/index_slider").then((res: any) => res.payload);
};

export default function Banner() {
  const { isPending, data } = useQuery({
    queryKey: ["bannerData"],
    queryFn: () => getBanners(),
  });

  console.log(data);

  if (isPending)
    return (
      <>
        <div className="w-full animate-pulse h-[525px]"></div>
      </>
    );

  return (
    <Swiper
      effect="fade"
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[EffectFade, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="hidden w-full md:block"
      autoHeight={true}
      allowTouchMove={false}
    >
      {data.map((banner: any) => {
        return (
          <SwiperSlide key={banner.id} className="bg-black">
            <Image
              src={banner.image}
              width={banner.width}
              height={banner.height}
              alt="First Banner"
              className="w-full h-auto object-cover object-center"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
