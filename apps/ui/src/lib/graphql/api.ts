import { remark } from "remark";
import html from "remark-html";
import { getClient } from "@/lib/graphql/apollo-client";
import { GET_MAP_DATA } from "@/lib/graphql/constants";

export async function fetchGameMapDetails(slug: string) {
  const { data } = await getClient().query({
    query: GET_MAP_DATA,
    variables: { slug },
  });

  const details = data.mapData;
  const processedLocations = [];
  const locations = details.locations;
  for (let i = 0; i < locations.length; i++) {
    const curr = locations[i];
    const processedDesc = await remark()
      .use(html)
      .process(curr?.description ?? "");
    const location = { ...curr, description: processedDesc.toString() };
    processedLocations.push(location);
  }

  return {
    ...details,
    locations: processedLocations,
  };
}
