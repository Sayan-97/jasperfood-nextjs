import Button from "@/components/ui/button";
import { aboutUs } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <Image
          src="/imgs/Hero-BG.png"
          alt="img"
          fill
          priority={true}
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
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {aboutUs.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 text-center"
            >
              <div className="border-2 border-primary p-4 rounded-full">
                <Image
                  src={item.image}
                  alt="img"
                  width={157.526}
                  height={157.526}
                />
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
          src="/imgs/Banner-BG.png"
          alt="img"
          fill
          priority={true}
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
            <Image
              src="/imgs/manufacturing-process.png"
              alt="img"
              width={738}
              height={441}
            />
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
            <Image
              src="/imgs/cutting-edge-technology.png"
              alt="img"
              width={738}
              height={441}
            />
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
            <Image
              src="/imgs/manufacturing-process.png"
              alt="img"
              width={738}
              height={441}
            />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="container py-12 lg:py-20 flex flex-col items-center gap-12 lg:gap-20">
        <h3>Social</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="grid justify-items-center gap-4">
            <Image src="/svgs/twitter.svg" alt="img" width={48} height={48} />
            <p className="text-2xl">Twitter</p>
          </div>
          <div className="grid justify-items-center gap-4">
            <Image src="/svgs/facebook.svg" alt="img" width={48} height={48} />
            <p className="text-2xl">Facebook</p>
          </div>
          <div className="grid justify-items-center gap-4">
            <Image src="/svgs/instagram.svg" alt="img" width={48} height={48} />
            <p className="text-2xl">Instagram</p>
          </div>
          <div className="grid justify-items-center gap-4">
            <Image src="/svgs/linkedin.svg" alt="img" width={48} height={48} />
            <p className="text-2xl">Linkedin</p>
          </div>
        </div>
      </section>
    </>
  );
}
