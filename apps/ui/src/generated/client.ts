import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AddFavoriteInput = {
  email: Scalars['String']['input'];
  gameSlug: Scalars['String']['input'];
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
  defaultHidden: Scalars['Boolean']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  info?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<Location>>;
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type ChecklistGuide = {
  __typename?: 'ChecklistGuide';
  categories?: Maybe<Array<Category>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  game: Game;
  gameSlug: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type Game = {
  __typename?: 'Game';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  groups?: Maybe<Array<Group>>;
  id: Scalars['Float']['output'];
  maps?: Maybe<Array<Map>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
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
  title: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type Map = {
  __typename?: 'Map';
  center: Array<Scalars['Float']['output']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  game?: Maybe<Game>;
  gameSlug: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  locations?: Maybe<Array<Location>>;
  maxZoom: Scalars['Float']['output'];
  minZoom: Scalars['Float']['output'];
  order: Scalars['Float']['output'];
  regions?: Maybe<Array<Region>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  zoom: Scalars['Float']['output'];
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
  addFavorite: User;
  addFoundLocation: User;
  addNoteMarker: NoteMarker;
  removeFavorite: User;
  removeFoundLocation: User;
  removeNoteMarker: User;
  toggleHideFoundSetting: User;
  updateNoteMarker: NoteMarker;
};


export type MutationAddFavoriteArgs = {
  data: AddFavoriteInput;
};


export type MutationAddFoundLocationArgs = {
  data: UpdateFoundLocationInput;
};


export type MutationAddNoteMarkerArgs = {
  data: AddNoteInput;
};


export type MutationRemoveFavoriteArgs = {
  data: AddFavoriteInput;
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


export type MutationUpdateNoteMarkerArgs = {
  data: UpdateNoteInput;
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
  category: Category;
  checklist: ChecklistGuide;
  checklists: Array<ChecklistGuide>;
  fetchGameByMap: Game;
  findMapsByGame: Array<Map>;
  game: Game;
  games: Array<Game>;
  getRegionsByMap: Array<Region>;
  locations: Array<Location>;
  mapData: Map;
  mapDetails: Map;
};


export type QueryCategoryArgs = {
  id: Scalars['Float']['input'];
};


export type QueryChecklistArgs = {
  id: Scalars['Int']['input'];
};


export type QueryChecklistsArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFetchGameByMapArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindMapsByGameArgs = {
  orderBy?: InputMaybe<MapOrder>;
  slug: Scalars['String']['input'];
};


export type QueryGameArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetRegionsByMapArgs = {
  slug: Scalars['String']['input'];
};


export type QueryLocationsArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMapDataArgs = {
  slug: Scalars['String']['input'];
};


export type QueryMapDetailsArgs = {
  slug: Scalars['String']['input'];
};

export type Region = {
  __typename?: 'Region';
  centerX?: Maybe<Scalars['Float']['output']>;
  centerY?: Maybe<Scalars['Float']['output']>;
  coordinates?: Maybe<Array<Array<Array<Scalars['Float']['output']>>>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
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

export type Subscription = {
  __typename?: 'Subscription';
  noteMarkerAdded: NoteMarker;
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

export type User = {
  __typename?: 'User';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  favoriteMaps?: Maybe<Array<Map>>;
  foundMarkers?: Maybe<Array<Location>>;
  hideFound: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  noteMarkers?: Maybe<Array<NoteMarker>>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type ChecklistQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ChecklistQuery = { __typename?: 'Query', checklist: { __typename?: 'ChecklistGuide', title: string, categories?: Array<{ __typename?: 'Category', title: string, locations?: Array<{ __typename?: 'Location', id: number, title: string, description?: string | null, latitude: number, longitude: number, mapSlug: string, map: { __typename?: 'Map', slug: string }, category?: { __typename?: 'Category', title: string } | null }> | null }> | null } };

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

export type GamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', slug: string, title: string }> };

export type FetchGameByMapQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FetchGameByMapQuery = { __typename?: 'Query', game: { __typename?: 'Game', title: string, slug: string, groups?: Array<{ __typename?: 'Group', id: number, title: string, categories?: Array<{ __typename?: 'Category', id: number, icon: string, info?: string | null, title: string, defaultHidden: boolean }> | null }> | null, maps?: Array<{ __typename?: 'Map', slug: string, order: number, title: string, minZoom: number, maxZoom: number, zoom: number, center: Array<number> }> | null } };

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

export type AddFavoriteMutationVariables = Exact<{
  data: AddFavoriteInput;
}>;


export type AddFavoriteMutation = { __typename?: 'Mutation', addFavorite: { __typename?: 'User', favoriteMaps?: Array<{ __typename?: 'Map', slug: string }> | null } };

export type RemoveFavoriteMutationVariables = Exact<{
  data: AddFavoriteInput;
}>;


export type RemoveFavoriteMutation = { __typename?: 'Mutation', removeFavorite: { __typename?: 'User', favoriteMaps?: Array<{ __typename?: 'Map', slug: string }> | null } };


export const ChecklistDocument = `
    query Checklist($id: Int!) {
  checklist(id: $id) {
    title
    categories {
      title
      locations {
        id
        title
        description
        latitude
        longitude
        mapSlug
        map {
          slug
        }
        category {
          title
        }
      }
    }
  }
}
    `;
export const useChecklistQuery = <
      TData = ChecklistQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: ChecklistQueryVariables,
      options?: UseQueryOptions<ChecklistQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ChecklistQuery, TError, TData>(
      ['Checklist', variables],
      fetcher<ChecklistQuery, ChecklistQueryVariables>(client, ChecklistDocument, variables, headers),
      options
    );
export const MapDetailsDocument = `
    query MapDetails($slug: String!) {
  mapDetails(slug: $slug) {
    gameSlug
    title
  }
}
    `;
export const useMapDetailsQuery = <
      TData = MapDetailsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: MapDetailsQueryVariables,
      options?: UseQueryOptions<MapDetailsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<MapDetailsQuery, TError, TData>(
      ['MapDetails', variables],
      fetcher<MapDetailsQuery, MapDetailsQueryVariables>(client, MapDetailsDocument, variables, headers),
      options
    );
export const GetGamesDocument = `
    query GetGames($slug: String!) {
  game(slug: $slug) {
    slug
    title
  }
}
    `;
export const useGetGamesQuery = <
      TData = GetGamesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetGamesQueryVariables,
      options?: UseQueryOptions<GetGamesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetGamesQuery, TError, TData>(
      ['GetGames', variables],
      fetcher<GetGamesQuery, GetGamesQueryVariables>(client, GetGamesDocument, variables, headers),
      options
    );
export const ChecklistsDocument = `
    query Checklists($slug: String!) {
  checklists(slug: $slug) {
    id
    title
  }
}
    `;
export const useChecklistsQuery = <
      TData = ChecklistsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: ChecklistsQueryVariables,
      options?: UseQueryOptions<ChecklistsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ChecklistsQuery, TError, TData>(
      ['Checklists', variables],
      fetcher<ChecklistsQuery, ChecklistsQueryVariables>(client, ChecklistsDocument, variables, headers),
      options
    );
export const GamesDocument = `
    query Games {
  games {
    slug
    title
  }
}
    `;
export const useGamesQuery = <
      TData = GamesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GamesQueryVariables,
      options?: UseQueryOptions<GamesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GamesQuery, TError, TData>(
      variables === undefined ? ['Games'] : ['Games', variables],
      fetcher<GamesQuery, GamesQueryVariables>(client, GamesDocument, variables, headers),
      options
    );
export const FetchGameByMapDocument = `
    query FetchGameByMap($slug: String!) {
  game(slug: $slug) {
    title
    slug
    groups {
      id
      title
      categories {
        id
        icon
        info
        title
        defaultHidden
      }
    }
    maps {
      slug
      order
      title
      minZoom
      maxZoom
      zoom
      center
    }
    slug
  }
}
    `;
export const useFetchGameByMapQuery = <
      TData = FetchGameByMapQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FetchGameByMapQueryVariables,
      options?: UseQueryOptions<FetchGameByMapQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FetchGameByMapQuery, TError, TData>(
      ['FetchGameByMap', variables],
      fetcher<FetchGameByMapQuery, FetchGameByMapQueryVariables>(client, FetchGameByMapDocument, variables, headers),
      options
    );
export const AddFoundLocationDocument = `
    mutation AddFoundLocation($data: UpdateFoundLocationInput!) {
  addFoundLocation(data: $data) {
    email
    foundMarkers {
      id
      title
      description
      latitude
      longitude
    }
  }
}
    `;
export const useAddFoundLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddFoundLocationMutation, TError, AddFoundLocationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddFoundLocationMutation, TError, AddFoundLocationMutationVariables, TContext>(
      ['AddFoundLocation'],
      (variables?: AddFoundLocationMutationVariables) => fetcher<AddFoundLocationMutation, AddFoundLocationMutationVariables>(client, AddFoundLocationDocument, variables, headers)(),
      options
    );
export const RemoveFoundLocationDocument = `
    mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {
  removeFoundLocation(data: $data) {
    email
    foundMarkers {
      id
      title
      description
      latitude
      longitude
    }
  }
}
    `;
export const useRemoveFoundLocationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RemoveFoundLocationMutation, TError, RemoveFoundLocationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RemoveFoundLocationMutation, TError, RemoveFoundLocationMutationVariables, TContext>(
      ['RemoveFoundLocation'],
      (variables?: RemoveFoundLocationMutationVariables) => fetcher<RemoveFoundLocationMutation, RemoveFoundLocationMutationVariables>(client, RemoveFoundLocationDocument, variables, headers)(),
      options
    );
export const ToggleHideFoundSettingDocument = `
    mutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {
  toggleHideFoundSetting(data: $data) {
    hideFound
    email
  }
}
    `;
export const useToggleHideFoundSettingMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ToggleHideFoundSettingMutation, TError, ToggleHideFoundSettingMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ToggleHideFoundSettingMutation, TError, ToggleHideFoundSettingMutationVariables, TContext>(
      ['ToggleHideFoundSetting'],
      (variables?: ToggleHideFoundSettingMutationVariables) => fetcher<ToggleHideFoundSettingMutation, ToggleHideFoundSettingMutationVariables>(client, ToggleHideFoundSettingDocument, variables, headers)(),
      options
    );
export const MapDataDocument = `
    query MapData($slug: String!) {
  mapData(slug: $slug) {
    center
    maxZoom
    minZoom
    zoom
    slug
    locations {
      categoryId
      category {
        title
        id
        icon
        info
      }
      media {
        url
        type
      }
      type
      description
      latitude
      longitude
      title
      id
    }
    regions {
      centerX
      centerY
      coordinates
      title
    }
    game {
      slug
      maps {
        title
        slug
      }
      groups {
        id
        title
        categories {
          id
          defaultHidden
          icon
          info
          title
        }
      }
    }
  }
}
    `;
export const useMapDataQuery = <
      TData = MapDataQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: MapDataQueryVariables,
      options?: UseQueryOptions<MapDataQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<MapDataQuery, TError, TData>(
      ['MapData', variables],
      fetcher<MapDataQuery, MapDataQueryVariables>(client, MapDataDocument, variables, headers),
      options
    );
export const AddNoteMarkerDocument = `
    mutation AddNoteMarker($data: AddNoteInput!) {
  addNoteMarker(data: $data) {
    id
    title
    description
    mapSlug
    latitude
    longitude
  }
}
    `;
export const useAddNoteMarkerMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddNoteMarkerMutation, TError, AddNoteMarkerMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddNoteMarkerMutation, TError, AddNoteMarkerMutationVariables, TContext>(
      ['AddNoteMarker'],
      (variables?: AddNoteMarkerMutationVariables) => fetcher<AddNoteMarkerMutation, AddNoteMarkerMutationVariables>(client, AddNoteMarkerDocument, variables, headers)(),
      options
    );
export const RemoveNoteMarkerDocument = `
    mutation RemoveNoteMarker($data: RemoveNoteInput!) {
  removeNoteMarker(data: $data) {
    noteMarkers {
      id
      title
      description
      mapSlug
      latitude
      longitude
    }
  }
}
    `;
export const useRemoveNoteMarkerMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RemoveNoteMarkerMutation, TError, RemoveNoteMarkerMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RemoveNoteMarkerMutation, TError, RemoveNoteMarkerMutationVariables, TContext>(
      ['RemoveNoteMarker'],
      (variables?: RemoveNoteMarkerMutationVariables) => fetcher<RemoveNoteMarkerMutation, RemoveNoteMarkerMutationVariables>(client, RemoveNoteMarkerDocument, variables, headers)(),
      options
    );
export const UpdateNoteMarkerDocument = `
    mutation UpdateNoteMarker($data: UpdateNoteInput!) {
  updateNoteMarker(data: $data) {
    id
    title
    description
    mapSlug
    latitude
    longitude
  }
}
    `;
export const useUpdateNoteMarkerMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateNoteMarkerMutation, TError, UpdateNoteMarkerMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateNoteMarkerMutation, TError, UpdateNoteMarkerMutationVariables, TContext>(
      ['UpdateNoteMarker'],
      (variables?: UpdateNoteMarkerMutationVariables) => fetcher<UpdateNoteMarkerMutation, UpdateNoteMarkerMutationVariables>(client, UpdateNoteMarkerDocument, variables, headers)(),
      options
    );
export const AddFavoriteDocument = `
    mutation AddFavorite($data: AddFavoriteInput!) {
  addFavorite(data: $data) {
    favoriteMaps {
      slug
    }
  }
}
    `;
export const useAddFavoriteMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddFavoriteMutation, TError, AddFavoriteMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddFavoriteMutation, TError, AddFavoriteMutationVariables, TContext>(
      ['AddFavorite'],
      (variables?: AddFavoriteMutationVariables) => fetcher<AddFavoriteMutation, AddFavoriteMutationVariables>(client, AddFavoriteDocument, variables, headers)(),
      options
    );
export const RemoveFavoriteDocument = `
    mutation RemoveFavorite($data: AddFavoriteInput!) {
  removeFavorite(data: $data) {
    favoriteMaps {
      slug
    }
  }
}
    `;
export const useRemoveFavoriteMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RemoveFavoriteMutation, TError, RemoveFavoriteMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RemoveFavoriteMutation, TError, RemoveFavoriteMutationVariables, TContext>(
      ['RemoveFavorite'],
      (variables?: RemoveFavoriteMutationVariables) => fetcher<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>(client, RemoveFavoriteDocument, variables, headers)(),
      options
    );