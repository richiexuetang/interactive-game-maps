import localFont from "next/font/local";

export const hyliaRegular = localFont({
  src: [
    {
      path: "../../public/fonts/HyliaSerif.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-hyliaRegular",
});

export const masonRegular = localFont({
  src: [
    {
      path: "../../public/fonts/Mason-Regular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-masonRegular",
});

export const crimsonPro = localFont({
  src: [
    {
      path: "../../public/fonts/CrimsonPro.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-crimsonPro",
});

export const mantiniaRegular = localFont({
  src: [
    {
      path: "../../public/fonts/Mantinia-Regular.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mantiniaRegular",
});

export const optiCollumnaSolid = localFont({
  src: [
    {
      path: "../../public/fonts/OPTIColumna-Solid.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-optiCollumnaSolid",
});

const hybrid = localFont({
  src: [
    {
      path: "../../public/fonts/Hybrid-Medium.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-hybrid",
});

export const getBodyFont = (font: any) => {
  switch (font) {
    case "zelda-tears-of-the-kingdom":
      return hyliaRegular.className;
    case "witcher-3":
      return masonRegular.className;
    case "black-myth-wukong":
      return crimsonPro.className;
    case "elden-ring":
      return mantiniaRegular.className;
    case "hogwarts-legacy":
      return hybrid.className;
    default:
      console.log(`${font} does not have a corresponding font`);
  }
};

export const getFontClassName = (font: any) => {
  switch (font) {
    case "zelda-tears-of-the-kingdom":
      return hyliaRegular.className;
    case "witcher-3":
      return masonRegular.className;
    case "black-myth-wukong":
      return crimsonPro.className;
    case "elden-ring":
      return mantiniaRegular.className;
    case "hogwarts-legacy":
      return optiCollumnaSolid.className;
    default:
      console.log(`${font} does not have a corresponding font`);
  }
};
