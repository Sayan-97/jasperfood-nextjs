import Image from "next/image";

export default function ContactUs() {
  return (
    <div>
      <div className="flex flex-col gap-12">
        <div
          style={{
            background: `url(${"/imgs/contact-us-bg.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black bg-opacity-[66%] py-28">
            <div className="container flex justify-center text-center text-white">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
        <div className="container flex max-lg:flex-col items-center justify-between gap-12">
          <div className="w-full lg:w-1/3 space-y-12">
            <div className="w-full flex flex-col items-center text-center gap-4">
              <Image
                src="/svgs/location.svg"
                alt="img"
                width={56}
                height={56}
              />
              <h6 className="text-xl font-semibold">Corporate Office</h6>
              <p>
                {" "}
                C - 3430, Green Fields Colony, Sector - 43, Faridabad - 121003,
                Haryana, INDIA
              </p>
            </div>
            <div className="w-full flex flex-col items-center text-center gap-4">
              <h6 className="text-xl font-semibold">Plant Address</h6>
              <p>
                {" "}
                Building No.: 68 - 69, Pragati Vihar Industrial Area, Sector -
                59, Ballabgarh, Faridabad - 121004, Haryana, INDIA
              </p>
            </div>
          </div>

          <form className="w-full lg:w-1/2 p-12 bg-[#F5F5F5] rounded-2xl space-y-6">
            <div className="grid gap-1">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" autoComplete="on" />
            </div>
            <div className="flex max-lg:flex-col gap-6">
              <div className="w-full grid gap-1">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" autoComplete="on" />
              </div>
              <div className="w-full grid gap-1">
                <label htmlFor="phn">Phone Number</label>
                <input type="text" id="phn" autoComplete="on" />
              </div>
            </div>
            <div className="grid gap-1">
              <label htmlFor="sub">Select Subject?</label>
              <input type="text" id="sub" autoComplete="on" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="msg">Message</label>
              <input type="text" id="msg" autoComplete="on" />
            </div>
          </form>
        </div>

        <section className="container py-12 lg:py-20 grid gap-12 lg:grid-cols-4 justify-items-center">
          <div className="flex flex-col items-center text-center gap-4">
            <Image
              src="/svgs/business.svg"
              alt="img"
              width={48}
              height={46.2}
              className="w-10 h-10"
            />
            <h6 className="text-xl font-semibold">Business Enquiries</h6>
            <p>Pranay Mishra</p>
            <p>CEO</p>
            <p>ceo@jaspergroup.in</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Image
              src="/svgs/factory.svg"
              alt="img"
              width={48}
              height={46.2}
              className="w-10 h-10"
            />
            <h6 className="text-xl font-semibold">Plant Enquiries</h6>
            <p>Shahid Khan</p>
            <p>Plant Head</p>
            <p>planthead@jaspergroup.in</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Image
              src="/svgs/email.svg"
              alt="img"
              width={48}
              height={46.2}
              className="w-10 h-10"
            />
            <h6 className="text-xl font-semibold">Email</h6>
            <p>info@jaspergroup.in</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Image
              src="/svgs/call.svg"
              alt="img"
              width={48}
              height={46.2}
              className="w-10 h-10"
            />
            <h6 className="text-xl font-semibold">Phone</h6>
            <p>+91 99998 72292</p>
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
              <Image
                src="/svgs/facebook.svg"
                alt="img"
                width={48}
                height={48}
              />
              <p className="text-2xl">Facebook</p>
            </div>
            <div className="grid justify-items-center gap-4">
              <Image
                src="/svgs/instagram.svg"
                alt="img"
                width={48}
                height={48}
              />
              <p className="text-2xl">Instagram</p>
            </div>
            <div className="grid justify-items-center gap-4">
              <Image
                src="/svgs/linkedin.svg"
                alt="img"
                width={48}
                height={48}
              />
              <p className="text-2xl">Linkedin</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
