import BookmanOldStyle from "next/font/local";
import MonotypeCorsiva from "next/font/local";

export const bookmanFont = BookmanOldStyle({
  src: [
    {
      path: "../public/fonts/BookmanOldStyle.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const monotypeFont = MonotypeCorsiva({
  src: [
    {
      path: "../public/fonts/MonotypeCorsiva.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
