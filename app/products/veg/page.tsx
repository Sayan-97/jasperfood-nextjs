import Image from "next/image";

export default function Veg() {
  const products = [
    {
      image: "/imgs/veg-1.png",
      title: "Fry and Serve",
    },
    {
      image: "/imgs/veg-2.png",
      title: "Grill and Serve",
    },
    {
      image: "/imgs/veg-3.png",
      title: "Heat and Serve",
    },
  ];

  return (
    <div className="space-y-12">
      <div
        style={{
          background: `url(${"/imgs/product-veg-bg.png"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-[66%] py-28">
          <div className="container flex justify-center text-center text-white">
            <h1>Veg</h1>
          </div>
        </div>
      </div>
      <div className="container flex max-lg:flex-col max-lg:gap-8 justify-around">
        {products.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <Image
              priority={true}
              src={item.image}
              alt="img"
              width={414}
              height={441}
            />
            <h5 className="text-[1.875rem] text-black">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
