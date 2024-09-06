import { getClient } from "../../apollo-client";
import {
  FETCH_GROUPS_BY_GAME_SLUG,
  FETCH_REGION_DETAILS,
} from "../../constants";
import Map from "../../../components/map/map";
import { revalidatePath } from "next/cache";

export default async function MapPage({
  params,
}: {
  params: { slug: string };
}) {
  revalidatePath("/map");

  const { data } = await getClient().query({
    query: FETCH_REGION_DETAILS,
    variables: { slug: params.slug },
  });

  const { regionDetails: region } = data;

  const { data: groupData } = await getClient().query({
    query: FETCH_GROUPS_BY_GAME_SLUG,
    variables: { slug: region.gameSlug },
  });

  return <Map region={region} groups={groupData.getGroupsByGameSlug} />;
}
