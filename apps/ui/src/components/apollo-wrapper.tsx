"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import Cookies from "js-cookie";
import { PropsWithChildren } from "react";

if (process.env.NODE_ENV === "development") {
  loadDevMessages();
  loadErrorMessages();
}

function makeClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`,
  });

  const authLink = setContext((_, { headers }) => {
    // const token = Cookies.get("jwt");
    // console.log(token);
    // const data = cache.readQuery({
    //   query: ACCESS_TOKEN
    // });
    return {
      headers: {
        ...headers,
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDFhN2NhLTk5ZmQtNDFmOC04NmYxLWZkYmE2YWE5NDNkYiIsInN1YiI6eyJlbWFpbCI6InJ4dGFuZzAzMjhAZ21haWwuY29tIn0sImlhdCI6MTcyODgxMzU0NH0.0fjSKNzo5b8kcNy8ChWkmItF7SRq9AchZZk6apr7Na4",
        // authorization: token
        //   ? `Bearer ${token}`
        //   : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDFhN2NhLTk5ZmQtNDFmOC04NmYxLWZkYmE2YWE5NDNkYiIsInN1YiI6eyJlbWFpbCI6InJ4dGFuZzAzMjhAZ21haWwuY29tIn0sImlhdCI6MTcyODgxMzU0NH0.0fjSKNzo5b8kcNy8ChWkmItF7SRq9AchZZk6apr7Na4",
      },
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`,
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDFhN2NhLTk5ZmQtNDFmOC04NmYxLWZkYmE2YWE5NDNkYiIsInN1YiI6eyJlbWFpbCI6InJ4dGFuZzAzMjhAZ21haWwuY29tIn0sImlhdCI6MTcyODgxMzU0NH0.0fjSKNzo5b8kcNy8ChWkmItF7SRq9AchZZk6apr7Na4",
      },
    }),
    // typeof window === "undefined"
    //   ? ApolloLink.from([
    //       new SSRMultipartLink({
    //         stripDefer: true,
    //       }),
    //       authLink.concat(httpLink),
    //     ])
    //   : authLink.concat(httpLink),
  });
}

export function ApolloWrapper({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
