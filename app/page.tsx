import Image from "next/image";
import logoTransparent from "./../public/images/logo/logoTransparent.png";
import banner1 from "./../public/images/banners/banner2.jpg";
import banner2 from "./../public/images/banners/banner3.jpg";

import Banner from "./banner";
import Catalog from "./catalog";
import Featured from "./featured";
import Navigation from "./nav";
import Instagram from "./instagram";

import Footer from "./footer";

export default function Home() {
  return (
    <>
      <div className="bg-black flex w-full justify-center h-5 relative z-30">
        <div className="text-white max-w-[1520px] w-full pl-8 flex items-center text-xs">
          <a href="" className="mt-0.5 hover:underline">
            REGIONAL SETTINGS
          </a>
          <div className="h-3 bg-white w-px mx-5"></div>
          <a href="" className="mt-0.5 hover:underline">
            LOGIN & REGISTER
          </a>
        </div>
      </div>

      <Navigation />

      <header className="max-w-[1520px] w-full flex flex-col mb-12">
        <div className="w-full flex items-center justify-center text-white bg-black h-5">
          <p className="text-xs mt-0.5">
            GET YOUR DISCOUNT COUPON -10% FOR NEW ORDERS
          </p>
        </div>
        <Banner></Banner>
      </header>
      <main className="max-w-[1520px] w-full flex flex-col items-center">
        <div className="w-full flex">
          <div className="flex flex-col items-end pl-10 mb-7">
            <h3 className="text-xl">SHOP BY CATEGORY</h3>
            <a href="" className="text-[#A57462] hover:underline">
              VIEW ALL
            </a>
          </div>
        </div>
        <Catalog />
        <Featured />
        <div className="flex justify-end items-end w-full h-[300px] md:h-[520px] relative mb-32">
          <div className="w-full h-full max-w-[952px] left-0 absolute">
            <Image
              src={banner1}
              alt="Banner 1"
              className="w-full h-full object-cover object-right absolute"
            />
          </div>
          <div className="flex w-full max-w-[740px] min-[1540px]:max-w-[720px] flex-col bg-white/70 pt-6 items-end relative pb-6 pr-6 md:pr-9 min-[1540px]:pr-0">
            <h2 className="text-right font-extrabold text-xl min-[400px]:text-2xl md:text-[40px] md:leading-tight">
              CAREFULLY CREATED
              <br className="block sm:hidden" />
              PIECES FOR <br className="hidden sm:block" />
              YOU TO LAYER,
              <br className="block sm:hidden" />
              STYLE AND MIX.
            </h2>
            <span className="font-medium text-xl mt-2">Ringz&Thingz Brand</span>
            <a
              href=""
              className="border-2 border-black text-sm px-7 py-2 mt-5 transition-colors hover:bg-black hover:text-white"
            >
              <span className="mt-0.5 block">READ MORE</span>
            </a>
          </div>
        </div>
        <div className="flex justify-start items-end w-full h-80 relative mb-32">
          <div className="w-full h-full max-w-[1056px] right-0 absolute">
            <Image
              src={banner2}
              alt="Banner 1"
              className="w-full h-full object-cover object-left-top absolute"
            />
          </div>
          <div className="flex w-full bg-white/70 pl-6 sm:pl-9 max-w-[650px] flex-col items-start relative pt-6 pb-6">
            <h2 className="font-extrabold text-2xl sm:text-3xl md:text-[40px] leading-tight flex items-center -ml-3">
              <Image
                src={logoTransparent}
                alt="Logo"
                className="w-36 sm:w-44 md:w-72 mr-2"
              />
              <span>NEWSLETTER</span>
            </h2>
            <p className="mt-2 max-w-[540px] pr-6">
              Get the latest news from the Ringz&Tingz Online Store regarding
              new products, exclusive specials, lifestyle and fashion trends.
            </p>
            <a
              href=""
              className="border-2 border-black text-sm px-5 py-2 mt-5 transition-colors hover:bg-black hover:text-white"
            >
              <span className="mt-0.5 block">SUBSCRIBE NOW</span>
            </a>
          </div>
        </div>
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
