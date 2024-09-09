import { remark } from "remark";
import html from "remark-html";
import { getClient } from "@/app/apollo-client";
import {
  FETCH_GROUPS_BY_GAME_SLUG,
  FETCH_REGION_DETAILS,
  FETCH_REGION_MARKERS,
} from "@/app/constants";

export async function getRegionDetails(slug: string) {
  const { data } = await getClient().query({
    query: FETCH_REGION_DETAILS,
    variables: { slug },
  });

  return data.regionDetails;
}

export async function getGroupDetails(slug: string) {
  const { data } = await getClient().query({
    query: FETCH_GROUPS_BY_GAME_SLUG,
    variables: { slug },
  });

  return data.getGroupsByGameSlug;
}

export async function getMarkerLocations(regionSlug: string) {
  const { data } = await getClient().query({
    query: FETCH_REGION_MARKERS,
    variables: { regionSlug },
  });

  const markers = data.locations;

  const processedMarkers = [];
  for (let i = 0; i < markers.length; i++) {
    const processedDescription = await remark()
      .use(html)
      .process(markers[i].description);

    processedMarkers.push({
      ...markers[i],
      description: processedDescription.toString(),
    });
  }

  return processedMarkers;
}
