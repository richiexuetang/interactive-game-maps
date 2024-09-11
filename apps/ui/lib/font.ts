import localFont from "next/font/local";

export const hyliaRegular = localFont({
  src: [
    {
      path: "../public/fonts/HyliaSerifBeta-Regular.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-hyliaRegular",
});

export const masonRegular = localFont({
  src: [
    {
      path: "../public/fonts/Mason-Regular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-masonRegular",
});

export const getFontClassName = (font: any) => {
  switch (font) {
    case "totk":
      return hyliaRegular.className;
    case "witcher-3":
      return masonRegular.className;
    default:
      console.log(`${font} does not have a corresponding font`);
  }
};
