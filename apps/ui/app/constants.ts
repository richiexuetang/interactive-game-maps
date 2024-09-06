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
      }
      slug
      thumbnailUrl
      title
    }
  }
`);

export const FETCH_REGIONS_BY_GAME = gql`
  query findRegionsByGame($slug: String!) {
    findRegionsByGame(slug: $slug) {
      slug
      title
      thumbnailUrl
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

export const FETCH_LOCATIONS_BY_REGION = gql`
  query getLocationByRegion($slug: String!) {
    getLocationByRegion(slug: $slug) {
      title
      latitude
      longitude
    }
  }
`;
