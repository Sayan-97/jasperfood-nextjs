import Image from "next/image";
import Button from "@/components/ui/button";
import { aboutUs } from "@/constants";
// Images
import HeroBGImage from "@/public/imgs/Hero-BG.png";
import BannerBGImage from "@/public/imgs/Banner-BG.png";

import ManufacturingProcess from "@/public/imgs/manufacturing-process.png";
import CuttingEdgeTechnology from "@/public/imgs/cutting-edge-technology.png";
import HighTechMachinary from "@/public/imgs/high-tech-machinery.png";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <Image
          src={HeroBGImage}
          alt="img"
          fill
          priority
          className="absolute object-cover"
        />
        <div className="relative py-16 lg:py-32 bg-black bg-opacity-[66%]">
          <div className="container grid justify-items-center gap-8 text-center text-white">
            <h1 className="text-2xl lg:text-[3.75rem] leading-snug">
              JFMPL: Where Excellence
              <br /> Meets Flavour
            </h1>
            <p className="w-full lg:w-[55%] text-base lg:text-lg">
              Welcome to Jasper Food Manufacturers Private Limited (JFMPL), your
              trusted destination for the finest frozen value added food
              products and delectable culinary creations. Your cravings deserve
              the best - and that&apos;s exactly what we offer.
            </p>
            <Button>EXPLORE</Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="container py-12 lg:py-20 flex flex-col items-center gap-12 lg:gap-20">
        <h3>About Us</h3>
        <div className="flex gap-12 flex-wrap">
          {aboutUs.map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-[calc(33.333333%-48px)] flex flex-col items-center gap-6 text-center"
            >
              <div className="border-2 border-primary p-4 rounded-full">
                <Image src={item.image} alt="img" />
              </div>
              <h4>{item.title}</h4>
              <p className="text-lg">{item.des}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="relative">
        <Image
          src={BannerBGImage}
          alt="img"
          fill
          className="absolute object-cover"
        />
        <div className="relative py-16 lg:py-32 bg-black bg-opacity-[66%]">
          <div className="container flex justify-center text-center text-white">
            <h5 className="w-full lg:w-[70%] text-base lg:text-2xl leading-loose lg:leading-loose">
              As a highly trusted organization, we specialize in crafting a
              range of products that cater to your every craving, from veg to
              non-veg frozen products. Our menu boasts an array of delights that
              redefine indulgence, all prepared with the utmost precision.
              Nestled in our state-of-the-art manufacturing plant, we take pride
              in our meticulous approach to hygiene. Every step of our process
              is imbued with care, ensuring that you receive only the best
              quality frozen products.
            </h5>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container py-12 lg:py-20 flex flex-col items-center gap-12 lg:gap-20">
        <h3>Process & Infrastructure</h3>
        <div className="grid gap-16">
          <div className="flex max-lg:flex-col-reverse items-center justify-between gap-8 lg:gap-16">
            <div className="w-full lg:w-2/5 space-y-4 lg:space-y-8">
              <h3 className="w-full lg:w-[70%] text-left max-lg:text-2xl leading-snug lg:leading-tight">
                Manufacturing Process
              </h3>
              <p className="text-lg">
                Nestled in our state-of-the-art manufacturing plant, we take
                pride in our meticulous approach to hygiene. Every step of our
                process is imbued with care, ensuring that you receive only the
                best quality frozen products.
              </p>
            </div>
            <Image src={ManufacturingProcess} alt="img" />
          </div>

          <div className="flex max-lg:flex-col-reverse flex-row-reverse items-center justify-between gap-8 lg:gap-16">
            <div className="w-full lg:w-2/5 space-y-4 lg:space-y-8">
              <h3 className="w-full lg:w-[70%] text-left max-lg:text-2xl leading-snug lg:leading-tight">
                Cutting Edge Techlology
              </h3>
              <p className="text-lg">
                Our cutting-edge technology automates tasks, improve production
                processes, and reduce waste. This leads to significant cost
                savings and increased productivity.
                <br />
                It improves food safety by detecting contaminants, tracking the
                food supply chain, and ensuring that food is cooked to the
                correct temperature.
                <br />
                It helps to reduce the environmental impact of food production
                by improving energy efficiency and water conservation.
              </p>
            </div>
            <Image src={CuttingEdgeTechnology} alt="img" />
          </div>

          <div className="flex max-lg:flex-col-reverse items-center justify-between gap-8 lg:gap-16">
            <div className="w-full lg:w-2/5 space-y-4 lg:space-y-8">
              <h3 className="w-full lg:w-[70%] text-left max-lg:text-2xl leading-snug lg:leading-tight">
                High-Tech Machinery
              </h3>
              <ul className="text-lg list-disc">
                <li className="ml-4">
                  Robots are being used to automate tasks such as food
                  preparation, packaging, and transportation.
                </li>
                <li className="ml-4">
                  AI is being used to automate tasks, improve quality control,
                  and optimize production.
                </li>
                <li className="ml-4">
                  The IoT is being used to connect food manufacturing equipment
                  and systems to the internet. This allows data to be collected
                  and analyzed in real time, which can help to improve
                  efficiency and quality control.
                </li>
              </ul>
            </div>
            <Image src={HighTechMachinary} alt="img" />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="container py-12 lg:py-20 flex flex-col items-center gap-12 lg:gap-20">
        <h3>Social</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="grid justify-items-center gap-4">
            <FaTwitter className="text-4xl lg:text-5xl text-primary" />
            <p className="text-2xl">Twitter</p>
          </div>
          <div className="grid justify-items-center gap-4">
            <FaFacebookF className="text-4xl lg:text-5xl text-primary" />
            <p className="text-2xl">Facebook</p>
          </div>
          <div className="grid justify-items-center gap-4">
            <FaInstagram className="text-4xl lg:text-5xl text-primary" />
            <p className="text-2xl">Instagram</p>
          </div>
          <div className="grid justify-items-center gap-4">
            <FaLinkedin className="text-4xl lg:text-5xl text-primary" />
            <p className="text-2xl">Linkedin</p>
          </div>
        </div>
      </section>
    </>
  );
}
