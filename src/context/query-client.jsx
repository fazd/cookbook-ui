import React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import config from '../config';

// eslint-disable-next-line react/prop-types
const QueryProvider = ({ children }) => {

  const client = new QueryClient({
    defaultOptions: {
      queries: config.queryProvider
    }
  });
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;