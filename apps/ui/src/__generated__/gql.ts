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
    "\n      query Category($id: Float!) {\n        category(id: $id) {\n          id\n          title\n          locations {\n            id\n            title\n          }\n        }\n      }\n    ": types.CategoryDocument,
    "\n      query Locations($id: Int!) {\n        locations(id: $id) {\n          description\n          title\n          latitude\n          longitude\n          mapSlug\n        }\n      }\n    ": types.LocationsDocument,
    "\n      query FindMapByGame($slug: String!) {\n        findMapsByGame(slug: $slug, orderBy: { field: order, direction: asc }) {\n          gameSlug\n          slug\n          title\n        }\n      }\n    ": types.FindMapByGameDocument,
    "\n  mutation AddFoundLocations($data: UpdateFoundLocationInput!) {\n    addFoundLocations(data: $data) {\n      email\n      foundLocations\n    }\n  }\n": types.AddFoundLocationsDocument,
    "\n  mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {\n    removeFoundLocation(data: $data) {\n      email\n      foundLocations\n    }\n  }\n": types.RemoveFoundLocationDocument,
    "\nquery GetUser($email: String!) {\n  getUser(email: $email) {\n    email,\n    foundLocations,\n    hideFound,\n    noteMarkers {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n}": types.GetUserDocument,
    "\n  mutation CreateUser($data: CreateUserInput!) {\n    createUser(data: $data) {\n      email\n      username\n      foundLocations\n    }\n  }\n  ": types.CreateUserDocument,
    "\nmutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {\n  toggleHideFoundSetting(data: $data) {\n    hideFound\n    email\n  }\n}\n": types.ToggleHideFoundSettingDocument,
    "\nquery MapData($slug: String!) {\n  mapData(slug: $slug) {\n    center\n    maxZoom\n    minZoom\n    zoom\n    slug\n    locations {\n      categoryId\n          category {\n            title\n            id\n            icon\n            info\n          }\n          media {\n            url\n            type\n          }\n          description\n          latitude\n          longitude\n          title\n          id\n    }\n    regions {\n      centerX\n      centerY\n      coordinates\n      title\n    }\n    game {\n      slug\n      maps {\n        title\n        slug\n      }\n      groups {\n        title\n        categories {\n          id\n          defaultHidden\n          icon\n          info\n          isChecklist\n          title\n        }\n      }\n    }\n  }\n}": types.MapDataDocument,
    "\n  query GetRegionsByMap($slug: String!) {\n    getRegionsByMap(slug: $slug) {\n      centerX\n      centerY\n      title\n      coordinates\n    }\n  }\n  ": types.GetRegionsByMapDocument,
    "\nquery GetGames($slug: String!) {\n  game(slug: $slug) {\n    slug\n    title\n  }\n}": types.GetGamesDocument,
    "\n  query MapDetails($slug: String!) {\n    mapDetails(slug: $slug) {\n      gameSlug\n      title\n    }\n  }\n": types.MapDetailsDocument,
    "\n  query FetchGameByMap($slug: String!) {\n    game(slug: $slug) {\n      title\n      slug\n      groups {\n        id\n        title\n        categories {\n          id\n          icon\n          info\n          title\n          isChecklist\n          defaultHidden\n        }\n      }\n      maps {\n        slug\n        order\n        title\n        minZoom\n        maxZoom\n        zoom\n        center\n        locations {\n          categoryId\n          category {\n            title\n            id\n            icon\n            info\n          }\n          media {\n            url\n            type\n          }\n          description\n          latitude\n          longitude\n          title\n          id\n        }\n      }\n      slug\n    }\n  }\n": types.FetchGameByMapDocument,
    "\n  mutation AddNoteMarker($data: AddNoteInput!) {\n    addNoteMarker(data: $data) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n": types.AddNoteMarkerDocument,
    "\n  mutation RemoveNoteMarker($data: RemoveNoteInput!) {\n    removeNoteMarker(data: $data) {\n      noteMarkers {\n        id\n        title\n        description\n        mapSlug\n        latitude\n        longitude\n      }\n    }\n  }\n": types.RemoveNoteMarkerDocument,
    "\n  mutation UpdateNoteMarker($data: UpdateNoteInput!) {\n    updateNoteMarker(data: $data) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n": types.UpdateNoteMarkerDocument,
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
export function gql(source: "\n      query Category($id: Float!) {\n        category(id: $id) {\n          id\n          title\n          locations {\n            id\n            title\n          }\n        }\n      }\n    "): (typeof documents)["\n      query Category($id: Float!) {\n        category(id: $id) {\n          id\n          title\n          locations {\n            id\n            title\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query Locations($id: Int!) {\n        locations(id: $id) {\n          description\n          title\n          latitude\n          longitude\n          mapSlug\n        }\n      }\n    "): (typeof documents)["\n      query Locations($id: Int!) {\n        locations(id: $id) {\n          description\n          title\n          latitude\n          longitude\n          mapSlug\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query FindMapByGame($slug: String!) {\n        findMapsByGame(slug: $slug, orderBy: { field: order, direction: asc }) {\n          gameSlug\n          slug\n          title\n        }\n      }\n    "): (typeof documents)["\n      query FindMapByGame($slug: String!) {\n        findMapsByGame(slug: $slug, orderBy: { field: order, direction: asc }) {\n          gameSlug\n          slug\n          title\n        }\n      }\n    "];
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
export function gql(source: "\nquery GetUser($email: String!) {\n  getUser(email: $email) {\n    email,\n    foundLocations,\n    hideFound,\n    noteMarkers {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n}"): (typeof documents)["\nquery GetUser($email: String!) {\n  getUser(email: $email) {\n    email,\n    foundLocations,\n    hideFound,\n    noteMarkers {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUser($data: CreateUserInput!) {\n    createUser(data: $data) {\n      email\n      username\n      foundLocations\n    }\n  }\n  "): (typeof documents)["\n  mutation CreateUser($data: CreateUserInput!) {\n    createUser(data: $data) {\n      email\n      username\n      foundLocations\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {\n  toggleHideFoundSetting(data: $data) {\n    hideFound\n    email\n  }\n}\n"): (typeof documents)["\nmutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {\n  toggleHideFoundSetting(data: $data) {\n    hideFound\n    email\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery MapData($slug: String!) {\n  mapData(slug: $slug) {\n    center\n    maxZoom\n    minZoom\n    zoom\n    slug\n    locations {\n      categoryId\n          category {\n            title\n            id\n            icon\n            info\n          }\n          media {\n            url\n            type\n          }\n          description\n          latitude\n          longitude\n          title\n          id\n    }\n    regions {\n      centerX\n      centerY\n      coordinates\n      title\n    }\n    game {\n      slug\n      maps {\n        title\n        slug\n      }\n      groups {\n        title\n        categories {\n          id\n          defaultHidden\n          icon\n          info\n          isChecklist\n          title\n        }\n      }\n    }\n  }\n}"): (typeof documents)["\nquery MapData($slug: String!) {\n  mapData(slug: $slug) {\n    center\n    maxZoom\n    minZoom\n    zoom\n    slug\n    locations {\n      categoryId\n          category {\n            title\n            id\n            icon\n            info\n          }\n          media {\n            url\n            type\n          }\n          description\n          latitude\n          longitude\n          title\n          id\n    }\n    regions {\n      centerX\n      centerY\n      coordinates\n      title\n    }\n    game {\n      slug\n      maps {\n        title\n        slug\n      }\n      groups {\n        title\n        categories {\n          id\n          defaultHidden\n          icon\n          info\n          isChecklist\n          title\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetRegionsByMap($slug: String!) {\n    getRegionsByMap(slug: $slug) {\n      centerX\n      centerY\n      title\n      coordinates\n    }\n  }\n  "): (typeof documents)["\n  query GetRegionsByMap($slug: String!) {\n    getRegionsByMap(slug: $slug) {\n      centerX\n      centerY\n      title\n      coordinates\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetGames($slug: String!) {\n  game(slug: $slug) {\n    slug\n    title\n  }\n}"): (typeof documents)["\nquery GetGames($slug: String!) {\n  game(slug: $slug) {\n    slug\n    title\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MapDetails($slug: String!) {\n    mapDetails(slug: $slug) {\n      gameSlug\n      title\n    }\n  }\n"): (typeof documents)["\n  query MapDetails($slug: String!) {\n    mapDetails(slug: $slug) {\n      gameSlug\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchGameByMap($slug: String!) {\n    game(slug: $slug) {\n      title\n      slug\n      groups {\n        id\n        title\n        categories {\n          id\n          icon\n          info\n          title\n          isChecklist\n          defaultHidden\n        }\n      }\n      maps {\n        slug\n        order\n        title\n        minZoom\n        maxZoom\n        zoom\n        center\n        locations {\n          categoryId\n          category {\n            title\n            id\n            icon\n            info\n          }\n          media {\n            url\n            type\n          }\n          description\n          latitude\n          longitude\n          title\n          id\n        }\n      }\n      slug\n    }\n  }\n"): (typeof documents)["\n  query FetchGameByMap($slug: String!) {\n    game(slug: $slug) {\n      title\n      slug\n      groups {\n        id\n        title\n        categories {\n          id\n          icon\n          info\n          title\n          isChecklist\n          defaultHidden\n        }\n      }\n      maps {\n        slug\n        order\n        title\n        minZoom\n        maxZoom\n        zoom\n        center\n        locations {\n          categoryId\n          category {\n            title\n            id\n            icon\n            info\n          }\n          media {\n            url\n            type\n          }\n          description\n          latitude\n          longitude\n          title\n          id\n        }\n      }\n      slug\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddNoteMarker($data: AddNoteInput!) {\n    addNoteMarker(data: $data) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"): (typeof documents)["\n  mutation AddNoteMarker($data: AddNoteInput!) {\n    addNoteMarker(data: $data) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RemoveNoteMarker($data: RemoveNoteInput!) {\n    removeNoteMarker(data: $data) {\n      noteMarkers {\n        id\n        title\n        description\n        mapSlug\n        latitude\n        longitude\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveNoteMarker($data: RemoveNoteInput!) {\n    removeNoteMarker(data: $data) {\n      noteMarkers {\n        id\n        title\n        description\n        mapSlug\n        latitude\n        longitude\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateNoteMarker($data: UpdateNoteInput!) {\n    updateNoteMarker(data: $data) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateNoteMarker($data: UpdateNoteInput!) {\n    updateNoteMarker(data: $data) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;