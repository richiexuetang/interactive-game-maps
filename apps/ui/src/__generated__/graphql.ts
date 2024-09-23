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

export type AppUser = {
  __typename?: 'AppUser';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  foundLocations?: Maybe<Array<Scalars['Int']['output']>>;
  hideFound: Scalars['Boolean']['output'];
  id: Scalars['Float']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  photoUrl?: Maybe<Scalars['String']['output']>;
  trackingCategories?: Maybe<Array<Scalars['Int']['output']>>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  photoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Game = {
  __typename?: 'Game';
  center: Array<Scalars['Float']['output']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<MarkerGroup>>;
  id: Scalars['Float']['output'];
  maxZoom: Scalars['Float']['output'];
  minZoom: Scalars['Float']['output'];
  regions?: Maybe<Array<Region>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  zoom: Scalars['Float']['output'];
};

export type MarkerCategory = {
  __typename?: 'MarkerCategory';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  info?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<MarkerLocation>>;
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type MarkerGroup = {
  __typename?: 'MarkerGroup';
  categories?: Maybe<Array<MarkerCategory>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  game?: Maybe<Game>;
  gameSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type MarkerLocation = {
  __typename?: 'MarkerLocation';
  category?: Maybe<MarkerCategory>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  media?: Maybe<Array<Media>>;
  region?: Maybe<Region>;
  regionSlug: Scalars['String']['output'];
  subRegionSlug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type Media = {
  __typename?: 'Media';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  markerLocation?: Maybe<MarkerLocation>;
  markerLocationId?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFoundLocations: AppUser;
  addTrackingCategory: AppUser;
  createUser?: Maybe<AppUser>;
  removeFoundLocation: AppUser;
  removeTrackingCategory: AppUser;
  toggleHideFoundSetting: AppUser;
};


export type MutationAddFoundLocationsArgs = {
  data: UpdateFoundLocationInput;
};


export type MutationAddTrackingCategoryArgs = {
  data: UpdateTrackingCategoryInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationRemoveFoundLocationArgs = {
  data: UpdateFoundLocationInput;
};


export type MutationRemoveTrackingCategoryArgs = {
  data: UpdateTrackingCategoryInput;
};


export type MutationToggleHideFoundSettingArgs = {
  data: UpdateHideFoundInput;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  fetchGameByRegion: Game;
  findRegionsByGame: Array<Region>;
  game: Game;
  games: Array<Game>;
  getGroupsByGameSlug: Array<MarkerGroup>;
  getSubRegionsByRegion: Array<SubRegion>;
  getUser: AppUser;
  locations: Array<MarkerLocation>;
  regionDetails: Region;
};


export type QueryFetchGameByRegionArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindRegionsByGameArgs = {
  orderBy?: InputMaybe<RegionOrder>;
  slug: Scalars['String']['input'];
};


export type QueryGameArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetGroupsByGameSlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetSubRegionsByRegionArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  email: Scalars['String']['input'];
};


export type QueryLocationsArgs = {
  regionSlug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRegionDetailsArgs = {
  slug: Scalars['String']['input'];
};

export type Region = {
  __typename?: 'Region';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  gameSlug: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  locations?: Maybe<Array<MarkerLocation>>;
  order: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  subRegions?: Maybe<Array<SubRegion>>;
  thumbnailUrl: Scalars['String']['output'];
  tilePath: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type RegionOrder = {
  direction: OrderDirection;
  field: RegionOrderField;
};

/** Properties by which region connections can be ordered. */
export enum RegionOrderField {
  Id = 'id',
  Order = 'order',
  Title = 'title'
}

export type SubRegion = {
  __typename?: 'SubRegion';
  coordinates?: Maybe<Array<Array<Array<Scalars['Float']['output']>>>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  locations: Array<MarkerLocation>;
  regionSlug: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateFoundLocationInput = {
  email: Scalars['String']['input'];
  location: Scalars['Float']['input'];
};

export type UpdateHideFoundInput = {
  email: Scalars['String']['input'];
  hide: Scalars['Boolean']['input'];
};

export type UpdateTrackingCategoryInput = {
  categoryId: Scalars['Float']['input'];
  email: Scalars['String']['input'];
};

export type AddFoundLocationsMutationVariables = Exact<{
  data: UpdateFoundLocationInput;
}>;


export type AddFoundLocationsMutation = { __typename?: 'Mutation', addFoundLocations: { __typename?: 'AppUser', email: string, foundLocations?: Array<number> | null } };

export type RemoveFoundLocationMutationVariables = Exact<{
  data: UpdateFoundLocationInput;
}>;


export type RemoveFoundLocationMutation = { __typename?: 'Mutation', removeFoundLocation: { __typename?: 'AppUser', email: string, foundLocations?: Array<number> | null } };

export type GetUserQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'AppUser', email: string, foundLocations?: Array<number> | null, hideFound: boolean, trackingCategories?: Array<number> | null, photoUrl?: string | null } };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'AppUser', email: string, firstName?: string | null, foundLocations?: Array<number> | null, lastName?: string | null, photoUrl?: string | null } | null };

export type ToggleHideFoundSettingMutationVariables = Exact<{
  data: UpdateHideFoundInput;
}>;


export type ToggleHideFoundSettingMutation = { __typename?: 'Mutation', toggleHideFoundSetting: { __typename?: 'AppUser', hideFound: boolean, trackingCategories?: Array<number> | null, email: string } };

export type AddTrackingCategoryMutationVariables = Exact<{
  data: UpdateTrackingCategoryInput;
}>;


export type AddTrackingCategoryMutation = { __typename?: 'Mutation', addTrackingCategory: { __typename?: 'AppUser', email: string, hideFound: boolean, trackingCategories?: Array<number> | null } };

export type GetSubRegionsByRegionQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetSubRegionsByRegionQuery = { __typename?: 'Query', getSubRegionsByRegion: Array<{ __typename?: 'SubRegion', title: string, coordinates?: Array<Array<Array<number>>> | null }> };

export type RemoveTrackingCategoryMutationVariables = Exact<{
  data: UpdateTrackingCategoryInput;
}>;


export type RemoveTrackingCategoryMutation = { __typename?: 'Mutation', removeTrackingCategory: { __typename?: 'AppUser', email: string, trackingCategories?: Array<number> | null, hideFound: boolean } };

export type GetGamesQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetGamesQuery = { __typename?: 'Query', game: { __typename?: 'Game', slug: string, title: string, description?: string | null } };

export type RegionDetailsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type RegionDetailsQuery = { __typename?: 'Query', regionDetails: { __typename?: 'Region', gameSlug: string, title: string } };

export type FindRegionByGameQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FindRegionByGameQuery = { __typename?: 'Query', findRegionsByGame: Array<{ __typename?: 'Region', gameSlug: string, slug: string, thumbnailUrl: string, title: string }> };

export type FetchGameByRegionQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FetchGameByRegionQuery = { __typename?: 'Query', fetchGameByRegion: { __typename?: 'Game', title: string, slug: string, minZoom: number, maxZoom: number, zoom: number, center: Array<number>, groups?: Array<{ __typename?: 'MarkerGroup', id: number, title: string, categories?: Array<{ __typename?: 'MarkerCategory', id: number, icon: string, info?: string | null, title: string }> | null }> | null, regions?: Array<{ __typename?: 'Region', tilePath: string, slug: string, order: number, title: string, locations?: Array<{ __typename?: 'MarkerLocation', categoryId?: number | null, description?: string | null, latitude: number, longitude: number, title: string, id: number, category?: { __typename?: 'MarkerCategory', title: string, id: number, icon: string, info?: string | null } | null, media?: Array<{ __typename?: 'Media', url: string, mimeType?: string | null, type: string }> | null }> | null }> | null } };


export const AddFoundLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddFoundLocations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFoundLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFoundLocations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"foundLocations"}}]}}]}}]} as unknown as DocumentNode<AddFoundLocationsMutation, AddFoundLocationsMutationVariables>;
export const RemoveFoundLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFoundLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFoundLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFoundLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"foundLocations"}}]}}]}}]} as unknown as DocumentNode<RemoveFoundLocationMutation, RemoveFoundLocationMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"foundLocations"}},{"kind":"Field","name":{"kind":"Name","value":"hideFound"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCategories"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"foundLocations"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const ToggleHideFoundSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleHideFoundSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateHideFoundInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleHideFoundSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hideFound"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCategories"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<ToggleHideFoundSettingMutation, ToggleHideFoundSettingMutationVariables>;
export const AddTrackingCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTrackingCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTrackingCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTrackingCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"hideFound"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCategories"}}]}}]}}]} as unknown as DocumentNode<AddTrackingCategoryMutation, AddTrackingCategoryMutationVariables>;
export const GetSubRegionsByRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubRegionsByRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubRegionsByRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]} as unknown as DocumentNode<GetSubRegionsByRegionQuery, GetSubRegionsByRegionQueryVariables>;
export const RemoveTrackingCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveTrackingCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTrackingCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTrackingCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"trackingCategories"}},{"kind":"Field","name":{"kind":"Name","value":"hideFound"}}]}}]}}]} as unknown as DocumentNode<RemoveTrackingCategoryMutation, RemoveTrackingCategoryMutationVariables>;
export const GetGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetGamesQuery, GetGamesQueryVariables>;
export const RegionDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RegionDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regionDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameSlug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<RegionDetailsQuery, RegionDetailsQueryVariables>;
export const FindRegionByGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRegionByGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRegionsByGame"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"order"}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameSlug"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FindRegionByGameQuery, FindRegionByGameQueryVariables>;
export const FetchGameByRegionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchGameByRegion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchGameByRegion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"minZoom"}},{"kind":"Field","name":{"kind":"Name","value":"maxZoom"}},{"kind":"Field","name":{"kind":"Name","value":"zoom"}},{"kind":"Field","name":{"kind":"Name","value":"center"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"regions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tilePath"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"info"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<FetchGameByRegionQuery, FetchGameByRegionQueryVariables>;