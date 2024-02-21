import { createContext, useContext, useMemo } from 'react';

import {
  CompleteMember,
  DiscriminatedItem,
  ItemGeolocation,
} from '@graasp/sdk';

export interface QueryClientContextInterface {
  currentMember?: CompleteMember | null;
  useAddressFromGeolocation: ({
    lat,
    lng,
  }: Pick<ItemGeolocation, 'lat' | 'lng'>) => {
    data?: { display_name: string };
  };
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
  postItem: (item: Partial<DiscriminatedItem> & { geolocation: any }) => void;
  deleteLocation: (args: { itemId: DiscriminatedItem['id'] }) => void;
  viewItem: (item: DiscriminatedItem) => void;
}

export const QueryClientContext = createContext<QueryClientContextInterface>({
  currentMember: undefined,
  useAddressFromGeolocation: () => ({
    data: { display_name: 'address' },
  }),
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
