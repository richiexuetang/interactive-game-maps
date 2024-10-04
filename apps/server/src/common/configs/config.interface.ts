export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  graphql: GraphqlConfig;
}

export interface JwtConfig {
  secret: string;
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}
