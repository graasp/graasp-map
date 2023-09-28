import 'leaflet/dist/leaflet.css';

import './App.css';
import { Map } from './components';
import './index.css';

const App = (): JSX.Element => (
  <div style={{ width: '70vw', height: '70vh' }}>
    <Map />
  </div>
);

export default App;
