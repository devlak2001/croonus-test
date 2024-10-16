import Image from "next/image";
import logoTransparent from "./../public/images/logo/logoTransparent.png";
import banner1 from "./../public/images/banners/banner2.jpg";
import banner2 from "./../public/images/banners/banner3.jpg";

import Banner from "./banner";
import Catalog from "./catalog";
import Featured from "./featured";
import Navigation from "./nav";
import Instagram from "./instagram";

import facebookIcon from "./../public/icons/facebook.png";
import youtubeIcon from "./../public/icons/youtube.png";
import instagramIcon from "./../public/icons/instagram.png";

export default function Home() {
  return (
    <>
      <div className="bg-black flex w-full justify-center h-5 relative z-30">
        <div className="text-white max-w-[1520px] w-full pl-8 flex items-center text-xs">
          <a href="" className="mt-0.5">
            REGIONAL SETTINGS
          </a>
          <div className="h-3 bg-white w-px mx-5"></div>
          <a href="" className="mt-0.5">
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
            <a href="" className="text-[#A57462]">
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
            <a href="" className="border-2 border-black text-sm px-7 py-2 mt-5">
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
            <a href="" className="border-2 border-black text-sm px-5 py-2 mt-5">
              <span className="mt-0.5 block">SUBSCRIBE NOW</span>
            </a>
          </div>
        </div>
        <Instagram />
      </main>
      <footer className="flex flex-col w-full max-w-[1520px] items-center">
        <div className="flex flex-col w-full px-6 lg:flex-row items-center mb-12 lg:items-start xl:pl-10">
          <div className="relative w-full h-f max-w-[400px] lg:max-w-[360px] xl:max-w-[530px] shrink-0">
            <Image src={logoTransparent} alt="Logo" className="w-full" />
            <div className="flex items-end w-full h-full justify-end absolute right-0 pr-[4%] top-0 gap-[5%]">
              <a href="" className="w-[9.1%] flex items-center justify-center">
                <Image src={instagramIcon} alt="Instagram Logo" className="" />
              </a>
              <a
                href=""
                className="w-[9.1%] flex items-center justify-center h-[27%] rounded-lg border-black border-4"
              >
                <Image src={youtubeIcon} alt="Youtube Logo" className="w-5/6" />
              </a>
              <a href="" className="w-[9.1%] flex items-center justify-center">
                <Image src={facebookIcon} alt="Facebook Logo" className="" />
              </a>
            </div>
          </div>
          <div className="flex text-center sm:text-left items-center sm:items-start gap-10 flex-col sm:flex-row justify-around w-full lg:pl-12 xl:pl-16 mt-12">
            <div className="flex flex-col text-[22px] items-center sm:items-start">
              <span className="font-medium mb-5">CONTACT</span>
              <a href="">Customer Care</a>
              <a href="">WhatsApp**</a>
              <a href="">Email us</a>
              <a href="">Store Locator</a>
            </div>
            <div className="flex flex-col text-[22px] items-center sm:items-start">
              <span className="font-medium mb-5">SERVICES</span>
              <a href="">Express Delivery</a>
              <a href="">How to Return</a>
              <a href="">Return Label</a>
            </div>
            <div className="flex flex-col text-[22px] items-center sm:items-start">
              <span className="font-medium mb-5">OUR COMPANY</span>
              <a href="">Careers</a>
              <a href="">Investor Relations</a>
              <a href="">Sustainabilty</a>
              <a href="">Press</a>
            </div>
          </div>
        </div>
        <div className="w-full border-gray-200 border-t-2 border-b-2 py-3 flex justify-center flex-wrap gap-y-3 gap-x-16 px-6">
          <a href="">FAQ</a>
          <a href="">HELP & CONTACT</a>
          <a href="">PRIVACY STATEMENT</a>
          <a href="">TERMS & CONDITIONS</a>
          <a href="">TERMS OF USE</a>
          <a href="">COOKIE SETTINGS</a>
        </div>
        <p className="text-center text=[13px] w-full max-w-[1060px] mb-8 px-6 pt-8">
          Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a plaćanje
          se vrši isključivo u dinarima. Isporuka se vrši SAMO na teritoriji
          Republike Srbije. Nastojimo da budemo što precizniji u opisu
          proizvoda, prikazu slika i samih cena, ali ne možemo garantovatida su
          sve informacije kompletne i bez grešaka. Svi artikli prikazani na
          sajtu su deo naše ponude i ne podrazumeva da su dostupni u svakom
          trenutku. Raspoloživost robe možete proveriti pozivanjem Call Centra
          na +381 (0) 32 325 030 ili online prodaja +381 (0) 62 489 294 (po ceni
          lokalnog poziva)
          <br />
          <br />© 2022 Ringz&Things DOO | Sva prava zadržana. Powered by Croonus
          Technologies.
        </p>
      </footer>
    </>
  );
}
