import { createContext, useContext, useMemo } from 'react';

import type { configureQueryClient } from '@graasp/query-client';
import {
  CompleteMember,
  DiscriminatedItem,
  ItemGeolocation,
} from '@graasp/sdk';

type QueryClientHooks = ReturnType<typeof configureQueryClient>['hooks'];
type QueryClientMutations = ReturnType<
  typeof configureQueryClient
>['mutations'];

export interface QueryClientContextInterface {
  itemId?: DiscriminatedItem['id'];
  currentMember?: CompleteMember | null;
  currentPosition?: { lat: number; lng: number };
  useAddressFromGeolocation: QueryClientHooks['useAddressFromGeolocation'];
  useItemsInMap: QueryClientHooks['useItemsInMap'];
  useRecycleItems: QueryClientMutations['useRecycleItems'];
  usePostItem: QueryClientMutations['usePostItem'];
  useDeleteItemGeolocation: QueryClientMutations['useDeleteItemGeolocation'];
  useSuggestionsForAddress: QueryClientHooks['useSuggestionsForAddress'];
  viewItem: (item: DiscriminatedItem) => void;
  handleAddOnClick?: ({
    location,
  }: {
    location: Pick<ItemGeolocation, 'lat' | 'lng'> &
      Partial<Pick<ItemGeolocation, 'country' | 'addressLabel'>>;
  }) => void;
  isMobile?: boolean;
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
  isMobile: false,
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
  currentPosition,
  handleAddOnClick,
  isMobile,
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
      currentPosition,
      handleAddOnClick,
      isMobile,
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
      currentPosition,
      handleAddOnClick,
      isMobile,
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
