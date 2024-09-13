import { remark } from "remark";
import html from "remark-html";
import { getClient } from "@/lib/apollo-client";
import {
  ADD_TO_USER_FOUND,
  CREATE_APP_USER,
  FETCH_GAME_META_DATA,
  FETCH_GROUPS_BY_GAME_SLUG,
  FETCH_REGION_BY_GAME,
  FETCH_REGION_DETAILS,
  FETCH_REGION_MARKERS,
  GET_APP_USER,
  LOGIN,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/constants";

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

export async function login(email: string, password: string) {
  const { data } = await getClient().mutate({
    mutation: LOGIN,
    variables: { data: { email, password } },
  });

  return data.login;
}

export async function getRegionsByGame(slug: string) {
  const { data } = await getClient().query({
    query: FETCH_REGION_BY_GAME,
    variables: { slug },
  });

  return data.findRegionsByGame;
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
