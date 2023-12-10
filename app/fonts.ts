import BookmanOldStyle from "next/font/local";
import MonotypeCorsiva from "next/font/local";

// Bookman Old Style Font
export const bookmanFont = BookmanOldStyle({
  src: [
    {
      path: "../public/fonts/BookmanOldStyle/BookmanOldStyle-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/BookmanOldStyle/BookmanOldStyle-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

// Monotype Corsiva Font
export const monotypeFont = MonotypeCorsiva({
  src: [
    {
      path: "../public/fonts/MonotypeCorsiva/MonotypeCorsiva-Normal.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});
