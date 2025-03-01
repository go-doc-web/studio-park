// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
//TODO Env for next create
const STRAPI_URL = process.env.STRAPI_URL || 'http://127.0.0.1:1337';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${STRAPI_URL}/graphql`,
    fetch,
  }),
  cache: new InMemoryCache(),
});
