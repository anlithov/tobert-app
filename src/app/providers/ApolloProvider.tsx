import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { FC, PropsWithChildren } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:6894/graphql',
  cache: new InMemoryCache(),
});

const ApolloClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
