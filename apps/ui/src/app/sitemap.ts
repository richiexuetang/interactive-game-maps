export default function Sitemap() {
  return [
    {
      url: "https://www.ritcher-map.app",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "https://www.ritcher-map.app/game/black-myth-wukong",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.ritcher-map.app/game/elden-ring",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.ritcher-map.app/game/zelda-tears-of-the-kingdom",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.ritcher-map.app/game/hogwarts-legacy",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.ritcher-map.app/game/witcher-3",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.ritcher-map.app/game/god-of-war-ragnarok",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];
}
