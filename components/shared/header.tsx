"use client";

import Image from "next/image";
import { monotypeFont } from "@/app/fonts";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const handleDropdownOpen = useCallback(
    (index: any) => {
      setDropdownOpen(dropdownOpen === index ? null : index);
    },
    [dropdownOpen]
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLDivElement).contains(event.target)
      ) {
        handleDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef, handleDropdownOpen]);
  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
      dropdown: [
        { label: "Profile", link: "/about-us" },
        { label: "Team", link: "/about-us/team" },
        { label: "Why Us", link: "/about-us/why-us" },
      ],
    },
    {
      label: "Food Safety & Quality",
      dropdown: [
        { label: "Certifications", link: "/food-and-safety" },
        {
          label: "Quality Assurance",
          link: "/food-and-safety/quality-assurance",
        },
      ],
    },
    {
      label: "Products",
      dropdown: [
        { label: "Veg", link: "/products/veg" },
        { label: "Non Veg", link: "/products/non-veg" },
      ],
    },
    {
      label: "Contact Us",
      link: "/contact-us",
    },
  ];

  function NavLinks() {
    return (
      <ul className="flex items-center gap-8 text-black">
        {links.map((item, index) =>
          item.dropdown ? (
            <div key={index} className="relative">
              <button
                className="flex items-center gap-1"
                onClick={() => handleDropdownOpen(index)}
              >
                {item.label}{" "}
                <Image
                  src="/svgs/icon-down.svg"
                  alt="img"
                  width={24}
                  height={24}
                  className={`${
                    dropdownOpen === index && "transform rotate-180"
                  } w-5 h-5`}
                />
              </button>
              {dropdownOpen === index && (
                <ul
                  ref={dropdownRef}
                  className="absolute right-0 bg-white mt-4 border shadow flex flex-col gap-4 w-48 p-2 text-end"
                >
                  {item.dropdown.map((item, index) => (
                    <Link key={index} href={item.link}>
                      {item.label}
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Link key={index} href={item.link}>
              {item.label}
            </Link>
          )
        )}
      </ul>
    );
  }

  return (
    <header className="relative w-full py-2">
      <nav className="container flex items-center justify-between">
        {/* Navbar Logo */}
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
        <div className="max-lg:hidden">
          <NavLinks />
        </div>
      </nav>
    </header>
  );
}
