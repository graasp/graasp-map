import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { theme } from '@graasp/ui';

import 'leaflet-easybutton/src/easy-button.css';
import 'leaflet-geosearch/assets/css/leaflet.css';
import 'leaflet/dist/leaflet.css';

import Map from '../src/components/Map';
import i18n from '../src/config/i18n';
import { QueryClientProvider, queryClient } from '../src/config/queryClient';
import './App.css';

const App = (): JSX.Element => (
  <BrowserRouter>
    <div style={{ width: '100vw', height: '100vh' }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <Map />
          </I18nextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  </BrowserRouter>
);

export default App;
