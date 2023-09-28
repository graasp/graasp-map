import { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-easybutton/src/easy-button.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

import markerPinPerson from '../../location.svg';

type Props = {
  lat: number;
  lng: number;
  onClick: any;
};

const AddSearchControlToMap = ({ lat, lng, onClick }: Props): null => {
  const map = useMap();
  const provider = new OpenStreetMapProvider();

  useMapEvents({
    click: onClick,
  });

  const searchControl = new GeoSearchControl({
    provider,
    // autoComplete: true,
    // showPopup: false,
    // retainZoomLevel: false,
    // animateZoom: true,
    // autoClose: false,
    // style: 'bar',
  });

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  useEffect(() => {
    map.flyTo({ lat, lng }, 10);
  }, [lat, lng]);

  useEffect(() => {
    if (!map) return;

    L.easyButton(
      `<img src=${markerPinPerson} style="width:15px;height:15px;">`,
      () => {
        map.locate().on('locationfound', (e) => {
          map.flyTo(e.latlng, 10);
        });
      },
      'current',
    ).addTo(map);

    // const helloPopup = L.popup().setContent('Hello World!');

    // helloPopup.setLatLng({lat: 40, lng: 50}).openOn(map);
    // L.easyButton('fa-globe', (btn, map1) => {
    // }).addTo(map);
  }, [map]);
  return null;
};

export default AddSearchControlToMap;
