import { TextField } from '@mui/material';

import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import type { BoundFunctions } from '@testing-library/dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { queries } from '@testing-library/dom';

import { MOCK_USE_SUGGESTIONS } from '../../../.storybook/fixtures';
import GeolocationPicker from './GeolocationPicker';

const meta = {
  title: 'GeolocationPicker',
  component: GeolocationPicker,

  argTypes: {
    onChangeOption: {
      action: 'choose option',
      table: {
        category: 'events',
      },
    },
  },
} satisfies Meta<typeof GeolocationPicker>;
export default meta;

type Story = StoryObj<typeof meta>;

const checkSuggestions = async (canvas: BoundFunctions<typeof queries>) => {
  // suggestions are showing
  await userEvent.type(canvas.getByLabelText('Location'), 'my address');
  const suggestions = MOCK_USE_SUGGESTIONS({ address: 'query' }).data;
  suggestions?.forEach((value) => {
    expect(canvas.getByText(value.addressLabel)).toBeVisible();
  });

  // select a suggestion
  const toSelect = suggestions![0].addressLabel;
  await userEvent.click(canvas.getByText(toSelect));
  expect(canvas.getByLabelText('Location')).toHaveTextContent(toSelect);
};

export const Default = {
  args: {
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await checkSuggestions(canvas);
  },
} satisfies Story;

export const InitialValue = {
  args: {
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
    initialValue: 'initial value',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Location')).toHaveTextContent(
      args.initialValue!,
    );

    await checkSuggestions(canvas);
  },
} satisfies Story;

export const Background = {
  args: {
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
    initialValue: 'initial value',
  },
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#00aced' }],
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Location')).toHaveTextContent(
      args.initialValue!,
    );

    await checkSuggestions(canvas);
  },
} satisfies Story;

export const Invisible = {
  args: {
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
    invisible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await checkSuggestions(canvas);
  },
} satisfies Story;

// displays above other text fields
export const Form = {
  args: {
    useSuggestionsForAddress: MOCK_USE_SUGGESTIONS as any,
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <TextField
          label="complementary information"
          placeholder="red door on the right, ..."
        />
      </>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await checkSuggestions(canvas);
  },
} satisfies Story;
