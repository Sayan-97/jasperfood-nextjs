"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { monotypeFont } from "@/app/fonts";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { navbarLinks } from "@/constants";
// Jasper Logo
import JasperFoodLogo from "@/public/imgs/AppLogo.png";

// Header()
export default function Header() {
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  const handleDropdownOpen = useCallback(
    (index: any) => {
      setDropdownOpen(dropdownOpen === index ? null : index);
    },
    [dropdownOpen]
  );

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        navRef.current &&
        !(navRef.current as HTMLDivElement).contains(event.target)
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navRef, setNavOpen]);

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

  function NavLinks() {
    return (
      <div className="flex max-lg:flex-col items-start lg:items-center gap-8 text-black">
        {navbarLinks.map((item, index) =>
          item.dropdown ? (
            <div key={index} className="relative">
              <button
                className={`flex items-center gap-1 ${
                  activeMenu === item.label && "text-primary"
                }`}
                onClick={() => {
                  handleDropdownOpen(index), setActiveMenu(item.label);
                }}
              >
                {item.label}{" "}
                <IoIosArrowDown
                  className={dropdownOpen === index && "transform rotate-180"}
                />
              </button>
              {dropdownOpen === index && (
                <div
                  ref={dropdownRef}
                  className="lg:absolute right-0 lg:bg-white mt-4 lg:border lg:shadow rounded-xl flex flex-col gap-4 lg:w-48 lg:p-4 lg:text-end"
                >
                  {item.dropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      onClick={() => {
                        handleDropdownOpen(null), setNavOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={index}
              href={item.link}
              onClick={() => {
                setActiveMenu(item.label), setNavOpen(false);
              }}
              className={`${activeMenu === item.label && "text-primary"}`}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    );
  }

  return (
    <header className="relative w-full py-2 z-30">
      <nav className="container flex items-center justify-between max-md:gap-8">
        {/* Navbar Logo */}
        <div className="flex items-center">
          <Image
            src={JasperFoodLogo}
            alt="img"
            priority
            className="w-20 lg:w-28"
          />
          <h2
            className={`${monotypeFont.className} text-lg lg:text-2xl text-[#4946BE] font-normal`}
          >
            Jasper Food Manufacturers Private Limited{" "}
            <span className="lg:text-[26px]">(JFMPL)</span>
          </h2>
        </div>

        <div className="max-lg:hidden">
          <NavLinks />
        </div>

        <div className="lg:hidden text-2xl">
          <FiMenu onClick={() => handleNavOpen()} />
        </div>
      </nav>
      {navOpen && (
        <div className="fixed w-full h-screen bg-black bg-opacity-30 top-0 flex justify-end"></div>
      )}
      <div
        ref={navRef}
        className={`fixed top-0 right-0 w-[68%] h-screen bg-white border-l shadow-md trandform ${
          navOpen
            ? "translate-x-0 transition-all ease-in-out duration-500"
            : "translate-x-[100%] transition-all ease-in-out duration-500"
        }`}
      >
        <div className="container">
          <div className="py-6 md:py-10 flex justify-end text-2xl">
            <IoClose onClick={() => handleNavOpen()} />
          </div>
          {navOpen && <NavLinks />}
        </div>
      </div>
    </header>
  );
}
