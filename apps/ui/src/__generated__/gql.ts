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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n      query Checklist($id: Int!) {\n        checklist(id: $id) {\n          title\n          categories {\n            title\n            locations {\n              id\n              title\n              description\n              latitude\n              longitude\n              mapSlug\n            }\n          }\n        }\n      }\n    ": types.ChecklistDocument,
    "\n      query MapDetails($slug: String!) {\n        mapDetails(slug: $slug) {\n          gameSlug\n          title\n        }\n      }\n    ": types.MapDetailsDocument,
    "\n    query GetGames($slug: String!) {\n      game(slug: $slug) {\n        slug\n        title\n      }\n    }": types.GetGamesDocument,
    "\n      query Checklists($slug: String!) {\n        checklists(slug: $slug) {\n          id\n          title\n        }\n      }\n    ": types.ChecklistsDocument,
    "\n  mutation AddFoundLocation($data: UpdateFoundLocationInput!) {\n    addFoundLocation(data: $data) {\n      email\n      foundMarkers {\n        id\n        title\n        description\n        latitude\n        longitude\n      }\n    }\n  }\n": types.AddFoundLocationDocument,
    "\n  mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {\n    removeFoundLocation(data: $data) {\n      email\n      foundMarkers {\n        id\n        title\n        description\n        latitude\n        longitude\n      }\n    }\n  }\n": types.RemoveFoundLocationDocument,
    "\nmutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {\n  toggleHideFoundSetting(data: $data) {\n    hideFound\n    email\n  }\n}\n": types.ToggleHideFoundSettingDocument,
    "\nquery MapData($slug: String!) {\n  mapData(slug: $slug) {\n    center\n    maxZoom\n    minZoom\n    zoom\n    slug\n    locations {\n      categoryId\n      category {\n        title\n        id\n        icon\n        info\n      }\n      media {\n        url\n        type\n      }\n      type\n      description\n      latitude\n      longitude\n      title\n      id\n    }\n    regions {\n      centerX\n      centerY\n      coordinates\n      title\n    }\n    game {\n      slug\n      maps {\n        title\n        slug\n      }\n      groups {\n        id\n        title\n        categories {\n          id\n          defaultHidden\n          icon\n          info\n          title\n        }\n      }\n    }\n  }\n}": types.MapDataDocument,
    "\n  query FetchGameByMap($slug: String!) {\n    game(slug: $slug) {\n      title\n      slug\n      groups {\n        id\n        title\n        categories {\n          id\n          icon\n          info\n          title\n          defaultHidden\n        }\n      }\n      maps {\n        slug\n        order\n        title\n        minZoom\n        maxZoom\n        zoom\n        center\n      }\n      slug\n    }\n  }\n": types.FetchGameByMapDocument,
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
export function gql(source: "\n      query Checklist($id: Int!) {\n        checklist(id: $id) {\n          title\n          categories {\n            title\n            locations {\n              id\n              title\n              description\n              latitude\n              longitude\n              mapSlug\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query Checklist($id: Int!) {\n        checklist(id: $id) {\n          title\n          categories {\n            title\n            locations {\n              id\n              title\n              description\n              latitude\n              longitude\n              mapSlug\n            }\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query MapDetails($slug: String!) {\n        mapDetails(slug: $slug) {\n          gameSlug\n          title\n        }\n      }\n    "): (typeof documents)["\n      query MapDetails($slug: String!) {\n        mapDetails(slug: $slug) {\n          gameSlug\n          title\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetGames($slug: String!) {\n      game(slug: $slug) {\n        slug\n        title\n      }\n    }"): (typeof documents)["\n    query GetGames($slug: String!) {\n      game(slug: $slug) {\n        slug\n        title\n      }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query Checklists($slug: String!) {\n        checklists(slug: $slug) {\n          id\n          title\n        }\n      }\n    "): (typeof documents)["\n      query Checklists($slug: String!) {\n        checklists(slug: $slug) {\n          id\n          title\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddFoundLocation($data: UpdateFoundLocationInput!) {\n    addFoundLocation(data: $data) {\n      email\n      foundMarkers {\n        id\n        title\n        description\n        latitude\n        longitude\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddFoundLocation($data: UpdateFoundLocationInput!) {\n    addFoundLocation(data: $data) {\n      email\n      foundMarkers {\n        id\n        title\n        description\n        latitude\n        longitude\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {\n    removeFoundLocation(data: $data) {\n      email\n      foundMarkers {\n        id\n        title\n        description\n        latitude\n        longitude\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {\n    removeFoundLocation(data: $data) {\n      email\n      foundMarkers {\n        id\n        title\n        description\n        latitude\n        longitude\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {\n  toggleHideFoundSetting(data: $data) {\n    hideFound\n    email\n  }\n}\n"): (typeof documents)["\nmutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {\n  toggleHideFoundSetting(data: $data) {\n    hideFound\n    email\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery MapData($slug: String!) {\n  mapData(slug: $slug) {\n    center\n    maxZoom\n    minZoom\n    zoom\n    slug\n    locations {\n      categoryId\n      category {\n        title\n        id\n        icon\n        info\n      }\n      media {\n        url\n        type\n      }\n      type\n      description\n      latitude\n      longitude\n      title\n      id\n    }\n    regions {\n      centerX\n      centerY\n      coordinates\n      title\n    }\n    game {\n      slug\n      maps {\n        title\n        slug\n      }\n      groups {\n        id\n        title\n        categories {\n          id\n          defaultHidden\n          icon\n          info\n          title\n        }\n      }\n    }\n  }\n}"): (typeof documents)["\nquery MapData($slug: String!) {\n  mapData(slug: $slug) {\n    center\n    maxZoom\n    minZoom\n    zoom\n    slug\n    locations {\n      categoryId\n      category {\n        title\n        id\n        icon\n        info\n      }\n      media {\n        url\n        type\n      }\n      type\n      description\n      latitude\n      longitude\n      title\n      id\n    }\n    regions {\n      centerX\n      centerY\n      coordinates\n      title\n    }\n    game {\n      slug\n      maps {\n        title\n        slug\n      }\n      groups {\n        id\n        title\n        categories {\n          id\n          defaultHidden\n          icon\n          info\n          title\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchGameByMap($slug: String!) {\n    game(slug: $slug) {\n      title\n      slug\n      groups {\n        id\n        title\n        categories {\n          id\n          icon\n          info\n          title\n          defaultHidden\n        }\n      }\n      maps {\n        slug\n        order\n        title\n        minZoom\n        maxZoom\n        zoom\n        center\n      }\n      slug\n    }\n  }\n"): (typeof documents)["\n  query FetchGameByMap($slug: String!) {\n    game(slug: $slug) {\n      title\n      slug\n      groups {\n        id\n        title\n        categories {\n          id\n          icon\n          info\n          title\n          defaultHidden\n        }\n      }\n      maps {\n        slug\n        order\n        title\n        minZoom\n        maxZoom\n        zoom\n        center\n      }\n      slug\n    }\n  }\n"];
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