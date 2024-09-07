/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any };
};

export type Auth = {
  __typename?: "Auth";
  /** JWT access token */
  accessToken: Scalars["JWT"]["output"];
  /** JWT refresh token */
  refreshToken: Scalars["JWT"]["output"];
  user: User;
};

export type ChangePasswordInput = {
  newPassword: Scalars["String"]["input"];
  oldPassword: Scalars["String"]["input"];
};

export type CreateGameInput = {
  slug: Scalars["String"]["input"];
  thumbnailUrl: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type Game = {
  __typename?: "Game";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]["output"];
  groups?: Maybe<Array<MarkerGroup>>;
  id: Scalars["ID"]["output"];
  regions?: Maybe<Array<Region>>;
  slug: Scalars["String"]["output"];
  thumbnailUrl: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type LoginInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MarkerCategory = {
  __typename?: "MarkerCategory";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]["output"];
  icon?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  info?: Maybe<Scalars["String"]["output"]>;
  locations?: Maybe<Array<MarkerLocation>>;
  template?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type MarkerGroup = {
  __typename?: "MarkerGroup";
  categories?: Maybe<Array<MarkerCategory>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]["output"];
  game?: Maybe<Game>;
  gameSlug?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type MarkerLocation = {
  __typename?: "MarkerLocation";
  category?: Maybe<MarkerCategory>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  latitude: Scalars["Float"]["output"];
  longitude: Scalars["Float"]["output"];
  region?: Maybe<Region>;
  regionSlug?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  changePassword: User;
  createGame: Game;
  login: Auth;
  refreshToken: Token;
  signup: Auth;
  updateUser: User;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationCreateGameArgs = {
  data: CreateGameInput;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRefreshTokenArgs = {
  token: Scalars["JWT"]["input"];
};

export type MutationSignupArgs = {
  data: SignupInput;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type Query = {
  __typename?: "Query";
  findByRegionId: Array<MarkerGroup>;
  findCategoryById: MarkerCategory;
  findOne: MarkerCategory;
  findOneById: Game;
  findRegionsByGame: Array<Region>;
  games: Array<Game>;
  getGroupsByGameSlug: Array<MarkerGroup>;
  getLocationByRegion: Array<MarkerLocation>;
  groups: Array<MarkerGroup>;
  me: User;
  regionDetails: Region;
};

export type QueryFindByRegionIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryFindCategoryByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryFindOneArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryFindOneByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryFindRegionsByGameArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryGetGroupsByGameSlugArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryGetLocationByRegionArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryRegionDetailsArgs = {
  slug: Scalars["String"]["input"];
};

export type Region = {
  __typename?: "Region";
  center?: Maybe<Array<Scalars["Float"]["output"]>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]["output"];
  defaultZoom: Scalars["Float"]["output"];
  gameSlug: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  maxZoom: Scalars["Float"]["output"];
  minZoom: Scalars["Float"]["output"];
  slug: Scalars["String"]["output"];
  thumbnailUrl: Scalars["String"]["output"];
  tilePath: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]["output"];
};

/** User role */
export enum Role {
  Admin = "ADMIN",
  User = "USER",
}

export type SignupInput = {
  email: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
};

export type Token = {
  __typename?: "Token";
  /** JWT access token */
  accessToken: Scalars["JWT"]["output"];
  /** JWT refresh token */
  refreshToken: Scalars["JWT"]["output"];
};

export type UpdateUserInput = {
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  locations?: Maybe<Array<MarkerLocation>>;
  role: Role;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]["output"];
};
