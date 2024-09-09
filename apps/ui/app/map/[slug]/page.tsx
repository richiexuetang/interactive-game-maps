import {
  getGroupDetails,
  getMarkerLocations,
  getRegionDetails,
} from "@/lib/api";
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
