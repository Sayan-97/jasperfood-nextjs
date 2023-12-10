import Image from "next/image";
import Tabs from "./tabs";
import AboutUsBGImage from "@/public/imgs/about-us-bg.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-12">
      <div className="relative flex flex-col gap-12">
        <div className="relative ">
          <Image
            src={AboutUsBGImage}
            alt="img"
            fill
            className="absolute object-cover"
          />
          <div className="relative py-28 bg-black bg-opacity-[66%]">
            <div className="container flex justify-center text-center text-white">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
        <Tabs />
      </div>
      <div>{children}</div>
    </div>
  );
}
