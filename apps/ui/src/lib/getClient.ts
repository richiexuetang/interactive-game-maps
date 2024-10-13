import { GraphQLClient } from "graphql-request";
import { cookies } from "next/headers";
import { getSdk } from "@/generated/graphql";

export function getClient() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;
  console.log(token, "token");
  const client = new GraphQLClient("http://localhost:5001/graphql", {
    headers: {
      //   authorization: token ? `Bearer ${token}` : "",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDFhN2NhLTk5ZmQtNDFmOC04NmYxLWZkYmE2YWE5NDNkYiIsInN1YiI6eyJlbWFpbCI6InJ4dGFuZzAzMjhAZ21haWwuY29tIn0sImlhdCI6MTcyODgxMzU0NH0.0fjSKNzo5b8kcNy8ChWkmItF7SRq9AchZZk6apr7Na4",
    },
  });

  return getSdk(client);
}
