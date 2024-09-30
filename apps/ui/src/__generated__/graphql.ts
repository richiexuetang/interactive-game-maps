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

export type Category = {
  __typename?: 'Category';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  info?: Maybe<Scalars['String']['output']>;
  isChecklist: Scalars['Boolean']['output'];
  locations?: Maybe<Array<Location>>;
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Game = {
  __typename?: 'Game';
  center: Array<Scalars['Float']['output']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Group>>;
  id: Scalars['Float']['output'];
  maps?: Maybe<Array<Map>>;
  maxZoom: Scalars['Float']['output'];
  minZoom: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  zoom: Scalars['Float']['output'];
};

export type Group = {
  __typename?: 'Group';
  categories?: Maybe<Array<Category>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  game?: Maybe<Game>;
  gameSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type Location = {
  __typename?: 'Location';
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  map: Map;
  mapSlug: Scalars['String']['output'];
  media?: Maybe<Array<Media>>;
  regionSlug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type Map = {
  __typename?: 'Map';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  gameSlug: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  locations?: Maybe<Array<Location>>;
  order: Scalars['Float']['output'];
  regions?: Maybe<Array<Region>>;
  slug: Scalars['String']['output'];
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  tilePath: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type MapOrder = {
  direction: OrderDirection;
  field: RegionOrderField;
};

export type Media = {
  __typename?: 'Media';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFoundLocations: User;
  addNoteMarker: User;
  createUser?: Maybe<User>;
  removeFoundLocation: User;
  removeNoteMarker: User;
  toggleHideFoundSetting: User;
};


export type MutationAddFoundLocationsArgs = {
  data: UpdateFoundLocationInput;
};


export type MutationAddNoteMarkerArgs = {
  data: AddNoteInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationRemoveFoundLocationArgs = {
  data: UpdateFoundLocationInput;
};


export type MutationRemoveNoteMarkerArgs = {
  data: RemoveNoteInput;
};


export type MutationToggleHideFoundSettingArgs = {
  data: UpdateHideFoundInput;
};

export type NoteMarker = {
  __typename?: 'NoteMarker';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  map: Map;
  mapSlug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  fetchGameByMap: Game;
  findRegionsByGame: Array<Map>;
  game: Game;
  games: Array<Game>;
  getGroupsByGameSlug: Array<Group>;
  getRegionsByMap: Array<Region>;
  getUser: User;
  locations: Array<Location>;
  regionDetails: Map;
};


export type QueryFetchGameByMapArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindRegionsByGameArgs = {
  orderBy?: InputMaybe<MapOrder>;
  slug: Scalars['String']['input'];
};


export type QueryGameArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetGroupsByGameSlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetRegionsByMapArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  email: Scalars['String']['input'];
};


export type QueryLocationsArgs = {
  mapSlug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRegionDetailsArgs = {
  slug: Scalars['String']['input'];
};

export type Region = {
  __typename?: 'Region';
  coordinates?: Maybe<Array<Array<Array<Scalars['Float']['output']>>>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  locations: Array<Location>;
  mapSlug: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

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

export type User = {
  __typename?: 'User';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  foundLocations?: Maybe<Array<Scalars['Int']['output']>>;
  hideFound: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  noteMarkers?: Maybe<Array<NoteMarker>>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type AddFoundLocationsMutationVariables = Exact<{
  data: UpdateFoundLocationInput;
}>;


export type AddFoundLocationsMutation = { __typename?: 'Mutation', addFoundLocations: { __typename?: 'User', email: string, foundLocations?: Array<number> | null } };

export type RemoveFoundLocationMutationVariables = Exact<{
  data: UpdateFoundLocationInput;
}>;


export type RemoveFoundLocationMutation = { __typename?: 'Mutation', removeFoundLocation: { __typename?: 'User', email: string, foundLocations?: Array<number> | null } };

export type GetUserQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', email: string, foundLocations?: Array<number> | null, hideFound: boolean, noteMarkers?: Array<{ __typename?: 'NoteMarker', id: number, title: string, description: string, mapSlug: string, latitude: number, longitude: number }> | null } };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', email: string, username?: string | null, foundLocations?: Array<number> | null } | null };

export type ToggleHideFoundSettingMutationVariables = Exact<{
  data: UpdateHideFoundInput;
}>;


export type ToggleHideFoundSettingMutation = { __typename?: 'Mutation', toggleHideFoundSetting: { __typename?: 'User', hideFound: boolean, email: string } };

export type GetRegionsByMapQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetRegionsByMapQuery = { __typename?: 'Query', getRegionsByMap: Array<{ __typename?: 'Region', title: string, coordinates?: Array<Array<Array<number>>> | null }> };

export type GetGamesQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetGamesQuery = { __typename?: 'Query', game: { __typename?: 'Game', slug: string, title: string, description?: string | null } };

export type RegionDetailsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type RegionDetailsQuery = { __typename?: 'Query', regionDetails: { __typename?: 'Map', gameSlug: string, title: string } };

export type FindRegionByGameQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FindRegionByGameQuery = { __typename?: 'Query', findRegionsByGame: Array<{ __typename?: 'Map', gameSlug: string, slug: string, thumbnailUrl?: string | null, title: string }> };

export type FetchGameByMapQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FetchGameByMapQuery = { __typename?: 'Query', fetchGameByMap: { __typename?: 'Game', title: string, slug: string, minZoom: number, maxZoom: number, zoom: number, center: Array<number>, groups?: Array<{ __typename?: 'Group', id: number, title: string, categories?: Array<{ __typename?: 'Category', id: number, icon: string, info?: string | null, title: string }> | null }> | null, maps?: Array<{ __typename?: 'Map', tilePath: string, slug: string, order: number, title: string, locations?: Array<{ __typename?: 'Location', categoryId?: number | null, description?: string | null, latitude: number, longitude: number, title: string, id: number, category?: { __typename?: 'Category', title: string, id: number, icon: string, info?: string | null } | null, media?: Array<{ __typename?: 'Media', url: string, type: string }> | null }> | null }> | null } };

export type LocationsQueryVariables = Exact<{
  mapSlug?: InputMaybe<Scalars['String']['input']>;
}>;


export type LocationsQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', categoryId?: number | null, description?: string | null, latitude: number, longitude: number, title: string, id: number, category?: { __typename?: 'Category', title: string, id: number, icon: string, info?: string | null } | null, media?: Array<{ __typename?: 'Media', url: string, type: string }> | null }> };

export type AddNoteMarkerMutationVariables = Exact<{
  data: AddNoteInput;
}>;


export type AddNoteMarkerMutation = { __typename?: 'Mutation', addNoteMarker: { __typename?: 'User', noteMarkers?: Array<{ __typename?: 'NoteMarker', id: number, title: string, description: string, mapSlug: string, latitude: number, longitude: number }> | null } };

export type RemoveNoteMarkerMutationVariables = Exact<{
  data: RemoveNoteInput;
}>;


export type RemoveNoteMarkerMutation = { __typename?: 'Mutation', removeNoteMarker: { __typename?: 'User', noteMarkers?: Array<{ __typename?: 'NoteMarker', id: number, title: string, description: string, mapSlug: string, latitude: number, longitude: number }> | null } };


export const AddFoundLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddFoundLocations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFoundLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFoundLocations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"foundLocations"}}]}}]}}]} as unknown as DocumentNode<AddFoundLocationsMutation, AddFoundLocationsMutationVariables>;
export const RemoveFoundLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFoundLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFoundLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFoundLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"foundLocations"}}]}}]}}]} as unknown as DocumentNode<RemoveFoundLocationMutation, RemoveFoundLocationMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"foundLocations"}},{"kind":"Field","name":{"kind":"Name","value":"hideFound"}},{"kind":"Field","name":{"kind":"Name","value":"noteMarkers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mapSlug"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"foundLocations"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const ToggleHideFoundSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleHideFoundSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateHideFoundInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleHideFoundSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hideFound"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<ToggleHideFoundSettingMutation, ToggleHideFoundSettingMutationVariables>;
export const GetRegionsByMapDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRegionsByMap"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRegionsByMap"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]} as unknown as DocumentNode<GetRegionsByMapQuery, GetRegionsByMapQueryVariables>;
export const GetGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetGamesQuery, GetGamesQueryVariables>;
export const RegionDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RegionDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regionDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameSlug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<RegionDetailsQuery, RegionDetailsQueryVariables>;
export const FindRegionByGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRegionByGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRegionsByGame"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"order"}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameSlug"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FindRegionByGameQuery, FindRegionByGameQueryVariables>;
export const FetchGameByMapDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchGameByMap"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchGameByMap"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"minZoom"}},{"kind":"Field","name":{"kind":"Name","value":"maxZoom"}},{"kind":"Field","name":{"kind":"Name","value":"zoom"}},{"kind":"Field","name":{"kind":"Name","value":"center"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"maps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tilePath"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"info"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<FetchGameByMapQuery, FetchGameByMapQueryVariables>;
export const LocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Locations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mapSlug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"mapSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mapSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"info"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LocationsQuery, LocationsQueryVariables>;
export const AddNoteMarkerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNoteMarker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNoteMarker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteMarkers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mapSlug"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<AddNoteMarkerMutation, AddNoteMarkerMutationVariables>;
export const RemoveNoteMarkerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveNoteMarker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeNoteMarker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteMarkers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mapSlug"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveNoteMarkerMutation, RemoveNoteMarkerMutationVariables>;