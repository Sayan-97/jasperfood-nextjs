import Image from "next/image";
import React from "react";

export default function WhyUs() {
  const cards = [
    {
      icon: "/imgs/our-focus.png",
      title: "Our Focus",
      desc: "At JFMPL, our unwavering focus is on delivering unparalleled quality and excellence in everything we do. From the selection of premium ingredients to the meticulous preparation of our products, we prioritize quality at every step.",
    },
    {
      icon: "/imgs/our-food.png",
      title: "Our Food",
      desc: "Our commitment to extraordinary food sets us apart. We take pride in the culinary artistry that goes into crafting each of our products. Our menu boasts a diverse range of delectable options that cater to a variety of tastes, ensuring a delightful experience for all.",
    },
    {
      icon: "/imgs/our-approach.png",
      title: "Our Approach",
      desc: "We approach every aspect of our business with a dedication to innovation and sustainability. Our environmentally responsible practices and forward-thinking approach to the industry are what make us a standout choice.",
    },
    {
      icon: "/imgs/our-people.png",
      title: "Our People",
      desc: "Our team is the heart of our success. With a cadre of highly qualified food technologists, microbiologists, and creative chefs, we are uniquely equipped to understand and meet the evolving needs of our clients. Their dedication and expertise drive us forward.",
    },
    {
      icon: "/imgs/our-innovation.png",
      title: "Our Innovation",
      desc: "Innovation is at the core of what we do. We invest significantly in research and development, continuously striving to bring new and exciting products to your table. Our commitment to innovation ensures that you'll always find something extraordinary with us.",
    },
    {
      icon: "/imgs/our-reach.png",
      title: "Our Reach",
      desc: "We are proud to serve clients not only in the domestic market but on a global scale. Our reach extends far and wide, allowing us to share our culinary creations with a diverse range of people and cultures.",
    },
    {
      icon: "/imgs/our-sourcing.png",
      title: "Our Sourcing",
      desc: "We take great care in sourcing our ingredients. Our partnerships with approved suppliers and rigorous quality control measures ensure that only the finest, safest, and healthiest ingredients make it into our products. You can trust the quality of what we serve.",
    },
  ];

  return (
    <div className="container flex flex-col items-center gap-12">
      <h2 className="text-center text-[32px] lg:text-5xl border-b-4 border-primary pb-3">
        Why Us
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {cards.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-[calc(33.333333%-48px)] flex flex-col items-center text-center gap-4"
          >
            <Image src={item.icon} alt="img" width={56} height={56} />

            <h6 className="text-xl font-semibold">{item.title}</h6>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
