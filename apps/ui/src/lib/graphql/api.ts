import { remark } from "remark";
import html from "remark-html";
import { getClient } from "../getClient";

export async function fetchGameMapDetails(slug: string) {
  const sdk = getClient();
  const { mapData } = await sdk.MapData({ slug });

  const processedLocations = [];
  const locations = mapData.locations;

  if (!locations) return mapData;

  for (let i = 0; i < locations.length; i++) {
    const curr = locations[i];
    const processedDesc = await remark()
      .use(html)
      .process(curr?.description ?? "");
    const location = { ...curr, description: processedDesc.toString() };
    processedLocations.push(location);
  }

  return {
    ...mapData,
    locations: processedLocations,
  };
}
