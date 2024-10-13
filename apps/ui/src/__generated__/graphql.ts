/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AddNoteInput = {
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  mapSlug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type MapOrder = {
  direction: OrderDirection;
  field: RegionOrderField;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

/** Properties by which region connections can be ordered. */
export enum RegionOrderField {
  Id = 'id',
  Order = 'order',
  Title = 'title'
}

export type RemoveNoteInput = {
  email: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};

export type UpdateFoundLocationInput = {
  email: Scalars['String']['input'];
  location: Scalars['Float']['input'];
};

export type UpdateHideFoundInput = {
  email: Scalars['String']['input'];
  hide: Scalars['Boolean']['input'];
};

export type UpdateNoteInput = {
  description: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type ChecklistQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ChecklistQuery = { __typename?: 'Query', checklist: { __typename?: 'ChecklistGuide', title: string, categories?: Array<{ __typename?: 'Category', title: string, locations?: Array<{ __typename?: 'Location', id: number, title: string, description?: string | null, latitude: number, longitude: number, mapSlug: string }> | null }> | null } };

export type MapDetailsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type MapDetailsQuery = { __typename?: 'Query', mapDetails: { __typename?: 'Map', gameSlug: string, title: string } };

export type GetGamesQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetGamesQuery = { __typename?: 'Query', game: { __typename?: 'Game', slug: string, title: string } };

export type ChecklistsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ChecklistsQuery = { __typename?: 'Query', checklists: Array<{ __typename?: 'ChecklistGuide', id: number, title: string }> };

export type AddFoundLocationMutationVariables = Exact<{
  data: UpdateFoundLocationInput;
}>;


export type AddFoundLocationMutation = { __typename?: 'Mutation', addFoundLocation: { __typename?: 'User', email: string, foundMarkers?: Array<{ __typename?: 'Location', id: number, title: string, description?: string | null, latitude: number, longitude: number }> | null } };

export type RemoveFoundLocationMutationVariables = Exact<{
  data: UpdateFoundLocationInput;
}>;


export type RemoveFoundLocationMutation = { __typename?: 'Mutation', removeFoundLocation: { __typename?: 'User', email: string, foundMarkers?: Array<{ __typename?: 'Location', id: number, title: string, description?: string | null, latitude: number, longitude: number }> | null } };

export type ToggleHideFoundSettingMutationVariables = Exact<{
  data: UpdateHideFoundInput;
}>;


export type ToggleHideFoundSettingMutation = { __typename?: 'Mutation', toggleHideFoundSetting: { __typename?: 'User', hideFound: boolean, email: string } };

export type MapDataQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type MapDataQuery = { __typename?: 'Query', mapData: { __typename?: 'Map', center: Array<number>, maxZoom: number, minZoom: number, zoom: number, slug: string, locations?: Array<{ __typename?: 'Location', categoryId?: number | null, type?: string | null, description?: string | null, latitude: number, longitude: number, title: string, id: number, category?: { __typename?: 'Category', title: string, id: number, icon: string, info?: string | null } | null, media?: Array<{ __typename?: 'Media', url: string, type: string }> | null }> | null, regions?: Array<{ __typename?: 'Region', centerX?: number | null, centerY?: number | null, coordinates?: Array<Array<Array<number>>> | null, title: string }> | null, game?: { __typename?: 'Game', slug: string, maps?: Array<{ __typename?: 'Map', title: string, slug: string }> | null, groups?: Array<{ __typename?: 'Group', id: number, title: string, categories?: Array<{ __typename?: 'Category', id: number, defaultHidden: boolean, icon: string, info?: string | null, title: string }> | null }> | null } | null } };

export type FetchGameByMapQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FetchGameByMapQuery = { __typename?: 'Query', game: { __typename?: 'Game', title: string, slug: string, groups?: Array<{ __typename?: 'Group', id: number, title: string, categories?: Array<{ __typename?: 'Category', id: number, icon: string, info?: string | null, title: string, defaultHidden: boolean }> | null }> | null, maps?: Array<{ __typename?: 'Map', slug: string, order: number, title: string, minZoom: number, maxZoom: number, zoom: number, center: Array<number> }> | null } };

export type AddNoteMarkerMutationVariables = Exact<{
  data: AddNoteInput;
}>;


export type AddNoteMarkerMutation = { __typename?: 'Mutation', addNoteMarker: { __typename?: 'NoteMarker', id: number, title: string, description: string, mapSlug: string, latitude: number, longitude: number } };

export type RemoveNoteMarkerMutationVariables = Exact<{
  data: RemoveNoteInput;
}>;


export type RemoveNoteMarkerMutation = { __typename?: 'Mutation', removeNoteMarker: { __typename?: 'User', noteMarkers?: Array<{ __typename?: 'NoteMarker', id: number, title: string, description: string, mapSlug: string, latitude: number, longitude: number }> | null } };

export type UpdateNoteMarkerMutationVariables = Exact<{
  data: UpdateNoteInput;
}>;


export type UpdateNoteMarkerMutation = { __typename?: 'Mutation', updateNoteMarker: { __typename?: 'NoteMarker', id: number, title: string, description: string, mapSlug: string, latitude: number, longitude: number } };


export const ChecklistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Checklist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checklist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"mapSlug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChecklistQuery, ChecklistQueryVariables>;
export const MapDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MapDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mapDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameSlug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<MapDetailsQuery, MapDetailsQueryVariables>;
export const GetGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetGamesQuery, GetGamesQueryVariables>;
export const ChecklistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Checklists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checklists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<ChecklistsQuery, ChecklistsQueryVariables>;
export const AddFoundLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddFoundLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFoundLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFoundLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"foundMarkers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<AddFoundLocationMutation, AddFoundLocationMutationVariables>;
export const RemoveFoundLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFoundLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFoundLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFoundLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"foundMarkers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveFoundLocationMutation, RemoveFoundLocationMutationVariables>;
export const ToggleHideFoundSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleHideFoundSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateHideFoundInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleHideFoundSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hideFound"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<ToggleHideFoundSettingMutation, ToggleHideFoundSettingMutationVariables>;
export const MapDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MapData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mapData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"center"}},{"kind":"Field","name":{"kind":"Name","value":"maxZoom"}},{"kind":"Field","name":{"kind":"Name","value":"minZoom"}},{"kind":"Field","name":{"kind":"Name","value":"zoom"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"info"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"regions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"centerX"}},{"kind":"Field","name":{"kind":"Name","value":"centerY"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"maps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"defaultHidden"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MapDataQuery, MapDataQueryVariables>;
export const FetchGameByMapDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchGameByMap"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"defaultHidden"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"maps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"minZoom"}},{"kind":"Field","name":{"kind":"Name","value":"maxZoom"}},{"kind":"Field","name":{"kind":"Name","value":"zoom"}},{"kind":"Field","name":{"kind":"Name","value":"center"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<FetchGameByMapQuery, FetchGameByMapQueryVariables>;
export const AddNoteMarkerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNoteMarker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNoteMarker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mapSlug"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]} as unknown as DocumentNode<AddNoteMarkerMutation, AddNoteMarkerMutationVariables>;
export const RemoveNoteMarkerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveNoteMarker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeNoteMarker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteMarkers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mapSlug"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveNoteMarkerMutation, RemoveNoteMarkerMutationVariables>;
export const UpdateNoteMarkerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNoteMarker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNoteMarker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mapSlug"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]} as unknown as DocumentNode<UpdateNoteMarkerMutation, UpdateNoteMarkerMutationVariables>;