import { gql } from "@apollo/client";

export const FETCH_GAMES = gql`
  query {
    getGames {
      slug
      title
      thumbnailUrl
      id
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
  query getByRegion($slug: String!) {
    getByRegion(slug: $slug) {
      title
      latitude
      longitude
    }
  }
`;
