import { remark } from "remark";
import html from "remark-html";
import { getClient } from "@/lib/apollo-client";
import {
  ADD_TO_USER_FOUND,
  CREATE_APP_USER,
  FETCH_GAME_META_DATA,
  FETCH_GAME_REGION_DETAILS,
  FETCH_REGION_BY_GAME,
  FETCH_REGION_DETAILS,
  GET_APP_USER,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/constants";
import { Region } from "@/__generated__/graphql";

export async function addToUserFound(input: {
  email: string;
  location: number;
}) {
  const { data } = await getClient().mutate({
    mutation: ADD_TO_USER_FOUND,
    variables: { data: input },
  });

  return data.addFoundLocations;
}

export async function removeFromUserFound(input: {
  email: string;
  location: number;
}) {
  const { data } = await getClient().mutate({
    mutation: REMOVE_FROM_USER_FOUND,
    variables: { data: input },
  });

  return data.removeFoundLocation;
}

export async function getRegionDetails(slug: string) {
  const { data } = await getClient().query({
    query: FETCH_REGION_DETAILS,
    variables: { slug },
  });

  return data.regionDetails;
}

export async function fetchGameRegionDetails(slug: string) {
  const { data } = await getClient().query({
    query: FETCH_GAME_REGION_DETAILS,
    variables: { slug },
  });

  const details = data.fetchGameByRegion;
  const region = details.regions?.find((r: Region) => r.slug === slug);
  const otherRegions = details.regions?.filter((r: Region) => r.slug !== slug);

  const processedLocations = [];
  for (let i = 0; i < region.locations.length; i++) {
    const curr = region.locations[i];
    const processedDesc = await remark()
      .use(html)
      .process(curr?.description ?? "");
    const location = { ...curr, description: processedDesc.toString() };
    processedLocations.push(location);
  }

  return {
    ...details,
    regions: [...otherRegions, { ...region, locations: processedLocations }],
  };
}

export async function getAppUser(email: string) {
  try {
    const { data } = await getClient().query({
      query: GET_APP_USER,
      variables: { email },
    });
    return data.regionDetails;
  } catch (error) {
    console.error("ops");
    return null;
  }
}

export async function createAppUser(input: {
  email: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
}) {
  const { data } = await getClient().mutate({
    mutation: CREATE_APP_USER,
    variables: { data: input },
  });

  return data.createUser;
}

export async function getMetaData(slug: string) {
  const { data } = await getClient().query({
    query: FETCH_GAME_META_DATA,
    variables: { slug },
  });

  return data.game;
}

export async function getRegionsByGame(slug: string) {
  const { data } = await getClient().query({
    query: FETCH_REGION_BY_GAME,
    variables: { slug },
  });

  return data.findRegionsByGame;
}
