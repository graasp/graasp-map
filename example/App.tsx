import { I18nextProvider } from 'react-i18next';

import { ThemeProvider } from '@mui/material';

import { theme } from '@graasp/ui';

import Map from '../src/components/Map';
import i18n from '../src/config/i18n';
import {
  QueryClientProvider,
  axios,
  hooks,
  mutations,
  queryClient,
} from './queryClient';

const App = (): JSX.Element => (
  <div style={{ width: '80vw', height: '80vh' }}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <Map hooks={hooks} mutations={mutations} axios={axios} />
        </I18nextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </div>
);

export default App;
