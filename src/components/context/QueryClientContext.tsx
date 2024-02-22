import { createContext, useContext, useMemo } from 'react';

import type { configureQueryClient } from '@graasp/query-client';
import {
  CompleteMember,
  DiscriminatedItem,
  ItemGeolocation,
} from '@graasp/sdk';

export interface QueryClientContextInterface {
  itemId?: DiscriminatedItem['id'];
  currentMember?: CompleteMember | null;
  useAddressFromGeolocation: ReturnType<
    typeof configureQueryClient
  >['hooks']['useAddressFromGeolocation'];
  useItemsInMap: (args: {
    lat1?: number;
    lat2?: number;
    lng1?: number;
    lng2?: number;
    keywords?: string[];
    parentItemId?: DiscriminatedItem['id'];
  }) => { data?: ItemGeolocation[] };
  recycleItems: (ids: DiscriminatedItem['id'][]) => void;
  getAddressFromLatLng: (
    point: Pick<ItemGeolocation, 'lat' | 'lng'>,
  ) => Promise<{ data: any }>;
  postItem: (
    item: Partial<DiscriminatedItem> &
      Pick<DiscriminatedItem, 'type' | 'name'> & {
        parentId?: DiscriminatedItem['id'];
      } & {
        geolocation?: Pick<ItemGeolocation, 'lat' | 'lng'>;
      },
  ) => void;
  deleteLocation: (args: { itemId: DiscriminatedItem['id'] }) => void;
  viewItem: (item: DiscriminatedItem) => void;
}

export const QueryClientContext = createContext<QueryClientContextInterface>({
  currentMember: undefined,
  useAddressFromGeolocation: () =>
    ({
      data: { display_name: 'address' },
    }) as any,
  useItemsInMap: () => ({ data: [] }),
  getAddressFromLatLng: async () => ({ data: 'daza' }),
  recycleItems: () => {},
  postItem: () => {},
  deleteLocation: () => {},
  viewItem: () => {},
});

export const QueryClientContextProvider = ({
  currentMember,
  children,
  useAddressFromGeolocation,
  useItemsInMap,
  getAddressFromLatLng,
  recycleItems,
  postItem,
  deleteLocation,
  viewItem,
  itemId,
}: QueryClientContextInterface & { children: JSX.Element }): JSX.Element => {
  const value = useMemo(
    () => ({
      currentMember,
      useAddressFromGeolocation,
      useItemsInMap,
      getAddressFromLatLng,
      recycleItems,
      postItem,
      deleteLocation,
      viewItem,
      itemId,
    }),
    [
      currentMember,
      useAddressFromGeolocation,
      useItemsInMap,
      getAddressFromLatLng,
      recycleItems,
      postItem,
      deleteLocation,
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
