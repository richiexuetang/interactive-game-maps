/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddFoundLocations($data: UpdateFoundLocationInput!) {\n    addFoundLocations(data: $data) {\n      email\n      foundLocations\n    }\n  }\n": types.AddFoundLocationsDocument,
    "\n  mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {\n    removeFoundLocation(data: $data) {\n      email\n      foundLocations\n    }\n  }\n": types.RemoveFoundLocationDocument,
    "\nquery GetUser($email: String!) {\n  getUser(email: $email) {\n    email,\n    foundLocations\n  }\n}": types.GetUserDocument,
    "\n  mutation CreateUser($data: CreateUserInput!) {\n    createUser(data: $data) {\n      email\n      firstName\n      foundLocations\n      lastName\n      photoUrl\n    }\n  }\n  ": types.CreateUserDocument,
    "\nquery GetGames($slug: String!) {\n  game(slug: $slug) {\n    slug\n    thumbnailUrl\n    title\n    iconUrl\n    previewUrl\n    description\n  }\n}": types.GetGamesDocument,
    "\n  query GetGroupsByGameSlug($slug: String!) {\n    getGroupsByGameSlug(slug: $slug) {\n      title\n      id\n      categories {\n        title\n        icon\n        info\n        template\n        id\n      }\n    }\n  }\n": types.GetGroupsByGameSlugDocument,
    "\n  query Locations($regionSlug: String) {\n    locations(regionSlug: $regionSlug) {\n      categoryId\n      category {\n        title\n        id\n        icon\n        info\n      }\n      media {\n        url\n        mimeType\n        type\n      }\n      description\n      latitude\n      longitude\n      title\n      id\n      type\n    }\n  }\n": types.LocationsDocument,
    "\n  query RegionDetails($slug: String!) {\n    regionDetails(slug: $slug) {\n      zoom\n      gameSlug\n      id\n      maxZoom\n      minZoom\n      slug\n      thumbnailUrl\n      tilePath\n      title\n      center\n    }\n  }\n": types.RegionDetailsDocument,
    "\n  query FindRegionByGame($slug: String!) {\n    findRegionsByGame(slug: $slug, orderBy: { field: order, direction: asc }) {\n      center\n      zoom\n      gameSlug\n      id\n      maxZoom\n      minZoom\n      order\n      slug\n      thumbnailUrl\n      tilePath\n      title\n    }\n  }\n": types.FindRegionByGameDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddFoundLocations($data: UpdateFoundLocationInput!) {\n    addFoundLocations(data: $data) {\n      email\n      foundLocations\n    }\n  }\n"): (typeof documents)["\n  mutation AddFoundLocations($data: UpdateFoundLocationInput!) {\n    addFoundLocations(data: $data) {\n      email\n      foundLocations\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {\n    removeFoundLocation(data: $data) {\n      email\n      foundLocations\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {\n    removeFoundLocation(data: $data) {\n      email\n      foundLocations\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetUser($email: String!) {\n  getUser(email: $email) {\n    email,\n    foundLocations\n  }\n}"): (typeof documents)["\nquery GetUser($email: String!) {\n  getUser(email: $email) {\n    email,\n    foundLocations\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUser($data: CreateUserInput!) {\n    createUser(data: $data) {\n      email\n      firstName\n      foundLocations\n      lastName\n      photoUrl\n    }\n  }\n  "): (typeof documents)["\n  mutation CreateUser($data: CreateUserInput!) {\n    createUser(data: $data) {\n      email\n      firstName\n      foundLocations\n      lastName\n      photoUrl\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetGames($slug: String!) {\n  game(slug: $slug) {\n    slug\n    thumbnailUrl\n    title\n    iconUrl\n    previewUrl\n    description\n  }\n}"): (typeof documents)["\nquery GetGames($slug: String!) {\n  game(slug: $slug) {\n    slug\n    thumbnailUrl\n    title\n    iconUrl\n    previewUrl\n    description\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetGroupsByGameSlug($slug: String!) {\n    getGroupsByGameSlug(slug: $slug) {\n      title\n      id\n      categories {\n        title\n        icon\n        info\n        template\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetGroupsByGameSlug($slug: String!) {\n    getGroupsByGameSlug(slug: $slug) {\n      title\n      id\n      categories {\n        title\n        icon\n        info\n        template\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Locations($regionSlug: String) {\n    locations(regionSlug: $regionSlug) {\n      categoryId\n      category {\n        title\n        id\n        icon\n        info\n      }\n      media {\n        url\n        mimeType\n        type\n      }\n      description\n      latitude\n      longitude\n      title\n      id\n      type\n    }\n  }\n"): (typeof documents)["\n  query Locations($regionSlug: String) {\n    locations(regionSlug: $regionSlug) {\n      categoryId\n      category {\n        title\n        id\n        icon\n        info\n      }\n      media {\n        url\n        mimeType\n        type\n      }\n      description\n      latitude\n      longitude\n      title\n      id\n      type\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query RegionDetails($slug: String!) {\n    regionDetails(slug: $slug) {\n      zoom\n      gameSlug\n      id\n      maxZoom\n      minZoom\n      slug\n      thumbnailUrl\n      tilePath\n      title\n      center\n    }\n  }\n"): (typeof documents)["\n  query RegionDetails($slug: String!) {\n    regionDetails(slug: $slug) {\n      zoom\n      gameSlug\n      id\n      maxZoom\n      minZoom\n      slug\n      thumbnailUrl\n      tilePath\n      title\n      center\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindRegionByGame($slug: String!) {\n    findRegionsByGame(slug: $slug, orderBy: { field: order, direction: asc }) {\n      center\n      zoom\n      gameSlug\n      id\n      maxZoom\n      minZoom\n      order\n      slug\n      thumbnailUrl\n      tilePath\n      title\n    }\n  }\n"): (typeof documents)["\n  query FindRegionByGame($slug: String!) {\n    findRegionsByGame(slug: $slug, orderBy: { field: order, direction: asc }) {\n      center\n      zoom\n      gameSlug\n      id\n      maxZoom\n      minZoom\n      order\n      slug\n      thumbnailUrl\n      tilePath\n      title\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;