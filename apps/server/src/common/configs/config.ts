import type { Config } from "./config.interface";

const config: Config = {
  nest: {
    port: 5001,
  },
  cors: {
    enabled: true,
  },
  graphql: {
    playgroundEnabled: false,
    debug: true,
    schemaDestination: "./src/schema.graphql",
    sortSchema: true,
  },
  security: {
    expiresIn: "2m",
    refreshIn: "7d",
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
