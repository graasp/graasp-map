import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { theme } from '@graasp/ui';

import 'leaflet-easybutton/src/easy-button.css';
import 'leaflet-geosearch/assets/css/leaflet.css';
import 'leaflet/dist/leaflet.css';

import './App.css';
import Map from './components/map/Map';
import { QueryClientProvider, queryClient } from './config/queryClient';

const App = (): JSX.Element => (
  <BrowserRouter>
    <div style={{ width: '100vw', height: '100vh' }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Map />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  </BrowserRouter>
);

export default App;
