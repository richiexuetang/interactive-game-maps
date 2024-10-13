import { weapons } from "./weapon";

export const loot = {
  title: "Loot",
  categories: [
    {
      title: "Armor",
      icon: "totk_armor",

      locations: [
        {
          mapSlug: "hyrule",
          title: "Archaic Warm Greaves",
          description:
            "**Set:** Archaic \n\n**Location:**  In a chest inside the giant hollow tree.\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Cold Resistance",
          latitude: "1.00329466065250",
          longitude: "-0.67843528645486",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/ea56967a-d18f-4b25-a8cc-1149b27945de.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/4d1fd69b-b95f-42c4-9f0c-f691d5b9cc92.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Climbing Gear",
          description:
            "**Set:** Climber's \n- Climbing Boots.\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Climb Speed Up",
          latitude: "0.72675052513526",
          longitude: "-0.74239522218846",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dd786438-4cd9-4802-b4f9-955fc7521d2d.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/56deb9ad-4448-41b1-9e37-f38c0b39826d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Dark Tunic",
          description:
            "**Set:** Dark\n- Dark Hood for Poe.\n\n**Stats:**\n- 3 Defense",
          latitude: "0.70852500354512",
          longitude: "-0.71071498096032",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/6a353440-398f-4a0c-904f-a36352833796.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Glide Shirt",
          description:
            "**Set:** Glide\n\n**Location:**  Reward for completing the Dive Ceremony\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Skydive Mobility Up",
          latitude: "1.07139422695420",
          longitude: "-0.77785134315428",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dc9ca7c3-d393-4326-97ce-d7cb47a4d260.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/9c05f915-ae7c-4aba-be4b-5293f9ddb247.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Froggy Hood",
          description:
            "**Set:** Froggy \n- Froggy Sleeve\n\n**Stats:**\n- 8 Defense\n\n**Armor Effect:** Slip Resistance",
          latitude: "0.75952704392067",
          longitude: "-0.80820187926179",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/786cf389-5518-4f12-b73d-808231a7a547.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Korok Mask",
          description:
            "**Location:**  In the Forest Coliseum, guarded by the Black Hinox\n\n**Stats:**\n- 1 Defense\n\n**Armor Effect:** Shakes and jingles when near a korok puzzle",
          latitude: "0.45622113025173",
          longitude: "-0.70767105524195",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d8617477-a1b0-4c0f-bd67-9f4b0f8eec83.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/a1f63338-5d44-446d-bcd2-e2367b314cc0.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sheik's Mask",
          description:
            "**Location:**  In a chest inside the Desert Coliseum, after completing all the waves\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.25748945881047",
          longitude: "-0.84190431892696",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4fb16f1e-6cdd-4cf2-9ede-b2547e63f929.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/45f88c73-4576-4e9f-9552-158ee118b780.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Archaic Tunic [Chest]",
          description:
            "**Location:** Pondside Cave - In a little outcropping, by the eastern entrance.  \n**Coordinates:** 0239 -1558 1365",
          latitude: "0.99610615227667",
          longitude: "-0.69548472762179",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dddd17c0-dba2-4e3c-bed2-55895a3282e1.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/c8b09b41-88dc-417b-ac1d-5d2f1a9e498f.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Trousers of the Wind",
          description: "Old Map Location\n\n**Stats:**\n- 3 Defense",
          latitude: "0.26261294711976",
          longitude: "-0.58100134290478",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/8905ae6c-d3f7-4c8c-a895-b80f66a2e4a5.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/29bd0e48-457c-4714-a22e-0b5592e5920d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zora Helm",
          description:
            "**Set:** Zora Armor\n- Zora Armor. \n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Swim Speed Up",
          latitude: "1.06288773561360",
          longitude: "-0.57043612003395",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d6a67d63-2a9a-4093-aef4-1e211ee28024.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/56ecd3b4-25aa-426a-bd85-d963576742fa.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Snowquill Headdress",
          description:
            "**Set:** Snowquill \n\n**Location:**  Can be purchased from the armor shop in Rito Village\n\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Cold Resistance",
          latitude: "0.76025385864185",
          longitude: "-0.82003779709285",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/fb13c2b8-0c6b-49cd-a79b-e5ff68e6a057.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/7ab2458c-12aa-4199-9c01-a578a7ff0d03.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Snowquill Tunic",
          description:
            "**Set:** Snowquill \n\n**Location:**  Can be purchased from the armor shop in Rito Village\n\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Cold Resistance",
          latitude: "0.75989983820340",
          longitude: "-0.82003779709439",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0f07575a-f7e7-4f80-8aee-19e5b832f3ca.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/6d0aa1c0-c83f-4d2a-9ca6-d96591729c52.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Snowquill Trousers",
          description:
            "**Set:** Snowquill \n\n**Location:**  Can be purchased from the armor shop in Rito Village\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Cold Resistance",
          latitude: "0.75954581773780",
          longitude: "-0.82003779709439",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/47d594de-a828-4e4e-bb4c-3f6e3a68f197.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/1a5395ad-9426-47ee-810e-58191c203577.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Flamebreaker Helm",
          description:
            "**Set:** Flamebreaker \n\n**Location:**  Can be purchased from the armor shop in Goron City\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Flame Guard",
          latitude: "0.78034085749034",
          longitude: "-0.65032369847430",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/11fa3192-fe5f-4fc4-bd39-846d41108b66.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Flamebreaker Armor",
          description:
            "**Set:** Flamebreaker \n\n**Location:**  Can be purchased from the armor shop in Goron City\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Flame Guard",
          latitude: "0.77996564355929",
          longitude: "-0.65031297504925",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/16612827-28bd-4ad1-b572-227160620f47.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Flamebreaker Boots",
          description:
            "**Set:** Flamebreaker \n\n**Location:**  Can be purchased from the armor shop in Goron City for 1200 rupees\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Flame Guard",
          latitude: "0.77959016907113",
          longitude: "-0.65032370388383",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/833be969-ded5-4ac0-b7b4-5dee25ecb3ce.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Hylian Hood",
          description:
            "**Set:** Hylian\n\n**Location:** Can be purchased from the armor shop in Lookout Landing\n\n**Stats:**\n- 3 Defense",
          latitude: "0.70590334395966",
          longitude: "-0.70949926972617",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2f5c4131-b440-4053-bca6-e1800bc7df83.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/2b9d2829-fac7-45ca-a4dc-f4384980fbc8.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Hylian Tunic",
          description:
            "**Set:** Hylian\n\n**Location:**  Can be purchased from the armor shop in Lookout Landing\n\n**Stats:**\n- 3 Defense",
          latitude: "0.70590334395966",
          longitude: "-0.70914521813543",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/ebe517b3-22b3-4b20-bb19-225f5944b843.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/3d706a2c-f6bd-47eb-97de-f7dff9b3d656.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Hylian Trousers",
          description:
            "**Set:** Hylian\n\n**Location:**  Can be purchased from the armor shop in Lookout Landing\n\n**Stats:**\n- 3 Defense",
          latitude: "0.70590334395966",
          longitude: "-0.70879116654586",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/35d78e19-062e-42d6-8dcd-51582e663959.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/9854e99c-a247-4381-b293-966cb8bd4ea2.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Well-Worn Hair Band",
          description:
            "**Location:**  In the chest that's inside Zelda's Secret Well\n\n**Stats:**\n- 0 Defense",
          latitude: "0.62865426376763",
          longitude: "-0.59665068984154",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a9d8dd40-8724-40c0-ba4a-8337001fd94f.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/828bb8e6-7965-479e-b0f8-e6826eba9f32.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Glide Tights",
          description:
            "**Set:** Glide\n\n**Location:**  Reward for completing the Dive Ceremony\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Skydive Mobility Up",
          latitude: "1.11069219111400",
          longitude: "-0.69696664810311",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dad5cd57-2178-4298-be3a-11d476018a19.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/3823ad39-76f5-41e2-842e-18b9d5a4eca7.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Glide Mask",
          description:
            "**Set:** Glide\n\n**Location:**  Reward for completing the Dive Ceremony\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Skydive Mobility Up",
          latitude: "1.01876731483400",
          longitude: "-0.55857002734956",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/37e6e1b7-b49d-4cfa-892f-ff46d0852cd0.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/2552eb70-e3f2-4dc0-90d9-88ecc874a795.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Stealth Mask",
          description:
            "**Set:** Stealth \n\n**Location:**  Can be purchased from the armor shop in Kakariko Village\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.67147230309581",
          longitude: "-0.64310856163431",
        },
        {
          mapSlug: "hyrule",
          title: "Stealth Chest Guard",
          description:
            "**Set:** Stealth \n\n**Location:**  Can be purchased from the armor shop in Kakariko Village\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.67144011879752",
          longitude: "-0.64277596771626",
        },
        {
          mapSlug: "hyrule",
          title: "Stealth Tights",
          description:
            "**Set:** Stealth \n\n**Location:**  Can be purchased from the armor shop in Kakariko Village\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.67145084689777",
          longitude: "-0.64244337379941",
        },
        {
          mapSlug: "hyrule",
          title: "Ruby Circlet",
          description:
            "**Price:** 1,300 Rupees\n\n**Location:**  Starlight Memories\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Cold Resistance",
          latitude: "0.61023795200008",
          longitude: "-0.82709066569825",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f5b6006c-387e-4cc5-9bab-28d09aac903d.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/22a3f76c-4680-450c-9eda-9d40a5e73934.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sapphire Circlet",
          description:
            "**Price:** 1,400 Rupees\n\n**Location:**  Starlight Memories\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Heat Resistance",
          latitude: "0.61021247245945",
          longitude: "-0.82746215164636",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d472db43-8491-4fa3-b792-d9d8efd9f437.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/0780ee64-ddc7-4579-ac5c-8d15092eadf4.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Amber Earrings",
          description:
            "**Price:** 400 Rupees\n\n**Location:**  Starlight Memories\n\n**Stats:**\n- 4 Defense",
          latitude: "0.61058796041250",
          longitude: "-0.82706518471244",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d31a02c8-a9da-4d2b-b053-116f20f1480c.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/e0eb338e-5457-45a6-bf7e-8285809d53d1.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Desert Voe Headband",
          description:
            "**Price:** 450 Rupees  \n\n**Set:** Desert Voe\n- Desert Voe Spaulder\n\n**Location:**  Sold by Saula's shop stall in the Kara Kara Bazaar.\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Heat Resistance",
          latitude: "0.62103053801921",
          longitude: "-0.80850027501523",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9c76c703-ebdb-41a2-89e6-d93117933f15.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/aaee24af-0275-4da7-96b4-f4ba50424dcc.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Champion's Leathers",
          description:
            "**Location:**  Ignite two torches and then open the chest located in the tomb behind the throne\n\n**Stats:**\n- 5 Defense\n\nClue is in the Zelda's Secret Well.",
          latitude: "0.78181802780945",
          longitude: "-0.49955186667987",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/976813fe-fa4e-4a78-8cf1-aece9da10c8f.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Yiga Tights",
          description:
            "**Set:** Yiga \n- Yiga Mask, ascend to the Aliza room and talk to her\n\n**Stats:**\n- 1 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.76898594087598",
          longitude: "-0.72381564777964",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f1966325-7de1-4632-b568-a876bd89c150.jpg",
              type: "image",
            },
            {
              url: "https://www.video.com/watch?v=qJHJ3Ag7djc&ab_channel=IGNGuides",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Yiga Mask",
          description:
            "**Set:** Yiga \n- Yiga Armor\n\n**Location:**  Infiltrate the hideout and talk to Pitar inside the house\n\n**Stats:**\n- 1 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.63046709057390",
          longitude: "-0.72834488002923",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4d9d62ad-a8a8-49b1-987b-a2bbfe307972.jpg",
              type: "image",
            },
            {
              url: "https://www.video.com/watch?v=qJHJ3Ag7djc&ab_channel=IGNGuides",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Yiga Armor",
          description:
            "**Set:** Yiga \n- Yiga Mask\n\n**Location:**  Infiltrate the lighthouse, and talk to Konba\n\n**Stats:**\n- 1 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.80460482871588",
          longitude: "-0.55815727345245",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a95f2e32-00f8-43f9-a649-6b5520cdf737.jpg",
              type: "image",
            },
            {
              url: "https://www.video.com/watch?v=qJHJ3Ag7djc&ab_channel=IGNGuides",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Radiant Shirt",
          description:
            "**Set:** Radiant \n\n**Location:** Can be purchased from the armor shop in Kakariko Village\n\n**Stats:**\n- Defense 3",
          latitude: "0.67104183809406",
          longitude: "-0.64278468489695",
        },
        {
          mapSlug: "hyrule",
          title: "Radiant Mask",
          description:
            "**Set:** Radiant \n\n**Location:**  Can be purchased from the armor shop in Kakariko Village\n\n**Stats:**\n- Defense 3",
          latitude: "0.67104183809406",
          longitude: "-0.64313873648649",
        },
        {
          mapSlug: "hyrule",
          title: "Radiant Tights",
          description:
            "**Set:** Radiant \n\n**Location:**  Can be purchased from the armor shop in Kakariko Village\n\n**Stats:**\n- Defense 3",
          latitude: "0.67105228129974",
          longitude: "-0.64243072224127",
        },
        {
          mapSlug: "hyrule",
          title: "Royal Guard Boots",
          description:
            "**Set:** Royal Guard\n\n**Location:**  Hyrule Castle B3, behind bookshelves, in King's Study\n\n**Stats:**\n- 4 Defense \n\n**Armor Effect:** ??",
          latitude: "0.78493196096744",
          longitude: "-0.37369541823942",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/5cd90e44-7eff-4153-810a-24a36c97e2ea.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Royal Guard Cap",
          description:
            "**Set:** Royal Guard\n\n**Location:**  In the corner of Princess Zelda's Room - behind a small partition\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** ??",
          latitude: "0.77574557696094",
          longitude: "-0.46610458725151",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/8f8a3534-e692-40cf-9790-93cf9fec9dc2.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Royal Guard Uniform",
          description:
            "**Set:** Royal Guard\n\n**Location:**  In the Guard's Chamber\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** ??",
          latitude: "0.73042060993953",
          longitude: "-0.71627221427192",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/411b2669-8591-4aa2-923f-add8ba921cee.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zonaite Helm",
          description:
            "**Set:** Zonaite Set\n- Zonaite Waistguard\n\n**Location:**  Lightcast Island\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** Energy Up",
          latitude: "1.07619031007830",
          longitude: "-0.81905671275507",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/df444cbe-3ba3-4b12-8f49-4d4e8569dad2.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/e5ecf3fd-cfa3-46cb-a900-0a575082d2f1.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zonaite Waistguard",
          description:
            "**Set:** Zonaite Set\n- Zonaite Helm\n\n**Location:**  Inside Zonaite Forge Island, use ascend ability under tower in the lava pool area\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** Energy Up",
          latitude: "0.98996780049130",
          longitude: "-0.62680792471193",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/82c3cae8-7ae5-4b13-88aa-4437ce6e200d.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/1fbcbafb-e68c-402a-8f52-c82dce675e8d.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Barbarian Armor",
          description:
            "**Set:** Barbarian\n- Barbarian Helm\n\n**Location:**  Inside Crenel Hills Cave, past the Luminescent Stone Talus, behind breakable rocks.\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.72697551503279",
          longitude: "-0.68705688369113",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4a892186-962b-4045-a8aa-e2f27bf2cff8.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/fcd34b46-138f-4688-91e3-d8d805dc49e2.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Fierce Deity Boots",
          description:
            "**Set:** Fierce Deity\n- Fierce Deity Mask, you need to go down around the water level, you'll see an area with branches that you can cut down. You'll need to climb.\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.68907507055369",
          longitude: "-0.73853150010195",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/c345b5bf-bad1-4dc4-9b07-e0eca9268589.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/003b693e-49c6-4726-b809-1d73a190e4f2.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Climber's Bandana",
          description:
            "**Set:** Climber's\n- Climbing Boots, after climbing to the top of the cave\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Climb Speed Up",
          latitude: "0.71911264280638",
          longitude: "-0.58360691465018",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/37dae596-4fc0-4877-95a4-d67485c5db7d.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/26e52425-e846-4838-8ca4-7bb935fe51d4.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Climbing Boots",
          description:
            "**Set:** Climber's\n- Climber\u2019s Bandana, keep right at the pool of water. Follow the path downward until you reach ruins. At the back of this area, there's a gate you can lift to lower the water level. Life the gate, then go right into a secret side area with a tent. Open the chest.\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Climb Speed Up",
          latitude: "0.72046258759651",
          longitude: "-0.61146184802050",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/5b4957d1-92aa-4466-b546-93392a6e2e5b.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/93605fcf-6b86-4e7c-bfff-d31009dcf6a8.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zora Armor",
          description:
            "**Set:** Zora Armor\n- Zora Greaves\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Swim Speed Up",
          latitude: "0.71954007049899",
          longitude: "-0.59584132366368",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d9bb9e3d-0fa2-4661-a1aa-27a800a354fd.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/dd3d5a54-02ae-4131-b8be-c0e7586345ff.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zora Greaves",
          description:
            "**Set:** Zora Armor\n- Zora Armor\n\n**Location:**  \n- In the Ancient Zora Waterworks, after entering the whirlpool and following the path into the larger cave, head northwest to find a hole in the floor, chest will be behind the waterfall \n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Swim Speed Up\n\n**Coordinates:** 3585, 0247, -0103",
          latitude: "0.71126267035976",
          longitude: "-0.58788171190960",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e84bdbca-ad3a-43a1-aea4-df1a4c3617df.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/229dd502-63dd-4306-9335-1d91257427ad.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Lightning Helm",
          description:
            "**Location:**  Complete 3 Yiga Challenges in the Yiga Clan Hideout\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Lightning Proof",
          latitude: "0.65941125066580",
          longitude: "-0.81865432407099",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/fbf8ecbf-5c2c-410d-865b-d5d8b7fa603e.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/09e07670-c95b-452d-a7de-362595a9a16f.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Desert Voe Spaulder",
          description:
            "**Price:** 1,300 Rupees  \n\n**Set:** Desert Voe\n- Desert Voe Headband\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Heat Resistance",
          latitude: "0.60919329074288",
          longitude: "-0.82494020462048",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/7592298f-2a0f-43b3-923c-6b42b171d3ca.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/aaf43baa-7112-46bb-8999-53017220b464.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Desert Voe Trousers",
          description:
            "**Price:** 650 Rupees  \n**Set:** Desert Voe\n- Desert Voe Headband\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Heat Resistance",
          latitude: "0.60916714068250",
          longitude: "-0.82456000149261",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/00fed31f-4c66-49e9-b818-3f73d70a5e5f.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/b733d634-f6e5-4dca-ad70-eada3f1971fa.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Miner's Top",
          description:
            "Old Map Location\n\n**Location:**  ??\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Glow",
          latitude: "0.36120541972244",
          longitude: "-0.73781309437581",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e2fb06f0-8693-4cac-af88-57e18227e83b.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Miner's Trousers",
          description:
            "Old Map Location\n\n**Location:**  -1287, -2251, -0707\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Glow",
          latitude: "0.30681572521353",
          longitude: "-0.74455267759336",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/eaa757e6-9763-4243-b270-437e3f9f4f68.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Miner's Mask",
          description:
            "Old Map - Location\n\n**Location:**  ??  \n**Coordinates:** -3232, -2477, -0475\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Glow",
          latitude: "0.29897261686301",
          longitude: "-0.80714165918207",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d177b077-fd5e-4d87-8ad3-e61c0c22aad4.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Barbarian Helm",
          description:
            "**Set:** Barbarian \n- Barbarian Armor\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.65569147495026",
          longitude: "-0.62336076006707",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/442af50e-e851-4797-9614-c4122242b30c.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/c1e3dfb5-289f-450e-b2aa-29e600b29f4d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Barbarian Leg Wraps",
          description:
            "**Set:** Barbarian\n- Barbarian Armor, jump across a gap on the higher ridge past an Ice Like.\n\n**Coordinates:** 4051, -1877, 0155\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.64264916906829",
          longitude: "-0.57274550199557",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9ebc4f55-f278-4c05-b984-ba68b41c7124.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/e1d886e3-dcb5-4b64-85d8-7d3f0f02da8b.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rubber Armor",
          description:
            "**Set:** Rubber \n- Rubber Helm. Behind a Shock Like, destroy an elevated cracked wall.\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Shock Resistance",
          latitude: "0.67003138504873",
          longitude: "-0.70626050233744",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0d4e2fa0-b914-4443-9f6e-4ae9b6fb4745.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/f719d3f0-d6e5-4506-9522-d778eb93a23c.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Dark Trousers",
          description:
            "**Set:** Dark\n- Dark Hood for Poe.\n\n**Stats:**\n- 3 Defense",
          latitude: "0.70852902655106",
          longitude: "-0.71034416556409",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/5a269a6b-79ce-4114-ad6e-cf6b58c6b6d4.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Gaiters of the Depths",
          description:
            "**Set:** Depths\n- Hood of the Depths for 200 Poe\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Gloom Resistance",
          latitude: "0.70901715124059",
          longitude: "-0.71034550666766",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/eac0cdf2-23a3-4e93-9019-e7b9ee23b97a.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Dark Hood",
          description:
            "**Set:** Dark\n- Dark Tunic for Poe.\n\n**Stats:**\n- 3 Defense",
          latitude: "0.70852902655106",
          longitude: "-0.71104489266853",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f9626a91-2baa-4c9f-8699-e34c8f91efff.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Hood of the Depths",
          description:
            "**Set:** Depths\n- Tunic of the Depths for 300 Poe.\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Gloom Resistance",
          latitude: "0.70899636571308",
          longitude: "-0.71105226874306",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/6f3fa77a-4ca0-4a2d-824c-0f1693633dc5.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Majora's Mask",
          description:
            "**Set:** ??\n\n**Location:**  Complete Floating Coliseum\n\n**Stats:**\n- 1 Defense\n\n**Armor Effect:** Makes it harder for certain enemies to spot you",
          latitude: "0.33851286844560",
          longitude: "-0.74026426378012",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d128166b-dad0-4f2f-be8f-c4ab5c6034d3.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ember Trousers",
          description:
            "**Set:** Ember \n- Ember Headdress\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Hot Weather Attack",
          latitude: "0.74641016297815",
          longitude: "-0.62000937759825",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/175e0dd8-5a53-4d9c-8a2c-4234bcde0917.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/c825f0df-2d0e-4665-a09a-7de900bf2ec8.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Cece Hat",
          description:
            "Cannot be purchased. Complete the Side Adventure Team Cece or Team Reede? to decide if you are worthy of owning such a magnificent fashion statement.",
          latitude: "0.63473312102522",
          longitude: "-0.59515602886646",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/3f8ff94e-cdb3-4d09-bedf-3b68d7f897b0.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/403edb7d-d57d-4015-b803-9c083f41a882.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Frostbite Shirt",
          description:
            "**Set:** Frostbite \n- Frostbite Headdress. Burn away thorns to reach the chest inside a tent.\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Cold Weather Attack",
          latitude: "0.75483626999554",
          longitude: "-0.80008685588953",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/c9a1a4d6-0cf0-4a5a-92d0-74df3435849e.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/43bf24e6-3c98-409f-abcb-75912e7401eb.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ravio's Hood",
          description:
            "**Location:**  Reward for completing Secluded Coliseum\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Increases sideways climbing speed.",
          latitude: "0.31803870098460",
          longitude: "-0.63089938236618",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/6e0e7fc9-f899-4d1c-8eb0-7d2799d32b06.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/e02437d8-8cfe-48fd-a3d0-3437623d5765.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Fierce Deity Mask",
          description:
            "**Set:** Fierce Deity\n- Fierce Deity Armor\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.81340380549888",
          longitude: "-0.59623308229516",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dd9c4bf5-6e14-4407-a2b1-d808ff0aefbd.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/01e2f8b2-de8b-41fe-b3c2-84449d5bcdb7.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Cap of the Wind",
          description:
            "Old Map Location  and follow the path of destroyable rocks\n\n**Stats:**\n- 3 Defense\n\n**WARNING:** The chest is protected by Phantom Ganon!",
          latitude: "0.39927330406449",
          longitude: "-0.55330784300514",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f89aa7ae-b90f-4145-96ad-4b9ef3579c15.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/d7527ea5-dd35-4c43-8648-0210b1667b9d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zonaite Shin Guards",
          description:
            "**Set:** Zonaite Set\n- Zonaite Helm\n\n**Location:**  Inside the spinning sphere\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** Energy Up",
          latitude: "1.11149165236820",
          longitude: "-0.55922899825825",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/5f5f65ed-1869-449c-a845-431ac26f3750.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Evil Spirit Armor",
          description:
            "**Set:** Evil Spirit\n- Evil Spirit Mask Side Quest\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.49799865219322",
          longitude: "-0.55323566383987",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4dd5b5df-d483-4a54-bab9-fb7d5c8f6ce0.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/efad7b49-85cc-409c-b6b5-f9d719911e42.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Vah Medoh Divine Helm",
          description:
            "**Set:** Divine Helms\n- Vah Naboris Divine Helm\n\n**Location:**  Inside North Biron Snowshelf Cave as part of the Treasure of the Secret Springs quest.\n\n**Stats:**\n- 2 armor\n\n**Armor Effect:** Cold Resistance",
          latitude: "0.80530674066462",
          longitude: "-0.82936316728686",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/fa8a4bc2-87dc-47dd-a9bf-c4e3c6bea262.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/5be3fa80-ddf3-42eb-858a-9c48f174e516.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ember Headdress",
          description:
            "**Set:** Ember\n - Ember Shirt\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Hot Weather Attack",
          latitude: "0.79093470815389",
          longitude: "-0.64827365046833",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/48eb3302-53df-4ac1-93b3-e5b2658f6c68.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/8b39cc1c-56fd-4348-8da6-93bf6d162faf.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Fierce Deity Armor",
          description:
            "**Set:** Fierce Deity\n- Fierce Deity Mask\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.75141070283258",
          longitude: "-0.59695450394361",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a09024d1-5c35-4ad3-ba52-d2abd315aba3.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/a2b7ed87-0006-40e9-b06f-6484a1fe2997.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ember Shirt",
          description:
            "**Set:** Ember\n- Ember Headdress\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Hot Weather Attack",
          latitude: "0.77087865304223",
          longitude: "-0.65777551869229",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4490e6e2-aeff-449f-8071-7ba1a93ed337.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/ed6ee27c-c4f8-44ce-9d6c-693c8ea84982.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Frostbite Trousers",
          description:
            "**Set:** Frostbite \n- Frostbite Headdress\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Cold Weather Attack",
          latitude: "0.78406496909258",
          longitude: "-0.79659503574115",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/bdb2484d-5d97-4e82-9b62-6ae2b9b2fbe6.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/0b13836c-8326-429b-85a7-922e463f3583.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Frostbite Headdress",
          description:
            "**Set:** Frostbite \n- Frostbite Shirt\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Cold Weather Attack",
          latitude: "0.79462242168930",
          longitude: "-0.82943367270880",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/85457e1d-906f-4604-b93c-01377adb7590.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/07417d65-bca4-4a11-9300-81cd177c431e.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Soldier's Armor",
          description:
            "**Set:** Soldier's\n- Soldier's Helm  \n**Coordinates:** -0267 0637 -0035\n\n**Stats:**\n- 4 Defense",
          latitude: "0.72396310025340",
          longitude: "-0.71068764028001",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/76e57bb9-aca4-4774-bd3f-82a9fbdafff0.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/781061f7-6098-45be-8ec6-2295bbe1ead2.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Soldier's Helm",
          description:
            "**Set:** Soldier's\n- Soldier's Armor\n\n**Stats:**\n- 4 Defense",
          latitude: "0.71798046612430",
          longitude: "-0.71012648123116",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/cb78bced-d5ac-4aac-b218-327b3d7b9e33.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/a37c43c1-8c59-4802-bbf1-db8df316421a.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Soldier's Greaves",
          description:
            "**Set:** Soldier's\n- Soldier's Helm  \n**Coordinates:** 0307 0280 -0006\n\n**Stats:**\n- 4 Defense",
          latitude: "0.71270153728101",
          longitude: "-0.71336364360667",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dd1560e1-f6a4-4c13-b336-70fd81afefee.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/174c917d-9b4f-443d-82c4-04cf8cb9dbb6.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Midna's Helmet",
          description:
            "**Location:**  In the chest in the coliseum. defeat the waves of bokoblin to open the chest.\n\n**Stats:**\n- 7 Defense\n\n**Armor Effect:** Gloom resistance",
          latitude: "0.26271767568036",
          longitude: "-0.55626820966683",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/334f963a-530e-4fd3-bdc8-a846d03a7ef2.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/0acf7ff8-e341-461a-a80f-0496464c6d71.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Vah Naboris Divine Helm",
          description:
            "**Set:** Divine Helms\n- Vah Medoh Divine Helm\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Shock Resistance",
          latitude: "0.63943340174362",
          longitude: "-0.85329115390775",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/8d3fc54a-43d3-4764-860c-566f4c052b99.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/c7652d84-72dc-454d-bce8-1aed2cf84ef9.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Vah Rudania Divine Helm",
          description:
            "**Set:** Divine Helms\n- Vah Medoh Divine Helm\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Flame Guard",
          latitude: "0.79972964410730",
          longitude: "-0.63059043909618",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/bebe6beb-0c73-4506-8441-f4e5727b924b.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/19d68b41-a930-47b3-a9c8-0227fa825dce.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Vah Ruta Divine Helm",
          description:
            "**Set:** Divine Helms\n- Vah Medoh Divine Helm.\n\n**Stats:**\n- 2 Defense\n\n**Armor Effect:** Swim Speed Up",
          latitude: "0.71501158196860",
          longitude: "-0.59854868064502",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/421aecef-620f-4836-8623-89dd407470bd.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/bbc78c63-a749-4595-abbb-06b2aa612bcd.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Cap of the Wild",
          description:
            "**Set:** Wild\n- Tunic of the Wild\n\n**Location:**  On the jawbone of the big dragon skeleton\n\n**Stats:**\n- 4 Defense",
          latitude: "0.49938145484325",
          longitude: "-0.82993122844837",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/c57367da-1a23-4471-a901-cc3a19ec6384.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/73cc6f3f-fe49-4f23-ae66-a383452782e5.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tunic of the Wild",
          description:
            "**Set:** Wild\n- Cap of the Wild\n\n**Location:**  On the jawbone of the big dragon skeleton\n\n**Stats:**\n- 4 Defense",
          latitude: "0.25949465371529",
          longitude: "-0.86025135124703",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/544c6568-b495-4bea-b939-46c09de06b1e.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/40fcbc35-fd95-47e7-a364-b27e67f38f70.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Trousers of the Wild",
          description:
            "**Set:** Wild\n- Cap of the Wild\n\n**Location:**  On the jawbone of the big dragon skeleton\n\n**Stats:**\n- 4 Defense",
          latitude: "0.49901421441913",
          longitude: "-0.64946530991628",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4f224e27-373d-4dcc-a121-28aaab627470.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/261a1157-bec8-4de3-b26d-8a5001dc0d27.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tunic of the Wind",
          description:
            "Old Map Location - ??\n\n**Set:** Wind\n- Cap of the Wind\n\n**Location:**  On top of the ruins\n\n**Stats:**\n- 3 Defense",
          latitude: "0.42262309063854",
          longitude: "-0.82494414912449",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/35b2e304-2b70-4e65-8082-6dde4bc6072c.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/1091afeb-28c9-44b0-92f6-f813e4cb39fc.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tunic of the Hero",
          description:
            "Old Map Location - ??\n\n**Set:** Hero's\n- Cap of the Hero\n\n**Location:**  On top of the ruins\n\n**Stats:**\n- 3 Defense",
          latitude: "0.32082325288708",
          longitude: "-0.66178267642076",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2b5d2f0f-e1bd-4215-83cd-829c08a9100c.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/91cd1dbd-120f-483b-973e-3ece6f4e12a6.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Trousers of the Hero",
          description:
            "Old Map Location - ??\n\n**Set:** Hero's\n- Cap of the Hero\n\n**Location:**  On top of the ruins\n\n**Stats:**\n- 3 Defense",
          latitude: "0.45363056583136",
          longitude: "-0.81104837358001",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/7a642419-5ad4-4716-968a-3ce6a29faec4.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/d76b6832-daac-46ad-9715-0575dc9f826c.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Cap of the Hero",
          description:
            "Old Map Location - ??\n\n**Set:** Hero's\n- Tunic of the Hero\n\n**Location:**  On top of the ruins\n\n**Stats:**\n- 3 Defense",
          latitude: "0.26324756817034",
          longitude: "-0.62203249261182",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/21a3ac81-ca2f-4488-a139-f99b2e4b8e01.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/da95ec97-09c9-4037-b2e4-10dfc29b737a.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Trousers of Twilight",
          description:
            "Old Map Location - ??\n\n**Set:** Twilight\n- Cap of Twilight\n\n**Location:**  In the middle of the ruins\n\n**Stats:**\n- 3 Defense",
          latitude: "0.42763793261959",
          longitude: "-0.59632066567599",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/7a197f1b-4953-4066-ba7c-7c4b51372b15.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/5b92b80c-5258-4ad0-ac68-f7d5ed190262.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tunic of Twilight",
          description:
            "Old Map Location - ??\n\n**Set:** Twilight\n- Cap of Twilight\n\n**Location:**  In the middle of the Rist Mine\n\n**Stats:**\n- 3 Defense",
          latitude: "0.44897894079739",
          longitude: "-0.55784841301721",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/cbae301b-9b66-4f53-9e50-f2436cc29b52.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/f05e8fcd-6956-441a-9b20-075620b1f1fd.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Cap of Twilight",
          description:
            "Old Map Location - ??\n\n**Set:** Twilight\n- Tunic of Twilight\n\n**Stats:**\n- 3 Defense",
          latitude: "0.48006296924667",
          longitude: "-0.69238221355585",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/01e79a65-201c-49b1-abb1-04feacc9f45b.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/ca7b2bdb-4a54-4b40-8819-ac53ee7b4bc2.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zant's Helmet",
          description:
            "**Location:**  Complete Scorching Coliseum\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Unfreezable",
          latitude: "0.48178363765743",
          longitude: "-0.63419593711885",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/59a8d525-cf2b-4ced-a65e-56bdf37ccec1.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/2e10e0b9-4da0-4b63-b034-8f511db7e3d7.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Trousers of the Sky",
          description:
            "Old Map Location - ??\n\n**Set:** Sky\n- Cap of the Sky\n\n**Location:**  On top of the ruins\n\n**Stats:**\n- 3 Defense",
          latitude: "0.39285717675058",
          longitude: "-0.66562534349038",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/1abd9e83-9185-47ee-b337-86d7a29b618e.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/bbbbfd2e-8763-4381-a05f-1102d070b67d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Cap of the Sky",
          description:
            "Old Map Location - ??\n\n**Set:** Sky\n- Tunic of The Sky\n\n**Location:**  In the hollow tree trunk, guarded by an Evermean\n\n**Stats:**\n- 3 Defense",
          latitude: "0.31530008419222",
          longitude: "-0.58018932936687",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0e352b63-da43-43d9-aa79-d40c7364b33b.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/c21dee4b-64fe-499d-96bc-3465eedebd81.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tunic of The Sky",
          description:
            "Old Map Location - ??\n\n**Set:** Sky\n- Cap of the Sky\n\n**Location:**  In the hollow tree trunk, guarded by an Evermean\n\n**Stats:**\n- 3 Defense",
          latitude: "0.42446212605451",
          longitude: "-0.67035801662081",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e38e7043-8a0b-4400-b35b-925b16acae81.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/5be521f7-5149-424d-a3eb-d75d07345afa.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Trousers of Time",
          description:
            "Old Map Location - ??\n\n**Set:** Time\n- Cap of Time\n\n**Location:**  On top of the ruins\n\n**Stats:**\n- 3 Defense",
          latitude: "0.35668863040128",
          longitude: "-0.83766738343002",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/773265bb-a09c-4da0-af95-cde3eb409420.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/f95cd9b9-827a-4f6f-86af-71d91450e468.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tunic of Time",
          description:
            "Old Map Location - ??\n\n**Set:** Time\n- Cap of Time\n\n**Location:**  On top of the ruins\n\n**Stats:**\n- 3 Defense",
          latitude: "0.42132535768681",
          longitude: "-0.76753502932175",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0c497e74-fe44-42e9-89ed-22108c566824.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/23da7d1e-9b82-41ff-a732-ce0d30d64d68.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Cap of Time",
          description:
            "Old Map Location - ??\n\n**Set:** Time\n- Tunic of Time\n\n**Location:**  On top stone pillar\n\n**Stats:**\n- 3 Defense",
          latitude: "0.46928010416600",
          longitude: "-0.83438997495637",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d1ba0e7a-f8b3-41c2-8cdd-83a588877db4.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/28d576d8-7b02-44ac-9812-ab27377299b9.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Island Lobster Shirt",
          description:
            "**Location:**  Under a ship, in the water - use ultrahand to get it out\n\n**Stats:**\n- 1 Defense\n\n**Armor Effect:** Heat Resistance",
          latitude: "0.59042489117823",
          longitude: "-0.60940459370730",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/45d1071d-8984-4e16-95e9-21db9bae1280.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/aa3cebc3-71b5-4905-89a8-e67d3a264e30.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Phantom Armor",
          description:
            "**Set:** Phantom \n- Phantom Helmet, behind destructible wall\n\n**Stats:**\n- 8 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.67690618584983",
          longitude: "-0.79591229390530",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/38e28fe3-cc31-459c-a2cc-4590e1ae755b.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/2c434605-492a-4ba8-a478-2db8d9c828d9.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Phantom Greaves",
          description:
            "**Set:** Phantom \n- Phantom Helmet\n\n**Stats:**\n- 8 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.58322376305817",
          longitude: "-0.78465955350950",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/17485f7b-4f29-41fe-8f55-1c39b9212d4c.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/7277b189-ff57-47bd-9def-3af67e0f0d24.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Phantom Helmet",
          description:
            "**Set:** Phantom \n- Phantom Armor\n\n**Stats:**\n- 8 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.57903465403088",
          longitude: "-0.69457003735724",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2af92c5c-d263-40d4-90b3-ecb85886d0fc.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/3e8aa1b3-23f2-413d-a6d4-2de848ee44b1.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tunic of Awakening",
          description:
            "**Set:** Awakening\n- Mask of Awakening\n\n**Stats:**\n- 3 Defense",
          latitude: "0.71761526373039",
          longitude: "-0.81436166984147",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4ab1359f-5480-4f16-95c0-ab55c60fcab3.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/2a34a20e-58fb-4474-a934-ecf0d52517f4.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mask of Awakening",
          description:
            "**Set:** Awakening\n- Tunic of Awakening\n\n**Stats:**\n- 3 Defense",
          latitude: "0.73236869589087",
          longitude: "-0.77579003107826",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/de753afb-9b26-4140-960f-cbebca979a3e.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/96b0b95a-6148-42a2-98f7-58409cc6d306.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Trousers of Awakening",
          description:
            "**Set:** Awakening\n- Mask of Awakening\n\n**Stats:**\n- 3 Defense",
          latitude: "0.66034725154179",
          longitude: "-0.74110038578601",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4e18bc99-f3d2-4c12-a1c7-781968551f08.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/f8971883-2170-4fcf-a7ea-2799b7c991c2.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tingle's Shirt",
          description:
            "**Set:** Tingle's\n- Tingle's Hood\n\n**Door Password:**\n\n...\u25a1...  \n..\u25a0\u25a1..  \n.\u25a1\u25a0\u25a1.  \n\u25a1\u25a0\u25a1\u25a0 \n \n\u25a0 - Stone\n\u25a1 - Blank\n\n**Stats:**\n- 2 Defense",
          latitude: "0.64075501386257",
          longitude: "-0.66418868477248",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2387791e-f862-4a71-8529-979264231632.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/9e28ff04-8809-4a97-987b-d48457492293.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tingle's Hood",
          description:
            "**Set:** Tingle's\n- Tingle's Shirt, use fan to blow the sand away from the chest\n\n**Stats:**\n- 2 Defense",
          latitude: "0.68557918832127",
          longitude: "-0.84429597717104",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/94bf450e-e4a4-44fb-9e16-4f84d0017c3b.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/0524cff1-1652-4443-acf4-30a830338ec5.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tingle's Tights",
          description:
            "**Set:** Tingle's\n- Tingle's Hood\n\n**Location:**  Behind a pile of boxes, on a ship\n\n**Stats:**\n- 2 Defense",
          latitude: "0.59915061354553",
          longitude: "-0.58687383346069",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0532016f-dcd6-4868-8e9b-86069ff10605.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/159cadbb-c762-4acb-8abb-5f3f75152ec8.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Evil Spirit Greaves",
          description:
            "**Set:** Evil Spirit\n- Evil Spirit Mask.\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.49289620451196",
          longitude: "-0.72934206673966",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/b50b29cd-4bab-4b9d-b06a-d01173ab0ba2.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/eed3e572-b04c-45e9-a042-344e187a8cc9.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Evil Spirit Mask",
          description:
            "**Set:** Evil Spirit\n- Evil Spirit Armor\n\n**Location:**  Reward for completing The South Lomei Prophecy Side Quest\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** Stealth Up",
          latitude: "0.26815226273555",
          longitude: "-0.76089734301462",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4a77ef6f-f031-45c6-b2b8-c64aceb32139.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/6434957b-067a-4d2f-a030-f5b7cd6ac7ed.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Bokoblin Mask",
          description:
            "**Set:** Kilton's Monster Masks\n- Moblin Mask Item #1\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Blend in with Bokoblins.",
          latitude: "0.76905809616008",
          longitude: "-0.58622963726407",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/efa4d3ab-c7b8-450b-866e-81e2a4e6fda4.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Moblin Mask",
          description:
            "**Set:** Kilton's Monster Masks\n- Bokoblin Mask Item #2\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Blend in with Moblins.",
          latitude: "0.76907150599635",
          longitude: "-0.58577366173219",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/86b677d3-fb1d-4db2-8058-8702778bb48d.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mystic Robe",
          description:
            "**Set:** Mystic\n- Mystic Trousers Item #4\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Rupee Padding - lose Rupees instead of health when taking damage.",
          latitude: "0.76856796659015",
          longitude: "-0.58625511824988",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e1c8db3b-6447-40ed-8a31-b56bd7311cc8.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Lizalfos Mask",
          description:
            "**Set:** Kilton's Monster Masks\n- Bokoblin Mask Item #6\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Blend in with Lizalfos.",
          latitude: "0.76905005025785",
          longitude: "-0.58529756963173",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/c16cc9f5-aefb-4f24-9421-f68699a61fc3.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Froggy Sleeve",
          description:
            "**Set:** Froggy \n- Froggy Hood\n\n**Stats:**\n- 8 Defense\n\n**Armor Effect:** Slip Resistance",
          latitude: "0.75910813683329",
          longitude: "-0.80821754078232",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/822d1a57-e30e-4c42-a922-f85207f5ce16.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Froggy Leggings",
          description:
            "**Set:** Froggy \n- Froggy Hood\n\n**Stats:**\n- 8 Defense\n\n**Armor Effect:** Slip Resistance",
          latitude: "0.75870032555984",
          longitude: "-0.80821730196365",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e7e2777e-2495-49d2-8788-fddb3863b75e.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Bokoblin Mask",
          description:
            "**Location:**  Reward for completing The Hunt For Bubbul Gems!\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Blend in with Bokoblins",
          latitude: "0.74203980412042",
          longitude: "-0.66328480839900",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/45645337-eb38-4310-9f6d-4fbcba974973.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/0171f731-d5b5-4d68-b33a-84b1d602b3ca.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mystic Trousers",
          description:
            "**Set:** Mystic \n- Mystic Robe item #8\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Rupee Padding - lose Rupees instead of health when taking damage.",
          latitude: "0.76855925019261",
          longitude: "-0.58576159179157",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f6646866-03c6-471a-a4a5-a9c39436cb80.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mystic Headpiece",
          description:
            "**Set:** Mystic\n- Mystic Robe Item #14\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Rupee Padding - lose Rupees instead of health when taking damage.",
          latitude: "0.76856729609339",
          longitude: "-0.58530025184029",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/8e1adc88-f641-435d-bbdb-06f0646a6507.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Horriblin Mask",
          description:
            "**Set:** Kilton's Monster Masks\n- Bokoblin Mask Item #10\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Blend in with Horriblins.",
          latitude: "0.76902725353469",
          longitude: "-0.58482013642677",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e3e59f54-7e2d-4cfe-b574-671b3e20efe2.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/307d5ae3-8b9c-4284-8ae6-e8f50aca70f0.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Lynel Mask",
          description:
            "**Set:** Kilton's Monster Masks\n- Bokoblin Mask Item #12\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Blend in with Lynels for a while.",
          latitude: "0.76901853714011",
          longitude: "-0.58433733880452",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/00e0b332-0c71-4aa8-9d7f-585b24f0ab24.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/ca09223e-030a-458c-af62-19afe15b935d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rubber Helm",
          description:
            "**Set:** Rubber\n- Rubber Armor, after the waterfall\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Shock Resistance",
          latitude: "0.60118089477213",
          longitude: "-0.66371772165814",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/edc7972a-6920-44ac-82f7-df100aa36572.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/5df89c52-1f34-4914-b6e7-09630cee4b62.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rubber Tights",
          description:
            "**Set:** Rubber\n- Rubber Helm\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Shock Resistance",
          latitude: "0.69524073756760",
          longitude: "-0.56658388059802",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/7acb143d-eafc-4526-93bc-e8d522cfe1f0.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/102df9bc-5eac-4e8e-814d-508b4903a771.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Charged Headdress",
          description:
            "**Set:** Charged\n\n**Location:**  Dracozu Lake, follow the river and search for the tall dragon-head statues, the headdress will be hidden on an altar beneath this statue.\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Stormy Weather Attack\n\n**Note:** Available during the main story.",
          latitude: "0.61287330848751",
          longitude: "-0.67189040176362",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d002e65d-080f-458e-b2b0-9e3cf126f749.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/5bdcfc83-d071-44c7-aaa3-d8495fa9144a.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Charged Trousers",
          description:
            "**Set:** Charged\n\n**Location:**  Dracozu Lake, Beneath a tall dragon statue, there is a doorway with a breakable boulder behind it. The trousers are in a chest in the altar beyond\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Stormy Weather Attack\n\n**Note:** Available during the main story.",
          latitude: "0.61642508339463",
          longitude: "-0.67158217996345",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/acfa63f0-0404-4b00-ae1d-91df2f3597ef.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/ea04ea09-9816-4bc8-8056-b017a8af08ba.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Charged Shirt",
          description:
            "**Set:** Charged\n\n**Location:**  Dracozu Lake, in a chest above where Tauro investigates a hieroglyph.\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Stormy Weather Attack\n\n**Note:** Available during the main story.",
          latitude: "0.62137597748260",
          longitude: "-0.67097189341823",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a42fa1b8-5a99-4320-bb4f-d73cf6f56402.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/d0a137f4-32db-40b4-b493-604a1ea8d17c.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Archaic Legwear",
          description:
            "**Set:** Archaic\n\n**Location:**  Room of Awakening in a chest near the door leading outside to the Great Sky Island.\n\n**Stats:**\n- 1 Defense\n\n**Armor Effect:** None",
          latitude: "0.99372397809620",
          longitude: "-0.69149212670985",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/df6f5b41-5a21-4168-a53b-ca3138f76b4f.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/e2c585a2-8886-4ba0-b8a6-03ce131ae162.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sand Boots",
          description:
            "**Price:** 1200 Rupees\n\n**Location:**  Gerudo Secret Club\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Sand Speed Up",
          latitude: "0.60875745639588",
          longitude: "-0.82494422793405",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/203926c4-4622-43af-b932-2668a491bca2.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/0a917e7b-8a8c-4dde-9fcb-c5ce7598add4.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Snow Boots",
          description:
            "**Price:** 1300 Rupees  \n\n**Location:**  Gerudo Secret Club\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Snow Speed Up",
          latitude: "0.60876818462641",
          longitude: "-0.82456871867157",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f3f33eae-5656-4984-bf79-57056bc83d81.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/e8772958-fbef-4140-ac77-26e1df34aeed.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Opal Earrings",
          description:
            "**Price:** 700 Rupees\n\n**Location:**  Starlight Memories\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Swim Speed Up",
          latitude: "0.61056650395862",
          longitude: "-0.82745678722827",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f1c8dd68-5385-489f-8ef1-8047b5d88cc7.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/adf2e363-3636-4c23-95c6-4df862e20063.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Topaz Earrings",
          description:
            "**Price:** 1,200 Rupees\n\n**Location:**  Starlight Memories\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Shock Resistance",
          latitude: "0.61055577573161",
          longitude: "-0.82788057625254",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0da78b6f-b6d5-4374-ac82-8e9f00082063.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/2024cf50-80aa-49d5-8bd5-1d5ffcad4736.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Diamond Circlet",
          description:
            "**Price:** 2,400 Rupees\n\n**Location:**  Starlight Memories\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** Attack Up",
          latitude: "0.61021247245945",
          longitude: "-0.82789130508868",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0fb76480-6596-401f-a3d3-b88ddf1e4f34.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/f4bf71f8-32c1-48e9-b131-5cb1a36fcd2e.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/d8eccd7a-ddf9-4641-968e-21776ac2567d.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tunic of the Depths",
          description:
            "**Set:** Depths\n- Hood of the Depths for 150 Poe\n\n**Stats:**\n- 3 Defense\n\n**Armor Effect:** Gloom Resistance",
          latitude: "0.70900642322631",
          longitude: "-0.71069687604859",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d051354b-36d4-4d81-ac90-c1a7e8bb83cf.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ancient Hero's Aspect",
          description:
            "**Set:** Ancient Hero's Aspect\n\n**Location:** Appears behind the Goddess Statue in the Temple of Time, after completing The Shrine Explorer,\n\n**Stats:** 12 Defence\n\n**Armor Effect:** None",
          latitude: "1.02055293530540",
          longitude: "-0.68853733033669",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/de8c8062-f822-46d5-a841-4ec81e37d077.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tunic of Memories",
          description:
            "**Set:** None\n\n**Location:**  Sold by any Bargainer Statue for 300 Poes, after finding all 7 of them.\n\n**Stats:**\n- 4 Defense\n\n**Armor Effect:** None",
          latitude: "0.70937780691157",
          longitude: "-0.71069982224241",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/8b2d27b6-8fb2-4d1a-bd37-fc531140793c.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/2b8c82b2-6977-4c72-98b2-d53fdaf7cb22.jpg",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      title: "Shield",
      icon: "totk_sheild",
      defaultHidden: true,
      locations: [
        {
          mapSlug: "hyrule",
          title: "Knight's Shield",
          description:
            "**Location:** Found among the wreckage on Toronbo Beach, near the Knight's Broadsword",
          latitude: "0.58743371559049",
          longitude: "-0.55850565433460",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a39536d3-6737-4f20-8f96-523481d4e56e.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Traveler's Shield",
          description:
            "**Location:** Inside the gatehouse near the bottom of the ladder",
          latitude: "0.73073278005964",
          longitude: "-0.71795111106084",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/15e0ba66-aac2-4188-8119-ac22e58c50fc.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Royal Guard's Shield",
          description: "**Location:** Inside the Sanctum in Hyrule Castle",
          latitude: "0.77941496426678",
          longitude: "-0.49721607087731",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/3111b469-abc3-41ca-a45f-f7b5f68f9cae.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Royal Shield [Chest]",
          description:
            "**Location:** Mount Dunsel Cave - inside the chamber with the stalactites hanging over the pool.  Ascend up to the upper platform.",
          latitude: "0.60095431616375",
          longitude: "-0.59805161162001",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/54a8c258-2c20-4f82-b3ff-2a7648820181.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zonaite Shield [Chest]",
          description: "**Location:** On top of the ruin",
          latitude: "0.47595263229691",
          longitude: "-0.65134317728229",
        },
        {
          mapSlug: "hyrule",
          title: "Royal Shield",
          description: "Behind the chest",
          latitude: "0.78539853560608",
          longitude: "-0.37383204567482",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          description: "Treasure inside Eshos Shrine, in the final chamber.",
          latitude: "0.64052859629452",
          longitude: "-0.65325643380910",
        },
        {
          mapSlug: "hyrule",
          title: "Zonaite Shield [Chest]",
          description:
            "Inside Ekochiu Shrine. In the second room, use Ultrahand to move a falling cube to nearby ledges. Climb up quick before the cube floats away!",
          latitude: "0.74364973274207",
          longitude: "-0.67012385869154",
        },
        {
          mapSlug: "hyrule",
          title: "Hylian Shield",
          description:
            "**Location:** Under Hyrule Castle in the docks; light the brazier to spawn the chest.",
          latitude: "0.74023768359591",
          longitude: "-0.70794876345172",
        },
        {
          mapSlug: "hyrule",
          title: "Zonite Shield",
          description: "**Location:** On top of the tall tower.",
          latitude: "0.75402966556396",
          longitude: "-0.80172702670214",
        },
        {
          mapSlug: "hyrule",
          title: "Kite Shield [Chest]",
          description: "**Location:** ??  \n**Coordinates.** -2324, 1934, 0295",
          latitude: "0.76536692021833",
          longitude: "-0.77799138612906",
        },
        {
          mapSlug: "hyrule",
          title: "Knight's Shield [Chest]",
          description:
            "In the middle of the large room in the ruins. Use Ultrahand to pull out the chest from the ground.",
          latitude: "0.66211246800331",
          longitude: "-0.71784413134031",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield [Chest]",
          description:
            "**Location:** Ren-iz Shrine - In the 2nd room, before forming the L shape, Attach both plates into a long bridge. Use it to reach the chest just right of the entrance.",
          latitude: "0.72843336612664",
          longitude: "-0.67922797667217",
        },
        {
          mapSlug: "hyrule",
          title: "Spring Shield [Chest]",
          description:
            "**Location:** Kamizun Shrine - Just before the end statue.",
          latitude: "0.65309451068681",
          longitude: "-0.70911272010935",
        },
        {
          mapSlug: "hyrule",
          title: "Spiky Shield",
          description: "Clear enemy camp",
          latitude: "0.71514209891269",
          longitude: "-0.79506949535218",
        },
        {
          mapSlug: "hyrule",
          title: "Kite Shield [Chest]",
          description: "**Location:** Top of tall tower",
          latitude: "0.76438639777545",
          longitude: "-0.80566258566114",
        },
        {
          mapSlug: "hyrule",
          title: "Royal Shield",
          description: "In Ruins",
          latitude: "0.64120086546762",
          longitude: "-0.72900968848177",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          description: "Melt the ice",
          latitude: "0.82402812676746",
          longitude: "-0.83345323665540",
        },
        {
          mapSlug: "hyrule",
          title: "Soldier's Shield [Chest]",
          description:
            "**Location:** In a chest at top of the castle wall tower.",
          latitude: "0.72961574460662",
          longitude: "-0.70453971921654",
        },
        {
          mapSlug: "hyrule",
          title: "Spiked Shield",
          description:
            "**Location:** Tajikats Shrine - In the final room, drive your boat to the left side of the room to the chest.",
          latitude: "0.67084089704282",
          longitude: "-0.69198774319585",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          description:
            "**Location:** Tadarok Shrine - In the main room, on a pillar in the corner. Climb up the ice cube to access the pillar.",
          latitude: "0.63215378480210",
          longitude: "-0.73829026640871",
        },
        {
          mapSlug: "hyrule",
          title: "Old Map - Sea-Breeze Shield",
          description:
            "**Location:** At the bottom of the pond. Use Ultrahand to pull it out.  \n**Utility:** Marks the location of the Sea-Breeze Shield on your map.",
          latitude: "1.00054859003730",
          longitude: "-0.61805666173967",
        },
        {
          mapSlug: "hyrule",
          title: "Soldier's Shield [Chest]",
          description: "**Location:** Buried chest",
          latitude: "0.75537251188116",
          longitude: "-0.73312516914197",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield",
          description: "**Location:** Buried in the sand - use wind to uncover",
          latitude: "0.58947084961372",
          longitude: "-0.75984382482059",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          description:
            "**Location:** Gemimik Shrine - On a high ledge, in the top-right corner of the room. Glide to it from the top of the wind current.",
          latitude: "0.77106085483973",
          longitude: "-0.55815830826759",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield",
          description:
            "**Location:** Domizuin Shrine - After grabbing the above Zonai Charge, head to the chest by the initial entrance. Shoot the crystal to rotate the room and fall on the pillar.",
          latitude: "0.74926811901138",
          longitude: "-0.59723736631955",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield",
          description:
            "**Location:** Timawak Shrine - In an alcove, beyond the ball. Ultrahand a freshly-made platform for a few seconds, then Rewind it and jump to the chest.",
          latitude: "0.75606220951970",
          longitude: "-0.64554055425648",
        },
        {
          mapSlug: "hyrule",
          title: "Soldier's Shield",
          description: "**Location:** Lying the the rubble",
          latitude: "0.76852043557748",
          longitude: "-0.46851760679577",
        },
        {
          mapSlug: "hyrule",
          title: "Shield of the Mind's Eye [Chest]",
          description: "Chest inside cave, guarded by Horriblins.",
          latitude: "0.66635811908424",
          longitude: "-0.65851789883141",
        },
        {
          mapSlug: "hyrule",
          title: "Shield of the Mind's Eye [Chest]",
          description:
            "**Location:** Underneath the dye shop, accessed via the wells.",
          latitude: "0.63402525273777",
          longitude: "-0.59318749048083",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          latitude: "0.82271690511188",
          longitude: "-0.55512173775415",
        },
        {
          mapSlug: "hyrule",
          title: "Zonaite Shield [Chest]",
          description:
            "**Location:** In a room just under the main deck. From the Terminal, head to the water pool displayed just north; you should find an ice sheet. Break it and fall down, then melt the ice block covering the lever. The chest is just past the lever.",
          latitude: "1.14655049574710",
          longitude: "-0.91192725499490",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/b595a8a3-90f4-4959-bf25-3f29b93365e1.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Royal Shield [Chest]",
          description: "Chest half-buried. Use ultrahand.",
          latitude: "0.74870180252893",
          longitude: "-0.59714717225739",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield",
          description: "**Coordinates:** -0824, 3651, 0239",
          latitude: "0.82043056709171",
          longitude: "-0.72971801614750",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          description: "Inside Moshapin Shrine.",
          latitude: "0.76427145216675",
          longitude: "-0.61720043420721",
        },
        {
          mapSlug: "hyrule",
          title: "Knight's Shield",
          description:
            "**Location:** At the bottom of the lake; use Ultrahand to grab it.",
          latitude: "0.75218970160869",
          longitude: "-0.67667661382549",
        },
        {
          mapSlug: "hyrule",
          title: "Royal Shield [Chest]",
          description:
            "**Location:** In the Royal Hidden Passage, guarded by a horroblin.",
          latitude: "0.72860293706424",
          longitude: "-0.71105752792721",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          description: "Use Ascend on the center pillar in the bottom floor",
          latitude: "0.31079877336724",
          longitude: "-0.67540206986058",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield [Chest]",
          description:
            "**Location:** Trapped in an ice block; melt it to access.",
          latitude: "0.82195126226188",
          longitude: "-0.74754832679855",
        },
        {
          mapSlug: "hyrule",
          title: "Shield of the Mind's Eye [Chest]",
          description: "In the Hot spring use Ultrahand to pull the chest out.",
          latitude: "0.62658125390412",
          longitude: "-0.62898222205416",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield",
          latitude: "0.45775821930454",
          longitude: "-0.42157929238829",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield",
          description:
            "**Location:** Turakmik Shrine - In the 3rd room, before removing the pole, Recall the cog and ride it to the higher ledge.",
          latitude: "0.63138318814048",
          longitude: "-0.78879138234385",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield [Chest]",
          latitude: "1.11548658900490",
          longitude: "-0.65489420609146",
        },
        {
          mapSlug: "hyrule",
          title: "Soldier's Shield [Chest]",
          description:
            "**Location:** Inside Whistling Hill Cave. Climb a wall opposite the like-like, and slash the vines.",
          latitude: "0.66919318956147",
          longitude: "-0.71042046638291",
        },
        {
          mapSlug: "hyrule",
          title: "Radiant Shield",
          latitude: "0.64873642617471",
          longitude: "-0.82605078135447",
        },
        {
          mapSlug: "hyrule",
          title: "Royal Shield [Chest]",
          description:
            "**Location:**  Use Ultrahand to get it out of the ground\n\n**Stats:**\n- 55 shield defense",
          latitude: "0.64607708369985",
          longitude: "-0.74996208259032",
        },
        {
          mapSlug: "hyrule",
          title: "Emblazoned Shield [Chest]",
          description: "Reward for clearing Enemy camp",
          latitude: "0.65310711756407",
          longitude: "-0.71428939931212",
        },
        {
          mapSlug: "hyrule",
          title: "Rusty Shield [Chest]",
          description: "Inside Goronbi River Cave",
          latitude: "0.77192498338269",
          longitude: "-0.65883213012779",
        },
        {
          mapSlug: "hyrule",
          title: "Knight's Shield [Chest]",
          description: "**Location:** In Moor Garrison Ruins Well",
          latitude: "0.70916871459644",
          longitude: "-0.65380048438678",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield",
          description:
            "**Location:** Mogisari Shrine - After the beams, turn left instead and ram into the dark blocks, breaking them. The chest is behind them.",
          latitude: "1.15892927203360",
          longitude: "-0.55350153678316",
        },
        {
          mapSlug: "hyrule",
          title: "Lizal Shield [Chest]",
          description: "On top of Zonai rock in Lizalfos enemy camp",
          latitude: "0.68835354059146",
          longitude: "-0.65246531336592",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield [Chest]",
          description: "Chest stuck in mud, need to remove mud with water",
          latitude: "0.70590903549864",
          longitude: "-0.61754768703815",
        },
        {
          mapSlug: "hyrule",
          title: "Rusty Shield [Chest]",
          latitude: "0.76622601846896",
          longitude: "-0.65878745210193",
        },
        {
          mapSlug: "hyrule",
          title: "Sea-Breeze Shield [Chest]",
          description: "**Coordinates:** 2666, 0254, -0559",
          latitude: "0.38742218997906",
          longitude: "-0.61727506162867",
        },
        {
          mapSlug: "hyrule",
          title: "Boko Shield [Chest]",
          description: "**Location:** Reward for clearing the Enemy Camp",
          latitude: "0.68232648355773",
          longitude: "-0.66959103896733",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          latitude: "0.93378665469977",
          longitude: "-0.66303905593534",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          latitude: "0.93163329028292",
          longitude: "-0.76086586814426",
        },
        {
          mapSlug: "hyrule",
          title: "Royal Shield",
          description: "Inside tower.",
          latitude: "0.76990794776411",
          longitude: "-0.48703901886230",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          description:
            "Enter the narrow passage way on the south side of the lower level. Use recall on the spinning spiked gear so that it lifts you onto the platform with the chest.",
          latitude: "0.58623008165330",
          longitude: "-0.91909235091941",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zoanite Shield [Chest]",
          latitude: "1.16094739080800",
          longitude: "-0.55078677199244",
        },
        {
          mapSlug: "hyrule",
          title: "Zora Shield [Chest]",
          latitude: "1.07800692394750",
          longitude: "-0.43846930545635",
        },
        {
          mapSlug: "hyrule",
          title: "Gerudo Shield [Chest]",
          description:
            "**Location:** At the top of the tower\n\n**Coordinates:** -3940, -2935, 0085",
          latitude: "0.60863781394987",
          longitude: "-0.82993677894424",
        },
        {
          mapSlug: "hyrule",
          title: "Soldier's Shield",
          description:
            "**Location:** Inside Forgotten Temple on a ledge above the southern entrance to the second last chamber",
          latitude: "0.79072569956467",
          longitude: "-0.73668693649677",
        },
        {
          mapSlug: "hyrule",
          title: "Gerudo Shield [Chest]",
          latitude: "0.58457643989982",
          longitude: "-0.78523897133553",
        },
        {
          mapSlug: "hyrule",
          title: "Kite Shield [Chest]",
          description: "Burn the thorns away to reveal the chest.",
          latitude: "0.81779648835622",
          longitude: "-0.82252964346296",
        },
        {
          mapSlug: "hyrule",
          title: "Topaz Shield [Chest]",
          latitude: "0.66075555426168",
          longitude: "-0.62673055680489",
        },
        {
          mapSlug: "hyrule",
          title: "Shield of the Mind's Eye [Chest]",
          description: "**Location:** On top of the pillar",
          latitude: "0.64667599066750",
          longitude: "-0.62752671309315",
        },
        {
          mapSlug: "hyrule",
          title: "Zonaite Shield [Chest]",
          description: "**Location:** Behind a small waterfall to the right.",
          latitude: "0.65818546917623",
          longitude: "-0.61736224755913",
        },
        {
          mapSlug: "hyrule",
          title: "Knight Sheild [Chest]",
          latitude: "0.77536311793645",
          longitude: "-0.59159090712387",
        },
        {
          mapSlug: "hyrule",
          title: "Zora Shield [Chest]",
          latitude: "0.71279242007186",
          longitude: "-0.58286451108782",
        },
        {
          mapSlug: "hyrule",
          title: "Lizal Shield [Chest]",
          latitude: "0.62022327023291",
          longitude: "-0.61384835352171",
        },
        {
          mapSlug: "hyrule",
          title: "Shield of the Mind's Eye [Chest]",
          latitude: "0.63176812102839",
          longitude: "-0.67918448415900",
        },
        {
          mapSlug: "hyrule",
          title: "Knight's Shield [Chest]",
          description: "**Location:** Under the rocks",
          latitude: "0.60610436656913",
          longitude: "-0.64953570546231",
        },
        {
          mapSlug: "hyrule",
          title: "Randiant Shield [Chest]",
          description: "**Location:** Reward for clearing the Enemy Camp",
          latitude: "0.64643396312167",
          longitude: "-0.81256094902753",
        },
        {
          mapSlug: "hyrule",
          title: "Mighty Zonaite Shield [Chest]",
          latitude: "1.15964616084830",
          longitude: "-0.72848023822850",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield [Chest]",
          description:
            "**Location:** Under gloom rocks. Use Yunobo's ability to break them.",
          latitude: "0.46531190606997",
          longitude: "-0.64073274331867",
        },
        {
          mapSlug: "hyrule",
          title: "Royal Shield [Chest]",
          description:
            "**Location:** Buried underground; feed the nearby dog 4 times to reveal the chest.",
          latitude: "0.79250996884252",
          longitude: "-0.56642798509199",
        },
        {
          mapSlug: "hyrule",
          title: "Shield [Chest]",
          description: "Underwater, behind the waterfall.",
          latitude: "0.77227691374915",
          longitude: "-0.49736025306586",
        },
        {
          mapSlug: "hyrule",
          title: "Fisherman's Shield",
          description: "Found after befriending the Hylian Retriever.",
          latitude: "0.59310406690851",
          longitude: "-0.61265455245814",
        },
        {
          mapSlug: "hyrule",
          title: "Knight's Shield [Chest]",
          description: "**Location:** Reward for clearing the Enemy Camp",
          latitude: "0.78352964195348",
          longitude: "-0.64273216932182",
        },
        {
          mapSlug: "hyrule",
          title: "Zora Shield",
          latitude: "1.06481332603260",
          longitude: "-0.59757845502730",
        },
        {
          mapSlug: "hyrule",
          title: "Forest Dweller's Shield [Chest]",
          description: "Inside a tree's mouth on the right side of the path",
          latitude: "0.77611547164788",
          longitude: "-0.67942167095399",
        },
        {
          mapSlug: "hyrule",
          title: "Strong Zonaite Shield",
          latitude: "0.82129645973676",
          longitude: "-0.55645510515254",
        },
        {
          mapSlug: "hyrule",
          title: "Soldier's Shield",
          description:
            "**Location:** In a wooden chest floating among some debris near the back of Tarm Point Cave\n**Coordinates:** 4433 -0660 0029",
          latitude: "0.67815381699238",
          longitude: "-0.55918537232981",
        },
      ],
    },
    {
      title: "Weapon",
      icon: "totk_weapon",
      defaultHidden: true,
      info: "Weapons are used by Link to fight his way through enemies. Weapons found in the overworld might be of a higher tier, depending on your game's progress.",
      locations: weapons,
    },
  ],
};
