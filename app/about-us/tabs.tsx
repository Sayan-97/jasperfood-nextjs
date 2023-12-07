"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const pathname = usePathname();
  const tabs = [
    {
      name: "Profile",
      url: "/about-us",
    },
    {
      name: "Team",
      url: "/about-us/team",
    },
    {
      name: "Why US",
      url: "/about-us/why-us",
    },
  ];
  return (
    <div>
      <div className="container flex justify-center gap-4 lg:gap-12">
        {tabs.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className={`w-[108px] lg:w-[174px] h-[44px] lg:h-[59px] rounded-[81px] lg:text-[1.25rem] flex items-center justify-center ${
              item.url === pathname
                ? "bg-primary text-white font-semibold"
                : "bg-[#F5F5F5]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
