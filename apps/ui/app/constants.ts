import { gql } from "@apollo/client";

export const FETCH_GAMES = gql`
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
      }
      slug
      thumbnailUrl
      title
    }
  }
`;

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
  query regionDetails($slug: String!) {
    regionDetails(slug: $slug) {
      slug
      title
      tilePath
      minZoom
      defaultZoom
      maxZoom
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
