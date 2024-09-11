import { gql } from "@apollo/client";

export const FETCH_GAMES = gql(/* GraphQL */ `
  query {
    games {
      groups {
        title
      }
      id
      regions {
        defaultZoom
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
      defaultZoom
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

export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      accessToken
      refreshToken
      user {
        email
        firstName
        lastName
        role
        locations {
          title
        }
      }
    }
  }
`;

export const FETCH_REGION_BY_GAME = gql`
  query FindRegionByGame($slug: String!) {
    findRegionsByGame(slug: $slug, orderBy: { field: order, direction: asc }) {
      center
      defaultZoom
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
