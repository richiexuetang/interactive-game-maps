import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({}),
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/graphql`,
    }),
  });
});
