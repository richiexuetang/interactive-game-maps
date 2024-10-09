import { area } from "./area";
import { building } from "./building";
import { cave } from "./cave";
import { chasm } from "./chasm";

export const locations = {
  title: "Locations",
  categories: [
    {
      title: "Area",
      locations: [...area],
    },
    {
      title: "Building",
      locations: [...building],
    },
    {
      title: "Cave",
      isChecklist: true,
      locations: [...cave],
    },
    {
      title: "Chasm",
      locations: [...chasm],
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          description:
            "**Location:** Inside the Temple of Time, past the cog puzzle.",
          latitude: "1.02143061996400",
          longitude: "-0.68851879151683",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          description:
            "**Location:** Against the wall of the Mayor's House and by the campfire.",
          latitude: "0.63544319223762",
          longitude: "-0.59237055480466",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/45bfa65d-3b4a-4010-8206-6dc8980a9cf5.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          description:
            "**Location:** Lookout Landing - in the Emergency Shelter underground.",
          latitude: "0.70613600792596",
          longitude: "-0.71070224046662",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          description:
            "**Location:** Upper level of Zora's Domain. In front of the large staircase to the main hall",
          latitude: "0.71954668554170",
          longitude: "-0.59621550142768",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0d099d7c-6601-41cb-a8f6-c4932af166aa.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          description:
            "**Location:** Tucked in behind the building, near Douma",
          latitude: "0.78205055055197",
          longitude: "-0.64768066166968",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e8f3678b-7fa8-4155-b3e8-aad0d67c3268.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          latitude: "0.67101300632342",
          longitude: "-0.64391380270516",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          description:
            "At the base of Rito Village, near the bridge leading to the other plateaus.",
          latitude: "0.76125369381339",
          longitude: "-0.81926952260883",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue of Wisdom",
          latitude: "0.66027845063870",
          longitude: "-0.57733458785413",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          description:
            "**Location:** In East Akkala Stable Well - break though the rocks",
          latitude: "0.79318489325148",
          longitude: "-0.56725944877394",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          description: "**Location:** Inside the Deku Tree",
          latitude: "0.77294359465257",
          longitude: "-0.68976022303181",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          latitude: "0.63764282095440",
          longitude: "-0.72967382267950",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue of Courage",
          latitude: "0.62723772527096",
          longitude: "-0.67509367063769",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          latitude: "0.75498613377289",
          longitude: "-0.57518064418193",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue of Wisdom",
          description:
            "**How to Begin:** Pray to the Goddess Statue\n\n**Solution:** Retrieve Naydra's Claw and offer it to the Goddess Statue by dropping it in the water\n\n**Reward:** One Sapphire",
          latitude: "0.66038344404811",
          longitude: "-0.57748495049822",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9717c1c0-7536-4624-b017-0a8316231309.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue of Power",
          latitude: "0.78930612298726",
          longitude: "-0.58208960798834",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue",
          description: "**Coordinates:**  1338 -3311 0429",
          latitude: "0.93989636783962",
          longitude: "-0.65998876329174",
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue of Courage",
          description:
            "**How to Begin:** Interact with the Goddess Statue  \n\n**Solution:** Find Farosh, Lightning Dragon and shoot his claws to drop part of it. Offer Farosh's Claw and drop it into the water.\n\n**Reward:** 1x Topaz",
          latitude: "0.62733000261281",
          longitude: "-0.67471504211429",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dd843580-6877-41cd-803c-420017c4b0c4.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue of Power",
          description:
            "Bring Dinraal's Claw to her and drop it in the water.\n\n**Reward:** One Ruby",
          latitude: "0.78907715821727",
          longitude: "-0.58237311358184",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/bb06211e-ac1a-4818-9881-a29f8c80faa3.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Goddess Statue - Lurelin Village",
          description: "Lurelin Village, on the shoreline beside the inn",
          latitude: "0.59211766924155",
          longitude: "-0.60911652516791",
        },
      ],
      title: "Goddess Statue",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Horse God Malanya",
          description:
            "**Required:** Endura Carrot\n\nUnique among the Great Fairies is Malanya, a spirit that looks over the horses of Hyrule. She can revive and enhance horses that Link has registered at stables.\n\nIn lieu of materials and rupees, Malanya asks for **meals** in exchange for her services.",
          latitude: "0.80666432221038",
          longitude: "-0.56487074712811",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dcb464eb-3624-4bf0-9230-d952c7efa7b2.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Great Fairy Mija",
          description:
            "Unlocking the Great Fairies involves a series of Side Adventures. Ultimately, you will need to reunite all the members of The Stable Trotters",
          latitude: "0.79912217292672",
          longitude: "-0.75014144182188",
        },
        {
          mapSlug: "hyrule",
          title: "Great Fairy Cotera",
          description:
            "Unlocking the Great Fairies involves a series of Side Adventures. Ultimately, you will need to reunite all the members of The Stable Trotters",
          latitude: "0.63293480992267",
          longitude: "-0.64621925354166",
        },
        {
          mapSlug: "hyrule",
          title: "Great Fairy Kaysa",
          description:
            "Unlocking the Great Fairies involves a series of Side Adventures. Ultimately, you will need to reunite all the members of The Stable Trotters",
          latitude: "0.66352277514662",
          longitude: "-0.75318578548431",
        },
        {
          mapSlug: "hyrule",
          title: "Great Fairy Tera",
          description:
            "Unlocking the Great Fairies involves a series of Side Adventures. Ultimately, you will need to reunite all the members of The Stable Trotters",
          latitude: "0.74774646002034",
          longitude: "-0.67366629838938",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d8be88b0-e118-431c-b590-5a50b1514061.jpg",
              type: "image",
            },
          ],
        },
      ],
      title: "Great Fairy",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.30507467691348",
          longitude: "-0.70720304989194",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse Exit",
          latitude: "0.62885185682055",
          longitude: "-0.70727174399022",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          description:
            "**Leads To:** Akkala Ancient Tech Lab Lighthouse (Exit)",
          latitude: "0.48084833673209",
          longitude: "-0.55777431725704",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse (Exit)",
          description: "**Enter From:** Lighthouse",
          latitude: "0.80496412571311",
          longitude: "-0.55780621030678",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.47455490573427",
          longitude: "-0.68060131520457",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.41220227118642",
          longitude: "-0.63807684496919",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.38031017283812",
          longitude: "-0.56805653825577",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.27231082888277",
          longitude: "-0.59004142578024",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.25377427020165",
          longitude: "-0.85685060118922",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.37191483262279",
          longitude: "-0.79237282315387",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.43834951468807",
          longitude: "-0.78107537200327",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.50165927007203",
          longitude: "-0.84631880533749",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.48348839865650",
          longitude: "-0.74510424222944",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.25733033349530",
          longitude: "-0.55120635072731",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.31850731348605",
          longitude: "-0.81497273880896",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.31686041726419",
          longitude: "-0.66309381923114",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.44652309084424",
          longitude: "-0.68909610360657",
        },
        {
          mapSlug: "hyrule",
          title: "Lighthouse",
          latitude: "0.40437807207178",
          longitude: "-0.74047066554402",
        },
      ],
      title: "Lighthouse",
      info: "Use ascend while standing underneath it to return to the Surface",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Takaruk Lightroot",
          latitude: "0.36274197521867",
          longitude: "-0.62713382980408",
        },
        {
          mapSlug: "hyrule",
          title: "Migo-o Lightroot",
          latitude: "0.34410012899963",
          longitude: "-0.61450929432144",
        },
        {
          mapSlug: "hyrule",
          title: "Uogoj Lightroot",
          latitude: "0.34093016909445",
          longitude: "-0.59538562466693",
        },
        {
          mapSlug: "hyrule",
          title: "Usukaz Lightroot",
          latitude: "0.33150191479747",
          longitude: "-0.58965503610901",
        },
        {
          mapSlug: "hyrule",
          title: "Siakij Lightroot",
          latitude: "0.32527999843458",
          longitude: "-0.56577383424897",
        },
        {
          mapSlug: "hyrule",
          title: "Kimimadena Lightroot",
          latitude: "0.30900773285546",
          longitude: "-0.56683449390732",
        },
        {
          mapSlug: "hyrule",
          title: "Kisihayam Lightroot",
          latitude: "0.31294252580213",
          longitude: "-0.58305819025892",
        },
        {
          mapSlug: "hyrule",
          title: "Kimnaz Lightroot",
          latitude: "0.30900478614680",
          longitude: "-0.59146522285585",
        },
        {
          mapSlug: "hyrule",
          title: "Uoyoyuik Lightroot",
          latitude: "0.44634796224014",
          longitude: "-0.73877950450031",
        },
        {
          mapSlug: "hyrule",
          title: "Nikakik Lightroot",
          latitude: "0.46719634322892",
          longitude: "-0.71586993097719",
        },
        {
          mapSlug: "hyrule",
          title: "Nisoij Lightroot",
          latitude: "0.36724554366803",
          longitude: "-0.71064591407827",
        },
        {
          mapSlug: "hyrule",
          title: "Iayusus Lightroot",
          latitude: "0.36517492060648",
          longitude: "-0.72844505310016",
        },
        {
          mapSlug: "hyrule",
          title: "Kotimab Lightroot",
          latitude: "0.27586957711583",
          longitude: "-0.60351249043993",
        },
        {
          mapSlug: "hyrule",
          title: "Mimufis Lightroot",
          latitude: "0.27393481817860",
          longitude: "-0.61206374884168",
        },
        {
          mapSlug: "hyrule",
          title: "Ni-iraram Lightroot",
          latitude: "0.25966189976856",
          longitude: "-0.55406906382512",
        },
        {
          mapSlug: "hyrule",
          title: "Yikot Lightroot",
          latitude: "0.30265708649375",
          longitude: "-0.62896158273330",
        },
        {
          mapSlug: "hyrule",
          title: "Sijotu Lightroot",
          latitude: "0.29735250645842",
          longitude: "-0.66392911568641",
        },
        {
          mapSlug: "hyrule",
          title: "Muokuij Lightroot",
          latitude: "0.30591963754371",
          longitude: "-0.67524549060653",
        },
        {
          mapSlug: "hyrule",
          title: "Nikohsi Lightroot",
          latitude: "0.26577370117866",
          longitude: "-0.72131679305997",
        },
        {
          mapSlug: "hyrule",
          title: "Kawatik Lightroot",
          latitude: "0.28490585728318",
          longitude: "-0.75233554433834",
        },
        {
          mapSlug: "hyrule",
          title: "Kogoir Lightroot",
          latitude: "0.32719215433191",
          longitude: "-0.74951093970398",
        },
        {
          mapSlug: "hyrule",
          title: "Mu-ustust Lightroot",
          latitude: "0.33574453485585",
          longitude: "-0.74891740972765",
        },
        {
          mapSlug: "hyrule",
          title: "Napanos Lightroot",
          latitude: "0.36765453294144",
          longitude: "-0.76497728891937",
        },
        {
          mapSlug: "hyrule",
          title: "Sikurukam Lightroot",
          latitude: "0.39948254791204",
          longitude: "-0.79480848142717",
        },
        {
          mapSlug: "hyrule",
          title: "Tikanur Lightroot",
          latitude: "0.41693574030862",
          longitude: "-0.78455847470102",
        },
        {
          mapSlug: "hyrule",
          title: "Nabahi-ikat Lightroot",
          latitude: "0.41758521427460",
          longitude: "-0.76198977952743",
        },
        {
          mapSlug: "hyrule",
          title: "Kawumoro Lightroot",
          latitude: "0.43129499756607",
          longitude: "-0.80219773814261",
        },
        {
          mapSlug: "hyrule",
          title: "Worihas Lightroot",
          latitude: "0.45602276748748",
          longitude: "-0.81109145421129",
        },
        {
          mapSlug: "hyrule",
          title: "Aduon Lightroot",
          latitude: "0.45005142223918",
          longitude: "-0.77774133533913",
        },
        {
          mapSlug: "hyrule",
          title: "Muihcoro Lightroot",
          latitude: "0.46422683895167",
          longitude: "-0.75581098993445",
        },
        {
          mapSlug: "hyrule",
          title: "Mu-ufatur Lightroot",
          latitude: "0.47909376515130",
          longitude: "-0.79960341937533",
        },
        {
          mapSlug: "hyrule",
          title: "Narusis Lightroot",
          latitude: "0.48712275344728",
          longitude: "-0.78554514713315",
        },
        {
          mapSlug: "hyrule",
          title: "Kato Lightroot",
          latitude: "0.49875695488544",
          longitude: "-0.84447985355601",
        },
        {
          mapSlug: "hyrule",
          title: "So-oaw Lightroot",
          latitude: "0.44317115292019",
          longitude: "-0.83371749516775",
        },
        {
          mapSlug: "hyrule",
          title: "Nupisoyuat Lightroot",
          latitude: "0.47194207328063",
          longitude: "-0.84920465540137",
        },
        {
          mapSlug: "hyrule",
          title: "Kataki Lightroot",
          latitude: "0.41587725018525",
          longitude: "-0.83031014694106",
        },
        {
          mapSlug: "hyrule",
          title: "Koro-nui Lightroot",
          latitude: "0.40662658323579",
          longitude: "-0.81703210631673",
        },
        {
          mapSlug: "hyrule",
          title: "Mustuto Lightroot",
          latitude: "0.35749786620433",
          longitude: "-0.84689123256254",
        },
        {
          mapSlug: "hyrule",
          title: "Stamayam Lightroot",
          latitude: "0.33043608685863",
          longitude: "-0.85238346589611",
        },
        {
          mapSlug: "hyrule",
          title: "Umamustor Lightroot",
          latitude: "0.33522896699637",
          longitude: "-0.81276374435495",
        },
        {
          mapSlug: "hyrule",
          title: "Gonatoyros Lightroot",
          description:
            "Use Ascend from the top of the Yiga structure to reach the Lightroot.",
          latitude: "0.28374117269991",
          longitude: "-0.82819844191434",
        },
        {
          mapSlug: "hyrule",
          title: "Gonatoyrim Lightroot",
          latitude: "0.27980351327585",
          longitude: "-0.85366208853853",
        },
        {
          mapSlug: "hyrule",
          title: "Rasinaduk Lightroot",
          latitude: "0.31032546568551",
          longitude: "-0.83746328881594",
        },
        {
          mapSlug: "hyrule",
          title: "Kawiraus Lightroot",
          latitude: "0.32226258250434",
          longitude: "-0.78439606859237",
        },
        {
          mapSlug: "hyrule",
          title: "Koradat Lightroot",
          latitude: "0.30875764221130",
          longitude: "-0.73795415148570",
        },
        {
          mapSlug: "hyrule",
          title: "U-u-ujoj Lightroot",
          latitude: "0.26404295932829",
          longitude: "-0.65434446034183",
        },
        {
          mapSlug: "hyrule",
          title: "Uisihcoj Lightroot",
          latitude: "0.31802047121265",
          longitude: "-0.67316178420592",
        },
        {
          mapSlug: "hyrule",
          title: "Busus Lightroot",
          latitude: "0.31320338634927",
          longitude: "-0.69198872205988",
        },
        {
          mapSlug: "hyrule",
          title: "Nuzimak Lightroot",
          latitude: "0.32916417145047",
          longitude: "-0.70880048202503",
        },
        {
          mapSlug: "hyrule",
          title: "Nipahsom Lightroot",
          latitude: "0.44043675391330",
          longitude: "-0.61693598224471",
        },
        {
          mapSlug: "hyrule",
          title: "Misisi Lightroot",
          latitude: "0.47062626457235",
          longitude: "-0.64383934131772",
        },
        {
          mapSlug: "hyrule",
          title: "Mustis Lightroot",
          latitude: "0.46288993283270",
          longitude: "-0.62697612454895",
        },
        {
          mapSlug: "hyrule",
          title: "Katijabis Lightroot",
          latitude: "0.48455508974398",
          longitude: "-0.62588191513467",
        },
        {
          mapSlug: "hyrule",
          title: "Katoij Lightroot",
          latitude: "0.48147396218440",
          longitude: "-0.64412540652583",
        },
        {
          mapSlug: "hyrule",
          title: "Kayam Lightroot",
          latitude: "0.49951997478908",
          longitude: "-0.66221361962803",
        },
        {
          mapSlug: "hyrule",
          title: "Uukukis Lightroot",
          latitude: "0.46910999523608",
          longitude: "-0.68060655092859",
        },
        {
          mapSlug: "hyrule",
          title: "Katenim Lightroot",
          latitude: "0.49135119822085",
          longitude: "-0.69043833884581",
        },
        {
          mapSlug: "hyrule",
          title: "Ikatoayam Lightroot",
          latitude: "0.49298213980727",
          longitude: "-0.73055715338560",
        },
        {
          mapSlug: "hyrule",
          title: "U-nazohso Lightroot",
          latitude: "0.49757579653824",
          longitude: "-0.74835299954682",
        },
        {
          mapSlug: "hyrule",
          title: "Ramobnukas Lightroot",
          latitude: "0.45372572389425",
          longitude: "-0.69778129052600",
        },
        {
          mapSlug: "hyrule",
          title: "Sijnin Lightroot",
          latitude: "0.43999769062312",
          longitude: "-0.69173671502236",
        },
        {
          mapSlug: "hyrule",
          title: "Eknupup Lightroot",
          latitude: "0.45034838227245",
          longitude: "-0.68326736861763",
        },
        {
          mapSlug: "hyrule",
          title: "Kisomom Lightroot",
          latitude: "0.46798118916371",
          longitude: "-0.60785632117621",
        },
        {
          mapSlug: "hyrule",
          title: "Tayamik Lightroot",
          latitude: "0.49620091883016",
          longitude: "-0.61095458092996",
        },
        {
          mapSlug: "hyrule",
          title: "Ui-ihcoj Lightroot",
          latitude: "0.47175847783690",
          longitude: "-0.56320139412909",
        },
        {
          mapSlug: "hyrule",
          title: "Gedihcayam Lightroot",
          latitude: "0.43781904966301",
          longitude: "-0.60459795629234",
        },
        {
          mapSlug: "hyrule",
          title: "Niuzimod Lightroot",
          latitude: "0.42567422263913",
          longitude: "-0.59676904352511",
        },
        {
          mapSlug: "hyrule",
          title: "Uinoj Lightroot",
          latitude: "0.39550846476276",
          longitude: "-0.60919928582823",
        },
        {
          mapSlug: "hyrule",
          title: "Kawagom Lightroot",
          latitude: "0.39275593631938",
          longitude: "-0.59696467301271",
        },
        {
          mapSlug: "hyrule",
          title: "Kawamit Lightroot",
          latitude: "0.43173946713074",
          longitude: "-0.64514018519503",
        },
        {
          mapSlug: "hyrule",
          title: "Netamnet Lightroot",
          latitude: "0.42910453040889",
          longitude: "-0.72221289487246",
        },
        {
          mapSlug: "hyrule",
          title: "Kegopa Lightroot",
          latitude: "0.37222025273573",
          longitude: "-0.57806294661580",
        },
        {
          mapSlug: "hyrule",
          title: "Kuzimoy Lightroot",
          latitude: "0.35939401007580",
          longitude: "-0.56109336270393",
        },
        {
          mapSlug: "hyrule",
          title: "Nojoj Lightroot",
          latitude: "0.38967692804960",
          longitude: "-0.66437138299534",
        },
        {
          mapSlug: "hyrule",
          title: "Zi-ner Lightroot",
          latitude: "0.40570789011824",
          longitude: "-0.67887853187213",
        },
        {
          mapSlug: "hyrule",
          title: "Apapes Lightroot",
          latitude: "0.41395140253000",
          longitude: "-0.69594696368085",
        },
        {
          mapSlug: "hyrule",
          title: "Gadohsi Lightroot",
          latitude: "0.39275224851153",
          longitude: "-0.73148311671494",
        },
        {
          mapSlug: "hyrule",
          title: "Kawakanis Lightroot",
          latitude: "0.40357430386068",
          longitude: "-0.74864660525711",
        },
        {
          mapSlug: "hyrule",
          title: "Akinatanis Lightroot",
          latitude: "0.45317607979435",
          longitude: "-0.57938218444647",
        },
        {
          mapSlug: "hyrule",
          title: "Sikutamak Lightroot",
          latitude: "0.48717875421990",
          longitude: "-0.59268985562954",
        },
        {
          mapSlug: "hyrule",
          title: "Kawikatisar Lightroot",
          latitude: "0.42168305227231",
          longitude: "-0.56904602086678",
        },
        {
          mapSlug: "hyrule",
          title: "Sisinatag Lightroot",
          latitude: "0.40571330839553",
          longitude: "-0.55839491036531",
        },
        {
          mapSlug: "hyrule",
          title: "Arusakam Lightroot",
          latitude: "0.34519454403616",
          longitude: "-0.64604288739957",
        },
        {
          mapSlug: "hyrule",
          title: "Korom Lightroot",
          latitude: "0.35409791736973",
          longitude: "-0.66504411786309",
        },
        {
          mapSlug: "hyrule",
          title: "Stakijat Lightroot",
          latitude: "0.34662732509290",
          longitude: "-0.69201884845063",
        },
        {
          mapSlug: "hyrule",
          title: "Netinet Lightroot",
          latitude: "0.34328954097550",
          longitude: "-0.70553892976050",
        },
        {
          mapSlug: "hyrule",
          title: "Mihcihc Lightroot",
          latitude: "0.28231005985151",
          longitude: "-0.80632236541524",
        },
        {
          mapSlug: "hyrule",
          title: "Gataharak Lightroot",
          latitude: "0.26254365001247",
          longitude: "-0.82298729761874",
        },
        {
          mapSlug: "hyrule",
          title: "Kasari Lightroot",
          latitude: "0.25604981419271",
          longitude: "-0.83703437657815",
        },
        {
          mapSlug: "hyrule",
          title: "Muzasu Lightroot",
          latitude: "0.35103598243933",
          longitude: "-0.77214753089643",
        },
        {
          mapSlug: "hyrule",
          title: "Sasag Lightroot",
          latitude: "0.38246886066476",
          longitude: "-0.83671404340154",
        },
        {
          mapSlug: "hyrule",
          title: "Muot'ue Lightroot",
          latitude: "0.49397934664931",
          longitude: "-0.81596974818214",
        },
        {
          mapSlug: "hyrule",
          title: "Sinonoyk Lightroot",
          latitude: "0.39368617694738",
          longitude: "-0.70991367101729",
        },
        {
          mapSlug: "hyrule",
          title: "Oyimay Lightroot",
          latitude: "0.39436152624556",
          longitude: "-0.69256547515948",
        },
        {
          mapSlug: "hyrule",
          title: "Nihcayam Lightroot",
          latitude: "0.35104958926532",
          longitude: "-0.72571423291754",
        },
        {
          mapSlug: "hyrule",
          title: "Kohsustu Lightroot",
          latitude: "0.27109581077866",
          longitude: "-0.68171011757983",
        },
        {
          mapSlug: "hyrule",
          title: "Amo-ne Lightroot",
          latitude: "0.29813616094249",
          longitude: "-0.69968730479440",
        },
        {
          mapSlug: "hyrule",
          title: "Uihcoke Lightroot",
          latitude: "0.42025090265533",
          longitude: "-0.66886951921188",
        },
        {
          mapSlug: "hyrule",
          title: "Anonisik Lightroot",
          latitude: "0.41909041774990",
          longitude: "-0.62042546353157",
        },
        {
          mapSlug: "hyrule",
          title: "Uasnoj Lightroot",
          latitude: "0.37975779145467",
          longitude: "-0.64686682752873",
        },
        {
          mapSlug: "hyrule",
          title: "Amakawis Lightroot",
          latitude: "0.27142295702002",
          longitude: "-0.78157207252170",
        },
        {
          mapSlug: "hyrule",
          title: "Sisustom Lightroot",
          description: "Use ascend or the hot air balloon to reach it",
          latitude: "0.26642439345814",
          longitude: "-0.76089972378119",
        },
        {
          mapSlug: "hyrule",
          title: "Kawakarut Lightroot",
          latitude: "0.37217212241998",
          longitude: "-0.81539997731099",
        },
        {
          mapSlug: "hyrule",
          title: "Kuhsagi Lightroot",
          latitude: "0.49914504213100",
          longitude: "-0.55327550875089",
        },
        {
          mapSlug: "hyrule",
          title: "Kimimeg Lightroot",
          latitude: "0.44729889914677",
          longitude: "-0.55776871690534",
        },
        {
          mapSlug: "hyrule",
          title: "Rikonasum Lightroot",
          latitude: "0.44777850269938",
          longitude: "-0.69001484764362",
        },
        {
          mapSlug: "hyrule",
          title: "Sohse Lightroot",
          latitude: "0.31663712044764",
          longitude: "-0.65271838594361",
        },
        {
          mapSlug: "hyrule",
          title: "Tatayam Lightroot",
          latitude: "0.29814148272695",
          longitude: "-0.80896025477546",
        },
        {
          mapSlug: "hyrule",
          title: "Kimakarut Lightroot",
          latitude: "0.30727359052715",
          longitude: "-0.78852344851595",
        },
        {
          mapSlug: "hyrule",
          title: "Camobatures Lightroot",
          latitude: "0.41698212682581",
          longitude: "-0.70889046918944",
        },
        {
          mapSlug: "hyrule",
          title: "Sekioam Lightroot",
          latitude: "0.38383408471290",
          longitude: "-0.62980415963108",
        },
        {
          mapSlug: "hyrule",
          title: "A-nehi Lightroot",
          latitude: "0.39773985773112",
          longitude: "-0.58128912913537",
        },
        {
          mapSlug: "hyrule",
          title: "Yisuayam Lightroot",
          latitude: "0.46285126490604",
          longitude: "-0.74064285245262",
        },
        {
          mapSlug: "hyrule",
          title: "Kawisar Lightroot",
          latitude: "0.48417263387226",
          longitude: "-0.55294112696205",
        },
        {
          mapSlug: "hyrule",
          title: "Agihi-ihcoj Lightroot",
          latitude: "0.41835331154482",
          longitude: "-0.58051209427910",
        },
        {
          mapSlug: "hyrule",
          title: "Nogukoyk Lightroot",
          description: "**Coordinates:** -0708, -1551, -0517",
          latitude: "0.32921132179324",
          longitude: "-0.72610445855577",
        },
        {
          mapSlug: "hyrule",
          title: "Jadukakar Lightroot",
          latitude: "0.31931954259963",
          longitude: "-0.76871739089623",
        },
        {
          mapSlug: "hyrule",
          title: "Cugukaram Lightroot",
          description: '**Location:** At the top of the lava "waterfall"',
          latitude: "0.45991136377197",
          longitude: "-0.64629991867440",
        },
        {
          mapSlug: "hyrule",
          title: "Sikatag Lightroot",
          latitude: "0.43725271772726",
          longitude: "-0.82070007771733",
        },
        {
          mapSlug: "hyrule",
          title: "Korakut Lightroot",
          latitude: "0.37108394117732",
          longitude: "-0.67361645866479",
        },
      ],
      title: "Lightroot",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Room of Awakening",
          description:
            "**Location:** Inside the mountain - this is where you start the game.",
          latitude: "0.98990515947995",
          longitude: "-0.69123917501216",
        },
        {
          mapSlug: "hyrule",
          title: "Lucky Clover Gazette",
          latitude: "0.75991635506302",
          longitude: "-0.80791409046697",
        },
        {
          mapSlug: "hyrule",
          title: "Hateno School",
          description: "**Location:** Hateno Village",
          latitude: "0.63966945270455",
          longitude: "-0.59479183798538",
        },
        {
          mapSlug: "hyrule",
          title: "Sand-Seal Rental Shop",
          latitude: "0.62818237779712",
          longitude: "-0.79920813334121",
        },
        {
          mapSlug: "hyrule",
          title: "Hyrule Castle",
          latitude: "0.73666584324674",
          longitude: "-0.71132518351152",
        },
        {
          mapSlug: "hyrule",
          title: "Break-a-Part Shop",
          description:
            "A Goro breaks apart previously fused shields or weapons without losing the two parts.",
          latitude: "0.75572435434151",
          longitude: "-0.57467433563187",
        },
        {
          mapSlug: "hyrule",
          title: "Yiga Clan Hideout",
          description: "To Open collect:\n- Yiga Mask",
          latitude: "0.65901642544402",
          longitude: "-0.81951052255096",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/294ba232-0fa5-4e37-8408-180dad237988.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Hyrule Castle B2",
          latitude: "0.79137622948125",
          longitude: "-0.41742397985975",
        },
        {
          mapSlug: "hyrule",
          title: "Hyrule Castle B3",
          latitude: "0.79170405271716",
          longitude: "-0.37727600777485",
        },
        {
          mapSlug: "hyrule",
          title: "Hyrule Castle B1",
          latitude: "0.79301471827588",
          longitude: "-0.45696791209802",
        },
        {
          mapSlug: "hyrule",
          title: "Hyrule Castle F1",
          latitude: "0.79137223683804",
          longitude: "-0.49837608932779",
        },
        {
          mapSlug: "hyrule",
          title: "Princess Zelda's Room",
          latitude: "0.77493698182697",
          longitude: "-0.50567349140128",
        },
        {
          mapSlug: "hyrule",
          title: "Kara Kara Bazaar",
          latitude: "0.62076037625631",
          longitude: "-0.80740036275981",
        },
        {
          mapSlug: "hyrule",
          title: "Goflam's Secret Hot Spring",
          latitude: "0.81748727528047",
          longitude: "-0.81368131635509",
        },
        {
          mapSlug: "hyrule",
          title: "Sturnida Secret Hotspring",
          latitude: "0.79109771594474",
          longitude: "-0.83489105954750",
        },
        {
          mapSlug: "hyrule",
          title: "Secret Passage",
          description:
            'Passage into "inaccessible" area; blocked by large metal crate',
          latitude: "0.82216318600213",
          longitude: "-0.55031003886108",
        },
        {
          mapSlug: "hyrule",
          title: "Lucky Treasure Shop",
          description:
            "Available after completing Lurelin Village Restoration Project.\n\nChoose one of three chests to get a random prize from the cages on the right when you enter. Giving the shop keeper a Roasted Porgy lets you try again, up to twice. Once his stock has been emptied you have to wait for the stock to replenish.",
          latitude: "0.59443543221617",
          longitude: "-0.60747339159965",
        },
        {
          mapSlug: "hyrule",
          title: "Ultra Ball Haul Check-in",
          latitude: "0.72249956444418",
          longitude: "-0.80301061070759",
        },
        {
          mapSlug: "hyrule",
          title: "Learnings of the Zora, Part Five",
          latitude: "0.69682188719395",
          longitude: "-0.61169090361128",
        },
        {
          mapSlug: "hyrule",
          title: "Entrance to the Great Plateau",
          description:
            "Part of the Side Adventure A Call from the Depths\n\nUnlocking this will allow easier entry into the Great Plateau as well as the use of horses.",
          latitude: "0.65377013004114",
          longitude: "-0.72176094366117",
        },
      ],
      title: "Point of Interest",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Lookout Landing",
          latitude: "0.70630832676410",
          longitude: "-0.71128025651015",
        },
        {
          mapSlug: "hyrule",
          title: "Kakariko Village",
          latitude: "0.67129177849662",
          longitude: "-0.64460672768215",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e2c953f3-361f-4360-8d8f-abe134f1eb50.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zora's Domain",
          latitude: "0.71854995095403",
          longitude: "-0.59673809969195",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/97772597-b481-4455-a134-17180be5a17c.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rito Village",
          latitude: "0.76103719258629",
          longitude: "-0.81969931028308",
        },
        {
          mapSlug: "hyrule",
          title: "Goron City",
          latitude: "0.78171159947780",
          longitude: "-0.64967527985542",
        },
        {
          mapSlug: "hyrule",
          title: "Hateno Village",
          latitude: "0.63457128983771",
          longitude: "-0.59369606058706",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/c4ce1682-ebab-40e7-933a-91f30bdb86df.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Gerudo Town",
          latitude: "0.60916937668065",
          longitude: "-0.82671377759743",
        },
        {
          mapSlug: "hyrule",
          title: "Lurelin Village",
          latitude: "0.59080427705989",
          longitude: "-0.60585802551665",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/1d6d16e8-8d35-4045-9b15-55d619cd0e4d.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tarrey Town",
          latitude: "0.75490039136499",
          longitude: "-0.57584947764238",
        },
      ],
      title: "Settlement",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Nachoyah Shrine",
          description:
            "_The Ability to Rewind_\n\n**Location:** 0388, -1660, 2299 - Inside the Room of Awakening and receiving the Rewind ability, come back here and ride the Rewinded cogs to the shrine.  \n\n**Solution:** \n1. Rewind the wooden raft, then jump on it to the other platform.\n2. Rewind the wooden raft, then jump on it to move up the waterfall.\n3. In the next room, turn right. Wait until both hands are aligned, then Rewind one of them. Walk through the door to the end statue.\n\n**Treasure:** \n- 10x Arrow - On a platform, above the water next to the cog. Rewind the cog to access.",
          latitude: "0.99281579463954",
          longitude: "-0.69060661468339",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/b4451938-c1dc-44f9-b997-764f71387e3f.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Gutanbac Shrine",
          description:
            "_The Ability to Rise_\n\n**Location:** 0709, -1381, 1584 - ??  \n**Solution:** \n1. Ascend from the ground to the higher platform.\n2. Ascend through the right-most pillar.\n3. Defeat the Construct Guardian.\n4. Cut the ropes of the bridge, which will fall down, then Ascend through it to reach the end statue.\n\n**Treasure:** \n- Stone Axe Chest] - In the construct room, destroy the wooden boxes in the right wall to reveal an alcove; Ascend in the alcove to the chest.",
          latitude: "1.00178888935680",
          longitude: "-0.68030409514822",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/48bb7e60-3cb0-406d-9898-554ed29aa59d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ukouh Shrine",
          description:
            "_The Ability to Create_\n\n**Location:** 0274, -0913, 1460 - ??  \n**Solution:**\n1. Move the stone slab to create a bridge and cross the first gap.\n2. Using Ultrahand, glue both slabs together to create an even longer bridge, and cross the second gap.\n3. Ultrahand a Hook on a Board, to create a platform, and place it on the rail. Jump on it and ride it to the end.\n\n**Treasure:** \n- Amber - Beyond the second gap, use the long bridge to reach a higher platform in the corner.",
          latitude: "1.01699418281130",
          longitude: "-0.69431907760392",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/688a3f0d-39ef-47b3-93fd-6147c59f0539.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "In-isa Shrine",
          description:
            "_The Ability to Combine_\n\n**Location:** 0027, -1503, 1408 - ??  \n\n**Solution:** \n1. Fuse the Boulder to any weapon (such as the nearby Broadsword) to create a Hammer. Use this hammer to smash the cracked pillars on the far side of the room.\n2. In the next room, turn right and collect the Fire Fruits from the bushes.\n3. Fire a Flaming Arrow at the vine-covered platform against the far wall. You can make an arrow flaming by Fusing a Fire Fruit to it.\n4. Grab the Small Key from the fallen chest, and unlock the door to the end statue.\n\n**Treasure:** \n- 5x Arrow - On a pillar, in the second room. Break it using a makeshift hammer to drop the chest.",
          latitude: "0.99792161535413",
          longitude: "-0.70232552577841",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/3b1c46ee-aa55-44b2-b712-5bc23d701999.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Yamiyo Shrine",
          description:
            "_Combat Training: Throwing_\n\n**Location:** 0334, 0467, 0029\n\n**Solution:** \n- Defeat the construct, following the on-screen prompts\n\n**Treasure:** \n- Bomb Flower x3 - Just before the end statue.",
          latitude: "0.71807852282181",
          longitude: "-0.69230349122423",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/3b7c3efd-6d2b-416b-9f5b-bc755828caec.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayachin Shrine",
          description:
            "**Location:** -0705, -0865, 0031 - Windvane Meadow, near the Exchange Ruins.  \n\n**Solution:** \n- First step on square pressure pad on floor for the first target to appear. \n- Attach a pole to the flat side of a stake, then attach stake to backside of the mechanism in middle of lowered area. \n- Once attached - go to top level and swing at level to make the pole swing like a bat. \n- Wait for the ball to hit 3rd to 4th notch on ground for correct timing. \n\n**Treasure:** \n- Energizing Elixir - must hit second target",
          latitude: "0.67502447713184",
          longitude: "-0.72592646663077",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/457f8271-8a6d-4b65-88eb-a08c57c7a9da.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kamizun Shrine",
          description:
            "_Proving Grounds: Beginner_\n\n**Location:** -0177, -1557, 0023 - ??  \n\n**Solution:** \n1. Defeat all the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Spring Shield Chest] - Just before the end statue.",
          latitude: "0.65309302325136",
          longitude: "-0.70877909660351",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/ee5239a5-53e4-46d9-9dbf-0cf5be65bed6.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jiosin Shrine",
          description:
            "_Shape Rotation_\n\n**Location:** -3983, -1084, 0624 - ??  \n\n**Solution:** \n1. Ultrahand the long piece of stone, and rotate it so it fits through the X-shaped hole in the wall.\n2. Use the long piece of stone to create a bridge to the other side.\n3. Repeat the process for the dual-cube-shaped piece of rock, rotating it so it fits through both walls.\n4. Place the shape to create a staircase to the end statue.\n\n**Treasure:** \n- Hasty Elixir - On a ledge, in the 2nd puzzle room. After crossing the first gate, place the two blocks in the hole to create a staircase to the chest.",
          latitude: "0.69179736850241",
          longitude: "-0.71063904454718",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d1a1b4c6-8355-4339-b456-ac3f776163c4.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zanmik Shrine",
          description:
            "_Scoop It Out_\n\n**Location:** 3469, -2179, 0148 - Overlooking Hateno Village - Attach 4 plates in a 2x2 formation, then Attach it to the wheel before activating it. This should scoop the balls out and reveal the chest underneath.",
          latitude: "0.63320301445057",
          longitude: "-0.59142708778521",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/ddd6eacb-d657-45a7-b508-52643909ddd7.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Turakamik Shrine",
          description:
            "_Hidden Metal_\n\n**Location:** -2654, -2238, 0067 - On a high ledge on the side of the canyon road. \n\n**Solution:** \n1. Attach the electrified ball to the other to close the circuit and activate the giant cog. Ride it to the higher ledge.\n2. Using Ultrahand, swing one of the balls side-to-side, then Attach the other one to it. Then, Ascend to the alternating pillars.\n3. Dislodge the pipe from the cog system, and place it on the beams next to the electrified ball. Attach the ball to it to open the door to the end statue.\n\n**Treasure:** \n- Strong Zonaite Shield - In the 3rd room, before removing the pole, Recall the cog and ride it to the higher ledge.",
          latitude: "0.63137245995560",
          longitude: "-0.78861257380657",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/cc299cda-23d6-41d9-a585-352c73c7f4af.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayatat Shrine",
          description:
            "_A Sliding Device_\n\n**Location:** -3290, -2512, 0024 - Near the Kara Kara Bazaar \n\n**Solution:** \n1. Recall one of the sliding sleds, then jump on it to reach the higher ledge.\n2. Attach a Steering Stick and a Fan to the Sled, then pilot it to the end statue.\n\n**Treasure:** \n- Arrow x10 - In the large room, on a higher platform to the left. Pilot the boat there first, then glide to the lower platform and build another one to reach the end.",
          latitude: "0.62239236162327",
          longitude: "-0.80915825886768",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/31260755-5663-43a4-a32e-a16e1a021eaa.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Soryotanog Shrine",
          description:
            "_Buried Light_\n\n**Location:** -3884, -2964, 0123 - At the top of the palace in Gerudo Town \n\n**Solution:** \n1. Dislodge the Fan from the sand dune. Activate it, then Ultrahand it to blow away the last sand dune.\n2. Pick up the Small Key from the chest and open the door.\n3. In the next room, Ascend to the ledge on the left and destroy the construct.\n4. Blow away the sand dunes to reveal both a beam of light and a mirror. Place the mirror on the upper ledge to reflect the beam through the gates. Aim at the corner of the walls beyond the bars.\n5. Return in the first room, and blow away the mirror from the sand dune. Using Ultrahand, reflect the light beam into the hexagon above the door.\n\n**Treasure:** \n- 10x Arrows - Beyond the Small Key door, turn right and crouch in the alcove. There, blow away the sand dunes and grab the Fan Guster from the defeated construct. Glide to the upper ledge using your Fan, then attack the sand dune with the Fan Guster to blow it away. The cog should move and open the door to the chest.",
          latitude: "0.60817276780134",
          longitude: "-0.82782156765487",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/53e0c80e-4252-46fd-8c57-36999697271a.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/421ab822-9839-4e01-8c62-1b31e2d91b0f.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ishodag Shrine",
          description:
            "_A Windy Device_\n\n**Location:** On top of the rocky mound.  \n\n**Solution:** \n- Rotate the first fan so it is blowing air up, close to the next floor, and use your glider to get to the next floor. \n- Attach the second fan to the back of the board and activate it to float across the water. \n- Take the fan off the wooden platform and attach it to the small platform that can be dragged up and down leading to the next floor, facing up and activate it. Leave it for now.\n- Attach one of the fans to the bottom of the rotating concrete platform to get the chest upright. Use the second fan to blow your glider up to the platform. \n- Open the chest and use the ultrahand to push the previous platform up as high as you can take it. Let it drop back down. \n- Get on top of the platform and use Recall so it goes back up. Use your glider with the fan you placed there earlier and that will get you to the shrine's end. \n\n**Treasure:** \n- Opal - Stuck to a pivoting platform, past the pool. Attach a fan to the platform, just under the chest, and activate it to rotate the platform. Then, Ascend through to open the chest.",
          latitude: "0.71663057257295",
          longitude: "-0.73137484520345",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/993feb24-8504-4cc9-af7e-dd0d5d04b4c5.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jonsau Shrine",
          description:
            "_Deep Force_\n\n**Location:** 1751, 0011, 0034 - On a grassy plain, near the shore.\n\n**Solution:** \n1. Ultrahand the floating ball underneath the target, then push it down the water and release it. It should launch upwards and hit the target.\n2. In the next room, defeat the construct.\n3. Repeat step 1 with the floating board, placing it vertically so it launches straight.\n4. In the next room, launch the floating ball under the moving platform to dislodge it and let it fall into the water. Then, jump in the platform and Recall it to the top.\n5. Paraglide to the end statue.\n\n**Treasure:** \n- Strong Construct Bow - In the 2nd room, in the water by the first pillar. Grab it with Ultrahand.",
          latitude: "0.70352649114589",
          longitude: "-0.64680034113772",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4feedcad-645e-4a21-b134-1bb1a14c248d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Morok Shrine",
          description:
            "_A Bouncy Device_\n\n**Location:** 1178, -0781, 0133 - On a floating island, connected to the ground by a thick root. Climb up the root, or glide from the higher sky islands. \n\n**Solution:** \n1. Step on the launch pad to launch Link upwards and glide to the ledge.\n2. Step on the Spring, then activate it to launch Link upwards and glide to the ledge.\n3. Bring the Spring against the right-most fence, and use it to reach the platform.\n4. On that platform, take the Spring and prop it against the slanted slab to create a makeshift launch pad. Use it to send the ball on the main platform and into the socket.\n5. Glide back to the main platform, then Attach the Spring to the other 2 in the next room. Place the triple spring against the far wall.\n6. Climb the triple spring, then activate it to reach the end statue.\n\n**Treasure:** \n- Sneaky Elixir - After activating the triple Spring, glide to the platform halfway up the steep wall.",
          latitude: "0.67757780667800",
          longitude: "-0.66497570336099",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/40b6630a-dacf-40f1-bb73-45ed41dd4889.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Teniten Shrine",
          description:
            "_Combat Training: Throwing_\n\n**Location:** -0075, -115, 0021 - Out in the open, just east of the lake.  \n\n**Solution:** \n1. Defeat the construct, following the on-screen prompts.\n\n**Treasure:** \n- Zonaite Spear - Just before the end statue.",
          latitude: "0.66714686565045",
          longitude: "-0.70523858070331",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/6e318618-7807-4b1b-98b1-b78b0bece3db.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tukarok Shrine",
          description:
            "_Forward Force_\n\n**Location:** 0915, -0250, -0034 - In a grove beside the stable. \n\n**Solution:** \n1. Walk to the end of the hallway and drop down.\n2. Attach the ball to the vehicule, then activate it to make it cross the lava.\n3. Attach the Big Wheel to the slab on the rail, then Attach the rectangular slab to it and the ball on top. When activated, the slab should advance all the way to the top.\n4. Bring the ball into the next room, and Attach it to the board with wheels. Then, Attach a board to each Wheel to create paddles.\n5. Place the paddleboat between the fences and activate it, then place the ball on the pressure plate to open the door.\n6. Place the ball in the socket to reach the end statue.\n\n**Treasure:** \n- Strong Zonaite Sword - Under the water, between the two fences. Grab it with Ultrahand.",
          latitude: "0.69502139701427",
          longitude: "-0.67368710958698",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/bef6664a-e76b-41dd-af13-ac0e2361548b.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Eutoum Shrine",
          description:
            "_Proving Grounds: Infiltration_\n\n**Location:** -3509, 3568, 0387 - Against the far side of the peak. \n\n**Solution:** \n1. Defeat the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Sapphire - Just before the end statue.",
          latitude: "0.81857661853348",
          longitude: "-0.81581540334918",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/8a3cb345-9c6b-4177-ad3f-fec92b68a58a.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Gatakis Shrine",
          description:
            "_Ride the Winds_\n\n**Location:** -3651, 1805, 0168 - Inside Rito Village, jump down from the main path to reach a side ledge. \n\n**Solution:** \n1. Gliding with your paraglider, use the gusts to guide Link through the obstacles.\n\n**Treasure:** \n- Strong Construct Bow - Past the ice barrier, on a high ledge guarded by a construct.",
          latitude: "0.76111475455382",
          longitude: "-0.82062007924173",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/173ca1a4-0395-4413-9315-5d20a099a444.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/1K3X9XaNeac",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ijo-o Shrine",
          description:
            "_More than Defense_\n\n**Location:** -3862, 2679, 0702 - On a lonely sky island. \n\n**Solution:** \n1. Defeat the construct, then use his Flame-Emitter Shield to melt the ice block in the doorway.\n2. Defeat the construct on the left, then use his Stone-Slab shield to move beyond the flames into the next room.\n3. Defeat the construct in the large room. Then, Attach a few Rockets on the stone slab, and use it as a launching platform to the end statue.\n\n**Treasure:** \n- Arrow x5 - Beyond the doorway, within an ice block. Melt it with the Flame-Emitter Shield.",
          latitude: "1.13241575305970",
          longitude: "-0.82752437620587",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/7d87f3b3-d8fd-4f36-a8cd-29632c280af8.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayaumekis Shrine",
          description:
            "_Downward Force_\n\n**Location:** -2947, 3051, 0897 - Rising Island Chain of the Hebra Sky \n\n**Solution:** \n1. Shoot the crystal through the bars to open the door.\n2. Defeat the construct atop the ledge, then jump and bounce off the trampoline to the ledge above.\n3. Wait for the moving trampoline to move closer, then jump on the trampoline just beneath and glide to it.\n4. Wait for it to move closer, then bounce on the next platform.\n5. Bounce on the nearby trampoline, and at the peak of the jump, shoot the crystal through the bars.\n6. Head to the trampoline ahead, and bounce to the end statue.\n\n**Treasure:** \n- Arrow x10 - In the corner of the main room, on a high pillar. While on the moving trampoline, bounce once you reach the corner.",
          latitude: "1.14471684560610",
          longitude: "-0.79809602799423",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Runakit Shrine",
          description:
            "_Built to Carry_\n\n**Location:** -2527, 1169, 0177 - In the open, west of the tower. \n\n**Solution:** \n1. Climb the ladder on the farthest ledge, then place the ball on the rails to slide it to the lower ledge.\n2. Attach both poles together, then the ball under it in the center. Place the contraption on the rails, which should slide to the lower ledge.\n3. Build the following contraption. Then, place it on the single rail to slide it to the starting platform.\n    - Attach two square stone slabs in an L-shape.\n    - Under each slab, attach a pole so it looks like a roof with 2 columns.\n    - Attach the ball to both pillars.\n4. Place the ball in the socket to open the door to the end statue.\n\n**Treasure:** \n- Construct Bow - On a pillar, beyond the 2nd lower ledge. Attach multiple stone slabs end-to-end to make a ramp to the chest.",
          latitude: "0.74068479942912",
          longitude: "-0.78442275524134",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/181a7806-7984-41f0-805f-74c71c699b75.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/c43f7af2-c954-4788-b784-cb7b67bb6ce7.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sahirow Shrine",
          description:
            "_Aid from Above_\n\n**Location:** -3354, 2387, 0361 - Near the top of Corvash Peak. \n\n**Solution:** \n1. Cross the laser-filled hallway. Jump over the low lasers and crouch under the others.\n2. Ascend to the higher platform and turn left.\n3. Cross the two hallways, jumping over the 1st laser and crouching under the 2nd.\n4. In the final hallway, wait for the structure to be near, then Ascend through the top and glide to the end platform.\n\n**Treasure:** \n- Spicy Elixir - On the higher platform, crouch under the laser. Then, Ultrahand the block in front of the laser to open the gate to the chest.",
          latitude: "0.78045727983947",
          longitude: "-0.81134205238004",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/6b737859-54b9-484b-ae6b-350c407279f4.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sinakawak Shrine",
          description:
            "_An Uplifting Device_\n\n**Location:** -1372, 0749, 0086 - Just behind New Serenne Stable.  \n\n**Solution:** \n1. Create a makeshift Hot-air Platform; you can do so by attaching a Candle to the center of a Board, then attacking a Balloon on top of the candle.\n2. Use the hot-air platform to reach the higher ledge; if the platform flies away, you can Rewind it to the ground.\n3. Dislodge the Board from the hot-air platform, and place the Candle-Balloon in front of the gate. It should rise and open the gate.\n4. Paraglide to the bottom floor, and make another Hot-air Platform, this time attaching the small ball to it.\n5. Ascend to the higher ledge, then Dislodge the ball into the small socket, opening the gate to the end statue.\n\n**Treasure:** \n- Opal - In the final room, make the following contraption. Attach the Large Ball to the Board, then 2 Candles on opposite corners. Finally, attach a Balloon to each candle; the contraption should slowly ascend. Dislodge it from the higher ledge and into the large socket.",
          latitude: "0.72744376551374",
          longitude: "-0.74886144075697",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/31609fa2-1e7a-4514-aee9-7e3b4b90d92b.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/87fd2433-1180-4b18-9121-d44f1d0df069.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tajikats Shrine",
          description:
            "_Building With Logs_\n\n**Location:** Along the river, in plain sight.\n\n**Solution:** \n- Use Ultrahand to maneuver the log into a ramp to get up the first hurdle. Make sure to prop up the log on a corner so it doesn't roll away!\n- In the next area, you will be give 2 more logs. Grab the log from the previous step, and create a tripod-looking shape with all three. The angle-fused legs should be able to lean on the ledge of the ramp, allowing you to cross without it slipping away.\n- Fuse the 2 new logs into a bridge to cross the small water obstacle.\n- You are given 4 additional logs. Using all 4, plus the 2 from the previous water obstacle, you need to create a bridge that is 3-logs long and 2-logs thick; the double wide bridge will prevent rolling.\n- In the final area, you are given 9 logs and 2 propellers. You can either use the propellers to create a boat, or use the all the logs (plus the logs from the previous step) to create a massive bridge to the shrine's end. Or, if you have enough stamina, you can swim across.)\n\n**Treasure:** \n- Spiky Shield: In the final area, there is a small platform on the left side of the water.",
          latitude: "0.67083132619777",
          longitude: "-0.69217267571619",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a20e0341-03de-46d4-a167-0d5e76e513ae.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tauyosipun Shrine",
          description:
            "_Forward or Backward?_\n\n**Location:** -4535, 2878, 0262 - On the western side of the mountain.  \n\n**Solution:** \n1. Recall one of the large balls, and run behind it as it rolls up the ramp.\n2. Step on the pressure plate to block the ramp, and wait for a ball to fall into it.\n3. Ultrahand the large ball and place it on the ramp.\n4. Recall the first ball. pushing the 2nd one into the socket and opening the door.\n5. Wait for the ball to fall on the 2nd platform, then Recall it.\n6. When the ball is in mid-air, just between the two platforms, stop the Recall. It should fall into the socket and open the gate to the end statue.\n\n**Treasure:** \n- Strong Construct Bow - Beyond the first ramp, Recall the wheel just as the chest falls onto it. It should rotate towards Link.",
          latitude: "0.79567092070512",
          longitude: "-0.84906517211445",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/644540dd-b9ef-424b-8373-4cfda4e05f77.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kyononis Shrine",
          description:
            "_Combat Training_\n\n**Location:** -0205, 0451, 0021 - ??  \n\n**Solution:** \n1. Defeat the construct, following the on-screen prompts.\n\n**Treasure:** \n- Zonaite Sword Chest] - Just before the end statue.",
          latitude: "0.71789512053911",
          longitude: "-0.70917376163942",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0f05e846-0aac-47d9-9249-bd5848fbcfb7.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/6c699c16-6428-4fd7-92ea-ef56b1ed9ca3.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Susuyai Shrine",
          description:
            "_A Spinning Device_\n\n**Location:** -0785, -0434, 0018 - ??  \n\n**Solution:** \n1. Ultrahand the moving carts away to safely cross to the other side. Make sure to bring a cart to the far side.\n2. Position the cart forward, then activate it to cross the moving platform.\n3. Using Ultrahand, dislodge a Wheel from the cart and attack it to the side of the crank. Activate the Wheel to rotate the crank and open the gate.\n4. Remove the platform from the rail, and attach a Wheel in the opening above.\n5. Replace the platform on the rail, and activate the Wheel to move the platform to the end statue.\n\n**Treasure:** \n- 5x Arrows - Attached to the middle cart, at the beginning of the puzzle.",
          latitude: "0.68931208886627",
          longitude: "-0.72834237328436",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/686033ae-633a-4a32-a4f5-815cc11f539d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sonapan Shrine",
          description:
            "_Missing Pathways_\n\n**Location:** -1921, -0361, 0228 - On the side of Satori Mountain, in an apple grove. \n\n**Solution:** \n1. Ascend through the ledge.\n2. Place the metal cube on top of the ledge, then Ascend through it to the staircase.\n3. Ultrahand the metal cube form the alcove to the pool, just underneath the ledge.\n4. Ascend through the alcove on the ledge. Then, paraglide to the metal cube and Ascend to the end statue.\n\n**Treasure:** \n- Arrow x5 - Embedded high in a wall. After ascending the first ledge, bring the metal cube from the right alcove to the left, creating a pathway to the chest.",
          latitude: "0.69140806238624",
          longitude: "-0.76497483227038",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/78335c87-0194-4e19-b4fc-35acdb318e76.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ihen-a Shrine",
          description:
            "_Midair Perch_\n\n**Location:** 3805 - 0573 - 0484 - At the top of the mountain, by Miphia Court \n\n**Solution:** \n1. Ultrahand the platforms to create stairs to the ledge above.\n2. Attach the grate to the platform. Then, activate it and place it above the gap; it should remain there and allow you to cross.\n3. Bring the grate above the next gate, angling it upwards to access the higher ledge.\n4. Attach the ball to a platform, and place it beside the metal slab.\n5. Jump on the platform and shoot the crystal; this should launch the platform across the gap.\n6. Place the ball in the socket to open the door to the end statue.\n\n**Treasure:** \n- 5x Arrow - In the final room, in an alcove against the left wall. Place a floating platform beside it, then Ascend through.",
          latitude: "0.72155828043444",
          longitude: "-0.58119040433729",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f24401a1-e357-4d89-a0bf-dc40b75572ec.jpg",
              type: "image",
            },
            {
              url: "https://www.video.com/watch?v=_7xmCqSPjhY",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rasitakiwak Shrine",
          description:
            "_Proving Grounds: Vehicles_\n\n**Location:** 4166, 1323, 0229 - Off the road near Tarrey Town.  \n\n**Solution:** \n1. Defeat all the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Magic Rod - Just before the end statue.",
          latitude: "0.74543365276951",
          longitude: "-0.56896415686163",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/6df3df12-e45b-4fe1-9008-79c1022bf7a9.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/Jn4EAADIqLU",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mogawak Shrine",
          description:
            "_The Power of Water_\n\n**Location:** 3302, 0423, 0112 - Under the walkways of Zora's Domain \n\n**Solution:** \n1. Grab the empty Battery and place it at the end of the circuit, on the right.\n2. Attach the stone plate on the wheel, opposite of the other. Then, move it slightly to get it moving and recharge the Battery.\n3. Jump in the moving platform, then place the Battery in the socket to power it upwards to the end statue.\n\n**Treasure:** \n- Opal - After recharging the battery, bring it close to the left-side pool. Cross the water, then Ultrahand the battery on the plate to complete the circuit and open the door to the chest.\n- Magic Scepter - Use Ultrahand to lift the chest out of the water next to the waterfall.",
          latitude: "0.71657418968350",
          longitude: "-0.59677285314754",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9c68785d-3b5d-482b-b99b-2f523ce4d67d.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/VmJbRLDZmT8",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Orochium Shrine",
          description:
            "_Courage to Fall_\n\n**Location:** -1636, 2641, 0239 - In plain sight, north of the Snowfield Stable \n\n**Solution:** \n1. Head left of the staircase, and destroy the construct.\n2. Ascend to the higher platform, then turn right and fall down. Destroy the 2nd construct.\n3. Open the door atop the staircase with Ultrahand.\n4. Walk into the lasers to fall down. Walk to the end, then Ascend to the chest with the Small Key and Ascend again.\n5. Defeat both constructs and open the door to grab the ball.\n6. Ride the elevator up and drop the ball in the socket to open the hangar.\n7. Attach the ball to the glider and ride it back to the starting room.\n8. Drop the ball in the socket to open the door to the end statue.\n\n**Treasure:** \n- 5x Arrows - After the 2nd construct, instead of climbing the staircase, continue forward. The chest is in an alcove, guarded by a construct.",
          latitude: "0.78823168794835",
          longitude: "-0.75595130884750",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dd97634f-905f-4ad9-931c-fb35a0da1f79.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kiuyoyou Shrine",
          description:
            "_Fire and Ice_\n\n**Location:** -1105, 2086, 0104 - In the open by some trees \n\n**Solution:** \n1. Grab the ice cube, and melt it so it fits in the alcove with the pressure plate. Place it there to open the door.\n2. Glide to the other side with the air flow.\n3. Ultrahand the metal plate to block the flames. Then, grab the ice cube out and Attach the metal plate on top of it. Place the cube on the spikes and let it slide back to the start.\n4. Place the cube underneath the flames in the starting room to activate the pressure plate and open the door to the end statue.\n\n**Treasure:** \n- \nZonaite Spear - In the 2nd room. Ultrahand the smaller ice cube and place it on the higher ledge. Reach the ledge using the metal plate and climb to the chest.",
          latitude: "0.77027503869157",
          longitude: "-0.73876082897229",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/895419ed-c852-4ab4-858e-47844e09d33b.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayausiy Shrine",
          description:
            "_Building Blocks_\n\n**Location:** -1165, 2602, -0083 - Forgotten Temple, beside the toppled statue. \n\n**Solution:** \n1. In both rooms, Ultrahand the blocks to match the left-most structure. See the video for detailed instructions.\n\n**Treasure:** \n- Large Zonai Charge - In the 2nd room, on a pillar in the corner. Before completing the structure, make a climbable structure to reach it.",
          latitude: "0.78662333034616",
          longitude: "-0.74075042345359",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Sikukuu Shrine",
          description:
            "_Spinning Gears_\n\n**Location:** 0699, 2793, 0226 - In plain sight from Thyphlo Ruins - After the first gate, rotate the lever counterclockwise instead. When Rewinded, the gear should push you down into a secret room with the chest.",
          latitude: "0.79297380223332",
          longitude: "-0.68082511424990",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4e7c6a9e-e284-4ea6-8b43-2e9357671e9a.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Nouda Shrine",
          description:
            "_Proving Grounds: Intermediate_\n\n**Location:** -2318, 2202, 0173 - Kopeeki Drifts Cave - Beyond the freezing lake. Let the Ice Like freeze the pond underneath it, then Ultrahand the blocks back to the lake to create platforms. Alternatively, use Ice Fruits.\n\n**Solution:** \n1. Defeat the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Hearty Elixir - Just before the end statue.",
          latitude: "0.77347717462850",
          longitude: "-0.77633023364965",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4ce39bfa-3ea5-4a2a-9643-61b9b9a41392.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Oromuwak Shrine",
          description:
            "_A Launching Device_\n\n**Location:** -3079, 1617, 0243 - On top of the mountain ridge, surrounded by spikes. \n\n**Solution:** \n1. Place a Rocket in the groove, then activate it. It should launch itself into the target and open the door.\n2. Attach a Rocket to the minecart. Then, jump in it and activate it to reach the higher ledge.\n3. Repeat step 2, placing the minecart on the slope. This should propel the cart to the end statue.\n\n**Treasure:** \n- Ruby - In the 3rd room, on a high platform. Attach a Rocket to a minecart, pointing upwards, and activate it.",
          latitude: "0.75448090813198",
          longitude: "-0.80264165997559",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a5f1bf6a-70df-4617-871d-d584ccb073aa.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Taki-Ihaban Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -1830, 1193, 0147 - Lindor's Brow Cave, on a high ledge beyond the Gloom Hands.\n\n**Solution:**\n1. Walk up to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - Just before the end statue.",
          latitude: "0.74140759429902",
          longitude: "-0.76202496886145",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/3e3b87fa-e6ad-4f18-9ca9-f918b4414913.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Oshozan-u Shrine",
          description:
            "_Mallet Smash_\n\n**Location:** -1404, 3677, 0288 - On top of an icy pinnacle. \n\n**Solution:** \n1. Attach the long stone mallet to the sliding platform. Then, Attach the rocket to the mallet, and activate it to launch it into the target.\n2. Repeat step 1 in the next room to open the gate to the end statue.\n\n**Treasure:** \n- Zonaite Bow - In the 2nd room, on a high ledge. Place a cylinder in the alcove, then climb it to the chest.",
          latitude: "0.82143259106691",
          longitude: "-0.74837210677711",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/c3406fc3-735d-4278-a9e7-2db1e616265c.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kahatanaum Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -3296, 3431, 1347 - East Hebra Sky Archipelago  \n\n**Solution:** \n1. Walk up to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - Just before the end statue.",
          latitude: "1.15687924389930",
          longitude: "-0.80933892509560",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Marakuguc Shrine",
          description:
            "_Wheeled Wonders_\n\n**Location:** 1761, 2508, 0473 - Above Goron City  \n\n**Solution:** \n1. Attach the end of the bridge to the poles to cross the gap.\n2. Attach the wheeled platform to the end of the bridge, then activate the wheels. The platform should roll past the gap and extend the bridge.\n3. Attach both wheeled platforms together, then jump on them and activate the wheels to cross the large gap.\n4. Ascend to the higher platform and defeat the construct.\n5. Attach the grate to the front of the vehicule and activate it. This should push most balls on the pressure plate and open the end statue.\n\n**Treasure:** \n- Strong Construct Bow -  On top of a pillar, in the corner of the final room. Use the grate as a ramp to climb on top of it.",
          latitude: "0.78403089853791",
          longitude: "-0.64629652715922",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/785d5141-cd6c-465c-a561-08772d4c18b3.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kikakin Shrine",
          description:
            "_Shining in Darkness_\n\n**Location:** -0395, 2735, 0287 - On the mountain ridge \n\n**Solution:** \n1. Form the starting room, turn left, then right. Cross the crushing walls, then head at the end of the hallway.\n2. Ultrahand the slab away to reveal the chest containing the Small Key,\n3. Make your back to the starting the room and unlock the door to the end statue.\n\n**Treasure:** \n- Opal - In a small alcove. From the starting room, turn left twice; the alcove is just beyond the lasers.\n- Amber - Behind a stone cube on the wall. From the starting room, turn right, the look on the right wall.\n- Luminous Stone - Beyond some crushing walls. From the Small Key chest, turn left twice.\n- Zonaite Bow - Above the ceiling. From the Small Key chest, past the crushing walls, look up for bright hole.",
          latitude: "0.79103020980399",
          longitude: "-0.71602695521980",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/fe7dec5f-25cd-43cd-8f61-ba9c26ca05f6.png",
              type: "image",
            },
            {
              url: "https://youtu.be/AJoVO9hhZOI",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kurakat Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 2366, -0514, 0156 - On a lone pillar, beside a tree. \n\n**Shrine Quest:** Dyeing to Find It - Just before the end statue.",
          latitude: "0.68675780899525",
          longitude: "-0.62729358673064",
          media: [
            {
              url: "https://youtu.be/YX4Tff8D26U",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jogou Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 3346, -1184, 0057 - Lanayru Road East. In the circular area with a Bokoblin Boss patrolling, find the cracked wall on the center pillar. Destroy it, and enter a secret area. \n\n**Solution:** \n1. The puzzle here is actually finding the shrine.\n\n**Treasure:** \n- Hearty Elixir - Just before the end statue.",
          latitude: "0.66491273649777",
          longitude: "-0.59535652399046",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/7536e192-fa1d-47ed-b349-11ac6c8ca16f.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayam Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 0340, 2814, 1821 - On top of the cross-shaped island. \n\n**Shrine Quest:** The North Hyrule Sky Crystal - Just before the end statue",
          latitude: "1.13685145787870",
          longitude: "-0.69251377670557",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9ddcd43b-42c7-4bf5-bdbb-5f00418f859f.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/ab1b437c-2904-4e5d-bcfa-f0c85a0022a9.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Turakawak Shrine",
          description:
            "_Stacking a Path_\n\n**Location:** -3496, -0197, 0066 - Down in Tabatha Frontier, on the shore of a lake, surrounded by thorns. \n\n**Solution:** \n1. Ultrahand the block against the ledge, then climb it.\n2. Once on the ledge, Attach both blocks vertically, and place them under the ladder to reach it.\n3. Grab the first two blocks, and Attach them to the metal block, slightly offset.\n4. Using the offset, Ascend through the blocks to the end statue.\n\n**Treasure:** \n- Magic Rod - In a locked room. From the first high ledge, look up and Ascend through the fenced ceiling. Ascend again to get out.",
          latitude: "0.69595409240739",
          longitude: "-0.81438596064251",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/bbf710bd-31dd-46fc-8b71-6104f479e1da.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ikatak Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -3950, 1138, 0112 - In an empty dry plain. \n\n**Shrine Quest:** The Gisa Crater Crystal\n\n**Treasure:** \n- Big Battery - Just before the end statue.",
          latitude: "0.73969514689307",
          longitude: "-0.83024829626305",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/23228bc9-aea7-4780-85a6-f07ed74b80be.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Iun-orok Shrine",
          description:
            "_The Right Roll_\n\n**Location:** -3538, 0853, -0133 - Tanagar Canyon West Cave - At the far end of the cave, behind 3 thick cracked walls. \n\n**Solution:** \n1. Ultrahand the ball on the slope so it rolls on the target.\n2. Attach the two balls together, then place them on the angled slope. They should roll on both sides of the angle to the target.\n3. Attach the three balls together, like a snowman. Ultrahand the snowman to the end of the curved slope, and drop it at the edge. It should fall and hit the target to the end statue.\n\n**Treasure:** \n- 10x Arrows - In the final room, on a high pillar. Slant the snowman against the pillar and jump from ball to ball to reach it.",
          latitude: "0.73026181122579",
          longitude: "-0.81678220588461",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/05376748-9a5b-4a02-87a9-f55ca10cfad6.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Makurukis Shrine",
          description:
            "_Combat Training: Archery_\n\n**Location:** -2847, 0629, 0233 - On the cliff overlooking Tabantha Bridge stable, at the east end of Tabantha bridge.  \n\n**Solution:** \n1. Defeat the construct, following the on-screen prompts.\n\n**Treasure:** \n- Strong Construct Bow - Just before the end statue.",
          latitude: "0.72343456946611",
          longitude: "-0.79457098373641",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Usazum Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -2138, 0874, 0093 - In the field, west of Safula Hill. \n\n**Shrine Quest:** The Satori Mountain Crystal - Just before the end statue.",
          latitude: "0.67479220859617",
          longitude: "-0.77177944729581",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/b95457aa-a141-470f-83bc-034653dc4c51.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tsutsu-um Shrine",
          description:
            "_The Stakes Guide You_\n\n**Location:** ?? - On a small hill overlooking Outskirt Stable.  \n\n**Solution:** \n1. Using Ultrahand, attach the platform to the pillar when it's at the bottom.\n2. Climb on the platform and paraglide to the metal platform, using the fan to extend your air time.\n3. Replace the 3 stakes as follows, so the giant ball goes into the hole:\n    - In front of the ball's launching ramp, so it hits the stake and falls straight down.\n    - Under the rotating platform, so it slants slightly downwards.\n    - After the ball has fallen on the railing, on the rotating circle so it pushes the ball into the hole. \n\n**Treasure:** \n- 5x Arrows - On top of a pillar. When paragliding to the fan, take a sharp turn left on the pillar.",
          latitude: "0.65944667274347",
          longitude: "-0.74895496874535",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Gasas Shrine",
          description:
            "_Well-Timed Cuts_\n\n**Location:** -3079, 1617, 0243 - At the western end of Tabatha Canyon. \n\n**Solution:** \n1. Shoot the rope to drop the metal cube and make a platform to the other side.\n2. Grab the first metal cube, and Attach it to the second to create a staircase to the higher ledge.\n3. Attach both plates end-to-end to make a bridge to the other side.\n4. Attach the metal cube to one end of the bridge to create a counterweight. Then, place the bridge in the western alcove.\n5. Shoot the hanging chest on the bridge. Use the Small Key inside to open the door.\n6. Using Ultrahand, swing the large ball side-to-side, and shoot the rope when the momentum is right. The ball should drop in the socket and open the door to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - Before the Small Key door, hanging above the chasm. Place the bridge under it before shooting the rope.",
          latitude: "0.70594649094951",
          longitude: "-0.83666904532649",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/1e9009a0-8290-4231-87af-1c7550464e19.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kudanisar Shrine",
          description:
            "_Bridging the Sands_\n\n**Location:** -4168, -2140, 0050 - On top of the rock plateau \n\n**Solution:** \n1. Make your way to the ledge with the light ahead. Be mindful of your stamina, and take breaks on the flowing wooden platforms.\n2. Attach 2 of these platforms to form a longer one, and use it to get past the fence.\n3. Ultrahand the vertical board away, then destroy the construct hiding behind.\n4. Repeat step 2 to get to the ladder, then press the pressure plate. This should launch a small ball to the other side of the room.\n5. Paraglide to the lower ledge, and pilot a boat to the other side of the room. Ascend through the ledge and destroy the construct.\n6. Attach the ball to one of the boats, then press the pressure plate to lower the gate. Pilot the boat back to first boat platform.\n7. Attach boards end-to-end to create a ramp to the stairs. Drop the ball in the socket to open the door to the end statue.\n\n**Treasure:** \n- Hasty Elixir - On top of a pillar, guarded by a construct. When piloting the sand boat, turn right to notice the pillar.",
          latitude: "0.63409608076321",
          longitude: "-0.83730213857672",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2c7be4a0-297f-421e-a2da-0868d91440df.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayamats Shrine",
          description:
            "_A Route for a Ball_\n\n**Location:** -4639, -1510, 0452 - On the edge of the cliff \n\n**Solution:** \n1. Glide to the higher ledge with the air flow.\n2. Ascend to the ledge on the left and Ultrahand the ball down.\n3. Place the ball in the V-shaped groove in the right wall, then Ascend through it.\n4. Recall the smaller ball when it's just above the rail, then immediately cancel it; it should drop on the rail and into the basket.\n5. Attach both balls together and place them on the rail in the first room. They should slide down, but not fall into the hole.\n6. Dislodge the smaller ball into the socket to open the door to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - After first grabbing the ball, place it in the pit in front of the wind current. Use the ball as a platform to the ledge with the chest.",
          latitude: "0.65459278799042",
          longitude: "-0.85249963218658",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/708755bd-948f-47f5-91e3-b662c55cf837.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/9b57bd40-9588-47b1-b6f8-059028aed15d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Otutsum Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -4468, -0670, 0509 - In plain sight, between two mountain peaks.  \n\n**Solution:** \n1. Walk to the end statue.\n\n**Treasure:** \n- Topaz - Just before the end statue.",
          latitude: "0.68155955429667",
          longitude: "-0.84696607553246",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/acaf4571-0b2b-4627-8651-99a87270d1fd.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/d9692239-869c-4074-aef6-8dbc5a47ffae.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rakashog Shrine",
          description:
            "_A Reflective Device_\n\n**Location:** -1713, -2120, -1149 - On a small, lonely island.\n\n**Solution:** \n1. Ultrahand the mirror by the door, and place it in the beam of light so it hits the hexagon. This should open the door.\n2. In the next room, Ultrahand the mirror through the window in the bars. Hold it high in the beam of light, facing right, so it hits the hexagon and opens the door.\n3. Before traversing, send the light beam through the door. On the other side, angle the mirror down so it hits the hexagon and activates the elevator.\n4. Defeat both constructs. Then, use a mirror to reflect the light beam on either side of the stone slab. Use the other to reflect it on the hexagon, opening the door to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - After activating the elevator, place the mirror down so the light beam gets reflected upwards. Use the mirror on the upper platform to activate the hexagon and reach the chest.",
          latitude: "0.97806723874720",
          longitude: "-0.75816275020574",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/00e16da9-f260-4a6e-8254-64d36af00ce3.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rotsumamu Shrine",
          description:
            "_A Balanced Plan_\n\n**Location:** -3405, -1365, 0335 - Beside the chasm, under a ledge. \n\n**Solution:** \n1. Run up the seesaw to the higher ledge.\n2. Attach the metal barrel to the raised end of the seesaw, then use it to climb to the higher ledge.\n3. Extend the raised end of the seesaw with the slab, and attach the metal cube to it. Then, grab a cube from the lowered end and place it on the other end. This should swap the seesaw and allow access to the end statue.\n\n**Treasure:** \n- Large Zonaite - Past the 3rd seesaw; place the slab to create a bridge and jump to the ledge with the chest.",
          latitude: "0.65919443948049",
          longitude: "-0.81276588029954",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d610dc7b-23c2-4834-84c6-f2b2ff0ee2d1.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ren-iz Shrine",
          description:
            "_Jump the Gaps_\n\n**Location:** 0756, 0823, 0082 - In the remains of a massive carved-out tree  \n\n**Solution:** \n1. Ultrahand the metal plate, and prop it against the top of the raised wall. It should be slanted slightly upwards.\n2. Activate the pillar to drop a ball; it should roll down and hit your makeshift ramp to the hole. Adjust as necessary.\n3. In the next room, Attach both metal plates together to form a giant L shape. Drop the L in front of the hole to form another ramp.\n4. Activate the pillar to drop the ball and open the gate to the end statue.\n\n**Treasure:** \n- Strong Zonaite Shield Chest] - In the 2nd room, before forming the L shape, Attach both plates into a long bridge. Use it to reach the chest just right of the entrance.",
          latitude: "0.72842263815743",
          longitude: "-0.67902474153689",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d4049b12-84ef-4383-9f35-5907610bbf78.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kyokugon Shrine",
          description:
            "_Alignment of the Circles_\n\n**Location:** -0710, -1550, 0006 - Inside Great Plateau Foothill Cave  \n\n**Solution:** \n1. Place the 4 balls into the correct sockets. To identify them, look up to the ceiling.\n\n**Treasure:** \n- Hearty Elixir - In the final room, use Ultrahand to notice a moveable slab in the floor, concealing a ball socket. Place a ball in it to open the door to the chest.",
          latitude: "0.65307961307701",
          longitude: "-0.72596400976149",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/368f92d6-1f06-47e2-88ff-8b02ddfea5ce.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jiukoum Shrine",
          description:
            '_Built for Rails_\n\n**Location:** On top of the mountain. \n\n**Solution:** \n1. Attach both plates together, then place them horizontally on the wide rails. Ride them to the next platform.\n2. Attach the three square plates into a "U" shape. Place it upside down on the rails and ride it to the next platform.\n3. Attach the plates here into an "E" shape. Then, place it on the rails so the top and bottom plates are within the rails. Finally, Attach a Fan above each plate, and activate them to ride your contraption to the end statue.\n\n**Treasure:** \n- Sticky Elixir - Before the second set of rails, on a high ledge. Attach the platforms into a ramp to the chest.',
          latitude: "0.62987727731208",
          longitude: "-0.67514419555602",
          media: [
            {
              url: "https://youtu.be/vlMdczazn6w",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Riogok Shrine",
          description:
            "_Force Transfer_\n\n**Location:** -1440, -1616, 0089 -   \n\n**Solution:** \n1. Ultrahand the pipe and attach it to the two cogs. Hit the crystal to open the gate.\n2. After entering the next room, turn around and Rewing the cog. While Rewind is active, dislodge the pipe and bring it with you.\n3. Ultrahand the pipe to the small lever, and move it to the left to open the gate.\n4. Bring all 3 pipes to the higher platform, then Ascend to it.\n5. One by one, Attach the pipes underneath the higher platform.\n6. Once all 3 pipes are attached, Ascend to the higher platform to the end statue.\n\n**Treasure:** \n- Mighty Construct Bow Chest] - In the 2nd room, on a high ledge. Using Ultrahand, attach 2 pipes together, then attach the chest to this long pipe and bring it to the ground.",
          latitude: "0.65107021465673",
          longitude: "-0.74951755823119",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/fef3f746-4b10-4d4f-987b-e62b3cfa62d6.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jojon Shrine",
          description:
            "_Proving Grounds: Rotation_\n\n**Location:** Inside Crenel Peak Cave - Right before the end statue.",
          latitude: "0.71376619870134",
          longitude: "-0.66447792925493",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9cc7b0e7-4e92-4010-ae55-29a151646859.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayachideg Shrine",
          description:
            "_Proving Grounds: The Hunt_\n\n**Location:** 0705, -0865, 0031 - On a tall rocky ledge.  \n\n**Solution:** \n1. Defeat all constructs using only the gear provided within.\n\n**Treasure:** \n- Captain III Spear - Just before the end statue.",
          latitude: "0.76163606268901",
          longitude: "-0.60464990656820",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/efdae07a-9bc9-4883-98a9-a347b6367a69.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jochi-iu Shrine",
          description:
            "_Courage to Pluck_\n\n**Location:** 4346, 2875, 0165 - In plain sight, north of the road.  \n\n**Solution:** \n1. Using Ultrahand, remove 2 metal blocks from the gigantic Jenga puzzle. Make sure the blocks you take do not unbalance the structure.\n2. Use the metal blocks to close the circuit, powering the platform.\n3. Ride the platform to reach the Ball, and grab it with Ultrahand.\n4. Place the ball in the socket to open the gate to the end statue.\n\n**Treasure:** \n- Zonaite Bow - On a high ledge. Use one of the metal blocks to create a ramp to it.\n- Large Zonaite - Within the Jenga structure. Stand on the corner of the platform, and grab it with Ultrahand.",
          latitude: "0.79574051731328",
          longitude: "-0.56323946286477",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/65697a7b-ad07-42c0-ac22-acf036c90c4c.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Timawak Shrine",
          description:
            "_Against the Flow_\n\n**Location:** 1799, 1638, 0311 - On the side of the road, facing Goronbi Lake.  \n\n**Solution:** \n1. Jump across the solidified lava to the other side, then destroy the construct.\n2. Rewind a platform and ride it to the ball. When Rewind ends, return with the ball and place it in the socket.\n3. In the next room, activate the fan and glide to the next platform. Drop a fountain down.\n4. Activate the fountain to create a platform. Take it out of the lava and attach the fan to it.\n5. Ride your makeshift boat to the end statue.\n\n**Treasure:** \n- Strong Zonaite Shield - In an alcove, beyond the ball. Ultrahand a freshly-made platform for a few seconds, then Rewind it and jump to the chest.",
          latitude: "0.75604043230857",
          longitude: "-0.64512675115563",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Isisim Shrine",
          description:
            "_Proving Grounds: In Reverse_\n\n**Location:** 1838, 2837, 0363 - Inside YunoboCo HQ East Cave - Just before the end statue.",
          latitude: "0.79463654857311",
          longitude: "-0.64392819011726",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Taunhiy Shrine",
          description:
            "**Location:** Near the pool on Courage Island.  You must first activate the shrine by touching the portal at the very top of the island, then dive through the rings that appear.  \n\n**Puzzle Name:** Combat Training: Archery\n\n**Solution:** \n1. Defeat the construct, following the on-screen prompts.\n\n**Treasure:** \n- Strong Construct Bow Chest] - Just before the end statue.",
          latitude: "1.07294784398960",
          longitude: "-0.78054698073862",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2faa17d3-f41f-4c42-82d8-20ece402cf68.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Utsushok Shrine",
          description:
            "_Long or Wide_\n\n**Location:** 0673, -3357, 0071 - On top of the hill \n\n**Solution:** \n1. Ultrahand the slab up, then release it to smack the ball into the socket.\n2. Attach the cube behind the slab, then repeat step 1.\n3. Attach the metal slab behind the other to extend it, then repeat step 1. This should drop a minecart on the rails beside the slab.\n4. Reattach the slab to the side, so it reaches the minecart.\n5. Jump in the minecart, then repeat step 1 to propel the minecart to the end statue.\n\n**Treasure:** \n- Sneaky Elixir - On a platform, just before the end statue. Grab it with Ultrahand while travelling in the minecart. If you miss it, Recall the minecart.",
          latitude: "0.59505346568571",
          longitude: "-0.68137764930563",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/15b2e1fe-317d-4e93-a1d0-5d05b53bb41a.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Gemimik Shrine",
          description:
            "_Turbine Power_\n\n**Location:** 4513, 2116, 0001 - In the center of the spiral peninsula.  \n\n**Solution:** \n1. Attach the turbine to the central device.\n2. Complete the electrical circuit with the metal plate. Doing so should power up the turbine and create a wind current.\n3. Paraglide all the way up the wind current, then head to the top-left corner. Throw down a Flame Emitter.\n4. Break the circuit to stop the turbine. Then, Attach the Flame Emitter to it, and recomplete the circuit. Doing so should light all candles and open the gate to the end statue.\n\n**Treasure:** \n- Mighty Zonaite Shield Chest] - On a high ledge, in the top-right corner of the room. Glide to it from the top of the wind current.",
          latitude: "0.77102867124742",
          longitude: "-0.55794373154737",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/5e9d2e45-d0d2-414f-bf99-c56b61f8c29c.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Igashuk Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 4654, 3713, 0131 - In the center of the Lomei Labryinth \n\n**Solution:** \n1. Walk up to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - Just before the end statue.",
          latitude: "0.82245505480905",
          longitude: "-0.55339004020354",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2ce2fcfb-18d3-442b-89bd-272730cee518.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Marari-in Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 4632, -3712, 0018 - Eventide Island Cave until the boat arrives. \n\n**Solution:** \n1. Walk to the end statue.\n\n**Treasure:** \n- Ruby - Just before the end statue.",
          latitude: "0.58488306830135",
          longitude: "-0.55442333221526",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4f48b327-6efb-4d32-bae3-fe0244461992.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "O-ogim Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** In an alcove, underneath the now broken Lanayru Bridge. \n\n**Shrine Quest:** The Lanayru Road Crystal\n\n**Treasure:** \n- Big Battery - Just before the end statue.",
          latitude: "0.66823593299037",
          longitude: "-0.61436098807530",
          media: [
            {
              url: "https://youtu.be/kab_-F9WW2Y",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Zakusu Shrine",
          description:
            "_Proving Grounds: Ascension_\n\n**Location:** 3527, -1482, 0168 - Amidst the snowy trees.\n\n**Shrine Quest:** The High Spring and the Light Rings",
          latitude: "0.65536738822097",
          longitude: "-0.58981776237397",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4f94c49e-325e-4804-a2bf-3e025c45f429.jpg",
              type: "image",
            },

            {
              url: "https://media.mapgenie.io/storage/media/f8b23c27-4da9-4bfe-bb69-ae7aa6aa62ab.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayahisik Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 3730, -2058, 0189 - Retsam Forest Cave - Just before the end statue.",
          latitude: "0.63675178899771",
          longitude: "-0.58314135514738",
        },
        {
          mapSlug: "hyrule",
          title: "Anedamimik Shrine",
          description:
            "_A Retraced Path_\n\n**Location:** 4235, -2174, -0012 - Deepback Bay Cave - In the flooded moat. To access, drop down and destroy the cracked boulders behind the Like Like.\n\n**Solution:** \n1. Wait for the ball to roll almost inside the pit, then Recall it.\n2. While the ball Recalls, hit the crystal; this should place the socket in the ball Recall line and open the door to the end statue. \n\n**Treasure:** \n- Large Zonai Charge - After hitting the crystal, head right and Ascend through the platform to the chest.",
          latitude: "0.63308500445936",
          longitude: "-0.56691169738642",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d05c72a7-edc0-4a16-96de-a205cf33f336.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/J0U1K_RgkNQ",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jikais Shrine",
          description:
            "_Jailbreak_\n\n**Location:** 4268, -1671 ,0182 - On the side of the Lanayru Range \n\n**Solution:** \n1. Swap the positions of the two right blocks (the top block to the left, the bottom one to the right.\n2. Ascend through the right block to the central ledge, then paraglide to the block on the left.\n3. Move the block above to the right, then Ascend twice to reach the top.\n4. Place the slab horizontally, slightly offset to the right under the taller pillar. Ascend through it.\n5. Grab the slab through the bars, and place it horizontally on a corner of the jail. Ascend through it and to the end statue.\n\n**Treasure:** \n- Magic Staff - In the 2nd room, on a platform right of the entrance. Ascend to the chest.",
          latitude: "0.64944545464724",
          longitude: "-0.56566715240521",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/0b096d08-f727-4bc1-96b8-7e8d086c2890.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Susub Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** Inside Deya Village Ruins Well\n\n**Treasure:** \n- Magic Staff",
          latitude: "0.63727703953710",
          longitude: "-0.69183021783846",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/7e5dca21-200d-4c8d-afc8-8964148c4371.png",
              type: "image",
            },
            {
              url: "https://youtu.be/eJVWAjodiC0",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Joju-u-u Shrine",
          description:
            "_Building Bridges_\n\n**Location:**\n- Coordinates: 1516, -3576, 0142\n- On a cliff overlooking the stable\n\n**Solution:** \n1. Reattach the broken bridge to reach the next ledge.\n2. Drop down, and Attach the third panel from the end to the pillar. The bridge should be taut enough to reach the next platform.\n3. Attach the metal cube to the last panel of the bridge, then Ultrahand it over the beam. Climb back up and walk the bridge to the next platform.\n4. Walk the bridge to the end statue.\n\n**Treasure:** \n- Large Zonaite: On a high platform beside the last bridge. Ultrahand the middle panel and Attach it to the plate on the side.",
          latitude: "0.58788698507453",
          longitude: "-0.65456628799498",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Sifumim Shrine",
          description:
            "_Proving Grounds: Flow_\n\n**Location:** 2825, -3269, 0078 - On the edge of the hill overlooking the ruined village \n\n**Solution:** \n1. Destroy all the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Captain II Reaper - Just before the end statue.",
          latitude: "0.59801446394759",
          longitude: "-0.61227321624759",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/33823f57-98c8-4c45-acc6-a4b3151b7398.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ekochiu Shrine",
          description:
            "_Rise and Fall_\n\n**Location:** 1062, 1279, 0045 - Out in the open, south of the Great Hyrule Forest. \n\n**Solution:** \n1. Step on the pressure plate until the platform moves to the other side, then step off.\n2. Jump on the platform, then Recall it to reach the other side.\n3. Jump on the grated cube, then Recall it up the waterfall.\n4. Place the grated cube on the launch pad, then step on the pressure plate to launch it in the air.\n5. After it falls down, jump on the cube and Recall it. When it is back to its highest point, paraglide to the end statue.\n\n**Treasure:** \n- Zonaite Shield - In the 2nd room, on top of a pillar. Before Recalling the grated cube, move it to the right and open the chest.",
          latitude: "0.74362827687598",
          longitude: "-0.66980928182659",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/6085105f-4097-4461-b182-ff28ff768b3c.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Bamitok Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** Mount Dunsel Cave - At the far end of the cave, atop a high ledge past a Like Like. \n\n**Solution:** \n1. Walk to the end statue.\n\n**Treasure:** \n- Big Battery - Just before the end statue.",
          latitude: "0.59992409241461",
          longitude: "-0.60379207134315",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e6f2df50-42e4-4201-81ea-7dc935274743.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/xnxrRjLyxwg",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Yomizuk Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 4412, -0610, 0034 - Tarm Point Cave - At the end of the chamber with the changing water levels.\n\n**Solution:** \n1. Walk up to the end statue.\n\n**Treasure:** \n- Diamond - Just before the end statue.",
          latitude: "0.68302664114058",
          longitude: "-0.56096666003601",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/65c511b7-19e4-42b5-b3ec-970ef1aa05b3.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tadarok Shrine",
          description:
            "_Fire and Water_\n\n**Location:** Inside River of the Dead Waterfall Cave \n\n**Solution:** \n1. Using Ultrahand, attach the block to the balls in the water and place them on the opposite side. Swim across to the next room.\n2. Block the fire melting the ice block by using the stone block.\n3. Drop the ice block into the lava to create a bridge.\n4. Pull the wood block out of the fire and drop it in the water to put it out. Take it back to the main room.\n5. Grab another ice block and drop it in the water under the ledge with the fire. Be sure to pull out the electricity ball from the water.\n6. Attach the stone block from the first room, the block from the main room and the wood block to create a pillar. Make sure the wood block is NOT on the bottom.\n7. Place your block pillar on the ledge above the ice block. Jump onto the ice block and use Ascend to get up.\n\n**Treasure:** \n- Mighty Zonaite Shield",
          latitude: "0.63214095551830",
          longitude: "-0.73809714734270",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Motsusis Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -1793, -3483, 0045 - In the center of the South Lomei Labyrinth.\n\n**Solution:** \n1. Walk to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - Just before the end statue.",
          latitude: "0.58927830170607",
          longitude: "-0.76089730946035",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/b7d8b32a-063a-4b5c-bcd3-f831da36cd0e.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kimayat Shrine",
          description:
            "_Proving Grounds: Smash_\n\n**Location:** 2863, 3637, 0241 - Northeast of Death Mountain's peak, in plain sight. \n\n**Solution:** \n1. Destroy the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Captain II Reaper - Just before the end statue",
          latitude: "0.81952101937905",
          longitude: "-0.61130762100024",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4317e382-21f3-4abc-ac8b-7d073dc4aa05.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kamatukis Shrine",
          description:
            "_A Precise Strike_\n\n**Location:** 3430, 3356, 0071 - On the eastern shore of Skull Lake  \n\n**Solution:** \n1. Attach the metal block to the center of the pillar above.\n2. Using Ultrahand, pull the contraption backwards. When released, it should hit the Ball into the socket.\n3. Aim slightly left to avoid the hill. If you miss, hit the crystal to respawn the ball.\n4. Go to the end statue.\n\n**Treasure:** \n- Mighty Zonai Longsword - Repeat the above steps in the side room, this time lining your swing with the moving target.",
          latitude: "0.81098441232726",
          longitude: "-0.59396445751179",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/bcd08fbc-ff60-4b30-8c83-063f34a33588.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayaotaki Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** North Lomei Labyrinth - In the center of the labyrinth.\n\n**Solution:** None; reach the shrine to complete it.\n\n**Treasure:** \n- Diamond - Just before the end statue.",
          latitude: "0.81691489264884",
          longitude: "-0.73044874539778",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Domizuin Shrine",
          description:
            "_A Prone Pathway_\n\n**Location:** 3305, 1443, 0426 - Overlooks the South Akkala Plains Chasm - After grabbing the above Zonai Charge, head to the chest by the initial entrance. Shoot the crystal to rotate the room and fall on the pillar.",
          latitude: "0.74923593525628",
          longitude: "-0.59703546342431",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/fe70557a-7741-43fd-9ee5-cee04da5f231.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Eshos Shrine",
          description:
            "_Combat Training: Shields_\n\n**Location:** 1566, -1945, 0157 - On the side of the Dueling Peaks \n\n**Solution:** \n1. Defeat the construct, following the on-screen prompts.\n\n**Treasure:** \n- Mighty Zonaite Shield - Just before the end statue.",
          latitude: "0.64051962863171",
          longitude: "-0.65289258957108",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d745be55-db88-4209-901b-75d3585934b2.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tokiy Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 2299, 2380, -0028 - Oakle's Navel Cave  \n\n**Treasure:** \n- Large Zonai Charge - Just before the end statue",
          latitude: "0.62676610194031",
          longitude: "-0.62905311584552",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/bd5b58c2-892a-4936-8e41-76dd0378873e.png",
              type: "image",
            },
            {
              url: "https://youtu.be/lhI7T_PJWus",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Utojis Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:**\n- Coordinates: 1217, -2541, 0096\n- Inside Tobio's Hollow Cave\n\n**Treasure:** \n- Large Zonai Charge - Just before the end statue.",
          latitude: "0.62120889443726",
          longitude: "-0.66408510823493",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/1ed0e10d-20f7-454e-8a4a-74e95d675aa0.png",
              type: "image",
            },
            {
              url: "https://youtu.be/vT5oImFvcnw",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Siwakama Shrine",
          description:
            "_Moving the Spheres_\n\n**Location:** -2445, -3345, 0041 - On top of the sandy pillar.  \n\n**Solution:** \n1. Place the large ball in the middle of the gap, and use it as a platform to cross.\n2. Attach both balls together, and place them horizontally on the angled slope. They should remain stable enough for you to cross and access the end statue.\n\n**Treasure:** \n- Bomb Flower x5 - In the 2nd room, under the starting platform. Drop a ball on the ramp, right of the platform; it should shatter the wall blocking the chest.",
          latitude: "0.59575208708783",
          longitude: "-0.78181023232170",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/62bb4943-a1a1-4cc9-bda3-2a6e36b45def.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Chichim Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:**\n- Coordinates: -3211, -3008, -0049\n- Inside Ancient Prison Ruins: Just before the end statue.",
          latitude: "0.60626515377398",
          longitude: "-0.80647386610531",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f053c9c5-e442-4b89-8236-01076ef25d9a.png",
              type: "image",
            },
            {
              url: "https://youtu.be/yMxgXCtzw1o",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rakakudaj Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -2038, 1850, 0065 - Ground level by the river, on a small outcrop \n\n**Shrine Quest:** The Gerudo Canyon Crystal - Just before the end statue.",
          latitude: "0.64354959014170",
          longitude: "-0.76883530269561",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a64aa4c9-c169-4dd9-b0cc-5f4813b1c94e.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/XI8nTlex4so",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kitawak Shrine",
          description:
            "_Upward and Forward_\n\n**Location:** -1529, -2928, 0321 -  Atop the East Gerudo Mesa\n\n**Solution:** \n1. Attach the stone slab at the end of the other to drop them and cross the gap.\n2. Dislodge the slab, and attach it at the end of the other one ahead; they should fall towards Link.\n3. Attach the other slab at the end to complete the ramp.\n4. Dislodge the top slab, and Attach it at the end of the other.\n5. Stand at the end of the slab and shoot the crystal; this should propel Link upwards. Glide to the end statue.\n\n**Treasure:** \n- 10x Arrows - After crossing the first bridge, Attach the first slab to the moving cog. Use it as a platform to reach the chest.",
          latitude: "0.60889704608527",
          longitude: "-0.75258980394213",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/669bb135-bca9-47fa-823e-5dcae329f0f8.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Karahatag Shrine",
          description:
            "_Drifting Flame_\n\n**Location:** -3730, -3624, 0043 - In the middle of the oasis. \n\n**Solution:** \n1. Light up the upside-down candle left of the door. You may light the Torch on the floor and throw it.\n2. Ultrahand the candle, and move it above each white tile, stopping a little every time. Then, bring it to the pressure plate.\n3. Press on the pressure plate; this should lower the floor and reveal the upside down candles.\n4. Recall your candle; it should fly back and light the 3 upside down candles.\n5. Walk to the end statue.\n\n**Treasure:** \n- Mighty Construct Bow - In the 2nd room, underneath the pressure plate. Jump down and paraglide back to access.",
          latitude: "0.58650699441833",
          longitude: "-0.82330902343131",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/72dd6cdb-6b6d-415f-a066-100579def363.png",
              type: "image",
            },
            {
              url: "https://youtu.be/tzWVyB396yk",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Irasak Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -4158, -3826, 0027 - On top of a small elevated dune.\n\n**Solution:**\n1. Walk up to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - Just before the end statue.",
          latitude: "0.57989189292135",
          longitude: "-0.83688474408677",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/39c6119a-549f-4386-91eb-4da0fab7bb44.png",
              type: "image",
            },
            {
              url: "https://youtu.be/4w0InqZ24bY",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Miryotanog Shrine",
          description:
            "_Proving Grounds: Lure_\n\n**Location:** -4688, -3088, 0054 - On top of the sand dune. \n\n**Solution:** \n1. Defeat all the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Captain II Blade - Just before the end statue.",
          latitude: "0.60383731926423",
          longitude: "-0.85372568681902",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Minetak Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 0393, 3485, 0068 - Deplian Badlands Cave - At the far end of the cave. \n\n**Solution:** \n1. Walk up to the end statue.\n\n**Treasure:** \n- Big Battery - Just before the end statue.",
          latitude: "0.81598497051446",
          longitude: "-0.69113705324492",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e44ddf06-1bc1-499f-847b-797521c8859d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Momosik Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 2959, 2758, 0524 - ??  \n\n**Shrine Quest:** The Death Caldera Crystal \n\n**Treasure:** \n- Big Battery",
          latitude: "0.79186330182951",
          longitude: "-0.60771630007514",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f4e3b026-f796-47ea-9985-b17d4c8c5ea7.jpg",
              type: "image",
            },

            {
              url: "https://media.mapgenie.io/storage/media/c6994c3b-33f2-4637-b27d-a8cf20dd4398.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Makasura Shrine",
          description:
            "_An Upright Device_\n\n**Location:** 1775, -1055, 0166 - On a small hill. \n\n**Solution:** \n1. Ascend to the higher ledge.\n2. Activate the nearby contraption to make it stand upright. Ascend through it and glide to the next ledge.\n3. Place the contraption near the bars and activate it. Ascend through and glide over the bars.\n4. Attach the Stabilizer to the metal structure. Then, place the ball into the bowl and activate the Stabilizer; it should launch the ball over the bars and into the socket.\n5. Attach the now-available structure at the top of the first contraption. Then, jump in the bowl and activate it to launch Link to the end statue.\n\n**Treasure:** \n- Fairy Tonic - On a high ledge, in the room with the ball. After launching it, grab the device and place it beside the ledge. Climb it to reach the ches.t",
          latitude: "0.66936301249456",
          longitude: "-0.64572915422096",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9f556f8e-53a4-4eb0-8ecc-b1ec3d727767.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sitsum Shrine",
          description:
            "_A Controlling Device_\n\n**Location:** 2369, 2595, 0790 - Just below the upper train platform on Death Mountain  \n\n**Solution:** \n1. Drive the vehicule into the lava. At the crossroads, turn left.\n2. Destroy the construct.\n3. Dislodge the controller and Attach it to the nearby Wing.\n4. Ride the Wing to the end statue.\n\n**Treasure:** \n- Mighty Construct Bow - At the crossroads, turn right instead. Attach the ball to the vehicule, and place it into the socket to open the gate.",
          latitude: "0.78662427569328",
          longitude: "-0.62695026397549",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/8ed8c176-69ef-4dfc-8b87-efda39335220.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/8d1dcc38-29e9-4366-9c9c-141cdc5057de.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sepapa Shrine",
          description:
            "_Backtrack_\n\n**Location:** 0222, 1086, 0028 - Behind a small hill, just east of Hyrule Castle.  \n\n**Solution:** \n1. Rewind the moving platform to lift you up the ledge.\n2. Light both candles flanking the door to open it.\n    - If you can't make fire, take the torch beside the door, and ride the wooden raft. On the other side, Rewind it, and light the torch on the your way back.\n3. Using Ultrahand, place the ball in the closest hole. Wait a few seconds, then place it in the second hole.\n4. Cross the first gate, then Rewind the ball. Doing so should close the first gate and open the second to the end statue.\n\n**Treasure:** \n- Strong Construct Bow Chest] - Up a wooden platform, in the 2nd room. While crossing the water on the raft, light your torch and burn away the vines to drop the chest.",
          latitude: "0.73946489001499",
          longitude: "-0.69476643705340",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/ecf50414-c13c-4890-a79a-44a814f89a31.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Serutabomac Shrine",
          description:
            "_The Way Up_\n\n**Location:** -0179, 1170, 0280 - Hyrule Castle B1  \n\n**Solution:** \n1. Place the metal plate on the two supporting beams, then Ascend through it to reach the ledge.\n2. Attach the metal plates in an L shape, then prop the structure against the support beam. Ascend through the structure to the higher ledge.\n3. Place a square plate on the ground. On either side, Attach another plate vertically, then rotate it so the longer plate is on the ground. \n4. Place the structure on the supporting beams. You should be able to Ascend twice to the final ledge.\n\n**Treasure:** \n- Magic Rod Chest] - In the 3rd room. Attach the metal plates so it forms a bridge-like structure. Then, rotate it on its side and prop it against the wall, on the spiked floor. Jump on the plate and Ascend to the ledge with the chest.",
          latitude: "0.74069585770026",
          longitude: "-0.70888334225267",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Sihajog Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 4544, -0845, 1121 - Complete the Dive Ceremony to make the shrine appear. \n\n**Solution:** \n1. Walk up to the end statue.\n\n**Treasure:** \n- Diamond - Just before the end statue.",
          latitude: "1.01903894726380",
          longitude: "-0.55645701995297",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Kisinona Shrine",
          description:
            "_Wind Power_\n\n**Location:** 2568, 1247, 0173 - On a plateau, overlooking Foothill Stable - On top of a pillar, on the left side of the room. Use a Fan to glide upwards to the chest.",
          latitude: "0.74338019343007",
          longitude: "-0.62039494514372",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/1b21ed05-5b81-44be-b3e9-973f5300f60c.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/l9aSG52bonM",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sinatanika Shrine",
          description:
            "_Combat Training: Sneakstrike_\n\n**Location:** 3841, 2298, 0048 - In the open near the chasm  \n\n**Solution:** \n1. Defeat the construct, following the on-screen prompts.\n\n**Treasure:** \n- Sneaky Elixir - Just before the end statue.",
          latitude: "0.77728580607071",
          longitude: "-0.57975256119153",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/73835d70-d3a5-43b5-8a9f-4ae204288a8f.png",
              type: "image",
            },
            {
              url: "https://youtu.be/r0HtjjOSq4s",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kadaunar Shrine",
          description:
            "_Water Makes a Wat_\n\n**Location:** 1882, 1202, 1251 - On the main island of South Eldin Sky Archipelago (reachable via the train rails) \n\n**Solution:** \n1. Activate the hydrant to create a block of cooled lava, then Ultrahand it away. Do it until you have 4 blocks and Attach them together into a bridge to cross the gap.\n2. Destroy the cracked blocks using any hammer-type weapon. If you don't have any, Fuse a lava block with the nearby Rusty Claymore.\n3. Bring your bridge in the next room, and use it to reach the end statue. You can always extend it by adding more lava blocks.\n\n**Treasure:** \n- Strong Construct Bow - On a high ledge, past the first gap. Use your bridge to reach it as a ramp.",
          latitude: "1.08501561472330",
          longitude: "-0.64259643620036",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9e562936-6586-46cc-9160-9232e1fd47ce.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Josiu Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** North Necluda Sky Archipelago  \n\n**Shrine Quest:** The North Necluda Sky Crystal  \n\n**Treasure:** \n- Large Zonai Charge - Just before the end statue.",
          latitude: "1.00680195648880",
          longitude: "-0.64672206157161",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/c6ddc766-3bf8-4309-8500-2c6a38db27ae.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayak Shrine",
          description:
            "_Timely Catches_\n\n**Location:** 1269, 3733, 0105 - In the open, near the edge of the cliff \n\n**Solution:** \n1. Jump on the pillar to the left to launch Link to the next ledge.\n2. Place the ball on the slide. While it is sliding, jump back on the first platform.\n3. Just when the ball falls off the slide, hit the crystal, This should move the target right underneath the ball and open the door to the next room.\n4. Repeat steps 1 to 3, timing the crystal for when the ball comes into view.\n5. Walk up to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - In the 2nd room, dangling from a rope. While falling down, shoot the rope to drop the chest in a pool of water below.",
          latitude: "0.82325960709063",
          longitude: "-0.66207845025983",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a539480e-f8d6-49ab-a7db-8c7886aef632.png",
              type: "image",
            },
            {
              url: "https://youtu.be/ofjq8O8HLm0",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rasiwak Shrine",
          description:
            "_Flotational Brilliance_\n\n**Location:** 4663, 3263, 0001 - On the beach, in plain sight.  \n\n**Solution:** \n1. Shoot an arrow through the rope to drop the platform into the water.\n2. Using Ultrahand, attach the floating ball to the platform to raise it, allowing Link to cross the water.\n3. Dislodge the floating ball and move it under the stone slab; this should rise it, making a ramp to access the following ledge.\n4. Build a makeshift raft by Attaching both a floating ball and a fan to the stone slab. Step on it, and activate the fan to move the boat to the end platform.\n\n**Treasure:** \n- Magic Scepter - In the final room, at the bottom of the pool. Attach a floating ball to it to get it out of the water.",
          latitude: "0.80824395532790",
          longitude: "-0.55299821443527",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/df0f6bed-58ba-48e3-a93c-9dc4c6994565.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Gikaku Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 4505, 2167, 1155 - On the cross-shaped island, very high in the sky. \n\n**Shrine Quest:** The Sky Mine Crystal\n\n**Treasure:** \n- Ruby - Just before the end statue.",
          latitude: "1.11415375129230",
          longitude: "-0.55822065526607",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/5e9e029e-d46e-4c21-95b6-193bb21b8088.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Kumamayn Shrine",
          description:
            "**Location:** 2856, -2857, 1212\n\n**Associated Quest:** The Necluda Sky Crystal\n\n**Puzzle Name:** Rauru's Blessing\n\n**Solution:** 1. Walk up to the end statue.\n\n**Treasure:** \nZonaite Bow - Just before the end statue.",
          latitude: "0.95458135339356",
          longitude: "-0.61117260972927",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/8c6dc6a2-b783-4828-9f8e-0b209fbc38fb.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Yansamin Shrine",
          description:
            "_Proving Grounds: Low Gravity_\n\n**Location:**  2350, -1782, 1475 - In the center of Zonaite Forge Island. First activate the terminal, then climb to the top and paraglide down the center, avoiding the lasers.\n\n**Solution:** \n1. Defeat the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Large Zonaite - Just before the end statue.",
          latitude: "0.98909205400507",
          longitude: "-0.62737690032538",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/36756c19-07a2-4144-b12c-7fef5a7bcd8c.png",
              type: "image",
            },
            {
              url: "https://youtu.be/-KJLhnDAr30",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ukoojisi Shrine",
          description:
            "**Location:** 1470, -2170, 0585\n\n**Shrine Quest:** The West Necluda Sky Crystal\n\n**Puzzle Name:** Rauru's Blessing\n\n**Solution:** \n- ??\n\n**Treasure:** \n- Mighty Zonaite Shield",
          latitude: "0.97682432691579",
          longitude: "-0.65576742165882",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/cd26415c-0f9b-4a6a-9867-0d462ae969d5.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayasiar Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -3485, 0320, 1932 - Inside the Skyview Island. \n\n**Solution:** _Note: This is the solution to make the shrine appear_\n1. Pivot the central gear until the light reflects off a mirror, on the side of the island.\n2. Follow the beam of light until it stops, pivoting mirrors as needed so the light beam always hits another mirror.\n3. Continue the chain until it hits the glowing hexagon in the center of the island.\n\n**Treasure:** \n- Star-Fragment Staff - Just before the end statue.",
          latitude: "1.03483374818140",
          longitude: "-0.81717086484488",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Jinodok Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -1256, -1486, 1008 - In a crumbled, ruined building. \n\n**Shrine Quest:** The South Hyrule Sky Crystal\n\n**Treasure:** \n- Diamond - Just before the end statue.",
          latitude: "0.99859123301562",
          longitude: "-0.74353458691940",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/29766247-5b5d-48fd-b571-f39c2a0b442b.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Joku-usin Shrine",
          description:
            "_Proving Grounds: Short Circuit_\n\n**Location:** 1074, -3346, 0786 - Use ascend through the floor while on the rails underneath\n\n**Solution:** \n1. Defeat all the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Electro Elixir - Just before the end statue.",
          latitude: "0.93704683130925",
          longitude: "-0.66850647338512",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e1dccfde-ee54-4790-b667-b932d3cce93f.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Simosiwak Shrine",
          description:
            "_Proving Grounds: Lights Out_\n\n**Location:** 0163, 1972, 0759 - On the small island with the pond. Complete the Dive Ceremony to spawn the shrine.\n\n**Solution:** \n1. Destroy all the constructs, using only the gear provided in the room.\n\n**Treasure:** \n- Bright Elixir - Just before the end statue.",
          latitude: "1.10944922055760",
          longitude: "-0.69812402129207",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/77668f62-d467-4b20-b84c-fe0802ee7dca.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tenbez Shrine",
          description:
            "_Gravity and Velocity_\n\n**Location:** -0972, 2525, 1011 - On the entrance platform of the North Lomei Castle Top Floor.\n\n**Solution:** \n1. Wait for the ball to be in the right launcher, then hit the switch. This should reverse the gravity and guide the ball to the target.\n2. Using the left launcher, launch Link to the next room. Wait for the ball to respawn and be launched through the doorway into the basket.\n3. Let the ball be launched in the air, then hit the crystal as the ball flies over the target. This should open the way to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - In an alcove, underneath the target. Paraglide from the 2nd room to the chest.",
          latitude: "1.16005158485430",
          longitude: "-0.73430842309986",
          media: [],
        },
        {
          mapSlug: "hyrule",
          title: "Taninoud Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -2242, 3102, 1084 - East Hebra Sky Archipelago \n\n**Shrine Quest:** The East Hebra Sky Crystal\n\n**Treasure:** \n- Topaz - Just before the end statue.",
          latitude: "1.15600760164620",
          longitude: "-0.76131528006496",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/ea2010d4-162c-476d-9e3b-1321557b95b5.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ga-ahisas Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -3595, 0957, 1699 - On Lightcast Island, in the center. \n\n**Solution:** _Note: The following solution is to make the shrine appear_\n1. Activate the Terminal to drain the water in the center of the island.\n2. Enter the central pillar and destroy the cracked wall.\n3. Once inside, grab the mirror with Ultrahand. Hold it horizontally within the light beam, then sweep the room to find another mirror. Drop the mirror, then go to the new one.\n4. Repeat step 3 until you find a glowing hexagon; illuminate it to lower the island's center.\n5. Take the steps down to the shrine.\n\n**Treasure:** \n- Star Fragment - Just before the end statue.",
          latitude: "1.07946806484070",
          longitude: "-0.81937624446957",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/5076345e-952d-4fc7-b324-9de5b67a0448.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ganos Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -3367, 0468, 1695 - On the corner of the island. \n\n**Shrine Quest:** The Tabantha Sky Crystal\n\n**Treasure:** \n- Diamond - Just before the end statue",
          latitude: "1.06116724084480",
          longitude: "-0.81121144108826",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e055e9ca-b203-438f-bf1e-596e12038d0d.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/80a21843-10c5-4865-bf8e-05d9a47289c9.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Siyamotsus Shrine",
          description:
            "_Unlit Blessing_\n\n**Location:** -1795, 3289, 1011 - South Lomei Castle Top Floor \n\n**Solution:** \n1. Approach the end statue; it will pivot and fly away from Link.\n2. Using the nearby Fire Fruits, light up the two unlit candles on the structure; this should move the chest platform and reveal a launch pad.\n3. Use the launch pad and glide to the end statue.\n\n**Treasure:** \n- Construct Bow - In the center of the platform.",
          latitude: "0.94020076507485",
          longitude: "-0.76091639656121",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/abfac615-e6f4-459f-9949-35876a29dc70.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Joku-u Shrine",
          description:
            "**Location:** 1375, -3339, 0429 - Dragonhead Island  \n\n**Puzzle Name:** Rauru's Blessing  \n**Solution:** \n1. Walk up to the end statue.\n\n**Treasure:** \n- Diamond - Just before the end statue.",
          latitude: "0.93862093561318",
          longitude: "-0.65855459351862",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/c5e8be18-49ea-4da6-9790-c8ad3648784d.png",
              type: "image",
            },
            {
              url: "https://youtu.be/i9mzMm5sU_c",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mayanas Shrine",
          description:
            "_The Ice Guides You_\n\n**Location:** 4611, -0945, 1789 - On top of Valor Island.\n\n**Shrine Quest:** The South Lanayru Sky Crystal - Beyond the end statue, beyond a gate. Same solution as the first puzzle, but this time, place the metal slabs on the right side so the blocks get bounced to the left on the target.",
          latitude: "1.01568918128420",
          longitude: "-0.55451635693456",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/776dd9f1-d64d-4484-824d-c50e0122d2e9.png",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/c7dbc0a9-8b8a-4933-b54d-8bc9fc36da32.png",
              type: "image",
            },
            {
              url: "https://youtu.be/PzCKGOezOjo",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jirutagumac Shrine",
          description:
            "_A Flying Device_\n\n**Location:** 2911, 0525, 0929 - Inside the spinning sphere. From a higher island, time your jump and glide down through the sphere's opening. Hit the Zone device inside to stop the sphere's spinning. \n\n**Solution:** \n1. Place a Wing on the launch rail, and ride it to the left-most platform (step on the left wing to control it).\n2. Attach a Sled underneath the Wing, then ride it to the right-most platform.\n3. Attach a Fan behind the Wing, then jump on it and activate it, facing the end statue. This should fly across the room to it.\n\n**Treasure:** \n- Large Zonaite - On a platform, high above the right-most platform. Before attaching the Fan, place the Wing between the two platforms, as a bridge. Step on it and Ascend to the chest.",
          latitude: "1.06330474732370",
          longitude: "-0.60930199921015",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/aa04a82c-c8ff-4232-89ac-7572c8abc280.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/81df47a2-ec3d-408c-b7ad-1874a51d1dcd.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Igoshon Shrine",
          description:
            "_Orbs of Water_\n\n**Location:** 3480, 0667, 1325 - High on an island, up a waterfall. \n\n**Solution:** \n1. Stand on top of the plate, and swim in the floating orb to reach the higher ledge.\n2. Stand inside the water orb in the far right corner, and Recall it to the higher ledge.\n3. Enter the moving orb and swim to the next platform.\n4. Attach the slab to the moving platform to form a launch ramp, and move it in the path of the orb. Ride the orb to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - Falling repeatedly, left of the higher ledge. Ultrahand an orb in its path to catch the chest and bring it to the ledge.",
          latitude: "1.06765586814850",
          longitude: "-0.59116056054629",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/80873d4a-e67b-4fe9-9d94-49f296786563.png",
              type: "image",
            },
            {
              url: "https://youtu.be/bK0Lt-0wjU8",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Natak Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 3671, 1484, 1158 - At the end of the cross-shaped platform. \n\n**Shrine Quest:** The Sokkala Sky Crystal\n\n**Treasure:** \n- Enduring Elixir - Just before the end statue.",
          latitude: "1.09387028685180",
          longitude: "-0.58516385840340",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/f6b08c1d-d683-41ef-88ce-1ace5dc7fd06.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/8ba715a3-c976-42cb-950a-a27c86018264.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mogisari Shrine",
          description:
            "_Courage to Jump_\n\n**Location:** 4656, 3456, 1010 - In front of the Lomey Sky Labyrinth \n\n**Solution:** \n1. Glide to the lower ledge, then pilot the left vehicle over the right ramp.\n2. Staying on the vehicle, pilot over the lava, the spikes and the beams.\n3. After the beams, turn right until you see the Rockets. Destroy the construct there.\n4. Attach two Rockets to your vehicle and use them to cross the giant gap.\n5. Ride in style to the end statue.\n\n**Treasure:** \n- Mighty Zonaite Shield - After the beams, turn left instead and ram into the dark blocks, breaking them. The chest is behind them.",
          latitude: "1.15892078769200",
          longitude: "-0.55330747786741",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/784b8206-fe58-4b62-ab7d-a6cc3409b59f.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Otak Shrine",
          description:
            "_Proving Grounds: Traps_\n\n**Location:** -4391, 3714, 0212 - Icefall Foothill Cave - Just before the end statue.",
          latitude: "0.82224932250152",
          longitude: "-0.84523536086377",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d1d0a685-3aaf-4db8-8a64-459846aa8bfa.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sisuran Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -2560, 3353, 0425 - Along the base of the northern Hebra mountains. \n\n**Shrine Quest:** The North Hebra Mountain Crystal\n\n**Treasure:** \n- Sapphire - Just before the end statue.",
          latitude: "0.81107817898958",
          longitude: "-0.78506852754159",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2d79eb7d-2b08-4f1f-8f88-9d518dc5b452.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/8a61f6e7-96aa-4ed8-92d5-3f6f6f5de39d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rutafu-um Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -2996, 3102, 0515 - Hebra Mountains Northwest Cave\n\n**Treasure:** \n- Topaz - Just before the end statue.",
          latitude: "0.80282325968493",
          longitude: "-0.80010294914297",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/5411543b-7b7a-4c9f-b8ed-3cfc95a6de6b.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ishokin Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -0562, -3524, 0129 - On a ridge, overlooking Pappetto Ridge. \n\n**Shrine Quest:** Ride the Giant Horse\n\n**Treasure:** \n- Topaz - Just before the end statue.",
          latitude: "0.58965178542337",
          longitude: "-0.72112396359285",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a0ee0148-cc0d-48ef-bfa8-6aaccfc6e6b3.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/6ba4c688-ba58-443a-a331-29fdc4d4fb5d.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "En-oma Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:**\n- Coordinates: 0104, -2517, -0087\n- Inside the Lake Hylia Whirlpool Cave - Just before the end statue.",
          latitude: "0.62213956618261",
          longitude: "-0.70070967078408",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/15032a9c-8336-4b6b-8dbf-28bd767e3ba6.png",
              type: "image",
            },
            {
              url: "https://youtu.be/sPewZMThbWk",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jochisiu Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** \n- Coordinates: 0927, -1905, 0030\n- On the side of the road, above a large stone structure.\n\n**Shrine Quest:** Keys Born of Water\n\n**Treasure:** \n- Big Battery: Just before the end statue.",
          latitude: "0.64180700834675",
          longitude: "-0.67342758178802",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/34e7ba16-b510-4dc5-9248-de48facd6ce7.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/Ae4s_RS03LY",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Apogek Shrine",
          description:
            "_Wings on the Wind_\n\n**Location:** 3885, -0214, 0164 - Under a rocky overhang, above Lanayru Bay.\n\n**Solution:** \n1. Ultrahand one of the floating Wings. Then, Attach the ball to it, and use the launch rail to glide it to the lower platgorm.\n2. Glide to the lower platform, and place the ball in the socket to open the door.\n3. In the next room, glide up the Fan to the higher ledge, then grab both Fans from the lower level.\n4. Attach both Fans to a Wing, then launch it on the rails and ride it to the end statue.S\n\n**Treasure:** \n- Strong Zonaite Spear - In the 2nd room, on a tall pillar. After gliding up, Ultrahand the Fan just underneath the pillar and glide to the top.",
          latitude: "0.69641305803124",
          longitude: "-0.57789266109469",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/8ed82906-59cc-48c8-9503-ec3694bcacf9.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/2Y89XGiSDuo",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Gatanisis Shrine",
          description:
            "_A Well-Timed Bounce_\n\n**Location:** 4497, 0830, 0095 - Below, on the ledge  \n\n**Solution:** \n1. Wait for the ball to fall on the bouncing platform. When it reaches the mid-point, use Rewind on the platform, which should bounce the ball on the target. Adjust timing accordingly.\n2. Repeat the process, this time standing on the smaller side platform. This should launch Link upwards; glide to the end statue.\n\n**Treasure:** \n- Bomb Flower x5 - Ascend through the target to access the chest.",
          latitude: "0.72958885112609",
          longitude: "-0.55827498435868",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/63010139-fadd-4c1f-85cd-6c346d197ca8.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/ZN-fqVwilyo",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jochi-ihiga Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 3809, 1219, 0090 - At the bottom of the water fall  \n\n**Shrine Quest:** Rock For Sale",
          latitude: "0.74220861206422",
          longitude: "-0.58052064615711",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/811f8b3d-6d72-4321-be14-9de81b71c0f6.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sibajitak Shrine",
          description:
            "_Alignment_\n\n**Location:** 2401, 3280, 0402 - Amidst the rocky cliffs. \n\n**Solution:** \n1. Recall the 2nd second rotating cylinder. When the pillar is aligned with the bottom one, stop the Recall.\n2. Repeat step 1 for each cylinder, aligning them into a single tall pillar.\n3. Ascend through the pillar to the end statue.\n\n**Treasure:** \n- Strong Zonaite Longsword - After aligning the first 2 pillars, Ascend through and glide to the chest, in an alcove in the pillar.",
          latitude: "0.80870208046095",
          longitude: "-0.62580764293710",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9fdec3b7-afb4-4fbe-9072-d388c40b2cef.png",
              type: "image",
            },
            {
              url: "https://youtu.be/IFBTDipMteI",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ninjis Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 0356, 1894, 0178 - In an inaccessible grove; see the Shrine Quest.\n\n**Shrine Quest:** Maca's Special Place - Just before the end statue.",
          latitude: "0.76223985911265",
          longitude: "-0.69059371948208",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9464ab72-f4cf-4396-8be5-0d77c76da85f.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Musanokir Shrine",
          description:
            "_Swing to Hit_\n\n**Location:** 0417, 2127, 0143 - Just south of the Great Deku Tree\n\n**Solution:** \n1. Attach the metal ball to the side of the cube and walk across the raised slab.\n2. Attach the metal cube to the hanging ball. Then, raise it away from the target and let it swing.\n3. Attach the cylinder at the front of the slab, and the metal cube to the ball underneath. Then, swing the cube backwards to propel the slab forward and hit the target.\n4. Walk to the end statue.\n\n**Treasure:** \n- Large Zonai Charge - On a raised platform, in the final room. Use the cylinder as a bridge to get on the slab, then glide to the chest.",
          latitude: "0.77162674966011",
          longitude: "-0.68998217582802",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/3129bbeb-66ea-45d9-a004-445aff70f2ac.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Pupunke Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 0619, 2211, 0164 - In a small grove.\n\n**Shrine Quest:** A Pretty Stone and Five Golden Apples - Just before the end statue.",
          latitude: "0.77424434745429",
          longitude: "-0.68316936492869",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/a90245bd-e859-4fd2-b7a6-c70fa6fdf68c.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sakunbomar Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 0167, 2320, 0179 - In the middle of the forest.\n\n**Shrine Quest:** None Shall Pass?\n\n**Treasure:** \n- Diamond - Just before the end statue.",
          latitude: "0.77715848296381",
          longitude: "-0.69783701989300",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d684163b-f9d7-4a69-a419-3b4e4df360ae.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Tenmaten Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** -0593, 1551, -0014 - Elma Knolls Well - At the end of the cave, on the other side of the lake.\n\n**Solution:** \n1. Walk up to the end statue.\n\n**Treasure:** \n- Large Zonaite Charge - Just before the end statue.",
          latitude: "0.75080391683728",
          longitude: "-0.72505474090599",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/d3623f92-633a-444d-98e7-0abada6e66a2.jpg",
              type: "image",
            },
            {
              url: "https://media.mapgenie.io/storage/media/a944774b-843a-4883-8078-349e790acec4.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Wao-os Shrine",
          description:
            "_Lever Power_\n\n**Location:** -4059, 1990, 0183 - West Lake Totori Cave\n\n**Solution:** \n1. Attach the bowl to the closest end of the rotating slab.\n2. Place the ball into bowl. Then, Ultrahand the cube high above the farthest end of the slab and drop it. This should launch the ball on the lower target.\n    - Adjust as needed. Dropping the cube from higher up or closer to the end of the slab should launch the ball further.\n3. Grab the Board from the now open alcove, and extend your catapult. Repeat step 2 until you hit the higher target.\n4. Instead of launching the ball, launch Link in the air and paraglide to the end statue.\n\n**Treasure:** \n- Spicy Elixir - On a platform, high against the eastern wall. When launching Link, guickly paraglide right to the chest.",
          latitude: "0.76638234952655",
          longitude: "-0.83275621782428",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/1bd843c6-83b6-4582-a576-754a140f6146.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Joniu Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 2918, 0505, 0155 - Ralis Channel\n\n**Treasure:** \n- Large Zonai Charge - Just before the end statue.",
          latitude: "0.71936296870904",
          longitude: "-0.60914039611754",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/b0f27cbf-6031-4e7f-ba68-0e2cb1526406.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Jiotak Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 1837, 3484, 0257 - Isle of Rabac Gallery - Just before the end statue.",
          latitude: "0.80626746279491",
          longitude: "-0.64403550181086",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/c2b19513-5792-4593-96da-9d8fd53e38f1.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/qg4BXjWEHPA",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Moshapin Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 2678, 1001, 0131 - Lake Intenoch Cave - Just before the end statue.",
          latitude: "0.76427279315219",
          longitude: "-0.61686515808137",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/ce9b66b8-797b-4d2a-88d3-d3bc7b7cbb67.png",
              type: "image",
            },
            {
              url: "https://youtu.be/uTlgdFbJJmQ",
              type: "video",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Maoikes Shrine",
          description:
            "_Rauru's Blessing_\n\n**Location:** 2275, 0147, 0079 - Bon\u00e9 Pond East Cave - Ascend up the sand-colored column in the center of the cave to access.   \n\n**Solution:** \n1. Walk up to the end statue.\n\n**Treasure:** \n- Diamond - Just before the end statue.",
          latitude: "0.70785182929428",
          longitude: "-0.62982035022696",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/68cc92bb-311d-4f15-bbb1-951b8b21c0ce.png",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Suariwak Shrine",
          description:
            "_Rauru's Blessing_\n\n**Required:** Complete The Yiga Clan Exam\n\n**Treasure:** \n- Big Battery \u2014 Just before the end statue.",
          latitude: "0.64679218684441",
          longitude: "-0.78506217687922",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2b912bca-2fbc-417f-b034-024cb99d2700.jpg",
              type: "image",
            },
            {
              url: "https://youtu.be/b9vzf7sOq5Q",
              type: "video",
            },
          ],
        },
      ],
      title: "Shrine",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Lookout Landing Skyview Tower",
          description:
            "**Location:** Lookout Landing  \n**Associated Region:** Central Hyrule  \n\n**How To Unlock:** Unlocked during the main storyline\n\n**Coordinates:** -0295, 0140, 0025",
          latitude: "0.70762653214246",
          longitude: "-0.71275211870773",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e6f007f2-1e5e-4d11-9b5d-0768c26f749a.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Hyrule Field Skyview Tower",
          description:
            "**Location:** ??  \n**Associated Region:** ??  \n\n**How To Unlock:** ??  \n\n**Coordinates:** -0753, -1019, -0064",
          latitude: "0.67030337086561",
          longitude: "-0.72762627130490",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/078990da-a9f5-4f12-89b6-c989fb6598d7.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Sahasra Slope Skyview Tower",
          description:
            "**Location:** ??  \n**Associated Region:** ??  \n\n**How To Unlock:** The door is stuck. Speak to the Billson outside the tower. He'll tell you about Sahasra Slope Cave.  Enter the cave and use the Ascend ability when under the tower to access. Remove the 2x Long woods stick to open the door.\n\n**Coordinates:** 1344, -1170, 0166",
          latitude: "0.66518228034315",
          longitude: "-0.65995886921701",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/22a7799b-143c-415a-af20-1a746eb95fd4.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Upland Zorana Skyview Tower",
          description:
            "**Location:** ??    \n**Associated Region:** ??  \n\n**How To Unlock:** Throw a Splash Fruit at the mud to unstick the door (they can be found growing on the eastern side of the tower).\n\n**Coordinates:** 2858, 0582, 0379",
          latitude: "0.72180931695064",
          longitude: "-0.61087359405431",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e6bda668-dc81-4b33-836c-7d562e5a760e.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Ulri Mountain Skyview Tower",
          description:
            '**Associated Region:** Akkla  \n\n**How To Unlock:** Shoot down Aerocuda with a Keese or Aerocuda eyeball. Alternatively, climb halfway up the tower - then jump off and use "bullet time" to shoot down the Aerocuda.\n\n**Coordinates:** 3493, 2019, 0188',
          latitude: "0.76832524850239",
          longitude: "-0.59049303465761",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/fb834c60-15e0-4d8a-9f1c-558456a02f94.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Mount Lanayru Skyview Tower",
          description:
            "**Location:** ??    \n**Associated Region:** ??  \n\n**How To Unlock:** Melt the ice on the door using fire.\n\n**Coordinates:** 3845, -1306, 0539\n\n**Note:** Very low temperature. Requires 2 bars of cold resistance.",
          latitude: "0.66075827275579",
          longitude: "-0.57929277420223",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/3191decc-281e-4ebc-9d83-eae7d6cc52c9.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rabella Wetlands Skyview Tower",
          description:
            "**Location:** In the middle of the small lake, surrounded by thorn bushes.  \n\n**Associated Region:** East Necluda  \n\n**How To Unlock:** Sit by a campfire or cooking pot and wait for the rain to pass. Without the rain, you can use fire-fused arrows, lit torch/weapon, or strike flint to burn away the thorns. Can also build a shelter with supplies in the area to keep rain off the thorns near entrance.\n\n**Coordinates:** 2419, -2762, 0222",
          latitude: "0.61443939246867",
          longitude: "-0.62523365020721",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/7e88fb63-da76-4f89-af6e-3e3f0229e2bb.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Popla Foothills Skyview Tower",
          description:
            "**Location:** Popla Foothills\n  \n**Associated Region:** West Necluda  \n\n**How To Unlock:** The person fixing the well is trapped in Popla Foothills North Well entrance to rescue him.\n\n**Coordinates:** 0603, -2123, 0098",
          latitude: "0.63465316540376",
          longitude: "-0.68366959691022",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/2d5ad96e-23fb-4692-af5a-4ebc502171e3.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Gerudo Canyon Skyview Tower",
          description:
            "**Location:** Gerudo Canyon\n  \n**Associated Region:** Gerudo Desert and East Gerudo Sky Archipelago.\n\n**How To Unlock:** Use the large metal box behind the materials to use as a counterweight to lift the elevator.\n\n**Coordinates:** -2438, -2182, 1370",
          latitude: "0.63283652563616",
          longitude: "-0.78162766537693",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/e5e16493-6de9-4f38-bfd8-55f21801dd9f.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Gerudo Highlands Skyview Tower",
          description:
            "**Location:** On the Gerudo Highlands; entrance inaccessible \n\n**Associated Region:** Gerudo Highlands  \n\n**How To Unlock:** Go into Meadela's Mantle Cave, travel down stream on a raft. Once past waterfall, place another raft und the support structures and Ascend through the center. This will take you inside the tower which has been snowed in.\n\n**Coordinates:** -3972, -1250, 0429",
          latitude: "0.66106746659237",
          longitude: "-0.83061660558351",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/9718b25a-5ed4-471b-88a1-a60705a7b951.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Lindor's Brow Skyview Tower",
          description:
            "**Location:** Lindor's Brow  \n**Associated Region:** Hyrule Ridge  \n**How To Unlock:** Make a bridge and climb the rock face  \n**Coordinates:** -1919, 1241, 0273",
          latitude: "0.74316404776867",
          longitude: "-0.76459011776788",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/24ffa21b-8e21-49e7-aaa1-8e032c8f1deb.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Rospro Pass Skyview Tower",
          description:
            "**Location:** ??\n\n**Associated Region:** ??  \n\n**How To Unlock:** Use fire to burn away the thorn bushes and access.\n\n**Note:** Low temperature. Requires 1 bar of cold resistance.\n\n**Coordinates:** -3679, 2346, 0233",
          latitude: "0.77863417726493",
          longitude: "-0.82155386341211",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/489f1e9a-a1dd-493c-96a3-f291a0b30534.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Pikida Stonegrove Skyview Tower",
          description:
            "**Location:** ??\n\n**Associated Region:** ??  \n\n**How To Unlock:** Approach from the southern side, you'll see a broken bridge hanging from the cliffside. Use Ultrahand to piece together some nearby planks and climb up.\n\n**Coordinates:** -2304, 3066, 0433\n\n**Note:** Very low temperature. Requires 2 bars of cold resistance.",
          latitude: "0.80166465897317",
          longitude: "-0.77751874923783",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/dddfc548-0e36-4082-8e22-b05b41eff129.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Thyphlo Ruins Skyview Tower",
          description:
            "**Location:** Thyphlo Ruins\n   \n**Associated Region:** Northern Hyrule\n\n**How To Unlock:** Move the zonai block at the top of the tower.\n\n**Coordinates:** 0344, 3133, 0810",
          latitude: "0.80421409803894",
          longitude: "-0.69206858362890",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/62a7c718-4131-4e69-89dd-026a926901c5.jpg",
              type: "image",
            },
          ],
        },
        {
          mapSlug: "hyrule",
          title: "Eldin Canyon Skyview Tower",
          description:
            "**Location:** ??    \n**Associated Region:** ??  \n\n**How To Unlock:** The door is stuck, but the top of the tower has been knocked off.  Glide down from the mountain to the north and drop into the tower from the top.\n\n**Coordinates:** 1637, 1182, 0225",
          latitude: "0.74141698124440",
          longitude: "-0.65029621124324",
          media: [
            {
              url: "https://media.mapgenie.io/storage/media/4eab3172-7960-4400-9634-81f7e15a07ef.jpg",
              type: "image",
            },
          ],
        },
      ],
      title: "Skyview Tower",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Hateno Ancient Tech Lab",
          latitude: "0.63464600122448",
          longitude: "-0.58159775363154",
        },
        {
          mapSlug: "hyrule",
          title: "Akkala Ancient Tech Lab",
          description: "To enter, ascend through the statue in The Depths",
          latitude: "0.80379861649529",
          longitude: "-0.55862901532615",
        },
      ],
      title: "Tech Lab",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Wind Temple",
          description: "To the Wind Temple!",
          latitude: "1.14217394124350",
          longitude: "-0.79453393119155",
        },
        {
          mapSlug: "hyrule",
          title: "Water Temple",
          latitude: "1.07237793830000",
          longitude: "-0.59554355591277",
        },
        {
          mapSlug: "hyrule",
          title: "Fire Temple",
          latitude: "0.47078821747431",
          longitude: "-0.66420511856651",
        },
        {
          mapSlug: "hyrule",
          title: "Lightning Temple",
          latitude: "0.59150045739503",
          longitude: "-0.84522120902562",
        },
        {
          mapSlug: "hyrule",
          title: "Spirit Temple",
          latitude: "0.27721731900203",
          longitude: "-0.65740096560586",
        },
      ],
      title: "Temple",
    },
    {
      locations: [
        {
          mapSlug: "hyrule",
          title: "Zonai Survey Team Base",
          description: "**Location:** Kakariko Village",
          latitude: "0.67218221068960",
          longitude: "-0.64422048958079",
        },
      ],
      title: "Zonai Survey Team Base",
    },
  ],
};
