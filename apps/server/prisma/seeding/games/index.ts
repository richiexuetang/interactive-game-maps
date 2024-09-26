import { Game } from "./interface";

export const games: Game[] = [
  {
    slug: "witcher-3",
    title: "The Witcher 3: Wild Hunt",
    zoom: 9,
    minZoom: 8,
    maxZoom: 14,
    center: [83.937238401332, -168.44211701243],
    description:
      "The Witcher 3 Interactive Map - Find all Bosses, Quests, Keys &amp; more! Use the progress tracker to keep track of your collectibles and get 100%!",
  },
  {
    slug: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    zoom: 9,
    minZoom: 8,
    maxZoom: 14,
    center: [0.847054938872, -0.74445750270152],
    description:
      "Hogwarts Legacy Interactive Map - Collectibles, Merlin Trials, Floo Flames, Eye Puzzles, Magical Beasts, Gold Chests &amp; more! Use the progress tracker to get 100%!",
  },
  {
    slug: "god-of-war-ragnarok",
    title: "God of War: Ragnarok",
    zoom: 9,
    minZoom: 9,
    maxZoom: 13,
    center: [0.4890167848268, -0.73532026743],
    description:
      "God of War: Ragnarök Interactive Map - Find all collectibles including Legendary Chests, Treasure Maps, Labors, Artifacts, Draugrs &amp; more! Use the progress tracker to get 100%!",
  },
];
