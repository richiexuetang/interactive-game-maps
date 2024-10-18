import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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
  gameSlug?: Maybe<Scalars['String']['output']>;
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
  checklist: ChecklistGuide;
  checklists: Array<ChecklistGuide>;
  fetchGameByMap: Game;
  findMapsByGame: Array<Map>;
  game: Game;
  games: Array<Game>;
  mapData: Map;
  me: User;
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


export type QueryMapDataArgs = {
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

export type ChecklistsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ChecklistsQuery = { __typename?: 'Query', checklists: Array<{ __typename?: 'ChecklistGuide', id: number, title: string }> };

export type GetGamesQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetGamesQuery = { __typename?: 'Query', game: { __typename?: 'Game', slug: string, title: string } };

export type GamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', slug: string, title: string }> };

export type FetchGameByMapQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FetchGameByMapQuery = { __typename?: 'Query', game: { __typename?: 'Game', title: string, slug: string, groups?: Array<{ __typename?: 'Group', id: number, title: string, categories?: Array<{ __typename?: 'Category', id: number, icon: string, info?: string | null, title: string, defaultHidden: boolean }> | null }> | null, maps?: Array<{ __typename?: 'Map', slug: string, order: number, title: string, minZoom: number, maxZoom: number, zoom: number, center: Array<number> }> | null } };

export type MapDataQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type MapDataQuery = { __typename?: 'Query', mapData: { __typename?: 'Map', center: Array<number>, maxZoom: number, minZoom: number, zoom: number, slug: string, locations?: Array<{ __typename?: 'Location', categoryId?: number | null, type?: string | null, description?: string | null, latitude: number, longitude: number, title: string, id: number, category?: { __typename?: 'Category', title: string, id: number, icon: string, info?: string | null } | null, media?: Array<{ __typename?: 'Media', url: string, type: string }> | null }> | null, regions?: Array<{ __typename?: 'Region', centerX?: number | null, centerY?: number | null, coordinates?: Array<Array<Array<number>>> | null, title: string }> | null, game?: { __typename?: 'Game', slug: string, maps?: Array<{ __typename?: 'Map', title: string, slug: string }> | null, groups?: Array<{ __typename?: 'Group', id: number, title: string, categories?: Array<{ __typename?: 'Category', id: number, defaultHidden: boolean, icon: string, info?: string | null, title: string }> | null }> | null } | null } };

export type MapDetailsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type MapDetailsQuery = { __typename?: 'Query', mapData: { __typename?: 'Map', title: string, game?: { __typename?: 'Game', title: string } | null } };

export type AddFoundLocationMutationVariables = Exact<{
  data: UpdateFoundLocationInput;
}>;


export type AddFoundLocationMutation = { __typename?: 'Mutation', addFoundLocation: { __typename?: 'User', foundMarkers?: Array<{ __typename?: 'Location', id: number }> | null } };

export type RemoveFoundLocationMutationVariables = Exact<{
  data: UpdateFoundLocationInput;
}>;


export type RemoveFoundLocationMutation = { __typename?: 'Mutation', removeFoundLocation: { __typename?: 'User', foundMarkers?: Array<{ __typename?: 'Location', id: number }> | null } };

export type ToggleHideFoundSettingMutationVariables = Exact<{
  data: UpdateHideFoundInput;
}>;


export type ToggleHideFoundSettingMutation = { __typename?: 'Mutation', toggleHideFoundSetting: { __typename?: 'User', hideFound: boolean } };

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


export type RemoveFavoriteMutation = { __typename?: 'Mutation', removeFavorite: { __typename?: 'User', favoriteMaps?: Array<{ __typename?: 'Map', title: string, id: number, slug: string }> | null } };


export const ChecklistDocument = gql`
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

/**
 * __useChecklistQuery__
 *
 * To run a query within a React component, call `useChecklistQuery` and pass it any options that fit your needs.
 * When your component renders, `useChecklistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChecklistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChecklistQuery(baseOptions: Apollo.QueryHookOptions<ChecklistQuery, ChecklistQueryVariables> & ({ variables: ChecklistQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChecklistQuery, ChecklistQueryVariables>(ChecklistDocument, options);
      }
export function useChecklistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChecklistQuery, ChecklistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChecklistQuery, ChecklistQueryVariables>(ChecklistDocument, options);
        }
export function useChecklistSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ChecklistQuery, ChecklistQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ChecklistQuery, ChecklistQueryVariables>(ChecklistDocument, options);
        }
export type ChecklistQueryHookResult = ReturnType<typeof useChecklistQuery>;
export type ChecklistLazyQueryHookResult = ReturnType<typeof useChecklistLazyQuery>;
export type ChecklistSuspenseQueryHookResult = ReturnType<typeof useChecklistSuspenseQuery>;
export type ChecklistQueryResult = Apollo.QueryResult<ChecklistQuery, ChecklistQueryVariables>;
export const ChecklistsDocument = gql`
    query Checklists($slug: String!) {
  checklists(slug: $slug) {
    id
    title
  }
}
    `;

/**
 * __useChecklistsQuery__
 *
 * To run a query within a React component, call `useChecklistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChecklistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChecklistsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useChecklistsQuery(baseOptions: Apollo.QueryHookOptions<ChecklistsQuery, ChecklistsQueryVariables> & ({ variables: ChecklistsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChecklistsQuery, ChecklistsQueryVariables>(ChecklistsDocument, options);
      }
export function useChecklistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChecklistsQuery, ChecklistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChecklistsQuery, ChecklistsQueryVariables>(ChecklistsDocument, options);
        }
export function useChecklistsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ChecklistsQuery, ChecklistsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ChecklistsQuery, ChecklistsQueryVariables>(ChecklistsDocument, options);
        }
export type ChecklistsQueryHookResult = ReturnType<typeof useChecklistsQuery>;
export type ChecklistsLazyQueryHookResult = ReturnType<typeof useChecklistsLazyQuery>;
export type ChecklistsSuspenseQueryHookResult = ReturnType<typeof useChecklistsSuspenseQuery>;
export type ChecklistsQueryResult = Apollo.QueryResult<ChecklistsQuery, ChecklistsQueryVariables>;
export const GetGamesDocument = gql`
    query GetGames($slug: String!) {
  game(slug: $slug) {
    slug
    title
  }
}
    `;

/**
 * __useGetGamesQuery__
 *
 * To run a query within a React component, call `useGetGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetGamesQuery(baseOptions: Apollo.QueryHookOptions<GetGamesQuery, GetGamesQueryVariables> & ({ variables: GetGamesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
      }
export function useGetGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
        }
export function useGetGamesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
        }
export type GetGamesQueryHookResult = ReturnType<typeof useGetGamesQuery>;
export type GetGamesLazyQueryHookResult = ReturnType<typeof useGetGamesLazyQuery>;
export type GetGamesSuspenseQueryHookResult = ReturnType<typeof useGetGamesSuspenseQuery>;
export type GetGamesQueryResult = Apollo.QueryResult<GetGamesQuery, GetGamesQueryVariables>;
export const GamesDocument = gql`
    query Games {
  games {
    slug
    title
  }
}
    `;

/**
 * __useGamesQuery__
 *
 * To run a query within a React component, call `useGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGamesQuery(baseOptions?: Apollo.QueryHookOptions<GamesQuery, GamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
      }
export function useGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GamesQuery, GamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
        }
export function useGamesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GamesQuery, GamesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
        }
export type GamesQueryHookResult = ReturnType<typeof useGamesQuery>;
export type GamesLazyQueryHookResult = ReturnType<typeof useGamesLazyQuery>;
export type GamesSuspenseQueryHookResult = ReturnType<typeof useGamesSuspenseQuery>;
export type GamesQueryResult = Apollo.QueryResult<GamesQuery, GamesQueryVariables>;
export const FetchGameByMapDocument = gql`
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
  }
}
    `;

/**
 * __useFetchGameByMapQuery__
 *
 * To run a query within a React component, call `useFetchGameByMapQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchGameByMapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchGameByMapQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFetchGameByMapQuery(baseOptions: Apollo.QueryHookOptions<FetchGameByMapQuery, FetchGameByMapQueryVariables> & ({ variables: FetchGameByMapQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchGameByMapQuery, FetchGameByMapQueryVariables>(FetchGameByMapDocument, options);
      }
export function useFetchGameByMapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchGameByMapQuery, FetchGameByMapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchGameByMapQuery, FetchGameByMapQueryVariables>(FetchGameByMapDocument, options);
        }
export function useFetchGameByMapSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FetchGameByMapQuery, FetchGameByMapQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchGameByMapQuery, FetchGameByMapQueryVariables>(FetchGameByMapDocument, options);
        }
export type FetchGameByMapQueryHookResult = ReturnType<typeof useFetchGameByMapQuery>;
export type FetchGameByMapLazyQueryHookResult = ReturnType<typeof useFetchGameByMapLazyQuery>;
export type FetchGameByMapSuspenseQueryHookResult = ReturnType<typeof useFetchGameByMapSuspenseQuery>;
export type FetchGameByMapQueryResult = Apollo.QueryResult<FetchGameByMapQuery, FetchGameByMapQueryVariables>;
export const MapDataDocument = gql`
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

/**
 * __useMapDataQuery__
 *
 * To run a query within a React component, call `useMapDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useMapDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMapDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useMapDataQuery(baseOptions: Apollo.QueryHookOptions<MapDataQuery, MapDataQueryVariables> & ({ variables: MapDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MapDataQuery, MapDataQueryVariables>(MapDataDocument, options);
      }
export function useMapDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MapDataQuery, MapDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MapDataQuery, MapDataQueryVariables>(MapDataDocument, options);
        }
export function useMapDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MapDataQuery, MapDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MapDataQuery, MapDataQueryVariables>(MapDataDocument, options);
        }
export type MapDataQueryHookResult = ReturnType<typeof useMapDataQuery>;
export type MapDataLazyQueryHookResult = ReturnType<typeof useMapDataLazyQuery>;
export type MapDataSuspenseQueryHookResult = ReturnType<typeof useMapDataSuspenseQuery>;
export type MapDataQueryResult = Apollo.QueryResult<MapDataQuery, MapDataQueryVariables>;
export const MapDetailsDocument = gql`
    query MapDetails($slug: String!) {
  mapData(slug: $slug) {
    title
    game {
      title
    }
  }
}
    `;

/**
 * __useMapDetailsQuery__
 *
 * To run a query within a React component, call `useMapDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMapDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMapDetailsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useMapDetailsQuery(baseOptions: Apollo.QueryHookOptions<MapDetailsQuery, MapDetailsQueryVariables> & ({ variables: MapDetailsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MapDetailsQuery, MapDetailsQueryVariables>(MapDetailsDocument, options);
      }
export function useMapDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MapDetailsQuery, MapDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MapDetailsQuery, MapDetailsQueryVariables>(MapDetailsDocument, options);
        }
export function useMapDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MapDetailsQuery, MapDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MapDetailsQuery, MapDetailsQueryVariables>(MapDetailsDocument, options);
        }
export type MapDetailsQueryHookResult = ReturnType<typeof useMapDetailsQuery>;
export type MapDetailsLazyQueryHookResult = ReturnType<typeof useMapDetailsLazyQuery>;
export type MapDetailsSuspenseQueryHookResult = ReturnType<typeof useMapDetailsSuspenseQuery>;
export type MapDetailsQueryResult = Apollo.QueryResult<MapDetailsQuery, MapDetailsQueryVariables>;
export const AddFoundLocationDocument = gql`
    mutation AddFoundLocation($data: UpdateFoundLocationInput!) {
  addFoundLocation(data: $data) {
    foundMarkers {
      id
    }
  }
}
    `;
export type AddFoundLocationMutationFn = Apollo.MutationFunction<AddFoundLocationMutation, AddFoundLocationMutationVariables>;

/**
 * __useAddFoundLocationMutation__
 *
 * To run a mutation, you first call `useAddFoundLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFoundLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFoundLocationMutation, { data, loading, error }] = useAddFoundLocationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddFoundLocationMutation(baseOptions?: Apollo.MutationHookOptions<AddFoundLocationMutation, AddFoundLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFoundLocationMutation, AddFoundLocationMutationVariables>(AddFoundLocationDocument, options);
      }
export type AddFoundLocationMutationHookResult = ReturnType<typeof useAddFoundLocationMutation>;
export type AddFoundLocationMutationResult = Apollo.MutationResult<AddFoundLocationMutation>;
export type AddFoundLocationMutationOptions = Apollo.BaseMutationOptions<AddFoundLocationMutation, AddFoundLocationMutationVariables>;
export const RemoveFoundLocationDocument = gql`
    mutation RemoveFoundLocation($data: UpdateFoundLocationInput!) {
  removeFoundLocation(data: $data) {
    foundMarkers {
      id
    }
  }
}
    `;
export type RemoveFoundLocationMutationFn = Apollo.MutationFunction<RemoveFoundLocationMutation, RemoveFoundLocationMutationVariables>;

/**
 * __useRemoveFoundLocationMutation__
 *
 * To run a mutation, you first call `useRemoveFoundLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFoundLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFoundLocationMutation, { data, loading, error }] = useRemoveFoundLocationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRemoveFoundLocationMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFoundLocationMutation, RemoveFoundLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFoundLocationMutation, RemoveFoundLocationMutationVariables>(RemoveFoundLocationDocument, options);
      }
export type RemoveFoundLocationMutationHookResult = ReturnType<typeof useRemoveFoundLocationMutation>;
export type RemoveFoundLocationMutationResult = Apollo.MutationResult<RemoveFoundLocationMutation>;
export type RemoveFoundLocationMutationOptions = Apollo.BaseMutationOptions<RemoveFoundLocationMutation, RemoveFoundLocationMutationVariables>;
export const ToggleHideFoundSettingDocument = gql`
    mutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {
  toggleHideFoundSetting(data: $data) {
    hideFound
  }
}
    `;
export type ToggleHideFoundSettingMutationFn = Apollo.MutationFunction<ToggleHideFoundSettingMutation, ToggleHideFoundSettingMutationVariables>;

/**
 * __useToggleHideFoundSettingMutation__
 *
 * To run a mutation, you first call `useToggleHideFoundSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleHideFoundSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleHideFoundSettingMutation, { data, loading, error }] = useToggleHideFoundSettingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useToggleHideFoundSettingMutation(baseOptions?: Apollo.MutationHookOptions<ToggleHideFoundSettingMutation, ToggleHideFoundSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleHideFoundSettingMutation, ToggleHideFoundSettingMutationVariables>(ToggleHideFoundSettingDocument, options);
      }
export type ToggleHideFoundSettingMutationHookResult = ReturnType<typeof useToggleHideFoundSettingMutation>;
export type ToggleHideFoundSettingMutationResult = Apollo.MutationResult<ToggleHideFoundSettingMutation>;
export type ToggleHideFoundSettingMutationOptions = Apollo.BaseMutationOptions<ToggleHideFoundSettingMutation, ToggleHideFoundSettingMutationVariables>;
export const AddNoteMarkerDocument = gql`
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
export type AddNoteMarkerMutationFn = Apollo.MutationFunction<AddNoteMarkerMutation, AddNoteMarkerMutationVariables>;

/**
 * __useAddNoteMarkerMutation__
 *
 * To run a mutation, you first call `useAddNoteMarkerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNoteMarkerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNoteMarkerMutation, { data, loading, error }] = useAddNoteMarkerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddNoteMarkerMutation(baseOptions?: Apollo.MutationHookOptions<AddNoteMarkerMutation, AddNoteMarkerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNoteMarkerMutation, AddNoteMarkerMutationVariables>(AddNoteMarkerDocument, options);
      }
export type AddNoteMarkerMutationHookResult = ReturnType<typeof useAddNoteMarkerMutation>;
export type AddNoteMarkerMutationResult = Apollo.MutationResult<AddNoteMarkerMutation>;
export type AddNoteMarkerMutationOptions = Apollo.BaseMutationOptions<AddNoteMarkerMutation, AddNoteMarkerMutationVariables>;
export const RemoveNoteMarkerDocument = gql`
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
export type RemoveNoteMarkerMutationFn = Apollo.MutationFunction<RemoveNoteMarkerMutation, RemoveNoteMarkerMutationVariables>;

/**
 * __useRemoveNoteMarkerMutation__
 *
 * To run a mutation, you first call `useRemoveNoteMarkerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveNoteMarkerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeNoteMarkerMutation, { data, loading, error }] = useRemoveNoteMarkerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRemoveNoteMarkerMutation(baseOptions?: Apollo.MutationHookOptions<RemoveNoteMarkerMutation, RemoveNoteMarkerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveNoteMarkerMutation, RemoveNoteMarkerMutationVariables>(RemoveNoteMarkerDocument, options);
      }
export type RemoveNoteMarkerMutationHookResult = ReturnType<typeof useRemoveNoteMarkerMutation>;
export type RemoveNoteMarkerMutationResult = Apollo.MutationResult<RemoveNoteMarkerMutation>;
export type RemoveNoteMarkerMutationOptions = Apollo.BaseMutationOptions<RemoveNoteMarkerMutation, RemoveNoteMarkerMutationVariables>;
export const UpdateNoteMarkerDocument = gql`
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
export type UpdateNoteMarkerMutationFn = Apollo.MutationFunction<UpdateNoteMarkerMutation, UpdateNoteMarkerMutationVariables>;

/**
 * __useUpdateNoteMarkerMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMarkerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMarkerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMarkerMutation, { data, loading, error }] = useUpdateNoteMarkerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateNoteMarkerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMarkerMutation, UpdateNoteMarkerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteMarkerMutation, UpdateNoteMarkerMutationVariables>(UpdateNoteMarkerDocument, options);
      }
export type UpdateNoteMarkerMutationHookResult = ReturnType<typeof useUpdateNoteMarkerMutation>;
export type UpdateNoteMarkerMutationResult = Apollo.MutationResult<UpdateNoteMarkerMutation>;
export type UpdateNoteMarkerMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMarkerMutation, UpdateNoteMarkerMutationVariables>;
export const AddFavoriteDocument = gql`
    mutation AddFavorite($data: AddFavoriteInput!) {
  addFavorite(data: $data) {
    favoriteMaps {
      slug
    }
  }
}
    `;
export type AddFavoriteMutationFn = Apollo.MutationFunction<AddFavoriteMutation, AddFavoriteMutationVariables>;

/**
 * __useAddFavoriteMutation__
 *
 * To run a mutation, you first call `useAddFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteMutation, { data, loading, error }] = useAddFavoriteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<AddFavoriteMutation, AddFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFavoriteMutation, AddFavoriteMutationVariables>(AddFavoriteDocument, options);
      }
export type AddFavoriteMutationHookResult = ReturnType<typeof useAddFavoriteMutation>;
export type AddFavoriteMutationResult = Apollo.MutationResult<AddFavoriteMutation>;
export type AddFavoriteMutationOptions = Apollo.BaseMutationOptions<AddFavoriteMutation, AddFavoriteMutationVariables>;
export const RemoveFavoriteDocument = gql`
    mutation RemoveFavorite($data: AddFavoriteInput!) {
  removeFavorite(data: $data) {
    favoriteMaps {
      title
      id
      slug
    }
  }
}
    `;
export type RemoveFavoriteMutationFn = Apollo.MutationFunction<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;

/**
 * __useRemoveFavoriteMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteMutation, { data, loading, error }] = useRemoveFavoriteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRemoveFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>(RemoveFavoriteDocument, options);
      }
export type RemoveFavoriteMutationHookResult = ReturnType<typeof useRemoveFavoriteMutation>;
export type RemoveFavoriteMutationResult = Apollo.MutationResult<RemoveFavoriteMutation>;
export type RemoveFavoriteMutationOptions = Apollo.BaseMutationOptions<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;