import type { Config } from "./config.interface";

const config: Config = {
  nest: {
    port: 5001,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: "Ritcher Map API",
    description: "API for interactive game map",
    version: "1.5",
    path: "api",
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: "./src/schema.graphql",
    sortSchema: true,
  },
  security: {
    expiresIn: "2m",
    refreshIn: "7d",
    bcryptSaltOrRound: 10,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    scopes: [],
    callbackURL: process.env.GOOGLE_CALLBACK,
  },
  jwt: {
    secret: "asdkljalsfjaslkflkasfnaksnfklasndl",
  },
};

export default (): Config => config;
