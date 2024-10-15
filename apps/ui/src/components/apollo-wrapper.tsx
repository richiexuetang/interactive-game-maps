"use client";

import { ApolloLink, from, HttpLink } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
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
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: { headers: Headers }) => ({
      headers: {
        ...headers,
        authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }));

    return forward(operation);
  });

  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            from([authLink, httpLink]),
          ])
        : from([authLink, httpLink]),
  });
}

export function ApolloWrapper({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
