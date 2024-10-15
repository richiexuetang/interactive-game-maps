import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
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


export type MapDetailsQuery = { __typename?: 'Query', mapDetails: { __typename?: 'Map', gameSlug?: string | null, title: string } };

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
export const MapDetailsDocument = gql`
    query MapDetails($slug: String!) {
  mapDetails(slug: $slug) {
    gameSlug
    title
  }
}
    `;
export const GetGamesDocument = gql`
    query GetGames($slug: String!) {
  game(slug: $slug) {
    slug
    title
  }
}
    `;
export const ChecklistsDocument = gql`
    query Checklists($slug: String!) {
  checklists(slug: $slug) {
    id
    title
  }
}
    `;
export const GamesDocument = gql`
    query Games {
  games {
    slug
    title
  }
}
    `;
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
    slug
  }
}
    `;
export const AddFoundLocationDocument = gql`
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
export const RemoveFoundLocationDocument = gql`
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
export const ToggleHideFoundSettingDocument = gql`
    mutation ToggleHideFoundSetting($data: UpdateHideFoundInput!) {
  toggleHideFoundSetting(data: $data) {
    hideFound
    email
  }
}
    `;
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
export const AddFavoriteDocument = gql`
    mutation AddFavorite($data: AddFavoriteInput!) {
  addFavorite(data: $data) {
    favoriteMaps {
      slug
    }
  }
}
    `;
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Checklist(variables: ChecklistQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ChecklistQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChecklistQuery>(ChecklistDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Checklist', 'query', variables);
    },
    MapDetails(variables: MapDetailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MapDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MapDetailsQuery>(MapDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MapDetails', 'query', variables);
    },
    GetGames(variables: GetGamesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetGamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGamesQuery>(GetGamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetGames', 'query', variables);
    },
    Checklists(variables: ChecklistsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ChecklistsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChecklistsQuery>(ChecklistsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Checklists', 'query', variables);
    },
    Games(variables?: GamesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GamesQuery>(GamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Games', 'query', variables);
    },
    FetchGameByMap(variables: FetchGameByMapQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FetchGameByMapQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchGameByMapQuery>(FetchGameByMapDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchGameByMap', 'query', variables);
    },
    AddFoundLocation(variables: AddFoundLocationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddFoundLocationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddFoundLocationMutation>(AddFoundLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddFoundLocation', 'mutation', variables);
    },
    RemoveFoundLocation(variables: RemoveFoundLocationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveFoundLocationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveFoundLocationMutation>(RemoveFoundLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveFoundLocation', 'mutation', variables);
    },
    ToggleHideFoundSetting(variables: ToggleHideFoundSettingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ToggleHideFoundSettingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToggleHideFoundSettingMutation>(ToggleHideFoundSettingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ToggleHideFoundSetting', 'mutation', variables);
    },
    MapData(variables: MapDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MapDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MapDataQuery>(MapDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MapData', 'query', variables);
    },
    AddNoteMarker(variables: AddNoteMarkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddNoteMarkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddNoteMarkerMutation>(AddNoteMarkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddNoteMarker', 'mutation', variables);
    },
    RemoveNoteMarker(variables: RemoveNoteMarkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveNoteMarkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveNoteMarkerMutation>(RemoveNoteMarkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveNoteMarker', 'mutation', variables);
    },
    UpdateNoteMarker(variables: UpdateNoteMarkerMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateNoteMarkerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateNoteMarkerMutation>(UpdateNoteMarkerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateNoteMarker', 'mutation', variables);
    },
    AddFavorite(variables: AddFavoriteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddFavoriteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddFavoriteMutation>(AddFavoriteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddFavorite', 'mutation', variables);
    },
    RemoveFavorite(variables: RemoveFavoriteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveFavoriteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveFavoriteMutation>(RemoveFavoriteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveFavorite', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;