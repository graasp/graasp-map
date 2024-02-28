import { createContext, useContext, useMemo } from 'react';

import type { configureQueryClient } from '@graasp/query-client';
import { CompleteMember, DiscriminatedItem } from '@graasp/sdk';

type QueryClientHooks = ReturnType<typeof configureQueryClient>['hooks'];
type QueryClientMutations = ReturnType<
  typeof configureQueryClient
>['mutations'];

export interface QueryClientContextInterface {
  itemId?: DiscriminatedItem['id'];
  currentMember?: CompleteMember | null;
  useAddressFromGeolocation: QueryClientHooks['useAddressFromGeolocation'];
  useItemsInMap: QueryClientHooks['useItemsInMap'];
  useRecycleItems: QueryClientMutations['useRecycleItems'];
  usePostItem: QueryClientMutations['usePostItem'];
  useDeleteItemGeolocation: QueryClientMutations['useDeleteItemGeolocation'];
  useSuggestionsForAddress: QueryClientHooks['useSuggestionsForAddress'];
  viewItem: (item: DiscriminatedItem) => void;
  geolocationKey: string;
}

export const QueryClientContext = createContext<QueryClientContextInterface>({
  currentMember: undefined,
  useAddressFromGeolocation: () =>
    ({
      data: { display_name: 'address' },
    }) as any,
  useItemsInMap: () => ({ data: [] }) as any,
  useSuggestionsForAddress: () => ({ data: [] }) as any,
  useRecycleItems: () => ({}) as any,
  usePostItem: () => ({}) as any,
  useDeleteItemGeolocation: () => ({}) as any,
  viewItem: () => ({}) as any,
  geolocationKey: 'geolocationKey',
});

export const QueryClientContextProvider = ({
  currentMember,
  children,
  useAddressFromGeolocation,
  useItemsInMap,
  useRecycleItems,
  usePostItem,
  useDeleteItemGeolocation,
  useSuggestionsForAddress,
  viewItem,
  itemId,
  geolocationKey,
}: QueryClientContextInterface & { children: JSX.Element }): JSX.Element => {
  const value = useMemo(
    () => ({
      currentMember,
      useAddressFromGeolocation,
      useItemsInMap,
      useRecycleItems,
      usePostItem,
      useDeleteItemGeolocation,
      viewItem,
      itemId,
      useSuggestionsForAddress,
      geolocationKey,
    }),
    [
      currentMember,
      useAddressFromGeolocation,
      useItemsInMap,
      useRecycleItems,
      usePostItem,
      useDeleteItemGeolocation,
      useSuggestionsForAddress,
      viewItem,
      itemId,
      geolocationKey,
    ],
  );

  return (
    <QueryClientContext.Provider value={value}>
      {children}
    </QueryClientContext.Provider>
  );
};

export const useQueryClientContext = (): QueryClientContextInterface =>
  useContext<QueryClientContextInterface>(QueryClientContext);
