import { createContext, useContext, useMemo } from 'react';

import type { configureQueryClient } from '@graasp/query-client';
import {
  CompleteMember,
  DiscriminatedItem,
  ItemGeolocation,
  PackedItem,
} from '@graasp/sdk';

type QueryClientHooks = ReturnType<typeof configureQueryClient>['hooks'];
type QueryClientMutations = ReturnType<
  typeof configureQueryClient
>['mutations'];

export interface QueryClientContextInterface {
  item?: PackedItem;
  currentMember?: CompleteMember | null;
  currentPosition?: { lat: number; lng: number };
  useAddressFromGeolocation: QueryClientHooks['useAddressFromGeolocation'];
  useItemsInMap: QueryClientHooks['useItemsInMap'];
  useRecycleItems: QueryClientMutations['useRecycleItems'];
  usePostItem: QueryClientMutations['usePostItem'];
  useDeleteItemGeolocation: QueryClientMutations['useDeleteItemGeolocation'];
  useItemThumbnailUrl: QueryClientHooks['useItemThumbnailUrl'];
  useSuggestionsForAddress: QueryClientHooks['useSuggestionsForAddress'];
  viewItem: (item: DiscriminatedItem) => void;
  viewItemInBuilder: (item: DiscriminatedItem) => void;
  handleAddOnClick?: ({
    location,
  }: {
    location: Pick<ItemGeolocation, 'lat' | 'lng'> &
      Partial<Pick<ItemGeolocation, 'country' | 'addressLabel'>>;
  }) => void;
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
  viewItemInBuilder: () => ({}) as any,
  useItemThumbnailUrl: () => ({ data: null }) as any,
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
  useItemThumbnailUrl,
  viewItem,
  item,
  currentPosition,
  handleAddOnClick,
  viewItemInBuilder,
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
      useItemThumbnailUrl,
      item,
      useSuggestionsForAddress,
      currentPosition,
      handleAddOnClick,
      viewItemInBuilder,
    }),
    [
      currentMember,
      useAddressFromGeolocation,
      useItemsInMap,
      useRecycleItems,
      usePostItem,
      useDeleteItemGeolocation,
      useSuggestionsForAddress,
      useItemThumbnailUrl,
      viewItem,
      item,
      currentPosition,
      handleAddOnClick,
      viewItemInBuilder,
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
