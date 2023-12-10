import AboutUsProfile from "../public/imgs/about-us-profile.png";
import AboutUsTeam from "../public/imgs/about-us-team.png";
import AboutUsWhyUs from "../public/imgs/about-us-why-us.png";

// Navbar Links
export const navbarLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    dropdown: [
      { label: "Profile", link: "/about-us" },
      { label: "Team", link: "/about-us/team" },
      { label: "Why Us", link: "/about-us/why-us" },
    ],
  },
  {
    label: "Food Safety & Quality",
    dropdown: [
      { label: "Certifications", link: "/food-and-safety" },
      {
        label: "Quality Assurance",
        link: "/food-and-safety/quality-assurance",
      },
    ],
  },
  {
    label: "Products",
    dropdown: [
      { label: "Veg", link: "/products/veg" },
      { label: "Non Veg", link: "/products/non-veg" },
    ],
  },
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];

export const aboutUs = [
  {
    image: AboutUsProfile,
    title: "Profile",
    des: "We're passionate food artisans creating high-quality, delicious products' bring your culinary dreams to life. Explore our offerings and savor the art of flavor with us!",
  },
  {
    image: AboutUsTeam,
    title: "Team",
    des: "We're passionate food artisans creating high-quality, delicious products' bring your culinary dreams to life. Explore our offerings and savor the art of flavor with us!",
  },
  {
    image: AboutUsWhyUs,
    title: "Why Us",
    des: "We're passionate food artisans creating high-quality, delicious products' bring your culinary dreams to life. Explore our offerings and savor the art of flavor with us!",
  },
];
