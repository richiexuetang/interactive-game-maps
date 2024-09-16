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
    foundLocations
  }
}`);

export const CREATE_APP_USER = gql(
  `
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      email
      firstName
      foundLocations
      lastName
      photoUrl
    }
  }
  `
);

export const FETCH_GAMES = gql(/* GraphQL */ `
  query {
    games {
      id
      regions {
        zoom
        gameSlug
        maxZoom
        minZoom
        slug
        thumbnailUrl
        tilePath
        title
        center
        order
      }
      slug
      thumbnailUrl
      title
    }
  }
`);

export const FETCH_GAME_META_DATA = gql(`
query GetGames($slug: String!) {
  game(slug: $slug) {
    slug
    thumbnailUrl
    title
    iconUrl
    previewUrl
    description
  }
}`);

export const FETCH_GROUPS_BY_GAME_SLUG = gql`
  query GetGroupsByGameSlug($slug: String!) {
    getGroupsByGameSlug(slug: $slug) {
      title
      id
      categories {
        title
        icon
        info
        template
        id
      }
    }
  }
`;

export const FETCH_REGION_MARKERS = gql`
  query Locations($regionSlug: String) {
    locations(regionSlug: $regionSlug) {
      categoryId
      category {
        title
        id
        icon
        info
      }
      media {
        url
        mimeType
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

export const FETCH_REGION_DETAILS = gql`
  query RegionDetails($slug: String!) {
    regionDetails(slug: $slug) {
      zoom
      gameSlug
      id
      maxZoom
      minZoom
      slug
      thumbnailUrl
      tilePath
      title
      center
    }
  }
`;

export const FETCH_REGION_BY_GAME = gql`
  query FindRegionByGame($slug: String!) {
    findRegionsByGame(slug: $slug, orderBy: { field: order, direction: asc }) {
      center
      zoom
      gameSlug
      id
      maxZoom
      minZoom
      order
      slug
      thumbnailUrl
      tilePath
      title
    }
  }
`;
