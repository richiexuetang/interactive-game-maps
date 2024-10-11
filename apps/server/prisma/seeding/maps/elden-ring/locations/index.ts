import { divineTowers } from "./divine-tower";
import { dragonShrines } from "./dragon-shrine";
import { dungeons } from "./dungeon";
import { elevators } from "./elevator";
import { evergaols } from "./evergaol";
import { hiddenPassages } from "./hidden-passage";
import { impSealStatues } from "./imp-seal-statue";
import { landmarks } from "./landmarks";
import { legacyDungeon } from "./legacy-dungeon";
import { miquellasCross } from "./miquellas-cross";
import { portals } from "./portal";
import { siteOfGrace } from "./site-of-grace";
import { spiritSpringJump } from "./spirit-spring-jump";
import { stakes } from "./stake";
import { wanderingMausoleums } from "./wandering-mausoleum";

export const locations = [
  {
    title: "Divine Tower",
    locations: divineTowers,
  },
  {
    title: "Dragon Shrine",
    locations: dragonShrines,
  },
  {
    title: "Dungeon",
    locations: dungeons,
  },
  {
    title: "Elevator",
    locations: elevators,
  },
  {
    title: "Evergaol",
    locations: evergaols,
  },
  {
    title: "Hidden Passage",
    locations: hiddenPassages,
  },
  {
    title: "Imp Seal Statue",
    locations: impSealStatues,
  },
  {
    title: "Landmark",
    locations: landmarks,
  },
  {
    title: "Legacy Dungeon",
    locations: legacyDungeon,
  },
  {
    title: "Miquella's Cross",
    info: "These crosses guide players towards the end of the game and are central to the narrative progression.",
    icon: "miquellas_cross",
    locations: miquellasCross,
  },
  {
    title: "Portal",
    locations: portals,
  },
  {
    title: "Site of Grace",
    locations: siteOfGrace,
  },
  {
    title: "Spiritspring Jump",
    locations: spiritSpringJump,
  },
  {
    title: "Stake of Marika",
    info: "Upon dying within the vicinity of a Stake of Marika, you may choose to respawn there instead of a Site of Grace.",
    locations: stakes,
  },
  {
    title: "Wandering Mausoleum",
    icon: "wandering_mausoleum",
    locations: wanderingMausoleums,
  },
];
