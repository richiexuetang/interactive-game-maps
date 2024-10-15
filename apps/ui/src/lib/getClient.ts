import { GraphQLClient } from "graphql-request";
import { cookies } from "next/headers";
import { getSdk } from "@/generated/graphql";

export const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_URL ?? ""
);

export function getClient() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;

  const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "", {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return getSdk(client);
}
