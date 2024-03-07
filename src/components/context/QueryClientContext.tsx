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
  useItemGeolocation: QueryClientHooks['useItemGeolocation'];
  viewItem: (item: DiscriminatedItem) => void;
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
  useItemGeolocation: () => ({ data: { lat: 51.505, lng: -0.09 } }) as any,
  viewItem: () => ({}) as any,
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
  useItemGeolocation,
  itemId,
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
      useItemGeolocation,
      itemId,
      useSuggestionsForAddress,
    }),
    [
      currentMember,
      useAddressFromGeolocation,
      useItemsInMap,
      useRecycleItems,
      usePostItem,
      useItemGeolocation,
      useDeleteItemGeolocation,
      useSuggestionsForAddress,
      viewItem,
      itemId,
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
