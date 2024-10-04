import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
// import { createContext } from "../../graphql/context";
import { schema } from "@/graphql/schema";

const { handleRequest }: any = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  //   context: createContext,
  graphqlEndpoint: "/api/graphql",
  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
