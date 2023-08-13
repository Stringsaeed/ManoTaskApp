import React, {PropsWithChildren} from 'react';
import {QueryClient} from '@tanstack/react-query';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';

import {AsyncStorage} from './async-storage';

export const manoQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

const persistOptions = {
  persister: asyncStoragePersister,
};

export function ManoQueryProvider({children}: PropsWithChildren) {
  return (
    <PersistQueryClientProvider
      persistOptions={persistOptions}
      client={manoQueryClient}>
      {children}
    </PersistQueryClientProvider>
  );
}
