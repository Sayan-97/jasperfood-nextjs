import Image from "next/image";
import { monotypeFont } from "@/app/fonts";
import Link from "next/link";

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  const links = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about-us" },
    { label: "Food Safety & Quality", link: "/food-and-safety" },
    { label: "Products", link: "/products/veg" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  const socials = [
    { label: "Facebook", icon: AiFillFacebook, link: "/" },
    { label: "Twitter", icon: AiOutlineTwitter, link: "/" },
    { label: "Instagram", icon: AiFillInstagram, link: "/" },
    { label: "Youtube", icon: AiFillYoutube, link: "/" },
  ];

  return (
    <footer className="container py-8">
      <div className="pt-4 border-t-2 border-primary space-y-16">
        <div className="flex items-center justify-between flex-wrap max-lg:gap-8">
          {/* Footer Logo */}
          <div className="flex items-center">
            <Image
              src="/imgs/AppLogo.png"
              alt="img"
              width={126}
              height={111}
              className="w-20 md:w-24"
            />
            <h2
              className={`${monotypeFont.className} text-lg lg:text-2xl text-[#4946BE] font-normal`}
            >
              Jasper Food Manufacturers Private Limited{" "}
              <span className="text-lg lg:text-2xl">(JFMPL)</span>
            </h2>
          </div>
          <ul className="flex items-center flex-wrap gap-4 lg:gap-8">
            {links.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-6 text-2xl">
            {socials.map((item, index) => (
              <Link aria-label={item.label} key={index} href={item.link}>
                <item.icon />
              </Link>
            ))}
          </div>
          <div className="w-full md:w-[30%] py-[0.5px] bg-black"></div>
          <p>
            &copy; Copyright Jasper Food Manufacturers Private Limited (JMFL)
            2023, All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
