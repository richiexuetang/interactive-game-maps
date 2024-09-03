import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        TypeWithDateScalar: {
          fields: {
            latitude: {
              read: (lat) => parseFloat(lat),
            },
            longitude: {
              read: (long) => parseFloat(long),
            },
          },
        },
      },
    }),
    link: new HttpLink({
      uri: `${process.env.API_BASE_URL}/graphql`,
    }),
  });
});
