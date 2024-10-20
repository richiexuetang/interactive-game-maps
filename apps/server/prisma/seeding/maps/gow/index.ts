import { collectibles } from "./collectibles";
import { locations } from "./locations";
import { loot } from "./loot";
import { missions } from "./missions";
import { other } from "./other";

export const gow = {
  slug: "god-of-war-ragnarok",
  title: "God of War: Ragnarok",
  releaseDate: new Date("2022-11-09"),
  maps: [
    {
      title: "Sindri's House",
      slug: "sindris-house",
      zoom: 11,
      minZoom: 10,
      maxZoom: 11,
      center: [0.67383757443072, -0.80800284778337],
    },
    {
      title: "Vanaheim",
      slug: "vanaheim",
      zoom: 12,
      minZoom: 9,
      maxZoom: 13,
      center: [0.4890167848268, -0.73532026743],
      regions: [
        {
          title: "Ancient Guanyin Temple",
          coordinates: [],
        },
      ],
    },
    {
      title: "Alfheim",
      slug: "alfheim",
      zoom: 9,
      minZoom: 9,
      maxZoom: 13,
      center: [0.4890167848268, -0.73532026743],
    },
    {
      title: "Muspelheim",
      slug: "muspelheim",
      zoom: 9,
      minZoom: 13,
      maxZoom: 13,
      center: [0.72851125335819, -0.8027730497873],
    },
    {
      title: "Midgard",
      slug: "midgard",
      zoom: 10,
      minZoom: 9,
      maxZoom: 13,
      center: [0.74729625004228, -0.83045228169656],
    },
    {
      title: "Svartalfheim",
      slug: "svartalfheim",
      zoom: 10,
      minZoom: 9,
      maxZoom: 13,
      center: [0.70578807787277, -0.74952693952281],
    },
    {
      title: "Jotunheim",
      slug: "jotunheim",
      zoom: 10,
      minZoom: 9,
      maxZoom: 13,
      center: [0.73914174638417, -0.84643540613633],
    },
    {
      title: "Asgard",
      slug: "asgard",
      zoom: 10,
      minZoom: 9,
      maxZoom: 13,
      center: [0.71636238765028, -0.81436157226562],
    },
    {
      title: "Helheim",
      slug: "helheim",
      zoom: 10,
      minZoom: 9,
      maxZoom: 13,
      center: [0.70448053984894, -0.84938049316406],
    },
    {
      title: "Niflheim",
      slug: "niflheim",
      zoom: 10,
      minZoom: 9,
      maxZoom: 13,
      center: [0.71340624813072, -0.823974609375],
    },
  ],
  groups: [locations, collectibles, loot, missions, other],
};
