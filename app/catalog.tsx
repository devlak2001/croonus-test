import prodect1 from "./../public/images/products/product1.png";
import prodect2 from "./../public/images/products/product2.png";
import prodect3 from "./../public/images/products/product3.png";
import prodect4 from "./../public/images/products/product4.png";
import prodect5 from "./../public/images/products/product5.png";

import Image from "next/image";

export default function Catalog() {
  return (
    <>
      <div className="grid max-w-[350px] sm:max-w-full w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [grid-template-rows:repeat(5,minmax(0,1fr))] sm:[grid-template-rows:repeat(3,minmax(0,1fr))] items-center xl:grid-cols-[34.53%_24.34%_1fr_1fr] lg:grid-rows-2 xl:h-[525px] mb-24">
        <a
          href=""
          className="h-full xl:row-span-2 flex items-center justify-center relative transition-shadow hover:shadow-xl hover:z-10 w-full overflow-hidden"
        >
          <Image
            src={prodect1}
            alt="Product 1"
            className="w-[190%] max-w-none pointer-events-none"
          />
          <span className="absolute text-xl right-14 bottom-8">RINGS</span>
        </a>
        <a
          href=""
          className="h-full xl:row-span-2 flex items-center justify-center relative transition-shadow hover:shadow-xl hover:z-10 w-full overflow-hidden"
        >
          <Image
            src={prodect2}
            alt="Product 1"
            className="w-[63%] md:w-[60%] xl:w-[90%] max-w-none pointer-events-none"
          />
          <span className="absolute text-xl right-14 bottom-8">BUNDLES</span>
        </a>
        <a
          href=""
          className="h-full flex items-center justify-center relative transition-shadow hover:shadow-xl hover:z-10 w-full overflow-hidden"
        >
          <Image
            src={prodect3}
            alt="Product 1"
            className="w-[140%] max-w-none pointer-events-none -translate-y-[8%]"
          />
          <span className="absolute text-xl right-14 bottom-8">EARRINGS</span>
        </a>
        <a
          href=""
          className="h-full flex items-center justify-center relative transition-shadow hover:shadow-xl hover:z-10 w-full overflow-hidden"
        >
          <Image
            src={prodect4}
            alt="Product 1"
            className="w-[40%] max-w-none pointer-events-none -translate-y-[8%]"
          />
          <span className="absolute text-xl right-14 bottom-8">NECKLACES</span>
        </a>
        <a
          href=""
          className="h-full flex items-center justify-center relative transition-shadow hover:shadow-xl hover:z-10 w-full xl:col-span-2 overflow-hidden"
        >
          <Image
            src={prodect5}
            alt="Product 1"
            className="w-[95%] max-w-none pointer-events-none translate-y-[9%]"
          />
          <span className="absolute text-xl right-14 bottom-8">BRACELETS</span>
        </a>
      </div>
    </>
  );
}
