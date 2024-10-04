import { gql } from "@apollo/client";
import { remark } from "remark";
import html from "remark-html";
import { Map } from "@/__generated__/graphql";
import { getClient, query } from "@/lib/graphql/apollo-client";
import {
  ADD_TO_USER_FOUND,
  CREATE_APP_USER,
  GET_CURRENT_USER,
  REMOVE_FROM_USER_FOUND,
} from "@/lib/graphql/constants";

export async function addToUserFound(input: {
  email: string;
  location: number;
}) {
  const { data } = await getClient().mutate({
    mutation: ADD_TO_USER_FOUND,
    variables: { ...input },
  });

  return data.addFound;
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

export async function fetchGameMapDetails(slug: string) {
  const { data } = await query({
    query: gql`
      query GameMap($slug: String!) {
        gameMap(slug: $slug) {
          title
          slug
          minZoom
          maxZoom
          zoom
          center
          groups {
            id
            title
            categories {
              id
              icon
              info
              title
              isChecklist
              defaultHidden
            }
          }
          maps {
            tilePath
            slug
            order
            title
            locations {
              categoryId
              category {
                title
                id
                icon
                info
              }
              media {
                url
                type
              }
              description
              latitude
              longitude
              title
              id
            }
          }
          slug
        }
      }
    `,
    variables: { slug },
  });

  const details = data.gameMap;
  const map = details.maps?.find((r: Map) => r.slug === slug);
  const otherMaps = details.maps?.filter((r: Map) => r.slug !== slug);

  const groups = details.groups;
  const processedGroups = [];

  for (let i = 0; i < groups.length; i++) {
    const categories = groups[i].categories;
    const processedCategories = [];
    for (let j = 0; j < categories.length; j++) {
      const processedInfo = await remark()
        .use(html)
        .process(categories?.info ?? "");
      processedCategories.push({
        ...categories[j],
        info: processedInfo.toString(),
      });
    }
    processedGroups.push({ ...groups[i], categories: processedCategories });
  }

  const processedLocations = [];
  const locations = map.locations;
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
    maps: [...otherMaps, { ...map, locations: processedLocations }],
    groups: processedGroups,
  };
}

export async function getAppUser(email: string) {
  try {
    const { data } = await query({
      query: GET_CURRENT_USER,
      variables: { email },
    });
    return data.getUser;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createAppUser(input: { email: string }) {
  try {
    const { data } = await getClient().mutate({
      mutation: CREATE_APP_USER,
      variables: { email: input.email },
    });

    return data.createUser;
  } catch (error) {
    console.error("Error creating user");
    return null;
  }
}

export async function getMetaData(slug: string) {
  const { data } = await query({
    query: gql(`
    query GetGames($slug: String!) {
      game(slug: $slug) {
        slug
        title
      }
    }`),
    variables: { slug },
  });

  return data.game;
}
