import Image from "next/image";

export default function QualityAssurance() {
  const cards = [
    {
      icon: "/imgs/raw-material.png",
      title: "Raw Material",
      desc: "Starting at level zero, we procure raw meat only from approved suppliers, such as Jasper Associates, Suguna Foods, and Shanthi Foods. Along with every supply, the suppliers provide a health certificate, declaring that the meat is free from antibiotics and diseases, and is absolutely fit for human consumption. Our core raw materials, including Paneer, Butter, and Cheese, are purchased from Gayatri Foods.",
    },
    {
      icon: "/imgs/hygiene.png",
      title: "Hygiene",
      desc: "We have developed detailed systems to manage all stages of equipment, drain, and tool cleaning. The use of protective gear is mandatory, and we strictly follow procedures to ensure that our workers maintain good personal hygiene practices.",
    },
    {
      icon: "/imgs/water.png",
      title: "Water",
      desc: "We have implemented a RO system to guarantee that the water and ice used in our products are free from any form of contamination. The effectiveness of the RO system is evaluated on a daily basis. Furthermore, the water pipelines are clearly identified.",
    },
    {
      icon: "/imgs/maintenance.png",
      title: "Maintenance",
      desc: "We have a highly skilled and trained maintenance team available at the plant at all times, ensuring rigorous adherence to our system of preventive maintenance. Additionally, for our machines, we have established Annual Maintenance Contract (AMC) agreements with reputable companies.",
    },
    {
      icon: "/imgs/prevention-of-contamination.png",
      title: "Prevention of Contamination",
      desc: "We have implemented a comprehensive waste management procedure that categorizes waste into various categories, such as biodegradable, non-biodegradable, metal scraps, and used lab media. To prevent cross-contamination, physical segregation has been established, distinguishing between high-care and low-care areas.",
    },
    {
      icon: "/imgs/pest-prevention.png",
      title: "Pest Prevention",
      desc: "We outsource a daily inspection of pest activity inside and outside the plant to ensure a proactive approach to pest control. In addition, we conduct a comprehensive quarterly audit and trend analysis in collaboration with our pest control team to drive continual improvement.",
    },
  ];
  return (
    <div className="container flex flex-col items-center gap-12">
      <h2 className="text-center text-[32px] lg:text-5xl border-b-4 border-primary pb-3">
        Quality Assurance
      </h2>
      <p className="lg:w-[70%] text-lg text-center">
        The Food Safety and Quality Assurance Team plays a critical role in
        upholding our commitment to quality and adherence to Statutory and
        Regulatory requirements.
      </p>
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
