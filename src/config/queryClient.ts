import { configureQueryClient } from '@graasp/query-client';

import { API_HOST, DOMAIN, SHOW_NOTIFICATIONS } from './env';
import notifier from './notifier';

const {
  queryClient,
  useQueryClient,
  QueryClientProvider,
  hooks,
  ReactQueryDevtools,
  mutations,
  axios,
} = configureQueryClient({
  API_HOST,
  notifier,
  SHOW_NOTIFICATIONS,
  enableWebsocket: true,
  defaultQueryOptions: {
    keepPreviousData: true,
    refetchOnMount: false,
    // avoid refetching when same data are closely fetched
    staleTime: 1000, // ms
    cacheTime: 1000, // ms
  },
  DOMAIN,
});

export {
  axios,
  queryClient,
  useQueryClient,
  QueryClientProvider,
  hooks,
  mutations,
  ReactQueryDevtools,
};
