"use client";

import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";

import { useEffect, useState } from "react";

import { list } from "@/api/api.js";

import { Product } from "./utils/types";
import { useQuery } from "@tanstack/react-query";

const getRecommended = async () => {
  return await list("/products/section/list/recommendation?limit=10").then(
    (res) => res.payload
  );
};

const ImageWithFallback = ({ fallback, alt, src, ...props }: any) => {
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallback : src}
      {...props}
    />
  );
};

export default function Featured() {
  const { isPending, data } = useQuery({
    queryKey: ["recommendedData"],
    queryFn: () => getRecommended(),
  });

  console.log(data);

  if (isPending)
    return (
      <>
        <div className="">Loading products...</div>
      </>
    );

  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center mb-36">
        <div className="flex flex-col mb-8 md:mb-0 items-center md:items-start md:mr-20 shrink-0 md:ml-9">
          <h2 className="text-[42px] font-bold">NEW IN</h2>
          <p className="font-medium text-xl">Explore new collection</p>
          <a
            href=""
            className="border-2 border-black text-sm px-3 py-2 mt-5 transition-colors hover:bg-black hover:text-white"
          >
            <span className="mt-0.5 block">SEE ALL PRODUCTS</span>
          </a>
        </div>
        <ScrollContainer className="ml-6 md:ml-0 flex w-full scrollbar-thumb-custom scrollbar-track-custom-light overflow-x-scroll pb-8 px-3 gap-10 scrollbar-thin scrollbar-thumb-[#A6A998] scrollbar-track-[#F4F4F4] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {data.items.map((product: Product) => {
            return (
              <a
                key={product.id}
                href={product.link.absolute_link}
                className="flex flex-col w-72 items-start shrink-0 px-3 pb-2 !transition-shadow hover:shadow-xl select-none"
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="h-[346px] flex items-center justify-center w-full py-3">
                  <ImageWithFallback
                    fallback={"/images/products/placeholder.webp"}
                    src={product.image_data[0].url}
                    width={400}
                    height={400}
                    alt={product.image_data[0].url}
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>
                <h5 className="text-sm text-[#935430] font-medium">
                  {product.basic_data.brand_name
                    ? product.basic_data.brand_name
                    : "Brand name"}
                </h5>
                <h4 className="mt-2 font-medium">
                  {product.basic_data.name
                    ? product.basic_data.name
                    : "Product name"}
                </h4>
                <div className="flex mt-1">
                  {product.price.discount.active && (
                    <span className="mr-8">
                      <del>
                        {product.price.discount.amount}{" "}
                        <span className="uppercase">
                          {product.price.currency}
                        </span>
                      </del>
                    </span>
                  )}

                  <span>
                    {product.price.price.original}{" "}
                    <span className="uppercase">{product.price.currency}</span>
                  </span>
                </div>
              </a>
            );
          })}
        </ScrollContainer>
      </div>
    </>
  );
}
