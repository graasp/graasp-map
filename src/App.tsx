import 'leaflet/dist/leaflet.css';

import './App.css';
import { Map } from './components';
import './index.css';

const App = (): JSX.Element => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Map />
  </div>
);

export default App;
