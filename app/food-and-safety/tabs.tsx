"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const pathname = usePathname();
  const tabs = [
    {
      name: "Certifications",
      url: "/food-and-safety",
    },
    {
      name: "Quality Assurance",
      url: "/food-and-safety/quality-assurance",
    },
  ];
  return (
    <div>
      <div className="container flex justify-center gap-4 lg:gap-12">
        {tabs.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className={`w-[179px] lg:w-[243px] h-[44px] lg:h-[59px] rounded-[81px] lg:text-[1.25rem] flex items-center justify-center ${
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
