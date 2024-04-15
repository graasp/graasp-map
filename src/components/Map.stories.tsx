import { FolderItemFactory, MemberFactory } from '@graasp/sdk';

import type { Meta, StoryObj } from '@storybook/react';

import { MOCK_USE_SUGGESTIONS } from '../../.storybook/fixtures';
import MapComponent from './Map';

const meta = {
  title: 'Map',
  component: MapComponent,
} satisfies Meta<typeof MapComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

const item = FolderItemFactory();

export const Map = {
  args: {
    itemId: item.id,
    viewItem: () => ({}) as any,
    currentMember: MemberFactory(),
    useDeleteItemGeolocation: () => ({}) as any,
    useItemsInMap: () =>
      ({
        data: [
          {
            lat: 46.51,
            lng: 6.5,
            addressLabel: 'EPFL',
            item,
          },
        ],
      }) as any,
    useAddressFromGeolocation: () =>
      ({ data: { addressLabel: 'address', country: 'countryName' } }) as any,
    usePostItem: () => ({}) as any,
    useRecycleItems: () => ({}) as any,
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
    handleAddOnClick({ location }) {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(location));
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: 'auto', width: '95vw', height: '95vh' }}>
        <Story />
      </div>
    ),
  ],
  // cannot play inside an iframe
} satisfies Story;

export const MapSignedOut = {
  args: {
    itemId: 'd5a1c73d-cd4d-4f20-8a91-3c689ee87ea4',
    viewItem: () => ({}) as any,
    currentMember: null,
    useDeleteItemGeolocation: () => ({}) as any,
    useItemsInMap: () => ({ data: [] }) as any,
    useAddressFromGeolocation: () => ({ data: 'address' }) as any,
    usePostItem: () => ({}) as any,
    useRecycleItems: () => ({}) as any,
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: 'auto', width: '95vw', height: '95vh' }}>
        <Story />
      </div>
    ),
  ],
  // cannot play inside an iframe
} satisfies Story;

export const MapMobile = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  args: {
    itemId: item.id,
    viewItem: () => ({}) as any,
    currentMember: MemberFactory(),
    useDeleteItemGeolocation: () => ({}) as any,
    useItemsInMap: () =>
      ({
        data: [
          {
            lat: 46.51,
            lng: 6.5,
            addressLabel: 'EPFL',
            item,
          },
        ],
      }) as any,
    useAddressFromGeolocation: () => ({ data: 'address' }) as any,
    usePostItem: () => ({}) as any,
    useRecycleItems: () => ({}) as any,
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: 'auto', width: '95vw', height: '95vh' }}>
        <Story />
      </div>
    ),
  ],
  // cannot play inside an iframe
} satisfies Story;

export const MapSignOutMobile = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  args: {
    itemId: 'd5a1c73d-cd4d-4f20-8a91-3c689ee87ea4',
    viewItem: () => ({}) as any,
    currentMember: null,
    useDeleteItemGeolocation: () => ({}) as any,
    useItemsInMap: () => ({ data: [] }) as any,
    useAddressFromGeolocation: () => ({ data: 'address' }) as any,
    usePostItem: () => ({}) as any,
    useRecycleItems: () => ({}) as any,
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: 'auto', width: '95vw', height: '95vh' }}>
        <Story />
      </div>
    ),
  ],
  // cannot play inside an iframe
} satisfies Story;

export const MapWithCurrentLocation = {
  args: {
    viewItem: () => ({}) as any,
    currentMember: null,
    currentPosition: { lat: 46.51, lng: 6.5 },
    useDeleteItemGeolocation: () => ({}) as any,
    useItemsInMap: () => ({ data: [] }) as any,
    useAddressFromGeolocation: () => ({ data: 'address' }) as any,
    usePostItem: () => ({}) as any,
    useRecycleItems: () => ({}) as any,
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: 'auto', width: '95vw', height: '95vh' }}>
        <Story />
      </div>
    ),
  ],
  // cannot play inside an iframe
} satisfies Story;

export const MapWithCurrentLocationAndItems = {
  args: {
    viewItem: () => ({}) as any,
    currentMember: null,
    currentPosition: { lat: 46.51, lng: 6.499 },
    useDeleteItemGeolocation: () => ({}) as any,
    useItemsInMap: () =>
      ({
        data: [
          {
            lat: 46.51,
            lng: 6.5,
            addressLabel: 'EPFL',
            item,
          },
          {
            lat: 46.51,
            lng: 6.4995,
            addressLabel: 'EPFL',
            item,
          },
        ],
      }) as any,
    useAddressFromGeolocation: () => ({ data: 'address' }) as any,
    usePostItem: () => ({}) as any,
    useRecycleItems: () => ({}) as any,
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: 'auto', width: '95vw', height: '95vh' }}>
        <Story />
      </div>
    ),
  ],
  // cannot play inside an iframe
} satisfies Story;
