import Image from "next/image";

import facebookIcon from "./../public/icons/facebook.png";
import youtubeIcon from "./../public/icons/youtube.png";
import instagramIcon from "./../public/icons/instagram.png";
import logoTransparent from "./../public/images/logo/logoTransparent.png";
import bankIcon1 from "./../public/bankIcons/logo1.png";
import bankIcon2 from "./../public/bankIcons/logo2.png";
import bankIcon3 from "./../public/bankIcons/logo3.png";
import bankIcon4 from "./../public/bankIcons/logo4.png";
import bankIcon5 from "./../public/bankIcons/logo5.png";
import bankIcon6 from "./../public/bankIcons/logo6.png";
import bankIcon7 from "./../public/bankIcons/logo7.png";
import bankIcon8 from "./../public/bankIcons/logo8.png";
import bankIcon9 from "./../public/bankIcons/logo9.png";

const bankIcons = [
  bankIcon1,
  bankIcon2,
  bankIcon3,
  bankIcon4,
  bankIcon5,
  bankIcon6,
  bankIcon7,
  bankIcon8,
  bankIcon9,
];

export default function Footer() {
  return (
    <>
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
        <div className="flex flex-wrap gap-9 px-6 py-5 justify-center">
          {bankIcons.map((icon, key) => (
            <Image
              key={key}
              src={icon}
              alt={`Logo ${key}`}
              className="h-10 w-auto"
            />
          ))}
        </div>
        <p className="text-center text=[13px] w-full max-w-[1060px] mb-8 px-6">
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
