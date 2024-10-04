import { gql } from "@apollo/client";

export const ADD_TO_USER_FOUND = gql`
  mutation AddFoundLocations($location: Int!, $email: String!) {
    addFound(email: $email, location: $location) {
      email
      foundLocations
    }
  }
`;

export const REMOVE_FROM_USER_FOUND = gql`
  mutation RemoveFoundLocation($location: Int!, $email: String!) {
    removeFound(email: $email, location: $location) {
      email
      foundLocations
    }
  }
`;

export const GET_CURRENT_USER = gql(`
query GetUser($email: String!) {
  user(email: $email) {
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
  mutation CreateUser($email: String!) {
    createUser(email: $email) {
      email
      username
      foundLocations
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
  `
);

export const TOGGLE_HIDE_FOUND = gql(
  `
  mutation ToggleHideFoundSetting($email: String!, $hide: Boolean!) {
    toggleHideFoundSetting(email: $email, hide: $hide) {
      email
      foundLocations
    }
  }
`
);

export const ADD_USER_NOTE_MARKER = gql`
  mutation AddNoteMarker(
    $email: String!
    $title: String!
    $description: String!
    $mapSlug: String!
    $latitude: Float!
    $longitude: Float!
  ) {
    addNoteMarker(
      email: $email
      title: $title
      description: $description
      mapSlug: $mapSlug
      latitude: $latitude
      longitude: $longitude
    ) {
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
  mutation RemoveNoteMarker($id: Int!) {
    removeNoteMarker(id: $id) {
      id
      title
      description
      mapSlug
      latitude
      longitude
    }
  }
`;

export const UPDATE_USER_NOTE_MARKER = gql`
  mutation UpdateNoteMarker(
    $title: String!
    $description: String!
    $latitude: Float!
    $longitude: Float!
    $id: Int!
  ) {
    updateNoteMarker(
      title: $title
      description: $description
      latitude: $latitude
      longitude: $longitude
      id: $id
    ) {
      id
      title
      description
      mapSlug
      latitude
      longitude
    }
  }
`;
