import 'leaflet-easybutton/src/easy-button.css';
import 'leaflet-geosearch/assets/css/leaflet.css';
import 'leaflet/dist/leaflet.css';

import './App.css';
import Map from './components/map/Map';
import { QueryClientProvider, queryClient } from './config/queryClient';

const App = (): JSX.Element => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
  </div>
);

export default App;
