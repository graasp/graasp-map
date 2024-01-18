import L from 'leaflet';
import 'leaflet-geosearch/assets/css/leaflet.css';

import markerPinPerson from '../../location.svg';
import { MarkerParent } from '../../types';

const iconPerson = new L.Icon({
  iconUrl: markerPinPerson,
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-icon',
});

const greenIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const redIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const iconsPerParent: { [key in MarkerParent]: L.Icon<any> } = {
  MyItems: redIcon,
  Published: greenIcon,
};

export { iconPerson, iconsPerParent };
