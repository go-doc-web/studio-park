'use client';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../lib/apolloClient';
import { ReactNode } from 'react';

export function ApolloProviders({ children }: { children: ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
