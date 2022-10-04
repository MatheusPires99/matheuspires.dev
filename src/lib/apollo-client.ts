import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.CMS_API_URL,
  cache: new InMemoryCache(),
});
