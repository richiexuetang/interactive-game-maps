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
    "\n      query Map($slug: String!) {\n        map(slug: $slug) {\n          gameSlug\n          title\n        }\n      }\n    ": types.MapDocument,
    "\n      query Maps($slug: String!) {\n        maps(slug: $slug) {\n          gameSlug\n          slug\n          thumbnailUrl\n          title\n        }\n      }\n    ": types.MapsDocument,
    "\n    query GetRegionsByMap($slug: String!) {\n      region(slug: $slug) {\n        title\n        coordinates\n      }\n    }\n    ": types.GetRegionsByMapDocument,
    "\n      query GameMap {\n        gameMap(slug: \"chapter-1\") {\n          title\n          slug\n          minZoom\n          maxZoom\n          zoom\n          center\n          groups {\n            id\n            title\n            categories {\n              id\n              icon\n              info\n              title\n              isChecklist\n              defaultHidden\n            }\n          }\n          maps {\n            tilePath\n            slug\n            order\n            title\n            locations {\n              categoryId\n              category {\n                title\n                id\n                icon\n                info\n              }\n              media {\n                url\n                type\n              }\n              description\n              latitude\n              longitude\n              title\n              id\n            }\n          }\n          slug\n        }\n      }\n    ": types.GameMapDocument,
    "\n    query GetGames($slug: String!) {\n      game(slug: $slug) {\n        slug\n        title\n      }\n    }": types.GetGamesDocument,
    "\n  mutation AddFoundLocations($location: Int!, $email: String!) {\n    addFound(email: $email, location: $location) {\n      email\n      foundLocations\n    }\n  }\n": types.AddFoundLocationsDocument,
    "\n  mutation RemoveFoundLocation($location: Int!, $email: String!) {\n    removeFound(email: $email, location: $location) {\n      email\n      foundLocations\n    }\n  }\n": types.RemoveFoundLocationDocument,
    "\nquery GetUser($email: String!) {\n  user(email: $email) {\n    email,\n    foundLocations,\n    hideFound,\n    noteMarkers {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n}": types.GetUserDocument,
    "\n  mutation CreateUser($email: String!) {\n    createUser(email: $email) {\n      email\n      username\n      foundLocations\n      noteMarkers {\n        id\n        title\n        description\n        mapSlug\n        latitude\n        longitude\n      }\n    }\n  }\n  ": types.CreateUserDocument,
    "\n  mutation ToggleHideFoundSetting($email: String!, $hide: Boolean!) {\n    toggleHideFoundSetting(email: $email, hide: $hide) {\n      email\n      foundLocations\n    }\n  }\n": types.ToggleHideFoundSettingDocument,
    "\n  mutation AddNoteMarker(\n    $email: String!\n    $title: String!\n    $description: String!\n    $mapSlug: String!\n    $latitude: Float!\n    $longitude: Float!\n  ) {\n    addNoteMarker(\n      email: $email\n      title: $title\n      description: $description\n      mapSlug: $mapSlug\n      latitude: $latitude\n      longitude: $longitude\n    ) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n": types.AddNoteMarkerDocument,
    "\n  mutation RemoveNoteMarker($id: Int!) {\n    removeNoteMarker(id: $id) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n": types.RemoveNoteMarkerDocument,
    "\n  mutation UpdateNoteMarker(\n    $title: String!\n    $description: String!\n    $latitude: Float!\n    $longitude: Float!\n    $id: Int!\n  ) {\n    updateNoteMarker(\n      title: $title\n      description: $description\n      latitude: $latitude\n      longitude: $longitude\n      id: $id\n    ) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n": types.UpdateNoteMarkerDocument,
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
export function gql(source: "\n      query Map($slug: String!) {\n        map(slug: $slug) {\n          gameSlug\n          title\n        }\n      }\n    "): (typeof documents)["\n      query Map($slug: String!) {\n        map(slug: $slug) {\n          gameSlug\n          title\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query Maps($slug: String!) {\n        maps(slug: $slug) {\n          gameSlug\n          slug\n          thumbnailUrl\n          title\n        }\n      }\n    "): (typeof documents)["\n      query Maps($slug: String!) {\n        maps(slug: $slug) {\n          gameSlug\n          slug\n          thumbnailUrl\n          title\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetRegionsByMap($slug: String!) {\n      region(slug: $slug) {\n        title\n        coordinates\n      }\n    }\n    "): (typeof documents)["\n    query GetRegionsByMap($slug: String!) {\n      region(slug: $slug) {\n        title\n        coordinates\n      }\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query GameMap {\n        gameMap(slug: \"chapter-1\") {\n          title\n          slug\n          minZoom\n          maxZoom\n          zoom\n          center\n          groups {\n            id\n            title\n            categories {\n              id\n              icon\n              info\n              title\n              isChecklist\n              defaultHidden\n            }\n          }\n          maps {\n            tilePath\n            slug\n            order\n            title\n            locations {\n              categoryId\n              category {\n                title\n                id\n                icon\n                info\n              }\n              media {\n                url\n                type\n              }\n              description\n              latitude\n              longitude\n              title\n              id\n            }\n          }\n          slug\n        }\n      }\n    "): (typeof documents)["\n      query GameMap {\n        gameMap(slug: \"chapter-1\") {\n          title\n          slug\n          minZoom\n          maxZoom\n          zoom\n          center\n          groups {\n            id\n            title\n            categories {\n              id\n              icon\n              info\n              title\n              isChecklist\n              defaultHidden\n            }\n          }\n          maps {\n            tilePath\n            slug\n            order\n            title\n            locations {\n              categoryId\n              category {\n                title\n                id\n                icon\n                info\n              }\n              media {\n                url\n                type\n              }\n              description\n              latitude\n              longitude\n              title\n              id\n            }\n          }\n          slug\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetGames($slug: String!) {\n      game(slug: $slug) {\n        slug\n        title\n      }\n    }"): (typeof documents)["\n    query GetGames($slug: String!) {\n      game(slug: $slug) {\n        slug\n        title\n      }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddFoundLocations($location: Int!, $email: String!) {\n    addFound(email: $email, location: $location) {\n      email\n      foundLocations\n    }\n  }\n"): (typeof documents)["\n  mutation AddFoundLocations($location: Int!, $email: String!) {\n    addFound(email: $email, location: $location) {\n      email\n      foundLocations\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RemoveFoundLocation($location: Int!, $email: String!) {\n    removeFound(email: $email, location: $location) {\n      email\n      foundLocations\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveFoundLocation($location: Int!, $email: String!) {\n    removeFound(email: $email, location: $location) {\n      email\n      foundLocations\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetUser($email: String!) {\n  user(email: $email) {\n    email,\n    foundLocations,\n    hideFound,\n    noteMarkers {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n}"): (typeof documents)["\nquery GetUser($email: String!) {\n  user(email: $email) {\n    email,\n    foundLocations,\n    hideFound,\n    noteMarkers {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUser($email: String!) {\n    createUser(email: $email) {\n      email\n      username\n      foundLocations\n      noteMarkers {\n        id\n        title\n        description\n        mapSlug\n        latitude\n        longitude\n      }\n    }\n  }\n  "): (typeof documents)["\n  mutation CreateUser($email: String!) {\n    createUser(email: $email) {\n      email\n      username\n      foundLocations\n      noteMarkers {\n        id\n        title\n        description\n        mapSlug\n        latitude\n        longitude\n      }\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ToggleHideFoundSetting($email: String!, $hide: Boolean!) {\n    toggleHideFoundSetting(email: $email, hide: $hide) {\n      email\n      foundLocations\n    }\n  }\n"): (typeof documents)["\n  mutation ToggleHideFoundSetting($email: String!, $hide: Boolean!) {\n    toggleHideFoundSetting(email: $email, hide: $hide) {\n      email\n      foundLocations\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddNoteMarker(\n    $email: String!\n    $title: String!\n    $description: String!\n    $mapSlug: String!\n    $latitude: Float!\n    $longitude: Float!\n  ) {\n    addNoteMarker(\n      email: $email\n      title: $title\n      description: $description\n      mapSlug: $mapSlug\n      latitude: $latitude\n      longitude: $longitude\n    ) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"): (typeof documents)["\n  mutation AddNoteMarker(\n    $email: String!\n    $title: String!\n    $description: String!\n    $mapSlug: String!\n    $latitude: Float!\n    $longitude: Float!\n  ) {\n    addNoteMarker(\n      email: $email\n      title: $title\n      description: $description\n      mapSlug: $mapSlug\n      latitude: $latitude\n      longitude: $longitude\n    ) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RemoveNoteMarker($id: Int!) {\n    removeNoteMarker(id: $id) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveNoteMarker($id: Int!) {\n    removeNoteMarker(id: $id) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateNoteMarker(\n    $title: String!\n    $description: String!\n    $latitude: Float!\n    $longitude: Float!\n    $id: Int!\n  ) {\n    updateNoteMarker(\n      title: $title\n      description: $description\n      latitude: $latitude\n      longitude: $longitude\n      id: $id\n    ) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateNoteMarker(\n    $title: String!\n    $description: String!\n    $latitude: Float!\n    $longitude: Float!\n    $id: Int!\n  ) {\n    updateNoteMarker(\n      title: $title\n      description: $description\n      latitude: $latitude\n      longitude: $longitude\n      id: $id\n    ) {\n      id\n      title\n      description\n      mapSlug\n      latitude\n      longitude\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;