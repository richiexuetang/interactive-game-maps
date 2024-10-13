import { remark } from "remark";
import html from "remark-html";
import { client } from "../graphqlClient";
import { getSdk } from "@/generated/graphql";

export async function fetchGameMapDetails(slug: string) {
  const sdk = getSdk(client);
  const { mapData } = await sdk.MapData({ slug });

  const processedLocations = [];
  const locations = mapData.locations;
  if (!locations) {
    return null;
  }
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
