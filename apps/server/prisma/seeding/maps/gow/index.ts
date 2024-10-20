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
          title: "The Sink Holes",
          coordinates: [
            [0.8986722765862623, -0.6582409536975288],
            [0.8666019751386558, -0.676994666867683],
            [0.8466236166657284, -0.69679999012217],
            [0.7940485035125968, -0.6337033850636643],
            [0.8779930974306813, -0.5776175139005569],
            [0.8986722765862623, -0.6582409536975288],
          ],
        },
        {
          title: "The Plains",
          coordinates: [
            [0.8404898893500571, -0.6976763318590874],
            [0.8797455747141251, -0.6587667587396752],
            [0.9631625118971598, -0.6855828158895405],
            [0.9724504091307622, -0.8517372092102773],
            [0.9724504091307622, -0.8517372092102773],
            [0.8404898893500571, -0.6976763318590874],
          ],
        },
        {
          title: "The Jungle",
          coordinates: [
            [0.830144736967441, -0.7203687579118668],
            [0.772149560861088, -0.6983086061324252],
            [0.7478607443563852, -0.8373619224050333],
            [0.836836434449642, -0.8403363248921436],
            [0.830144736967441, -0.7203687579118668],
          ],
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
      zoom: 12,
      minZoom: 9,
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
