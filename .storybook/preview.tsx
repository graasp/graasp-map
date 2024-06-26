import { I18nextProvider, initReactI18next } from 'react-i18next';
import 'react-quill/dist/quill.snow.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import { buildI18n } from '@graasp/translations';
import { theme } from '@graasp/ui';

import type { Preview } from '@storybook/react';

const i18n = buildI18n().use(initReactI18next);

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
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <CssBaseline />
          <Story />
        </I18nextProvider>
      </ThemeProvider>
    );
  },
];
