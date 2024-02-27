import 'react-quill/dist/quill.snow.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import { theme } from '@graasp/ui';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story, { globals }) => {
    return (
      <ThemeProvider
        theme={{
          ...theme,
          direction: globals.direction,
          palette: {
            ...theme.palette,
            mode: globals.theme,
          },
        }}
      >
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];
