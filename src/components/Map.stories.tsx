import { MemberFactory } from '@graasp/sdk';

import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { MOCK_USE_SUGGESTIONS } from '../../.storybook/fixtures';
import MapComponent from './Map';

const meta = {
  title: 'Map',
  component: MapComponent,
} satisfies Meta<typeof MapComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Map = {
  args: {
    itemId: 'd5a1c73d-cd4d-4f20-8a91-3c689ee87ea4',
    viewItem: () => ({}) as any,
    currentMember: MemberFactory(),
    useDeleteItemGeolocation: () => ({}) as any,
    useItemsInMap: () => ({ data: [] }) as any,
    useAddressFromGeolocation: () => ({ data: 'address' }) as any,
    usePostItem: () => ({}) as any,
    useRecycleItems: () => ({}) as any,
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
    geolocationKey: 'key',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: 'auto', width: '95vw', height: '95vh' }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText('Search')).toBeInTheDocument();
  },
} satisfies Story;
