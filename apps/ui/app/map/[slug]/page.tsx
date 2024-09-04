import { getClient } from "../../apollo-client";
import {
  FETCH_LOCATIONS_BY_REGION,
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
  const { data: locationData } = await getClient().query({
    query: FETCH_LOCATIONS_BY_REGION,
    variables: { slug: params.slug },
  });

  const { regionDetails: region } = data;

  return (
    <div>
      {region.title}
      <Map
        width="800"
        height="400"
        center={region.center}
        zoom={region.defaultZoom}
        minZoom={region.minZoom}
        maxZoom={region.maxZoom}
        tilePath={region.tilePath}
        bounds={[
          [1.6037944300589855, 1.1618041992187502],
          [-0.08514401163112739, -2.2164916992187504],
        ]}
        markers={locationData.getByRegion}
      />
    </div>
  );
}
