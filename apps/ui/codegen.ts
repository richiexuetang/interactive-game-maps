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
        fetcher: "../lib/getClient#client",
        isReactHook: false,
      },
    },
    "src/generated/client-gql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
  hooks: {
    // Codegen does not always regenerate new files unless files do not exist.
    afterStart: ["find ./src/generated -name '*.generated.*' -delete"],
    // This will remove all the `RequestInit` lines.
    afterOneFileWrite: ["node ./src/generated/codegen-fix.mjs"],
  },
};

export default config;
