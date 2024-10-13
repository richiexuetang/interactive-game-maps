import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:5001/graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        fetcher: "../lib/graphqlClient#client",
        isReactHook: false,
      },
    },
  },
};

export default config;
