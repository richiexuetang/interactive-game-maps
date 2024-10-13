import { GraphQLClient } from "graphql-request";
import { cookies } from "next/headers";
import { getSdk } from "@/generated/graphql";

export function getClient() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;

  const client = new GraphQLClient("http://localhost:5001/graphql", {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return getSdk(client);
}
