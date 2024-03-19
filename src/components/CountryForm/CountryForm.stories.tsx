import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { within } from '@storybook/testing-library';

// eslint-disable-next-line import/no-extraneous-dependencies
import CountryForm from './CountryForm';

const meta = {
  title: 'CountryForm',
  component: CountryForm,

  argTypes: {},
} satisfies Meta<typeof CountryForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
} satisfies Story;
