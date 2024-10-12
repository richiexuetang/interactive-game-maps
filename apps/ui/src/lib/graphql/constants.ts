import { gql } from "@apollo/client";

export const ADD_TO_USER_FOUND = gql`
  mutation AddFoundLocation($data: UpdateFoundLocationInput!) {
    addFoundLocation(data: $data) {
      email
      foundMarkers {
        id
        title
        description
        latitude
        longitude
      }
    }
  }
`;

export const REMOVE_FROM_USER_FOUND = gql`
  mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {
    removeFoundLocation(data: $data) {
      email
      foundMarkers {
        id
        title
        description
        latitude
        longitude
      }
    }
  }
`;

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
      type
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
        id
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
