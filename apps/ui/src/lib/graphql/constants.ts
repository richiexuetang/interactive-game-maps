import { gql } from "@apollo/client";

export const ADD_TO_USER_FOUND = gql`
  mutation AddFoundLocations($data: UpdateFoundLocationInput!) {
    addFoundLocations(data: $data) {
      email
      foundLocations
    }
  }
`;

export const REMOVE_FROM_USER_FOUND = gql`
  mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {
    removeFoundLocation(data: $data) {
      email
      foundLocations
    }
  }
`;

export const GET_APP_USER = gql(`
query GetUser($email: String!) {
  getUser(email: $email) {
    email,
    foundLocations,
    hideFound,
    noteMarkers {
      id
      title
      description
      mapSlug
      latitude
      longitude
    }
  }
}`);

export const CREATE_APP_USER = gql(
  `
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      email
      username
      foundLocations
    }
  }
  `
);

export const TOGGLE_HIDE_FOUND = gql(
  `
mutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {
  toggleHideFoundSetting(data: $data) {
    hideFound
    email
  }
}
`
);

export const GET_REGIONS = gql(
  `
  query GetRegionsByMap($slug: String!) {
    getRegionsByMap(slug: $slug) {
      title
      coordinates
    }
  }
  `
);

export const FETCH_GAMES = gql(/* GraphQL */ `
  query {
    games {
      slug
      title
    }
  }
`);

export const FETCH_GAME_META_DATA = gql(`
query GetGames($slug: String!) {
  game(slug: $slug) {
    slug
    title
    description
  }
}`);

export const FETCH_REGION_DETAILS = gql`
  query RegionDetails($slug: String!) {
    regionDetails(slug: $slug) {
      gameSlug
      title
    }
  }
`;

export const FETCH_REGION_BY_GAME = gql`
  query FindRegionByGame($slug: String!) {
    findRegionsByGame(slug: $slug, orderBy: { field: order, direction: asc }) {
      gameSlug
      slug
      thumbnailUrl
      title
    }
  }
`;

export const FETCH_GAME_REGION_DETAILS = gql`
  query FetchGameByMap($slug: String!) {
    fetchGameByMap(slug: $slug) {
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
`;

export const FETCH_LOCATIONS_BY_REGION = gql`
  query Locations($mapSlug: String) {
    locations(mapSlug: $mapSlug) {
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
`;

export const ADD_USER_NOTE_MARKER = gql`
  mutation AddNoteMarker($data: AddNoteInput!) {
    addNoteMarker(data: $data) {
      noteMarkers {
        id
        title
        description
        mapSlug
        latitude
        longitude
      }
    }
  }
`;

export const REMOVE_USER_NOTE_MARKER = gql`
  mutation RemoveNoteMarker($data: RemoveNoteInput!) {
    removeNoteMarker(data: $data) {
      noteMarkers {
        id
        title
        description
        mapSlug
        latitude
        longitude
      }
    }
  }
`;
