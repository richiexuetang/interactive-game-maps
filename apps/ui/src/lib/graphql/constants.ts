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

export const GET_CURRENT_USER = gql(`
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

export const GET_MAP_DATA = gql(`
query MapData($slug: String!) {
  mapData(slug: $slug) {
    center
    maxZoom
    minZoom
    zoom
    slug
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
    regions {
      centerX
      centerY
      coordinates
      title
    }
    game {
      slug
      maps {
        title
        slug
      }
      groups {
        title
        categories {
          id
          defaultHidden
          icon
          info
          isChecklist
          title
        }
      }
    }
  }
}`);

export const GET_MAP_REGIONS = gql(`
  query GetRegionsByMap($slug: String!) {
    getRegionsByMap(slug: $slug) {
      centerX
      centerY
      title
      coordinates
    }
  }
  `);

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
  }
}`);

export const FETCH_MAP_DETAILS = gql`
  query MapDetails($slug: String!) {
    mapDetails(slug: $slug) {
      gameSlug
      title
    }
  }
`;

export const FETCH_GAME_MAP_DETAILS = gql`
  query FetchGameByMap($slug: String!) {
    game(slug: $slug) {
      title
      slug
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
        slug
        order
        title
        minZoom
        maxZoom
        zoom
        center
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

export const ADD_USER_NOTE_MARKER = gql`
  mutation AddNoteMarker($data: AddNoteInput!) {
    addNoteMarker(data: $data) {
      id
      title
      description
      mapSlug
      latitude
      longitude
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

export const UPDATE_USER_NOTE_MARKER = gql`
  mutation UpdateNoteMarker($data: UpdateNoteInput!) {
    updateNoteMarker(data: $data) {
      id
      title
      description
      mapSlug
      latitude
      longitude
    }
  }
`;
