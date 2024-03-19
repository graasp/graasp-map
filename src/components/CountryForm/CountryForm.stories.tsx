import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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
} satisfies Story;
