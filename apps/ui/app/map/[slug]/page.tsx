import {
  getGroupDetails,
  getMarkerLocations,
  getRegionDetails,
} from "@/lib/api";
import { getClient } from "../../apollo-client";
import {
  FETCH_GROUPS_BY_GAME_SLUG,
  FETCH_REGION_DETAILS,
  FETCH_REGION_MARKERS,
} from "../../constants";
import Map from "@/components/map/map";
import { revalidatePath } from "next/cache";

export default async function MapPage({
  params,
}: {
  params: { slug: string };
}) {
  revalidatePath("/map");

  const region = await getRegionDetails(params.slug);
  const groupData = await getGroupDetails(region.gameSlug);
  const markers = await getMarkerLocations(region.slug);

  return <Map region={region} groups={groupData} markers={markers} />;
}
